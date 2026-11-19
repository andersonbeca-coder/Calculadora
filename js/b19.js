/* b19: app instalável (PWA). Registra o service worker e mostra um aviso discreto
   para instalar na tela inicial (botão no Android, dica no Safari do iPhone). */
(function () {
  var CHAVE = 'pwa_aviso_fechado';
  function lerFechado() { try { return localStorage.getItem(CHAVE) === '1'; } catch (e) { return false; } }
  function gravarFechado() { try { localStorage.setItem(CHAVE, '1'); } catch (e) {} }
  function instalado() {
    try {
      return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
    } catch (e) { return false; }
  }

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  if (instalado()) return;

  var barra = null, evento = null;

  function fechar() { if (barra && barra.parentNode) barra.parentNode.removeChild(barra); barra = null; }

  function montar(texto, rotuloBotao, aoClicar) {
    if (barra || lerFechado()) return;
    barra = document.createElement('div');
    barra.setAttribute('role', 'region');
    barra.setAttribute('aria-label', 'Instalar o app');
    barra.style.cssText = 'position:fixed;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:100000;' +
      'max-width:520px;margin:0 auto;background:#0f766e;color:#fff;border-radius:12px;padding:10px 12px;display:flex;gap:10px;align-items:center;' +
      'font:14px/1.35 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 6px 22px rgba(0,0,0,.28)';
    var t = document.createElement('div');
    t.style.cssText = 'flex:1;min-width:0';
    t.textContent = texto;
    barra.appendChild(t);
    if (rotuloBotao) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = rotuloBotao;
      b.style.cssText = 'border:0;border-radius:8px;padding:8px 12px;background:#fff;color:#0f766e;font:600 14px system-ui,sans-serif;cursor:pointer';
      b.onclick = aoClicar;
      barra.appendChild(b);
    }
    var x = document.createElement('button');
    x.type = 'button';
    x.textContent = '×';
    x.setAttribute('aria-label', 'Fechar aviso');
    x.style.cssText = 'border:0;background:transparent;color:#fff;font:24px/1 system-ui,sans-serif;padding:0 4px;cursor:pointer';
    x.onclick = function () { gravarFechado(); fechar(); };
    barra.appendChild(x);
    document.body.appendChild(barra);
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    evento = e;
    montar('Instale o app na tela inicial para abrir rápido no plantão, até sem internet.', 'Instalar', function () {
      if (!evento) return;
      var ev = evento; evento = null;
      ev.prompt();
      if (ev.userChoice && ev.userChoice.then) ev.userChoice.then(function () { gravarFechado(); fechar(); }, fechar);
    });
  });

  window.addEventListener('appinstalled', function () { evento = null; fechar(); });

  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var safari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|GSA|Instagram|FBAN|FBAV|Line|WhatsApp/.test(ua);
  if (ios && safari) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        montar('Para instalar no iPhone: toque em Compartilhar (quadrado com seta) e depois em "Adicionar à Tela de Início".', '', null);
      }, 2500);
    });
  } else if (ios) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        montar('Para instalar no iPhone, abra este endereço no Safari e use Compartilhar, "Adicionar à Tela de Início".', '', null);
      }, 2500);
    });
  }
})();
