
/* ===== Parte 4: painel do administrador (aprovar receitas e resumos pendentes do Supabase) ===== */
(function(){
let TOK=null;
const _dc=drawCfg;
drawCfg=function(){_dc();const w=$('cfg');if(!w)return;const d=document.createElement('div');d.className='card';d.id='adm';w.appendChild(d);drawAdm()};
const H=()=>{const c=sbCfg();return{...sbH(c.k),Authorization:'Bearer '+TOK}};
function drawAdm(){const d=$('adm');if(!d)return;
 if(!TOK){d.innerHTML=`<b>Administrador — aprovar o que a IA gerou</b>
  <div class="fm" style="margin:6px 0">Só a pessoa responsável pelo banco. Entre com o e-mail e a senha do usuário criado em Supabase → Authentication → Users. A senha não fica salva.</div>
  <label>E-mail</label><input id="ade" autocomplete="username" value="${esc(LS('adm_e',''))}"><label style="margin-top:8px">Senha</label><input id="adp" type="password" autocomplete="current-password">
  <div class="row"><button id="adg" type="button">Entrar</button></div><div id="ads" class="fm"></div>`;
  $('adg').onclick=async()=>{const c=sbCfg(),o=$('ads');if(!c.u||!c.k){o.textContent='Preencha a URL e a chave do Supabase acima.';return}
   const e=$('ade').value.trim();LSs('adm_e',e);o.textContent='Entrando…';
   try{const r=await fetch(c.u+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:c.k,'Content-Type':'application/json'},body:JSON.stringify({email:e,password:$('adp').value})});
    const j=await r.json();if(!r.ok)throw{message:j.error_description||j.msg||'HTTP '+r.status};TOK=j.access_token;drawAdm()}catch(x){o.textContent='✗ '+(x.message||x)}};
  return}
 d.innerHTML=`<b>Administrador</b> <span class="pill ok">conectado</span><div class="row"><button class="chip" id="adr" type="button" style="margin:0">Atualizar lista</button><button class="chip" id="ado" type="button" style="margin:0">Sair</button></div><div id="adl" class="fm">Carregando pendentes…</div>`;
 $('ado').onclick=()=>{TOK=null;drawAdm()};$('adr').onclick=adList;adList()}
function resumo(x){const d=x.dados||{};
 if(d.lib)return`<div class="md">${md(String(d.txt||'').slice(0,1500))}</div>`;
 const it=t=>(d[t]||[]).map(o=>`<li>${esc(o.nome||'?')} ${esc(o.apres||'')} — ${o.tipo==='T'?`${o.comp||'?'} cp de ${o.mg||'?'} mg`:o.tipo==='L'?`${o.mgkg||'?'} mg/kg/dose (${o.conc||'?'} mg/mL)`:esc(String(o.texto||'').slice(0,120))}${o.h?`, ${o.h}/${o.h} h`:''}${o.dias?`, ${o.dias} d`:''}${o.alt?' (alternativa)':''}</li>`).join('');
 return(d.c&&d.c.length?'<b>Criança</b><ul>'+it('c')+'</ul>':'')+(d.a&&d.a.length?'<b>Adulto</b><ul>'+it('a')+'</ul>':'')+(d.al?`<div class="wn">Alarme: ${esc(d.al)}</div>`:'')+(d.or&&d.or.length?`<div class="fm">${d.or.length} orientação(ões), ${(d.q||[]).length} pergunta(s)</div>`:'')}
async function adList(){const o=$('adl'),c=sbCfg();if(!o)return;
 try{const r=await fetch(c.u+'/rest/v1/receitas?rev=eq.false&select=chave,dados,criado&order=criado.desc&limit=100',{headers:H()});if(!r.ok)throw{message:'HTTP '+r.status+(r.status===401?' (sessão expirada: saia e entre de novo)':'')};
  const j=await r.json();
  if(!j.length){o.innerHTML='Nada pendente.';return}
  o.innerHTML=j.map((x,i)=>`<div class="card" data-i="${i}"><b>${esc(String(x.chave).replace(/^lib:/,''))}</b> <span class="pill ${String(x.chave).startsWith('lib:')?'':'w'}">${String(x.chave).startsWith('lib:')?'resumo da biblioteca':'receita da IA'}</span><div style="margin-top:6px">${resumo(x)}</div><div class="row"><button class="chip" data-ok="${i}" type="button">✓ Aprovar</button><button class="chip" data-no="${i}" type="button">✗ Rejeitar</button></div></div>`).join('');
  const act=async(i,ok)=>{const x=j[i],u=c.u+'/rest/v1/receitas?chave=eq.'+encodeURIComponent(x.chave);
   try{const r2=await fetch(u,ok?{method:'PATCH',headers:{...H(),Prefer:'return=minimal'},body:JSON.stringify({rev:true})}:{method:'DELETE',headers:H()});
    if(!r2.ok)throw{message:'HTTP '+r2.status+' — confira as políticas de administrador no Supabase'};
    o.querySelector(`[data-i="${i}"]`).innerHTML=`<div class="fm">${ok?'✓ Aprovado':'Rejeitado'}: ${esc(x.chave)}</div>`;if(ok&&typeof sbPull==='function')sbPull()}
   catch(e){o.querySelector(`[data-i="${i}"]`).insertAdjacentHTML('beforeend',`<div class="wn">⚠ ${esc(e.message||e)}</div>`)}};
  o.querySelectorAll('[data-ok]').forEach(b=>b.onclick=()=>act(+b.dataset.ok,true));o.querySelectorAll('[data-no]').forEach(b=>b.onclick=()=>act(+b.dataset.no,false))}
 catch(e){o.innerHTML='<span class="wn">✗ '+esc(e.message||e)+'</span>'}}
})();
