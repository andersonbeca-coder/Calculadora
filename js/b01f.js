


async function msLoad(force){const o=document.getElementById('msn');if(!o)return;const c=sbCfg();if(!c.u||!c.k){o.innerHTML='<div class="fm">Configure o banco online abaixo para receber as atualizações.</div>';return}
 o.innerHTML='<div class="fm">Consultando…</div>';
 try{if(force){try{await fetch(c.u+'/functions/v1/ms-atualizacao',{method:'POST',headers:{'content-type':'application/json'},body:'{}'})}catch(e){}}
  const h=sbH(c.k);
  const [rn,re]=await Promise.all([fetch(c.u+'/rest/v1/ms_novidades?select=titulo,url,detectado&inicial=eq.false&order=detectado.desc&limit=25',{headers:h}),fetch(c.u+'/rest/v1/ms_execucoes?select=quando,status,itens,erro&order=quando.desc&limit=8',{headers:h})]);
  if(!rn.ok)throw new Error('HTTP '+rn.status);
  const nov=await rn.json(),ex=re.ok?await re.json():[];
  const ult=ex[0]?new Date(ex[0].quando):null,okf=ex.filter(x=>x.status>=200&&x.status<300&&!x.erro).length;
  let seen=0;try{seen=+localStorage.getItem('msSeen')||0}catch(e){}
  const nn=nov.filter(x=>new Date(x.detectado).getTime()>seen).length;
  let h2='<div class="fm">'+(ult?'Última verificação: '+ult.toLocaleString('pt-BR')+(ex[0].status>=200&&ex[0].status<300&&!ex[0].erro?' · lista oficial de PCDT lida ('+(ex[0].itens||0)+' protocolos).':' · o site do Ministério não respondeu; nova tentativa amanhã.'):'Ainda não verificado.')+' A verificação é automática, todos os dias.</div>';
  if(!nov.length)h2+='<div class="fm" style="margin-top:6px">Nenhuma publicação nova desde a ativação. Quando o Ministério publicar ou atualizar um protocolo, ele aparece aqui.</div>';
  else h2+='<div style="margin-top:6px">'+nov.map((x,i)=>'<div style="border-top:1px solid var(--bd);padding:6px 0"><b>'+esc(x.titulo)+'</b>'+(new Date(x.detectado).getTime()>seen?' <span class="pill ok">novo</span>':'')+'<div class="fm">'+new Date(x.detectado).toLocaleDateString('pt-BR')+' · <a href="'+esc(x.url)+'" target="_blank" rel="noopener">abrir no gov.br</a></div><button class="chip" type="button" data-msia="'+i+'" style="margin:4px 0 0">\uD83E\uDD16 Criar/atualizar no app com IA</button><div class="fm" id="msx'+i+'"></div></div>').join('')+'</div>';
  o.innerHTML=h2;
  o.querySelectorAll('[data-msia]').forEach(b=>b.onclick=async()=>{const i=+b.dataset.msia,x=document.getElementById('msx'+i),t=String(nov[i].titulo).replace(/^(pcdt|protocolo cl[ií]nico e diretrizes terap[eê]uticas|protocolo cl[ií]nico|diretrizes? (brasileiras?|nacionais?|terap[eê]uticas)?)\s*(d[aeo]s?|para|em)?\s*/i,'').trim();
   try{const r=await aiAutoAdd(t,m=>{x.textContent=m});x.innerHTML=(r.existed?'Já existe no app: <b>'+esc(r.nome)+'</b>. Para revisar com a publicação nova, abra a conduta e use “Perguntar à IA”.':'✓ <b>'+esc(r.nome)+'</b> criado pela IA (rascunho, revise).')}catch(e){x.textContent='✗ '+errTxt(e)}});
  const tab=document.getElementById('msbadge');if(tab)tab.textContent=nn?String(nn):'';
  try{localStorage.setItem('msSeen',String(Date.now()))}catch(e){}
 }catch(e){o.innerHTML='<div class="fm">Não consegui consultar as atualizações agora ('+esc(String(e.message||e))+').</div>'}}
{const b=document.getElementById('msr');if(b)b.onclick=()=>msLoad(true);setTimeout(()=>msLoad(false),1500)}
if(sbCfg().u&&sbCfg().k)sbPull();
$("cp").onclick=async()=>{const t=$("rx").innerText;
  try{await navigator.clipboard.writeText(t)}catch(e){const r=document.createRange();r.selectNodeContents($("rx"));const s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand("copy")}
  $("cp").textContent="Copiado ✓";setTimeout(()=>$("cp").textContent="Copiar receita",1500)};
build();

