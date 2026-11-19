/* b16: acesso ao app (login/senha, 30 dias grátis, assinatura via Kiwify, painel admin).
   A IA NÃO passa por aqui: cada usuária usa a própria chave (b18). Nenhuma chave de pagamento fica neste arquivo.
   Liberação: o servidor (função kiwify-webhook) grava a assinatura; aqui só lemos o perfil da própria pessoa. */
(function(){
const SK='conta_s',CK='conta_ok',U=()=>SB0.u,K=()=>SB0.k;
let S=null,PF=null,MSG='',LINK='',OFF=false,LOAD=true,ACC=null;
/* identificação do aparelho (anti-fraude): código aleatório guardado neste aparelho + impressão técnica do navegador */
const DEV=(()=>{let d='';try{d=localStorage.getItem('prx_dev')||''}catch(e){}
 if(!d){const m=document.cookie.match(/(?:^|; )prx_dev=([\w-]+)/);d=m?m[1]:''}
 if(!d){d=(crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2))}
 try{localStorage.setItem('prx_dev',d)}catch(e){}try{document.cookie='prx_dev='+d+';max-age=315360000;path=/;SameSite=Lax'}catch(e){}
 return d})();
let FP=null;
async function fpGet(){if(FP)return FP;try{const n=navigator,sc=screen;let cv='';try{const c=document.createElement('canvas');c.width=200;c.height=40;const x=c.getContext('2d');x.textBaseline='top';x.font='16px Arial';x.fillStyle='#0E8F84';x.fillText('Prescreva ✓ 1,5 mg/kg',2,2);x.fillStyle='rgba(200,80,0,.6)';x.fillRect(120,8,40,20);cv=c.toDataURL()}catch(e){}
 const raw=[sc.width,sc.height,sc.colorDepth,devicePixelRatio,Intl.DateTimeFormat().resolvedOptions().timeZone,n.language,n.platform,n.hardwareConcurrency,n.deviceMemory,n.maxTouchPoints,cv].join('|');
 const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(raw));FP=[...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,'0')).join('').slice(0,32)}catch(e){FP=null}return FP}
const cpfOk=c=>{const d=String(c||'').replace(/\D/g,'');if(d.length!==11||/^(\d)\1{10}$/.test(d))return false;
 for(let t=9;t<11;t++){let s=0;for(let i=0;i<t;i++)s+=+d[i]*(t+1-i);const r=(s*10)%11%10;if(r!==+d[t])return false}return true};
const cpfMask=el=>{if(el)el.oninput=()=>{let d=el.value.replace(/\D/g,'').slice(0,11);el.value=d.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2')}};
const DESC=['mailinator.com','yopmail.com','yopmail.fr','guerrillamail.com','sharklasers.com','10minutemail.com','temp-mail.org','tempmail.com','temp-mail.io','tempmailo.com','tempail.com','emailondeck.com','throwawaymail.com','getnada.com','dispostable.com','maildrop.cc','trashmail.com','fakeinbox.com','mohmal.com','mail.tm','1secmail.com','dropmail.me','minuteinbox.com','emailfake.com','burnermail.io','email-temporario.com.br','emailtemporario.com.br'];
try{S=JSON.parse(localStorage.getItem(SK)||'null')}catch(e){S=null}
window.PRX_AT=()=>S&&S.at;
let CARR=0,CERR='';
const save=()=>{try{S?localStorage.setItem(SK,JSON.stringify(S)):localStorage.removeItem(SK)}catch(e){}};
const g=id=>document.getElementById(id);
const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dt=x=>x?new Date(x).toLocaleDateString('pt-BR'):'—';
async function authCall(path,body){
 const r=await fetch(U()+'/auth/v1/'+path,{method:'POST',headers:{apikey:K(),'Content-Type':'application/json'},body:JSON.stringify(body)});
 const j=await r.json().catch(()=>({}));if(!r.ok)throw{msg:j.msg||j.error_description||j.message||('erro '+r.status)};return j}
function setSess(j){S={at:j.access_token,rt:j.refresh_token,exp:Date.now()+(j.expires_in||3600)*1000,id:j.user&&j.user.id,email:j.user&&j.user.email};save()}
async function token(){
 if(!S)return null;
 if(Date.now()>S.exp-60000){try{const j=await authCall('token?grant_type=refresh_token',{refresh_token:S.rt});const u=S;setSess(Object.assign(j,{user:j.user||{id:u.id,email:u.email}}))}catch(e){if(e&&e.msg&&/fetch|network|Failed/i.test(e.msg)){return S.at}S=null;PF=null;save();return null}}
 return S.at}
async function rest(path,opt){const t=await token();if(!t)throw{msg:'Faça login.'};
 const r=await fetch(U()+path,Object.assign({},opt,{headers:Object.assign({apikey:K(),Authorization:'Bearer '+t,'Content-Type':'application/json'},(opt&&opt.headers)||{})}));
 const j=await r.json().catch(()=>null);if(!r.ok)throw{msg:(j&&(j.message||j.error))||('erro '+r.status),status:r.status};return j}
async function carregaLink(){try{const r=await fetch(U()+'/rest/v1/config_app?chave=eq.link_checkout&select=valor',{headers:{apikey:K(),Authorization:'Bearer '+K()}});const a=await r.json();LINK=(a&&a[0]&&a[0].valor||'').trim()}catch(e){}}
const fimAcesso=p=>Math.max(p.assinatura_ate?new Date(p.assinatura_ate).getTime():0,p.teste_ate?new Date(p.teste_ate).getTime():0);
async function carregaPerfil(){
 OFF=false;
 if(!S){PF=null;return}
 try{const a=await rest('/rest/v1/perfis?id=eq.'+S.id+'&select=*');PF=a&&a[0]||null;
  if(PF&&!PF.admin)await acesso(false);
  if(!PF||PF.bloqueado||(!PF.admin&&fimAcesso(PF)<=Date.now())){if(window.PRX_LIMPA)PRX_LIMPA()}
  if(PF)try{localStorage.setItem(CK,JSON.stringify({e:S.email,ate:PF.bloqueado?0:(PF.admin?Date.now()+864e5*3:fimAcesso(PF)),t:Date.now()}))}catch(e){}}
 catch(e){
  if(e&&e.status)PF=null; /* resposta do servidor: sem perfil = sem acesso */
  else{ /* sem internet: vale o último estado confirmado, por até 3 dias */
   try{const c=JSON.parse(localStorage.getItem(CK)||'null');if(c&&c.e===S.email&&c.ate>Date.now()&&Date.now()-c.t<864e5*3){OFF=true;PF={offline:true}}}catch(_){}}}}
async function acesso(assumir){
 try{ACC=await rest('/rest/v1/rpc/registrar_acesso',{method:'POST',body:JSON.stringify({p_aparelho:DEV,p_fp:await fpGet(),p_ua:navigator.userAgent.slice(0,200),p_assumir:!!assumir})})}
 catch(e){if(!(e&&e.status&&e.status<500&&e.status!==404))ACC=null}}
const precisaCPF=()=>PF&&!PF.offline&&!PF.admin&&!PF.cpf_hash&&!(PF.assinatura_ate&&new Date(PF.assinatura_ate).getTime()>Date.now());
const acessoBarrado=()=>PF&&!PF.offline&&!PF.admin&&ACC&&ACC.ok===false;
function liberado(){
 if(!S||!PF)return false;if(PF.offline)return true;if(PF.bloqueado)return false;if(PF.admin)return true;if(precisaCPF()||acessoBarrado())return false;
 return fimAcesso(PF)>Date.now()}

async function entrar(modo){
 const em=(g('cx_em')||{}).value.trim(),pw=(g('cx_pw')||{}).value,nm=((g('cx_nm')||{}).value||'').trim(),cpf=((g('cx_cpf')||{}).value||'').trim();
 if(!em||pw.length<8){MSG='Informe e-mail e senha (mínimo 8 caracteres).';return draw()}
 if(modo==='novo'){
  if(!cpfOk(cpf)){MSG='Para criar a conta, informe um CPF válido.';return draw()}
  if(DESC.includes(em.toLowerCase().split('@')[1]||'')){MSG='E-mail temporário não é aceito. Use seu e-mail pessoal.';return draw()}}
 MSG='Aguarde…';draw();
 try{
  if(modo==='novo'){const j=await authCall('signup',{email:em,password:pw,data:{nome:nm,cpf:cpf,aparelho:DEV}}).catch(e=>{if(/database error|saving new user/i.test(e.msg||''))throw{msg:'Não foi possível criar a conta. Confira o CPF e use um e-mail pessoal (não temporário).'};throw e});
   if(j.access_token){setSess(j)}else{MSG='Conta criada. Confirme o e-mail que enviamos e depois entre.';return draw()}}
  else{const j=await authCall('token?grant_type=password',{email:em,password:pw});setSess(j)}
  MSG='';await carregaPerfil();
 }catch(e){MSG=e.msg||'Falha ao entrar.'}
 draw()}
function sair(){const tinha=window.PRX_OK;S=null;PF=null;ACC=null;MSG='';save();try{localStorage.removeItem(CK)}catch(e){}if(window.PRX_LIMPA)PRX_LIMPA();if(tinha)return location.reload();draw()}

function status(){
 if(!PF)return'Carregando…';if(PF.offline)return'<span class="pill ok">Modo offline</span>';
 const ag=Date.now(),ass=PF.assinatura_ate&&new Date(PF.assinatura_ate).getTime()>ag,te=new Date(PF.teste_ate).getTime()>ag;
 return PF.bloqueado?'<span class="pill w">Conta bloqueada</span>':PF.admin?'<span class="pill ok">Administradora</span>':ass?'<span class="pill ok">Assinatura até '+dt(PF.assinatura_ate)+'</span>':te?'<span class="pill ok">Teste grátis até '+dt(PF.teste_ate)+'</span>':'<span class="pill w">Teste encerrado</span>'}

function pagar(){return LINK?'<a href="'+E(LINK)+'" target="_blank" rel="noopener"><button type="button">Assinar (Pix ou cartão)</button></a>':'<div class="fm">A assinatura estará disponível em breve.</div>'}

function gate(){
 let o=g('gate');
 if(S&&PF&&liberado()&&window.PRX_OK){if(o)o.remove();document.documentElement.style.overflow='';return}
 if(S&&PF&&liberado()&&!window.PRX_OK&&!CARR){CARR=1;CERR='';token().then(t=>window.PRX_CARREGA?PRX_CARREGA(t):false).then(ok=>{CARR=0;if(ok)pos();else{CERR='Não foi possível baixar o conteúdo. Verifique a internet e tente de novo.';draw()}})}
 if(!o){o=document.createElement('div');o.id='gate';o.style.cssText='position:fixed;inset:0;z-index:99998;background:var(--bg,#fff);overflow:auto;padding:20px;display:flex;align-items:flex-start;justify-content:center';document.body.appendChild(o);document.documentElement.style.overflow='hidden'}
 const PR=window.PRX||{nome:'Prescreva',slogan:'',marca:()=>''};
 let h='<div class="card" style="max-width:420px;width:100%;margin-top:5vh"><div class="prx-top">'+PR.marca(52)+'<div><div class="prx-nm">'+PR.nome+'</div><div class="prx-sl">'+PR.slogan+'</div></div></div>';
 if(!S){
  h+='<ul class="prx-ft"><li>Dose por peso já calculada, em gotas e mL</li><li>Receita, prescrição hospitalar e orientações prontas para copiar</li><li>Condutas de urgência, escalas e calculadoras, mesmo sem internet</li></ul>'
  +'<div class="fm" style="margin:6px 0">Crie sua conta e use <b>30 dias grátis</b>. Depois, assinatura mensal.</div>'
  +'<input id="cx_nm" placeholder="Seu nome (só no cadastro)" autocomplete="name">'
  +'<input id="cx_em" type="email" placeholder="E-mail" autocomplete="email">'
  +'<input id="cx_pw" type="password" placeholder="Senha (mínimo 8 caracteres)" autocomplete="current-password">'
  +'<input id="cx_cpf" inputmode="numeric" placeholder="CPF (só para criar conta)" autocomplete="off">'
  +'<div class="fm" style="font-size:12px;margin:2px 0 6px">O CPF serve só para impedir cadastros repetidos no período grátis. Guardamos apenas um código criptografado, nunca o número.</div>'
  +'<div class="row"><button id="cx_in" type="button">Entrar</button><button class="chip" id="cx_new" type="button">Criar conta grátis</button></div>'
  +'<div class="prx-lg">Ferramenta de apoio. Confira sempre bula, alergias e protocolo local.</div>'
 }else if(!PF&&LOAD){
  h+='<div class="fm" style="margin:6px 0">Carregando…</div>'
 }else if(!PF){
  h+='<div class="fm" style="margin:6px 0">Não encontramos seu perfil. Saia e entre de novo.</div><div class="row"><button class="chip" id="cx_out" type="button">Sair</button></div>'
 }else{
  if(!PF.bloqueado&&precisaCPF()){
   h+='<div class="fm" style="margin:6px 0">Para continuar, informe seu CPF. Ele serve só para impedir cadastros repetidos no período grátis; guardamos apenas um código criptografado, nunca o número.</div>'
   +'<input id="cx_cpf2" inputmode="numeric" placeholder="CPF" autocomplete="off"><div class="row"><button id="cx_cpfok" type="button">Confirmar</button><button class="chip" id="cx_out" type="button">Sair</button></div>'
   +(MSG?'<div class="fm">'+E(MSG)+'</div>':'')+'</div>';o.innerHTML=h;bind();return}
  if(!PF.bloqueado&&acessoBarrado()){
   const lim=ACC.lim||2;
   h+='<div class="fm" style="margin:6px 0">'+(ACC.motivo==='desconectado'?'Sua conta foi aberta em outro aparelho e este foi desconectado.':'Sua conta já está em uso em '+lim+' aparelhos.')+' Cada assinatura vale para até '+lim+' aparelhos da mesma pessoa. Usar aqui desconecta o aparelho usado há mais tempo.</div>'
   +'<div class="row"><button id="cx_aqui" type="button">Usar neste aparelho</button><button class="chip" id="cx_out" type="button">Sair</button></div>'
   +(MSG?'<div class="fm">'+E(MSG)+'</div>':'')+'</div>';o.innerHTML=h;bind();return}
  if(!PF.bloqueado&&liberado()&&!window.PRX_OK){
   h+='<div class="fm" style="margin:6px 0">'+(CERR?E(CERR):'Carregando o conteúdo…')+'</div>'+(CERR?'<div class="row"><button id="cx_rel" type="button">Tentar de novo</button><button class="chip" id="cx_out" type="button">Sair</button></div>':'')+'</div>';o.innerHTML=h;bind();return}
  h+='<div style="margin:8px 0">'+status()+'</div>'
  +(PF.bloqueado?'<div class="fm">Sua conta está bloqueada. Fale com o suporte.</div>':(PF.motivo_sem_teste&&!(PF.assinatura_ate&&new Date(PF.assinatura_ate).getTime()>Date.now())?'<div class="fm"><b>Período grátis indisponível:</b> '+E(PF.motivo_sem_teste)+' Se você é outra pessoa usando um aparelho compartilhado, fale com o suporte.</div>':'')+'<div class="fm">Seu período grátis acabou. Assine para continuar usando. <b>Use na compra o mesmo e-mail do cadastro</b> ('+E(S.email)+'): a liberação é automática em poucos minutos.</div><div class="row">'+pagar()+'<button class="chip" id="cx_chk" type="button">Já paguei, atualizar</button></div>')
  +'<div class="row"><button class="chip" id="cx_out" type="button">Sair</button></div>'}
 h+=(MSG?'<div class="fm">'+E(MSG)+'</div>':'')+'</div>';
 o.innerHTML=h;bind()}
function bind(){
 cpfMask(g('cx_cpf'));cpfMask(g('cx_cpf2'));
 if(g('cx_cpfok'))g('cx_cpfok').onclick=async()=>{const v=g('cx_cpf2').value;if(!cpfOk(v)){MSG='CPF inválido. Confira os números.';return draw()}
  MSG='Aguarde…';draw();try{const r=await rest('/rest/v1/rpc/definir_cpf',{method:'POST',body:JSON.stringify({p_cpf:v})});MSG=r&&r.ok?'':(r&&r.msg)||'Erro';await carregaPerfil()}catch(e){MSG=e.msg||'Erro'}draw()};
 if(g('cx_rel'))g('cx_rel').onclick=()=>{CERR='';draw()};
 if(g('cx_aqui'))g('cx_aqui').onclick=async()=>{MSG='Aguarde…';draw();await acesso(true);MSG=acessoBarrado()?'Não foi possível. Tente de novo.':'';draw()};
 if(g('cx_in')){g('cx_in').onclick=()=>entrar('in');g('cx_new').onclick=()=>entrar('novo');const pw=g('cx_pw');if(pw)pw.onkeydown=e=>{if(e.key==='Enter')entrar('in')}}
 if(g('cx_out'))g('cx_out').onclick=sair;
 if(g('cx_chk'))g('cx_chk').onclick=async()=>{MSG='Verificando…';draw();await carregaPerfil();MSG=liberado()?'':'Ainda não identificamos o pagamento. Aguarde alguns minutos e tente de novo.';draw()}}

function card(){
 const t=g('t-cf');if(!t)return;let box=g('acct');
 if(!S||!PF){if(box)box.remove();return}
 if(!box){box=document.createElement('div');box.id='acct';t.appendChild(box)}
 box.innerHTML='<div class="card"><div class="row" style="margin:0;justify-content:space-between"><span><b>Conta</b> <span class="fm">'+E(S.email||'')+'</span></span><button class="chip" id="cx_out2" type="button" style="margin:0">Sair</button></div><div style="margin-top:6px">'+status()+'</div>'
 +((PF.admin||PF.offline)?'':'<div class="row">'+pagar()+'</div>')+'</div>';
 g('cx_out2').onclick=sair}

function draw(){gate();card();drawAdmin()}

async function drawAdmin(){
 const cf=g('t-cf');if(!cf)return;let box=g('adm');
 if(!PF||!PF.admin){if(box)box.remove();return}
 if(!box){box=document.createElement('div');box.id='adm';cf.appendChild(box)}
 box.innerHTML='<div class="card"><b>Administração de contas</b><div class="fm">Carregando…</div></div>';
 try{const L=await rest('/rest/v1/perfis?select=id,email,nome,criado,teste_ate,assinatura_ate,bloqueado,cpf_fim,cpf_hash,suspeito,ligado_a,trocas&order=criado.desc&limit=300');
  let A=[];try{A=await rest('/rest/v1/acessos?select=user_id,ip,ultimo,revogado&limit=3000')}catch(e){}
  const em={};L.forEach(p=>em[p.id]=p.email);const ap={},ips={};A.forEach(a=>{if(!a.revogado)ap[a.user_id]=(ap[a.user_id]||0)+1;(ips[a.user_id]=ips[a.user_id]||new Set()).add(a.ip)});
  L.sort((a,b)=>(b.suspeito?1:0)-(a.suspeito?1:0));const nS=L.filter(p=>p.suspeito).length;
  box.innerHTML='<div class="card"><b>Administração de contas</b><div class="fm">'+L.length+' conta(s)'+(nS?' · <b style="color:#b45309">'+nS+' com alerta de fraude</b> (no topo)':'')+'. Libere dias manualmente ou bloqueie.</div>'
  +L.map(p=>'<div class="card" style="margin:8px 0"><b>'+E(p.nome||p.email||'')+'</b> <span class="fm">'+E(p.email||'')+'</span><div class="fm">Teste até '+dt(p.teste_ate)+' · assinatura até '+dt(p.assinatura_ate)+(p.bloqueado?' · BLOQUEADA':'')+'</div>'
   +'<div class="fm">CPF '+(p.cpf_hash?'final '+E(p.cpf_fim||'??'):'<i>não informado</i>')+' · aparelhos ativos: '+(ap[p.id]||0)+' · IPs: '+(ips[p.id]?ips[p.id].size:0)+(p.trocas?' · trocas de aparelho: '+p.trocas:'')+'</div>'
   +(p.suspeito?'<div class="fm" style="color:#b45309">⚠ '+E(p.suspeito)+(p.ligado_a&&em[p.ligado_a]?' — ligada a '+E(em[p.ligado_a]):'')+'</div>':'')
   +'<div class="row" style="margin:4px 0 0"><button class="chip" data-a="'+E(p.id)+'" data-d="30" type="button">+30 dias</button><button class="chip" data-a="'+E(p.id)+'" data-b="'+(p.bloqueado?0:1)+'" type="button">'+(p.bloqueado?'Desbloquear':'Bloquear')+'</button></div></div>').join('')+'</div>';
  box.querySelectorAll('[data-a]').forEach(b=>b.onclick=async()=>{
   try{await rest('/rest/v1/rpc/admin_liberar',{method:'POST',body:JSON.stringify({p_user:b.dataset.a,p_dias:+(b.dataset.d||0),p_cota:null,p_bloqueado:b.dataset.b!==undefined?b.dataset.b==='1':false})});
    b.textContent='Feito ✓';setTimeout(drawAdmin,600)}catch(e){b.textContent=e.msg||'Erro'}})}
 catch(e){box.innerHTML='<div class="card"><b>Administração de contas</b><div class="fm">Erro: '+E(e.msg||'')+'</div></div>'}}

function pos(){const dCf=window.drawCfg;
 if(typeof dCf==='function'&&!dCf._prx){window.drawCfg=function(){const r=dCf.apply(this,arguments);card();drawAdmin();return r};window.drawCfg._prx=1;try{drawCfg=window.drawCfg}catch(e){}}
 draw()}

/* reconfere o aparelho a cada 15 min e ao voltar ao app (derruba o aparelho desconectado) */
let RT=0;const reconf=async()=>{if(Date.now()-RT<6e4)return;RT=Date.now();if(S&&PF&&!PF.offline&&!PF.admin&&navigator.onLine){await acesso(false);draw()}};
setInterval(reconf,9e5);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')reconf()});
/* trava já na abertura (até conferir o perfil) */
gate();
carregaLink();
carregaPerfil().then(()=>{LOAD=false;draw()});
})();
