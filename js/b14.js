
/* ===== Parte 14 — busca na base online (Supabase, tabela base) ===== */
(function(){const cres=document.getElementById('cres');if(!cres)return;
casoAdd('bfcard','<b>Buscar na base online (PDFs transcritos)</b><div class="fm">Pesquisa o texto dos PDFs guardados no banco compartilhado. Use termos como “crise hipertensiva captopril” ou “dose amoxicilina otite”.</div><div class="row"><input id="bfind" type="search" placeholder="Doença, medicamento ou conduta" style="flex:1"><button class="chip" id="bgo" type="button" style="margin:0">Buscar</button></div><div id="bres" class="fm"></div>',c=>{
const run=async()=>{const q=$('bfind').value.trim(),o=$('bres');if(q.length<3){o.textContent='Digite ao menos 3 letras.';return}
 const c=sbCfg();o.textContent='Buscando…';
 try{const r=await fetch(c.u+'/rest/v1/rpc/buscar_base',{method:'POST',headers:sbH(c.k),body:JSON.stringify({termo:q,lim:10})});
  if(!r.ok)throw{message:r.status===404?'Função buscar_base não encontrada no banco.':'HTTP '+r.status};const j=await r.json();
  const mk=t=>esc(t).replace(/«/g,'<mark>').replace(/»/g,'</mark>');
  o.innerHTML=j.length?j.map(x=>`<div class="sec"><b>${esc(x.titulo||'')}</b> <span class="fm">· ${esc(x.fonte)} · trecho ${x.parte}</span><div class="fm" style="white-space:pre-wrap;max-height:12em;overflow:auto">${mk(x.trecho)}</div></div>`).join(''):'Nada encontrado na base.'}
 catch(e){o.textContent='✗ '+(e.message||e)}};
$('bgo').onclick=run;$('bfind').addEventListener('keydown',e=>{if(e.key==='Enter')run()})});
})();
