(function(){


/* abas */
const _st=showTab;
showTab=function(id){_st(id);if(id==='t-caso')drawCaso()};
const st=document.createElement('style');st.textContent='.sx,:root:not([data-theme="light"]) .sx{margin:5px 5px 0 0;padding:7px 11px;background:var(--in);color:var(--tx);border:1px solid var(--bd);border-radius:99px;font-weight:500;font-size:13px}.sx.on,:root:not([data-theme="light"]) .sx.on{background:var(--ac);color:#fff;border-color:var(--ac)}:root:not([data-theme="light"]) .sx.on{color:#06201c}.sx.off,:root:not([data-theme="light"]) .sx.off{text-decoration:line-through;color:var(--wn);border-color:var(--wn)}.tabbar button{font-size:10px}';document.head.appendChild(st);
const main=document.querySelector('main'),sec=document.createElement('section');sec.id='t-caso';sec.innerHTML='<div id="caso"></div>';main.insertBefore(sec,$('t-rx'));
const nav=document.querySelector('.tabbar'),btn=document.createElement('button');btn.dataset.t='t-caso';btn.innerHTML='<span>🩺</span>Caso';nav.insertBefore(btn,nav.firstChild);
btn.onclick=()=>showTab('t-caso');
nav.querySelectorAll('button').forEach(b=>{if(b!==btn)b.onclick=()=>{if(b.dataset.t==='t-bib'&&!$('t-bib').hidden)LSEL=null;showTab(b.dataset.t)}});
showTab('t-caso');
delete window.__sp_b07_0;
})();
