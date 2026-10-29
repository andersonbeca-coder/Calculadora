
/* ===== Parte 2: abas, IA (Claude), chat, biblioteca, configurações ===== */
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const LSs=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
/* --- abas --- */
function showTab(id){document.querySelectorAll('main>section').forEach(x=>x.hidden=x.id!==id);
 document.querySelectorAll('.tabbar button').forEach(b=>b.classList.toggle('on',b.dataset.t===id));
 window.scrollTo(0,0);if(id==='t-ia')drawAI();if(id==='t-bib')drawLib();if(id==='t-cf')drawCfg()}
document.querySelectorAll('.tabbar button').forEach(b=>b.onclick=()=>{if(b.dataset.t==='t-bib'&&!$('t-bib').hidden)LSEL=null;showTab(b.dataset.t)});
document.querySelectorAll('.seg').forEach(sg=>{const sel=$(sg.dataset.for);
 const sync=()=>sg.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.v===sel.value));
 sg.querySelectorAll('button').forEach(b=>b.onclick=()=>{sel.value=b.dataset.v;sel.dispatchEvent(new Event('change'));sync()});
 sel.addEventListener('change',sync);sync()});

/* --- núcleo de IA: Claude por chave de API, servidor próprio ou conta do artefato --- */
const AC={k:LS('ak2',''),m:LS('am2','claude-sonnet-5-5'),p:LS('ap2',''),g:LS('gk2',''),gm:LS('gm2','gemini-2.5-flash')};
const aiMode=()=>AC.p?'proxy':AC.k?'key':AC.g?'gemini':SAMPLE?'sample':'';
const aiLabel=()=>({proxy:'Servidor próprio',key:'Claude · sua chave ('+AC.m.replace('claude-','')+')',gemini:'Gemini · sua chave ('+AC.gm.replace('gemini-','')+')',sample:'Claude · sua conta (dentro do artefato)'})[aiMode()]||'IA não configurada';
const SYS=`Você é um assistente de apoio à decisão clínica para médicos no Brasil (UBS, UPA/PS, plantão e atenção primária). Responda sempre em português do Brasil, de forma objetiva e estruturada (tópicos curtos, negrito nos pontos-chave).
Regras: (1) dê doses em mg/kg e em unidade prática (mL, gotas, comprimidos) quando pedirem ou quando forem necessárias, com dose máxima; (2) cite diretrizes brasileiras quando relevante (Ministério da Saúde, PCDT, RENAME, sociedades médicas); (3) sempre inclua sinais de alarme / quando encaminhar e interações ou contraindicações importantes (alergias, gestação, função renal, idade); (4) nunca invente doses, estudos ou referências: se não tiver certeza, diga; (5) quem decide é o médico, você apoia o raciocínio. Use o contexto do paciente quando fornecido.`;
function aiErr(st,m){m=String(m||'');if(st===401)return 'Chave inválida (401). Confira a chave em console.anthropic.com.';if(st===403)return 'Acesso negado (403) para esta chave.';if(/credit|balance|billing/i.test(m))return 'Sem créditos na API do Claude. Adicione crédito em console.anthropic.com → Billing.';if(st===404)return 'Modelo indisponível (404). Troque o modelo em Config.';if(st===429)return 'Limite de uso atingido (429). Tente de novo em instantes.';if(st>=500)return 'Serviço do Claude indisponível ('+st+').';return 'Erro '+st+(m?': '+m.slice(0,140):'')}
const errTxt=e=>e&&e.code==='sem_ia'?'IA não configurada. Abra a aba Config e cadastre uma chave gratuita do Google Gemini ou da API do Claude (ou use este app dentro do Claude).':(e&&(e.code||e.message)?String(e.code||e.message):'erro desconhecido');
async function anth(turns,o){const body={model:AC.m,max_tokens:o.max||2500,system:o.system||SYS,messages:turns};
 if(o.web)body.tools=[{type:'web_search_20250305',name:'web_search',max_uses:3}];
 const stream=!!o.onText&&!o.web;if(stream)body.stream=true;let r;
 try{r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',signal:o.signal,headers:{'content-type':'application/json','x-api-key':AC.k,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify(body)})}
 catch(e){if(e.name==='AbortError')throw{code:'cancelled'};throw{code:'Falha de rede (sem internet ou bloqueio do navegador).'}}
 if(!r.ok){let m='';try{const j=await r.json();m=(j.error&&j.error.message)||''}catch(e){}throw{code:aiErr(r.status,m),status:r.status}}
 if(!stream){const j=await r.json(),src=[];(j.content||[]).forEach(b=>{if(b.type==='web_search_tool_result'&&Array.isArray(b.content))b.content.forEach(x=>x.url&&src.push({u:x.url,t:x.title||x.url}))});
  return{text:(j.content||[]).filter(b=>b.type==='text').map(b=>b.text).join(''),src}}
 const rd=r.body.getReader(),dc=new TextDecoder();let buf='',txt='';
 try{for(;;){const{done,value}=await rd.read();if(done)break;buf+=dc.decode(value,{stream:true});let i;
  while((i=buf.indexOf('\n'))>=0){const ln=buf.slice(0,i).trim();buf=buf.slice(i+1);if(!ln.startsWith('data:'))continue;
   try{const e=JSON.parse(ln.slice(5));if(e.type==='content_block_delta'&&e.delta&&e.delta.type==='text_delta'){txt+=e.delta.text;o.onText(txt)}}catch(_){}}}}
 catch(e){if(e.name==='AbortError'){const x={code:'cancelled',text:txt};throw x}throw{code:'Conexão interrompida',text:txt}}
 return{text:txt,src:[]}}
async function gem(turns,o){const mk=w=>{const b={system_instruction:{parts:[{text:o.system||SYS}]},contents:turns.map(t=>({role:t.role==='assistant'?'model':'user',parts:[{text:String(t.content)}]})),generationConfig:{maxOutputTokens:o.max||2500,temperature:0.3}};if(w)b.tools=[{google_search:{}}];return b};
 const go=async w=>{let r;try{r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(AC.gm)+':generateContent',{method:'POST',signal:o.signal,headers:{'content-type':'application/json','x-goog-api-key':AC.g},body:JSON.stringify(mk(w))})}
  catch(e){if(e.name==='AbortError')throw{code:'cancelled'};throw{code:'Falha de rede (sem internet ou bloqueio do navegador).'}}
  if(!r.ok){let m='';try{const j=await r.json();m=(j.error&&j.error.message)||''}catch(e){}const st=r.status;
   throw{code:st===400&&/API key/i.test(m)?'Chave do Gemini inválida. Gere outra em aistudio.google.com/apikey.':st===403?'Acesso negado (403): confira a chave do Gemini.':st===404?'Modelo do Gemini indisponível (404). Troque o modelo em Config.':st===429?'Limite gratuito do Gemini atingido (429). Aguarde um pouco e tente de novo.':st>=500?'Gemini indisponível ('+st+'). Tente de novo.':'Erro '+st+(m?': '+m.slice(0,140):''),status:st}}
  return r.json()};
 let j,nw=false;try{j=await go(!!o.web)}catch(e){if(o.web&&e.status===400){j=await go(false);nw=true}else throw e}
 const c=(j.candidates||[])[0]||{},txt=((c.content||{}).parts||[]).map(x=>x.text||'').join('');
 if(!txt)throw{code:j.promptFeedback&&j.promptFeedback.blockReason?'Gemini bloqueou a resposta ('+j.promptFeedback.blockReason+'). Reformule.':'Gemini não devolveu texto. Tente de novo.'};
 const src=[];(((c.groundingMetadata||{}).groundingChunks)||[]).forEach(x=>x.web&&x.web.uri&&src.push({u:x.web.uri,t:x.web.title||x.web.uri}));
 if(o.onText)o.onText(txt);return{text:txt,src,noweb:nw}}
async function aiRaw(turns,o={}){const mode=aiMode();if(!mode)throw{code:'sem_ia'};
 if(mode==='sample'){const inp=[{role:'user',content:(o.system||SYS)+'\n\n[As instruções acima valem para toda a conversa.]'},{role:'assistant',content:'Entendido.'},...turns];
  try{const r=await SAMPLE(inp,{cache:false,signal:o.signal,onText:o.onText?({text})=>o.onText(text):undefined});return{text:r.text,src:[],noweb:!!o.web}}
  catch(e){throw{code:e&&e.code==='not_granted'?'Permissão do Claude negada neste artefato.':(e&&(e.message||e.code))||'erro',text:e&&e.text}}}
 if(mode==='proxy'){let r;try{r=await fetch(AC.p,{method:'POST',headers:{'content-type':'application/json'},signal:o.signal,body:JSON.stringify({system:o.system||SYS,messages:turns,web:!!o.web})})}catch(e){if(e.name==='AbortError')throw{code:'cancelled'};throw{code:'Falha de rede no servidor próprio.'}}
  if(!r.ok)throw{code:'Servidor próprio respondeu '+r.status};const j=await r.json();if(o.onText)o.onText(j.text||'');return{text:j.text||'',src:j.sources||[]}}
 if(mode==='gemini')return gem(turns,o);
 return anth(turns,o)}
function parseJ(t){t=String(t).replace(/^\s*```(?:json)?|```\s*$/g,'').trim();try{return JSON.parse(t)}catch(e){const a=t.search(/[\[{]/),b=Math.max(t.lastIndexOf(']'),t.lastIndexOf('}'));if(a>=0&&b>a)try{return JSON.parse(t.slice(a,b+1))}catch(_){}throw{code:'A IA não devolveu JSON válido; tente de novo.'}}}
async function askAI(prompt){if(aiMode()==='sample')return SAMPLE.json(prompt);
 const r=await aiRaw([{role:'user',content:prompt+'\n\nResponda SOMENTE com JSON válido, sem nenhum texto fora do JSON.'}],{system:'Você é um assistente clínico que responde apenas em JSON válido.',max:4000});return parseJ(r.text)}

/* --- markdown simples --- */
function md(t){const Ls=esc(t).split('\n');let h='',ul=0,ol=0,tb=0;
 const il=x=>x.replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/(^|[^*])\*(?!\s)([^*]+?)\*(?!\*)/g,'$1<i>$2</i>').replace(/`([^`]+)`/g,'<code>$1</code>');
 const cl=()=>{if(ul){h+='</ul>';ul=0}if(ol){h+='</ol>';ol=0}if(tb){h+='</table>';tb=0}};
 Ls.forEach(l=>{let m;
  if(m=l.match(/^#{1,4}\s+(.*)/)){cl();h+='<h4>'+il(m[1])+'</h4>'}
  else if(m=l.match(/^\s*[-*•]\s+(.*)/)){if(!ul){cl();h+='<ul>';ul=1}h+='<li>'+il(m[1])+'</li>'}
  else if(m=l.match(/^\s*\d+[.)]\s+(.*)/)){if(!ol){cl();h+='<ol>';ol=1}h+='<li>'+il(m[1])+'</li>'}
  else if(/^\s*\|.*\|\s*$/.test(l)){if(/^\s*\|[\s:|-]+\|\s*$/.test(l))return;if(!tb){cl();h+='<table>';tb=1}h+='<tr>'+l.trim().slice(1,-1).split('|').map(c=>'<td>'+il(c.trim())+'</td>').join('')+'</tr>'}
  else if(!l.trim())cl();else{cl();h+='<p>'+il(l)+'</p>'}});cl();return h}

/* --- contexto do caso --- */
function ctxPac(){const t=$('tipo').value,cm=cur.filter(m=>m.on&&m.r&&!m.r.need).map(m=>m.n+' '+m.f+': '+String(m.r.hx||m.r.x).replace(/\s+/g,' ').slice(0,170));
 return[`Paciente: ${t==='a'?'adulto':t==='c'?'criança':'não informado'}; idade ${$('idade').value||'?'} anos; peso ${$('peso').value||'?'} kg; gestante: ${$('gest').checked?'sim':'não'}; alergias: ${algTxt()}; em uso: ${$('uso').value||'nada informado'}.`,
  $('pat').value?'Doença/hipótese selecionada no app: '+$('pat').value:'',cm.length?'Medicações na receita atual: '+cm.join(' | '):'','Local da prescrição: '+($('dest').value==='h'?'hospital (PS/internação)':'casa/UBS')].filter(Boolean).join('\n')}

/* --- chat com a IA --- */
let CH=LS('chat2',[]),CTL=null,CTXON=LS('ctxon2',true);
const saveCh=()=>LSs('chat2',CH.slice(-40));
function mkTurns(){const o=[];CH.forEach(m=>{if(m.role==='assistant'&&(!m.content||m.content.startsWith('⚠')))return;
  if(o.length&&o[o.length-1].role===m.role)o[o.length-1].content+='\n\n'+m.content;else o.push({role:m.role,content:m.content})});
 while(o.length&&o[0].role!=='user')o.shift();return o.slice(-20)}
const QP=[['🩺 Diagnóstico diferencial do caso','Com os dados do paciente do app, liste o diagnóstico diferencial mais provável (do mais ao menos provável), o que perguntar/examinar para diferenciar e os sinais de alarme.'],
 ['💊 Conferir minha receita','Confira a receita atual do app: doses, intervalos, duração, alergias, gestação, interações e algo que falte. Aponte erros objetivamente.'],
 ['📋 Conduta completa','Qual a conduta completa para este caso (exames, tratamento ambulatorial x hospitalar, critérios de internação/encaminhamento e seguimento)?'],
 ['🗣️ Orientar o paciente','Escreva orientações simples e claras para o paciente/acompanhante levar para casa, incluindo sinais de alarme.'],
 ['⚠️ Interações e contraindicações','Quais interações medicamentosas e contraindicações importantes devo checar neste caso, considerando os medicamentos em uso e a receita atual?']];
function drawAI(){const w=$('aiw');
 w.innerHTML=`<div class="card"><div class="row" style="margin:0;justify-content:space-between"><span><b>Assistente de IA</b> <span class="pill ${aiMode()?'ok':'w'}" id="aist">${esc(aiLabel())}</span></span><button class="chip" id="aicf" type="button" style="margin:0">Configurar</button></div>
 <label class="ck" style="margin-top:8px"><input type="checkbox" id="ctxck" ${CTXON?'checked':''}>Enviar junto os dados do paciente e a receita atual do app</label>
 <div id="qps">${QP.map((q,i)=>`<button class="chip" data-q="${i}" type="button">${q[0]}</button>`).join('')}</div></div>
 <div class="chat" id="chl"></div>
 <div class="chatin"><textarea id="cin" rows="2" placeholder="Pergunte qualquer coisa clínica: conduta, dose, interação, diferencial, orientação…"></textarea>
 <div class="row" style="margin:0"><button id="csn" type="button">Enviar</button><button id="cst" type="button" hidden>Parar</button><button class="chip" id="ccl" type="button" style="margin:10px 0 0">Nova conversa</button></div>
 <div class="fm">Apoio ao raciocínio: confira doses e condutas antes de prescrever.</div></div>`;
 $('aicf').onclick=()=>showTab('t-cf');$('ctxck').onchange=e=>{CTXON=e.target.checked;LSs('ctxon2',CTXON)};
 w.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>csend(QP[b.dataset.q][1]));
 $('csn').onclick=()=>csend();$('cst').onclick=()=>CTL&&CTL.abort();
 $('cin').onkeydown=e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)){e.preventDefault();csend()}};
 $('ccl').onclick=()=>{CH=[];saveCh();drawChat()};drawChat()}
function drawChat(){const c=$('chl');if(!c)return;
 if(!CH.length){c.innerHTML='<div class="card fm">Converse com o Claude sobre o caso. Use os atalhos acima ou escreva sua pergunta. Dica: preencha peso, idade e alergias na aba Receita e deixe marcado “enviar dados do paciente”.</div>';return}
 c.innerHTML=CH.map((m,i)=>m.role==='user'?`<div class="msg u">${esc(m.content).replace(/\n/g,'<br>')}</div>`:`<div class="msg a md" data-i="${i}">${m.content?md(m.content):'<span class="fm">Pensando…</span>'}${m.content&&!m.content.startsWith('⚠')?`<div class="row"><button class="chip" data-cp="${i}" type="button">Copiar</button><button class="chip" data-sv="${i}" type="button">Salvar nota</button></div>`:''}</div>`).join('');
 c.querySelectorAll('[data-cp]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(CH[b.dataset.cp].content);b.textContent='Copiado ✓'}catch(e){b.textContent='Selecione e copie'}});
 c.querySelectorAll('[data-sv]').forEach(b=>b.onclick=()=>{const i=+b.dataset.sv;let q='';for(let j=i-1;j>=0;j--)if(CH[j].role==='user'){q=CH[j].content;break}
  const N=LS('notes2',[]);N.unshift({t:(q||'Nota').slice(0,70),txt:CH[i].content,ts:Date.now()});LSs('notes2',N);b.textContent='Salva na Biblioteca ✓'});
 const last=c.lastElementChild;if(last&&CTL)last.scrollIntoView({block:'end'})}
function setBusy(b){const s=$('csn'),t=$('cst');if(s)s.disabled=b;if(t)t.hidden=!b}
async function csend(txt){txt=(txt||($('cin')&&$('cin').value)||'').trim();if(!txt)return;
 if(!aiMode()){CH.push({role:'user',content:txt},{role:'assistant',content:'⚠ '+errTxt({code:'sem_ia'})});saveCh();drawChat();return}
 if($('cin'))$('cin').value='';CH.push({role:'user',content:txt},{role:'assistant',content:''});drawChat();
 CTL=new AbortController();setBusy(true);const turns=mkTurns(),idx=CH.length-1;
 const sys=SYS+(CTXON?'\n\nContexto atual do app (pode estar incompleto):\n'+ctxPac():'');
 try{const r=await aiRaw(turns,{system:sys,signal:CTL.signal,max:3000,onText:t=>{CH[idx].content=t;const el=document.querySelector('#chl .msg.a[data-i="'+idx+'"]');if(el)el.innerHTML=md(t)}});CH[idx].content=r.text||'(sem resposta)'}
 catch(e){if(e&&e.code==='cancelled'){CH[idx].content=(e.text||CH[idx].content||'')+'\n\n_(interrompido)_'}else{CH[idx].content=(e&&e.text?e.text+'\n\n':'')+'⚠ '+errTxt(e)}}
 finally{CTL=null;saveCh();setBusy(false);drawChat()}}

/* --- checagem na web (Claude com busca) --- */
async function webCheck(){const o=$('wbr'),q=($('q').value.trim()||$('pat').value);
 if(!q){o.textContent='Digite a doença ou escolha uma antes.';return}
 if(!aiMode()){o.textContent=errTxt({code:'sem_ia'});return}
 o.textContent='Pesquisando…';
 const pr=`Pesquise na web fontes confiáveis e recentes (Ministério da Saúde, PCDT, sociedades médicas, bulas e conteúdo aberto) sobre o tratamento atual de "${q}" no Brasil para ${$('tipo').value==='a'?'adultos':$('tipo').value==='c'?'crianças':'adultos e crianças'}. Responda em português: 1) tratamento de 1ª linha com doses; 2) o que mudou recentemente (cite o ano); 3) sinais de alarme. Seja objetivo e cite as fontes.`;
 try{let r;try{r=await aiRaw([{role:'user',content:pr}],{web:true,max:3000})}catch(e){if(aiMode()==='key'&&e&&e.status===400){r=await aiRaw([{role:'user',content:pr}],{max:3000});r.noweb=true}else throw e}
  o.innerHTML=`<div class="card md">${md(r.text)}${r.src&&r.src.length?'<div class="fm"><b>Fontes:</b><br>'+r.src.slice(0,6).map(x=>`<a href="${esc(x.u)}" target="_blank" rel="noopener">${esc(x.t)}</a>`).join('<br>')+'</div>':'<div class="wn">'+(r.noweb?'Sem busca na web neste modo (use sua chave da API com busca habilitada): resposta do conhecimento do modelo, trate como não verificada.':'Sem fontes retornadas: trate como não verificado.')+'</div>'}<div class="fm" style="margin-top:6px">Whitebook e Wemeds são pagos e fechados. Confira na fonte antes de prescrever.</div></div>`}
 catch(e){o.textContent='Falhou: '+errTxt(e)}}
$('wb').onclick=webCheck;

/* --- configurações --- */
function drawCfg(){const w=$('cfg');if(!w)return;
 w.innerHTML=`<div class="card"><b>IA — Google Gemini (gratuito)</b> <span class="pill ${AC.g?'ok':'w'}" id="gst">${AC.g?'chave salva':'sem chave'}</span>
 <div class="fm" style="margin:6px 0">Opção gratuita, sem depender da sua conta Claude. A chave fica <b>só neste aparelho</b> (nunca vai para o GitHub). <b>Não digite nome, CPF ou dados que identifiquem o paciente</b>: no plano gratuito o Google pode usar o texto para melhorar seus produtos.</div>
 <label>Chave do Gemini (AIza…)</label><input id="gk" type="password" autocomplete="off" value="${esc(AC.g)}" placeholder="AIza…">
 <label style="margin-top:8px">Modelo</label><input id="gmd" list="gml" value="${esc(AC.gm)}"><datalist id="gml"><option value="gemini-2.5-flash"><option value="gemini-2.5-flash-lite"><option value="gemini-2.5-pro"></datalist>
 <div class="row"><button id="gsv" type="button">Salvar e testar Gemini</button><button class="chip" id="grm" type="button">Remover chave</button></div><div id="gfs" class="fm"></div>
 <details style="margin-top:8px"><summary class="fm">Passo a passo para gerar a chave</summary><div class="fm" style="margin-top:6px">1) No celular ou computador, abra <b>aistudio.google.com/apikey</b> e entre com sua conta Google. 2) Toque em <b>Criar chave de API</b> (Create API key) e aceite os termos. 3) Copie a chave (começa com AIza…). 4) Cole acima e toque em <b>Salvar e testar</b>. 5) Se aparecer erro de modelo, abra o AI Studio, veja qual modelo Flash está liberado no plano gratuito e digite o nome no campo Modelo. Limites gratuitos mudam com o tempo; ao atingir o limite, espere ou use a chave do Claude. Cada pessoa (ex.: sua esposa) cria a própria chave no próprio aparelho.</div></details></div>
<div class="card"><b>IA — Claude</b> <span class="pill ${aiMode()?'ok':'w'}" id="cfst">${esc(aiLabel())}</span>
 <div class="fm" style="margin:6px 0">Para usar no plantão, fora do Claude: cadastre uma chave da API do Claude. Ela fica <b>só neste aparelho</b> e só você tem. Dentro do Claude (artefato) o app usa a sua conta e não precisa de chave.</div>
 <label>Chave da API (sk-ant-…)</label><input id="ck" type="password" autocomplete="off" value="${esc(AC.k)}" placeholder="sk-ant-api03-…">
 <label style="margin-top:8px">Modelo</label><select id="cm"><option value="claude-sonnet-5-5">Sonnet 5.5 — recomendado (equilíbrio)</option><option value="claude-haiku-5-5">Haiku 5.5 — mais rápido e barato</option><option value="claude-opus-5-5">Opus 5.5 — mais forte e mais caro</option></select>
 <details style="margin-top:8px"><summary class="fm">Avançado: servidor próprio (para distribuir o app sem expor chave)</summary><div class="fm" style="margin:6px 0">URL que recebe POST {system, messages, web} e devolve {text, sources}. Deixe vazio para usar a chave acima.</div><input id="cpx" value="${esc(AC.p)}" placeholder="https://…/ia"></details>
 <div class="row"><button id="csv" type="button">Salvar e testar</button><button class="chip" id="crm" type="button">Remover chave</button></div><div id="cfs" class="fm"></div>
 <details style="margin-top:8px"><summary class="fm">Como conseguir a chave</summary><div class="fm" style="margin-top:6px">1) Entre em console.anthropic.com com seu e-mail. 2) Billing → adicione crédito (a assinatura Claude Pro é separada e não inclui a API; o uso do app custa centavos por consulta). 3) API Keys → Create Key → copie e cole acima. Se alguém for usar em outro celular, ela cria a própria chave ou usa o servidor próprio.</div></details></div>`;
 $('cm').value=AC.m;
 $('csv').onclick=async()=>{AC.k=$('ck').value.trim();AC.m=$('cm').value;AC.p=$('cpx').value.trim();LSs('ak2',AC.k);LSs('am2',AC.m);LSs('ap2',AC.p);const o=$('cfs');
  if(!aiMode()){o.textContent='Cole a chave primeiro.';return}o.textContent='Testando…';
  try{const r=await aiRaw([{role:'user',content:'Responda apenas: ok'}],{max:20});o.textContent='✓ Funcionando: '+String(r.text).slice(0,30)}catch(e){o.textContent='✗ '+errTxt(e)}
  $('cfst').textContent=aiLabel();$('cfst').className='pill '+(aiMode()?'ok':'w')};
 $('gsv').onclick=async()=>{AC.g=$('gk').value.trim();AC.gm=($('gmd').value.trim()||'gemini-2.5-flash');LSs('gk2',AC.g);LSs('gm2',AC.gm);const o=$('gfs');
  if(!AC.g){o.textContent='Cole a chave primeiro.';return}o.textContent='Testando…';
  try{const r=await gem([{role:'user',content:'Responda apenas: ok'}],{max:20});o.textContent='✓ Funcionando: '+String(r.text).slice(0,30)}catch(e){o.textContent='✗ '+errTxt(e)}
  $('gst').textContent=AC.g?'chave salva':'sem chave';$('gst').className='pill '+(AC.g?'ok':'w');$('cfst').textContent=aiLabel()};
 $('grm').onclick=()=>{AC.g='';LSs('gk2','');$('gk').value='';$('gst').textContent='sem chave';$('gst').className='pill w';$('gfs').textContent='Chave removida deste aparelho.'}
 $('crm').onclick=()=>{AC.k='';LSs('ak2','');$('ck').value='';$('cfst').textContent=aiLabel();$('cfs').textContent='Chave removida deste aparelho.'}}

/* --- biblioteca --- */
let LT='d',LQ='',LSEL=null;
const dtx=(m,t)=>{const hh=m.h?`${m.h}/${m.h} h`:'dose única',dd=m.d?` por ${m.d} dia(s)`:'',sos=m.sos?` (se ${m.sos})`:'';
 if(m.t==='L')return`${+(+m.k).toFixed(1)} mg/kg/dose, ${hh}${dd}${sos}${m.cap?`; máx ${m.cap} mg/dose`:''}${m.mx?`; máx ${m.mx} mg/kg/dia`:''}`;
 if(m.t==='T')return`${typeof m.tb==='function'?'comprimidos conforme a idade':m.tb+' comprimido(s) de '+m.mg+' mg'}, ${hh}${dd}${sos}`;
 if(m.t==='V')return`${typeof m.ml==='function'?'volume conforme a idade':m.ml+' mL'}, ${hh}${dd}${sos}`;
 return typeof m.x==='function'?'dose calculada pelo peso (ver na receita)':String(m.x||'')};
function drugIdx(){const D={};['c','a'].forEach(t=>Object.keys(P).forEach(k=>(P[k][t]||[]).forEach(m=>{const n=m.n.trim(),d=D[n]=D[n]||{n,pr:{},dx:{}};const key=m.f+'|'+t;if(!d.pr[key])d.pr[key]={m,t};(d.dx[k]=d.dx[k]||new Set()).add(t)})));
 PEDCAT.forEach(p=>{const d=D[p[0]]=D[p[0]]||{n:p[0],pr:{},dx:{}};const key=p[1]+'|c';if(!d.pr[key]&&!Object.keys(d.pr).some(x=>x.split('|')[0]===p[1]&&x.endsWith('|c')))d.pr[key]={pc:p,t:'c'}});return D}
function drawLib(){const w=$('lib');if(!w)return;
 if(LSEL){return LSEL.t==='d'?disDet(LSEL.k):LSEL.t==='m'?drugDet(LSEL.k):noteDet(LSEL.k)}
 const tabs=[['d','Doenças'],['m','Medicamentos'],['n','Notas']];
 w.innerHTML=`<div class="card"><b>Biblioteca</b><div class="fm" style="margin:2px 0 8px">Doenças com conduta, doses, perguntas e orientações; medicamentos com apresentações e doses; resumos gerados pela IA ficam salvos aqui.</div>
 <div class="seg" id="lseg">${tabs.map(t=>`<button type="button" data-v="${t[0]}" class="${LT===t[0]?'on':''}">${t[1]}</button>`).join('')}</div>
 <input id="lq" autocomplete="off" style="margin-top:8px" placeholder="${LT==='d'?'Buscar doença ou sintoma (1ª letra)…':LT==='m'?'Buscar medicamento (1ª letra)…':'Buscar nas notas…'}" value="${esc(LQ)}">
 <button class="chip" id="lsc" type="button">🧮 Escalas e calculadoras</button></div><div id="ll"></div>`;
 $('lseg').querySelectorAll('button').forEach(b=>b.onclick=()=>{LT=b.dataset.v;LQ='';drawLib()});
 $('lq').oninput=e=>{LQ=e.target.value;libList()};$('lsc').onclick=()=>showTab('t-fe');libList()}
function libList(){const q=nz(LQ.trim()),tk=q.split(/\s+/).filter(Boolean),o=$('ll');let it=[];
 const hit=s=>{s=nz(s);return tk.every(x=>s.split(/[^a-z0-9]+/).some(y=>y.startsWith(x))||s.includes(x))};
 if(LT==='d')it=Object.keys(P).filter(k=>!tk.length||hit(k+' '+(KW[k]||''))).sort((a,b)=>a.localeCompare(b,'pt')).map(k=>({k,t:'d',s:[P[k].c?'👶':'',P[k].a?'🧑':'',LIB_()['d:'+k]?'📄':''].join(' ')}));
 else if(LT==='m'){const D=drugIdx();it=Object.keys(D).filter(k=>!tk.length||hit(k)).sort((a,b)=>a.localeCompare(b,'pt')).map(k=>({k,t:'m',s:Object.keys(D[k].dx).length?Object.keys(D[k].dx).length+' uso(s)':'pediatria',l:LIB_()['m:'+k]?'📄':''}))}
 else it=LS('notes2',[]).map((n,i)=>({k:i,t:'n',n})).filter(x=>!tk.length||hit(x.n.t+' '+x.n.txt));
 const mx=80;o.innerHTML=it.length?it.slice(0,mx).map((x,i)=>`<div class="lbi" data-i="${i}"><span><b>${esc(x.t==='n'?x.n.t:x.k)}</b></span><span class="fm">${esc(x.s||'')} ${x.l||''} ›</span></div>`).join('')+(it.length>mx?`<div class="fm">Mostrando ${mx} de ${it.length}: refine a busca.</div>`:''):'<div class="card fm">'+(LT==='n'?'Nenhuma nota. No chat da IA, use “Salvar nota” numa resposta.':'Nada encontrado.')+'</div>';
 o.querySelectorAll('.lbi').forEach(el=>el.onclick=()=>{const x=it[el.dataset.i];LSEL={t:x.t,k:x.k};drawLib();window.scrollTo(0,0)})}
const LIB_=()=>LS('lib2',{});
const libSet=(k,v)=>{const L=LIB_();L[k]=v;LSs('lib2',L);libPush(k,v)};
function libGot(k,v){if(!v||!v.txt)return;const L=LIB_();if(!L[k]||(L[k].ts||0)<(v.ts||0)){L[k]=v;LSs('lib2',L)}}
async function libPush(k,v){const c=sbCfg();if(!c.u||!c.k)return;try{await fetch(c.u+'/rest/v1/receitas',{method:'POST',headers:{...sbH(c.k),Prefer:'return=minimal'},body:JSON.stringify({chave:'lib:'+k,dados:{lib:true,txt:v.txt,ts:v.ts},rev:false})})}catch(e){}}
function backBtn(){return'<button class="chip" id="lbk" type="button" style="margin:0 0 8px">‹ Voltar à biblioteca</button>'}
function bindBack(){const b=$('lbk');if(b)b.onclick=()=>{LSEL=null;drawLib()}}
async function libAI(key,prompt,after){const o=$('lai');o.innerHTML='<div class="fm">Gerando resumo com a IA…</div>';
 try{const r=await aiRaw([{role:'user',content:prompt}],{max:2000});libSet(key,{txt:r.text,ts:Date.now()});after()}catch(e){o.innerHTML='<div class="wn">⚠ '+esc(errTxt(e))+'</div>'}}
function aiBlock(key){const v=LIB_()[key];return`<div class="sec"><b>Resumo (IA)</b><div id="lai">${v?`<div class="md">${md(v.txt)}</div><div class="fm">Gerado por IA em ${new Date(v.ts).toLocaleDateString('pt-BR')} — confira com a sua referência antes de usar.</div>`:'<div class="fm">Ainda não gerado.</div>'}</div><div class="row"><button class="chip" id="lgen" type="button">${v?'Atualizar resumo':'Gerar resumo com IA'}</button>${v?'<button class="chip" id="lcp" type="button">Copiar</button>':''}</div></div>`}
