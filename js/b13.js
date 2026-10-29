
/* ===== Parte 13 — Caso: busca em TODOS os protocolos ===== */
(function(){
if(!document.getElementById('cres'))return;
window.casoAdd=(id,html,init)=>{const mk=()=>{const w=document.getElementById('cres');if(!w||document.getElementById(id))return;const c=document.createElement('div');c.className='card';c.id=id;c.innerHTML=html;w.parentElement.insertBefore(c,w);init(c)};
 mk();(window.__cex=window.__cex||[]).push(mk);
 if(!window.__cw&&window.drawCaso){const d=window.drawCaso;window.drawCaso=function(){const r=d.apply(this,arguments);(window.__cex||[]).forEach(f=>f());return r};window.__cw=1}};
const nz=t=>String(t||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const go=(k,d)=>{const pk=P[k],t=pk.c&&!pk.a?'c':pk.a&&!pk.c?'a':($('tipo').value||'a');$('tipo').value=t;$('tipo').dispatchEvent(new Event('change'));$('pat').value=k;$('q').value=k;$('dest').value=d;build();rx();showTab('t-rx')};
casoAdd('cfcard','<b>Procurar qualquer doença / protocolo</b><div class="fm">Digite a patologia ou palavras-chave (ex.: “dengue”, “pielonefrite”, “crise hipertensiva”). Busca em todos os protocolos do app, inclusive os que vêm do banco online.</div><input id="cfind" type="search" placeholder="Doença, sintoma ou medicamento" style="width:100%;margin:6px 0"><div id="cfr"></div>',c=>{
 const draw=()=>{const q=nz($('cfind').value).split(/\s+/).filter(Boolean),o=$('cfr');if(!q.length){o.innerHTML='';return}
  const r=Object.keys(P).map(k=>{const h=nz(k+' '+(KW[k]||''));let s=0;for(const w of q){if(!h.includes(w)){s=-1;break}s+=nz(k).includes(w)?2:1}return[k,s]}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,15);
  o.innerHTML=r.length?r.map(([k])=>`<div class="sec"><b>${esc(k)}</b><div class="row" style="margin:2px 0 0"><button class="chip" data-g="${esc(k)}" data-d="c" type="button" style="margin:0">🏠 Receita para casa</button><button class="chip" data-g="${esc(k)}" data-d="h" type="button" style="margin:0">🏥 Prescrição hospital</button><button class="chip" data-k="${esc(k)}" type="button" style="margin:0">Conduta</button></div></div>`).join(''):'<div class="fm">Nenhum protocolo encontrado. Use a aba IA para gerar e salvar um novo modelo.</div>';
  o.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>go(b.dataset.g,b.dataset.d));
  o.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{LSEL={t:'d',k:b.dataset.k};LT='d';showTab('t-bib')})};
 $('cfind').addEventListener('input',draw)});
})();
