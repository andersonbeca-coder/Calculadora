
function scSuggest(q){const tk=nz(q).split(/[^a-z0-9]+/).filter(Boolean);if(!tk.length)return[];
 return Object.keys(SCALES).map(k=>{const w=nz(SCALES[k].n+' '+SCALES[k].kw).split(/[^a-z0-9]+/);return[k,tk.filter(t=>w.some(x=>x.startsWith(t))).length]}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,4).map(x=>x[0])}
function openScale(id){const s=SCALES[id],b=$('scr');
 if(s.ref){b.innerHTML=`<div class="card"><b>${esc(s.n)}</b></div>`+s.ref.map(r=>`<div class="card"><b>${esc(r[0])}</b><div>${esc(r[1])}</div></div>`).join('');return}
 let h=`<div class="card"><b>${esc(s.n)}</b>`;
 (s.in||[]).forEach(x=>{h+=`<label>${esc(x[0])}</label>`+(x[2]?`<select class="ci">${x[2].map(o=>`<option value="${o[1]}">${esc(o[0])}</option>`).join('')}</select>`:'<input class="ci" type="number" step="any" inputmode="decimal">')});
 (s.g||[]).forEach(g=>{h+=`<label>${esc(g[0])}</label><select class="sg">${g[1].map(o=>`<option value="${o[1]}">${esc(o[0])}</option>`).join('')}</select>`});
 (s.it||[]).forEach(it=>{h+=`<label class="ck"><input type="checkbox" class="sk" data-w="${it[1]}">${esc(it[0])}</label>`});
 b.innerHTML=h+'<div class="res sr2"></div></div>';
 const calc=()=>{let out;
  if(s.fn){const v=[...b.querySelectorAll('.ci')].map(i=>parseFloat(i.value));out=v.every(x=>!isNaN(x))?s.fn(v):'Preencha todos os campos.';if(/Infinity|NaN/.test(out))out='Confira os valores informados.'}
  else{const sum=[...b.querySelectorAll('.sg')].reduce((a,e)=>a+ +e.value,0)+[...b.querySelectorAll('.sk:checked')].reduce((a,e)=>a+ +e.dataset.w,0),fx=[...s.fx].reverse().find(x=>sum>=x[0])||s.fx[0];out=`<b>Pontos: ${sum}</b> — ${esc(fx[1])}`}
  b.querySelector('.sr2').innerHTML=out};
 b.querySelectorAll('input,select').forEach(e=>{e.oninput=calc;e.onchange=calc});calc()}
function scList(){const q=$('scq').value,b=$('scs'),r=q?scSuggest(q):Object.keys(SCALES),G=[['Calculadoras',k=>SCALES[k].fn],['Escalas, scores e classificações',k=>!SCALES[k].fn&&!SCALES[k].ref],['Tabelas de referência',k=>SCALES[k].ref]];
 b.innerHTML=r.length?G.map(g=>{const l=r.filter(g[1]);return l.length?`<div class="fm" style="margin-top:8px">${g[0]}</div>`+l.map(k=>`<button class="chip" data-s="${k}">${esc(SCALES[k].n)}</button>`).join(''):''}).join(''):'<div class="fm">Nada encontrado.</div>';
 b.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{openScale(c.dataset.s);$('scr').scrollIntoView({behavior:'smooth'})})}
$('scq').oninput=scList;scList();
function lev(a,b){const m=[];for(let i=0;i<=a.length;i++){m[i]=[i];}for(let j=0;j<=b.length;j++)m[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return m[a.length][b.length]}

async function ghPush(){const repo=$('ghr').value.trim(),tok=$('ght').value.trim(),o=$('ghs');try{localStorage.setItem('ghr',repo);localStorage.setItem('ght',tok)}catch(e){}
 if(!repo||!tok){o.textContent='Informe o repositório e o token.';return}
 const url='https://api.github.com/repos/'+repo+'/contents/banco.json',hd={Authorization:'Bearer '+tok,Accept:'application/vnd.github+json'};o.textContent='Publicando…';
 try{let sha;const g=await fetch(url,{headers:hd});if(g.ok)sha=(await g.json()).sha;
  const body={message:'Atualiza banco de receitas',content:btoa(unescape(encodeURIComponent(JSON.stringify(BK,(k,v)=>k==='cl'?undefined:v,1)))),...(sha?{sha}:{})};
  const r=await fetch(url,{method:'PUT',headers:{...hd,'Content-Type':'application/json'},body:JSON.stringify(body)});
  o.textContent=r.ok?'✓ Publicado no GitHub. Aparece para todos em 1 a 2 minutos.':'✗ GitHub '+r.status+': '+((await r.json()).message||'')}catch(e){o.textContent='✗ '+(e.message||e)}}
async function ghPull(){const o=$('ghs');try{const r=await fetch('banco.json?'+Date.now());if(!r.ok)throw{message:'banco.json não encontrado (HTTP '+r.status+')'};const j=await r.json();let n=0;Object.keys(j).forEach(k=>{if(!BK[k]){BK[k]=j[k];applyBk(k);n++}});saveBk();drawBk();o.textContent='✓ '+n+' receita(s) nova(s) trazida(s) do GitHub.'}catch(e){o.textContent='✗ '+(e.message||e)}}
$('ghp').onclick=ghPush;$('ghl').onclick=ghPull;
try{$('ghr').value=localStorage.getItem('ghr')||'andersonbeca-coder/Calculadora';$('ght').value=localStorage.getItem('ght')||''}catch(e){}
ghPull();
const SB0={u:'https://zvvxdrmeigmjjvpkgoro.supabase.co',k:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dnhkcm1laWdtamp2cGtnb3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4MDc1MDgsImV4cCI6MjEwODM4MzUwOH0.H9-9-LI6wuNEVoaYNY6qG0cRkRfrTF1ZxviXt-Tfnl8'};
const sbCfg=()=>({u:($('sbu').value.trim()||SB0.u).replace(/\/$/,''),k:$('sbk').value.trim()||SB0.k}),sbH=k=>{const h={apikey:k,'Content-Type':'application/json'};if(/^eyJ/.test(k))h.Authorization='Bearer '+k;return h};
async function sbPull(){const c=sbCfg(),o=$('sbs');try{localStorage.setItem('sbu',$('sbu').value.trim());localStorage.setItem('sbk',$('sbk').value.trim())}catch(e){}
 if(!c.u||!c.k){o.textContent='Informe a URL e a chave anon.';return}
 try{let all=[],off=0;for(;;){const r=await fetch(c.u+'/rest/v1/receitas?rev=eq.true&select=chave,dados&order=chave&limit=500&offset='+off,{headers:sbH(c.k)});if(!r.ok)throw{message:'HTTP '+r.status};const j=await r.json();all=all.concat(j);if(j.length<500)break;off+=500}
  all.filter(x=>String(x.chave).startsWith('sx:')).forEach(sbApply);all.filter(x=>!String(x.chave).startsWith('sx:')).forEach(sbApply);
  try{localStorage.setItem('dbc',JSON.stringify(all))}catch(e){}
  saveBk();drawBk();if(window.dbDone)dbDone();o.textContent='✓ '+all.length+' item(ns) carregado(s) do banco online (protocolos, diagnósticos, condutas e receitas revisadas).'}catch(e){o.textContent='✗ '+(e.message||e)}}
function sbApply(x){const k=String(x.chave);
 if(k.startsWith('cond:')){CLX[k.slice(5)]=x.dados;return}
 if(k.startsWith('caso:')){if(window.lrnGot)lrnGot(x.dados);return}
 if(k.startsWith('lib:')){if(typeof libGot==='function')libGot(k.slice(4),x.dados);return}
 if(k.startsWith('p:')||k.startsWith('dx:')||k.startsWith('sx:')){if(window.dbApply)dbApply(k,x.dados);else(window.__dbq=window.__dbq||[]).push([k,x.dados]);return}
 BK[k]={...x.dados,rev:true};applyBk(k)}
async function sbPush(k){const c=sbCfg();if(!c.u||!c.k||!BK[k])return;try{await fetch(c.u+'/rest/v1/receitas',{method:'POST',headers:{...sbH(c.k),Prefer:'return=minimal'},body:JSON.stringify({chave:k,dados:JSON.parse(JSON.stringify(BK[k],(a,b)=>a==='cl'?undefined:b)),rev:false})})}catch(e){}}
async function sbPushCase(rec){const c=sbCfg();if(!c.u||!c.k)return false;try{const r=await fetch(c.u+'/rest/v1/receitas',{method:'POST',headers:{...sbH(c.k),Prefer:'return=minimal'},body:JSON.stringify({chave:'caso:'+rec.t,dados:rec,rev:false})});return r.ok}catch(e){return false}}
try{$('sbu').value=localStorage.getItem('sbu')||'';$('sbk').value=localStorage.getItem('sbk')||''}catch(e){}
async function sbSeedCond(){const c=sbCfg(),o=$('sbs');o.textContent='Enviando condutas…';const rows=[];Object.keys(P).forEach(k=>{const f=(FAM.find(x=>x[0].test(k))||[])[1],cl=getCl(k,f);if(!cl)return;const d=cl.cd||(autoCl(k)||{}).cd;rows.push({chave:'cond:'+k,dados:{q:cl.q||[],or:cl.or||[],hosp:cl.hosp||[],sc:cl.sc,cd:d},rev:false})});
 let ok=0;try{for(let i=0;i<rows.length;i+=40){const r=await fetch(c.u+'/rest/v1/receitas',{method:'POST',headers:{...sbH(c.k),Prefer:'return=minimal'},body:JSON.stringify(rows.slice(i,i+40))});if(!r.ok)throw{message:'HTTP '+r.status+' — verifique a política (RLS) de inserção da tabela receitas'};ok+=Math.min(40,rows.length-i)}o.textContent='✓ '+ok+' conduta(s) enviada(s) como pendentes. Aprove (rev = true) no painel do Supabase para valerem para todos.'}catch(e){o.textContent='✗ '+(e.message||e)}}
$('sbseed').onclick=sbSeedCond;
$('sbl').onclick=sbPull;if(sbCfg().u&&sbCfg().k)sbPull();
$("cp").onclick=async()=>{const t=$("rx").innerText;
  try{await navigator.clipboard.writeText(t)}catch(e){const r=document.createRange();r.selectNodeContents($("rx"));const s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand("copy")}
  $("cp").textContent="Copiado ✓";setTimeout(()=>$("cp").textContent="Copiar receita",1500)};
build();

