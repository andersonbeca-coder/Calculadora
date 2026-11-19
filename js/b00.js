var SB0={u:'https://zvvxdrmeigmjjvpkgoro.supabase.co',k:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dnhkcm1laWdtamp2cGtnb3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4MDc1MDgsImV4cCI6MjEwODM4MzUwOH0.H9-9-LI6wuNEVoaYNY6qG0cRkRfrTF1ZxviXt-Tfnl8'};
/* b00: carregador do conteúdo protegido. O conteúdo clínico não fica no site público:
   vem do servidor só para conta com acesso válido e fica guardado neste aparelho para uso offline. */
(function(){
var CN='prx-conteudo',CK='/__prx_conteudo__';
function exec(partes){return partes.reduce(function(pr,p){return pr.then(function(){return new Promise(function(ok){
 var s=document.createElement('script');s.src=URL.createObjectURL(new Blob([p.js+'\n//# sourceURL=prescreva/'+p.nome],{type:'text/javascript'}));
 s.onload=s.onerror=function(){URL.revokeObjectURL(s.src);ok()};document.body.appendChild(s)})})},Promise.resolve())}
async function lerCache(){try{if(!window.caches)return null;var c=await caches.open(CN),r=await c.match(CK);return r?await r.json():null}catch(e){return null}}
async function gravar(o){try{if(!window.caches)return;var c=await caches.open(CN);await c.put(CK,new Response(JSON.stringify(o),{headers:{'Content-Type':'application/json'}}))}catch(e){}}
window.PRX_OK=false;
window.PRX_LIMPA=function(){try{if(window.caches)caches.delete(CN)}catch(e){}};
window.PRX_CARREGA=async function(tok){
 if(window.PRX_OK)return true;
 var cache=await lerCache(),ver=null,partes=null;
 if(tok&&navigator.onLine!==false){
  try{var r=await fetch(SB0.u+'/rest/v1/config_app?chave=eq.versao_conteudo&select=valor',{headers:{apikey:SB0.k,Authorization:'Bearer '+SB0.k}});var a=await r.json();ver=a&&a[0]&&a[0].valor||null}catch(e){}
  if(ver&&cache&&cache.v===ver)partes=cache.p;
  else if(ver){try{var r2=await fetch(SB0.u+'/rest/v1/app_conteudo?versao=eq.'+encodeURIComponent(ver)+'&select=parte,nome,js&order=parte',{headers:{apikey:SB0.k,Authorization:'Bearer '+tok}});
   if(r2.ok){var j=await r2.json();if(j&&j.length){partes=j;gravar({v:ver,p:j})}else{window.PRX_LIMPA();return false}}
   else if(r2.status===401||r2.status===403){window.PRX_LIMPA();return false}}catch(e){}}}
 if(!partes&&cache)partes=cache.p;
 if(!partes)return false;
 await exec(partes);window.PRX_OK=true;return true};
})();
