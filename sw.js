/* Service worker da Calculadora: deixa o app abrir sem internet.
   Estratégia: rede primeiro (sempre a versão mais nova quando há sinal),
   com cópia guardada como reserva se a rede falhar ou demorar.
   Só mexe em arquivos do próprio site; Supabase e outros domínios passam direto. */
var CACHE = 'calc-v11';
var PAGINA = 'calculadora-receita.html';
var FIXOS = [PAGINA, 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
var ESPERA_REDE_MS = 4000;

self.addEventListener('install', function (e) {
  e.waitUntil((async function () {
    var c = await caches.open(CACHE);
    var lista = FIXOS.slice();
    try {
      var r = await fetch(PAGINA, { cache: 'reload' });
      var html = await r.clone().text();
      await c.put(PAGINA, r);
      var re = /(?:src|href)="(js\/[^"]+)"/g, m;
      while ((m = re.exec(html))) lista.push(m[1]);
    } catch (err) {}
    await Promise.all(lista.map(function (u) {
      return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', function (e) {
  e.waitUntil((async function () {
    var nomes = await caches.keys();
    await Promise.all(nomes.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); }));
    await self.clients.claim();
  })());
});

function daRede(req) {
  return new Promise(function (ok, falha) {
    var fim = false;
    var t = setTimeout(function () { if (!fim) { fim = true; falha(new Error('lento')); } }, ESPERA_REDE_MS);
    fetch(req).then(function (r) {
      if (fim) { guardar(req, r.clone()); return; }
      fim = true; clearTimeout(t);
      if (r && r.ok) guardar(req, r.clone());
      ok(r);
    }, function (err) {
      if (fim) return;
      fim = true; clearTimeout(t); falha(err);
    });
  });
}

function guardar(req, resp) {
  if (!resp || !resp.ok) return;
  caches.open(CACHE).then(function (c) { c.put(req, resp); }).catch(function () {});
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(daRede(req).catch(async function () {
    var c = await caches.open(CACHE);
    var achou = await c.match(req, { ignoreSearch: true });
    if (achou) return achou;
    if (req.mode === 'navigate') {
      var pagina = await c.match(PAGINA, { ignoreSearch: true });
      if (pagina) return pagina;
    }
    return new Response('Sem conexão e sem cópia guardada deste arquivo.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }));
});
