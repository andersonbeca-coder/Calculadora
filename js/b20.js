/* b20: identidade visual "Prescreva" (logomarca, cabeçalho, ícones da barra de abas)
   e camada de design (cores, tipografia, botões, cartões). Só aparência: não muda cálculos. */
(function () {
  var NOME = 'Prescreva';
  var SLOGAN = 'Dose, receita e conduta para UBS, UPA e plantão';

  function marca(t) {
    t = t || 40;
    var id = 'pg' + Math.random().toString(36).slice(2, 7);
    return '<svg class="prx-mark" width="' + t + '" height="' + t + '" viewBox="0 0 64 64" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#0E8F84"/><stop offset="1" stop-color="#0A5C55"/></linearGradient></defs>' +
      '<rect width="64" height="64" rx="16" fill="url(#' + id + ')"/>' +
      '<g transform="rotate(-45 32 32)">' +
      '<rect x="13" y="24" width="38" height="16" rx="8" fill="#A7F3E4"/>' +
      '<path d="M21 24h11v16H21a8 8 0 0 1 0-16z" fill="#fff"/>' +
      '</g>' +
      '<path d="M47 41v10M42 46h10" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity=".92"/>' +
      '</svg>';
  }
  window.PRX = { nome: NOME, slogan: SLOGAN, marca: marca };

  var I = {
    'stroke': 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"',
    't-caso': '<path d="M9 4h6v3H9z"/><path d="M15 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M8 14h2l1.5-3 2 5 1.5-2H16"/>',
    't-ur': '<path d="M13 3 5 13h6l-1 8 8-10h-6z"/>',
    't-rx': '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 17h5"/>',
    't-bib': '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    't-ia': '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    't-fe': '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01M15.5 18h.01"/>',
    't-cf': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
  };
  var ROT = { 't-caso': 'Caso', 't-ur': 'Urgência', 't-rx': 'Receita', 't-bib': 'Biblioteca', 't-ia': 'IA', 't-fe': 'Ferramentas', 't-cf': 'Ajustes' };

  var css = [
    ':root{--bg:#f4f6f8;--cd:#fff;--tx:#0f1c24;--mu:#5a6878;--ac:#0b6e66;--ac2:#0e8f84;--bd:#e1e7ed;--in:#fff;--sh:0 1px 2px rgba(15,28,36,.04),0 4px 14px rgba(15,28,36,.05)}',
    '@media(prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#0d1418;--cd:#152026;--tx:#e7eef2;--mu:#93a3ae;--ac:#2dd4bf;--ac2:#5eead4;--bd:#24323a;--in:#10191e;--sh:none}}',
    ':root[data-theme="dark"]{--bg:#0d1418;--cd:#152026;--tx:#e7eef2;--mu:#93a3ae;--ac:#2dd4bf;--ac2:#5eead4;--bd:#24323a;--in:#10191e;--sh:none}',
    'body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased;letter-spacing:-.005em}',
    '.card{border-radius:14px;border-color:var(--bd);box-shadow:var(--sh);padding:14px}',
    'h2{font-size:12px;font-weight:700;letter-spacing:.07em;color:var(--mu);margin:22px 2px 10px}',
    'input,select,textarea{border-radius:10px;border-color:var(--bd);transition:border-color .15s,box-shadow .15s}',
    'input:focus,select:focus,textarea:focus{outline:none;border-color:var(--ac);box-shadow:0 0 0 3px color-mix(in srgb,var(--ac) 18%,transparent)}',
    'button{border-radius:10px;transition:filter .15s,transform .05s}button:active{transform:scale(.98)}',
    /* corrige texto escuro em botões verdes no modo claro */
    '@media(prefers-color-scheme:light){:root:not([data-theme="dark"]) button:where(:not([class]):not([style*="background"])),:root:not([data-theme="dark"]) .seg button.on,:root:not([data-theme="dark"]) .sx.on,:root:not([data-theme="dark"]) .uc.on{color:#fff}}',
    ':root[data-theme="light"] button:where(:not([class]):not([style*="background"])),:root[data-theme="light"] .seg button.on,:root[data-theme="light"] .uc.on{color:#fff}',
    '.uc{border-radius:999px!important}:root .uc:not(.on){color:var(--tx)}',
    '.chip,:root:not([data-theme="light"]) .chip{border-radius:999px;padding:7px 12px;border-color:var(--bd)}',
    '.seg button,:root:not([data-theme="light"]) .seg button{border-radius:10px}',
    /* cabeçalho */
    '.hdr{display:flex;align-items:center;gap:12px;margin:4px 2px 14px}',
    '.hdr .lg{display:none}.prx-mark{flex:none;display:block;border-radius:12px;box-shadow:0 4px 12px rgba(11,110,102,.25)}',
    '.hdr h1{font-size:21px;font-weight:800;letter-spacing:-.02em;margin:0;line-height:1.1}',
    '.hdr .sub{font-size:12.5px;color:var(--mu);margin:2px 0 0}',
    /* barra de abas */
    '.tabbar{backdrop-filter:saturate(1.4) blur(10px);-webkit-backdrop-filter:saturate(1.4) blur(10px);background:color-mix(in srgb,var(--cd) 88%,transparent);border-top-color:var(--bd)}',
    '.tabbar button,:root:not([data-theme="light"]) .tabbar button{font-size:10.5px;font-weight:600;gap:3px;padding:6px 0;letter-spacing:0}',
    '.tabbar button svg{width:22px;height:22px;display:block}',
    '.tabbar button.on,:root:not([data-theme="light"]) .tabbar button.on{color:var(--ac);background:color-mix(in srgb,var(--ac) 11%,transparent)}',
    /* barra de segurança do paciente: aviso âmbar em vez de vermelho chapado */
    '#sfb.bad,:root:not([data-theme="light"]) #sfb.bad{background:#fff7ed;color:#9a3412;border-color:#fdba74}',
    '@media(prefers-color-scheme:dark){:root:not([data-theme="light"]) #sfb.bad{background:#3b1d0b;color:#fed7aa;border-color:#9a3412}}',
    '#sfb{border-radius:12px!important;box-shadow:var(--sh)}',
    /* tela de acesso */
    '#gate{background:radial-gradient(1200px 500px at 50% -10%,color-mix(in srgb,var(--ac) 16%,var(--bg)),var(--bg))!important}',
    '#gate .card{border-radius:20px;padding:22px;box-shadow:0 10px 40px rgba(15,28,36,.10)}',
    '#gate input{margin:6px 0;padding:12px;font-size:16px}',
    '#gate .prx-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}',
    '#gate .prx-nm{font-size:24px;font-weight:800;letter-spacing:-.02em;line-height:1.05}',
    '#gate .prx-sl{font-size:13px;color:var(--mu)}',
    '#gate .prx-ft{list-style:none;padding:0;margin:12px 0 14px;display:grid;gap:8px}',
    '#gate .prx-ft li{display:flex;gap:10px;align-items:flex-start;font-size:14px}',
    '#gate .prx-ft li:before{content:"";flex:none;width:18px;height:18px;margin-top:1px;border-radius:50%;background:color-mix(in srgb,var(--ac) 15%,transparent) url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M6 12.5l4 4 8-9%27 fill=%27none%27 stroke=%27%230b6e66%27 stroke-width=%272.6%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E") center/12px no-repeat}',
    '#gate .row button{flex:1;padding:12px;margin-top:8px}',
    '#gate .prx-lg{font-size:11.5px;color:var(--mu);margin-top:14px;text-align:center}'
  ].join('\n');

  function aplicar() {
    if (!document.getElementById('prx-css')) {
      var st = document.createElement('style');
      st.id = 'prx-css';
      st.textContent = css;
      document.head.appendChild(st);
    } else {
      document.head.appendChild(document.getElementById('prx-css'));
    }
    document.title = NOME + ' · ' + SLOGAN;
    var h = document.querySelector('.hdr');
    if (h && !h.querySelector('.prx-mark')) {
      h.insertAdjacentHTML('afterbegin', marca(44));
      var t = h.querySelector('h1');
      if (t) t.textContent = NOME;
      var s = h.querySelector('.sub');
      if (s) s.textContent = SLOGAN + '.';
    }
    document.querySelectorAll('.tabbar button[data-t]').forEach(function (b) {
      var k = b.dataset.t;
      if (!I[k] || b.querySelector('svg')) return;
      b.innerHTML = '<svg viewBox="0 0 24 24" ' + I.stroke + '>' + I[k] + '</svg>' + (ROT[k] || b.textContent.trim());
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicar);
  else aplicar();
  window.addEventListener('load', function () { aplicar(); setTimeout(aplicar, 800); });
})();
