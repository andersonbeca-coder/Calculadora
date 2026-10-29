
function disDet(k){const w=$('lib'),f=(FAM.find(x=>x[0].test(k))||[])[1],c=getCl(k,f),pk=P[k];
 let h=backBtn()+`<div class="card"><h3 style="margin:0 0 6px">${esc(k)}</h3>${pk.c?'<span class="pill ok">👶 criança</span>':''}${pk.a?'<span class="pill ok">🧑 adulto</span>':''}${BK[k]?`<span class="pill ${BK[k].rev?'ok':'w'}">${BK[k].rev?'revisado':'gerado por IA, não revisado'}</span>`:''}
 <div class="row"><button id="luse" type="button" style="margin:0">Usar na receita</button><button class="chip" id="lask" type="button" style="margin:0">Perguntar à IA</button></div>`;
 [['c','👶 Tratamento — criança'],['a','🧑 Tratamento — adulto']].forEach(([t,tt])=>{if(!pk[t])return;h+=`<div class="sec"><b>${tt}</b>`+pk[t].map(m=>`<div style="margin-bottom:6px"><b>${esc(m.n)}</b> <span class="fm">${esc(m.f)}${m.off?' · alternativa':''}</span><div class="fm">${esc(dtx(m,t))}${m.nt?' — '+esc(m.nt):''}</div></div>`).join('')+'</div>'});
 if(pk.nt&&pk.nt.length)h+='<div class="sec"><b>Atenção</b>'+pk.nt.map(x=>`<div class="wn">⚠ ${esc(x)}</div>`).join('')+'</div>';
 if(c){if(c.q&&c.q.length)h+='<div class="sec"><b>Perguntas ao paciente</b><ul>'+c.q.map(x=>`<li>${esc(x)}</li>`).join('')+'</ul></div>';
  (c.sc||[]).forEach(s=>{h+=`<div class="sec"><b>Escala: ${esc(s.n)}</b><ul>${s.it.map(i=>`<li>${esc(i[0])} (${i[1]})</li>`).join('')}</ul><div class="fm">${s.fx.map(x=>`≥ ${x[0]}: ${esc(x[1])}`).join('<br>')}</div></div>`});
  if(c.or&&c.or.length)h+='<div class="sec"><b>Orientações ao paciente</b><ul>'+c.or.map(x=>`<li>${esc(x)}</li>`).join('')+'</ul></div>';
  h+=cdHtml(c,'sec',k)}
 h+=aiBlock('d:'+k)+'</div>';w.innerHTML=h;bindBack();
 $('luse').onclick=()=>{const t=pk.c&&!pk.a?'c':pk.a&&!pk.c?'a':$('tipo').value||'a';$('tipo').value=t;$('tipo').dispatchEvent(new Event('change'));$('pat').value=k;$('q').value=k;build();showTab('t-rx')};
 $('lask').onclick=()=>{showTab('t-ia');csend(`Resuma a conduta atual para "${k}" no Brasil (diagnóstico, tratamento com doses principais e critérios de encaminhamento).`)};
 const conduta=['c','a'].map(t=>pk[t]?(t==='c'?'Criança: ':'Adulto: ')+pk[t].filter(m=>!m.off).slice(0,5).map(m=>m.n+' '+m.f).join('; '):'').filter(Boolean).join(' | ');
 $('lgen').onclick=()=>libAI('d:'+k,`Escreva um resumo prático para médico de plantão/UBS no Brasil sobre "${k}", com estes títulos em negrito: **Definição**, **Quadro clínico**, **Diagnóstico**, **Tratamento (1ª linha)**, **Sinais de alarme / quando encaminhar**, **Pontos-chave**. Máximo de 250 palavras, objetivo. Condutas já cadastradas no app (mantenha coerência): ${conduta||'nenhuma'}. Não invente doses.`,()=>disDet(k));
 if($('lcp'))$('lcp').onclick=async()=>{try{await navigator.clipboard.writeText(LIB_()['d:'+k].txt);$('lcp').textContent='Copiado ✓'}catch(e){}}}
function drugDet(n){const w=$('lib'),d=drugIdx()[n];if(!d){LSEL=null;return drawLib()}
 let h=backBtn()+`<div class="card"><h3 style="margin:0 0 6px">${esc(n)}</h3>`;
 const pr=Object.values(d.pr);
 h+='<div class="sec"><b>Apresentações e doses nos protocolos do app</b>'+(pr.length?pr.map(x=>{if(x.pc){const p=x.pc;return`<div style="margin-bottom:6px"><span class="pill">👶 criança</span> <b>${esc(p[1])}</b><div class="fm">${p[3]} mg/kg/dose, ${p[4]}/${p[4]} h por ${p[5]} dia(s)${p[8]?' — '+esc(p[8]):''}</div></div>`}
  const m=x.m;return`<div style="margin-bottom:6px"><span class="pill">${x.t==='c'?'👶 criança':'🧑 adulto'}</span> <b>${esc(m.f)}</b><div class="fm">${esc(dtx(m,x.t))}${m.nt?' — '+esc(m.nt):''}</div></div>`}).join(''):'<div class="fm">Sem modelo no app.</div>')+'</div>';
 const ks=Object.keys(d.dx);if(ks.length)h+='<div class="sec"><b>Usado em</b>'+ks.sort().map(k=>`<button class="chip" data-d="${esc(k)}" type="button">${esc(k)}</button>`).join('')+'</div>';
 const tgs=[];pr.forEach(x=>{if(x.m)tg(x.m).forEach(t=>{if(!tgs.includes(t))tgs.push(t)})});
 const CAP={pen:'penicilina',cef:'cefalosporina',dip:'dipirona',aine:'AINE (evitar na gestação, desidratação e com anticoagulante)',mac:'macrolídeo (QT)',qui:'quinolona (QT, tendinopatia)',mtz:'metronidazol (álcool)',ond:'ondansetrona (QT)',met:'metoclopramida',cort:'corticoide',dexc:'anti-histamínico sedativo',cicl:'relaxante muscular',alb:'antiparasitário'};
 if(tgs.length)h+='<div class="sec"><b>Classe / cuidados</b>'+tgs.map(t=>`<span class="pill w">${esc(CAP[t]||t)}</span>`).join('')+'</div>';
 h+=aiBlock('m:'+n)+'</div>';w.innerHTML=h;bindBack();
 w.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{LSEL={t:'d',k:b.dataset.d};drawLib()});
 $('lgen').onclick=()=>libAI('m:'+n,`Escreva uma monografia resumida de "${n}" para médico de plantão no Brasil, com estes títulos em negrito: **Classe e mecanismo**, **Indicações**, **Posologia usual (adulto e pediátrica)**, **Contraindicações**, **Efeitos adversos importantes**, **Gestação e lactação**, **Interações relevantes**, **Ajuste renal/hepático**, **Disponibilidade no SUS (RENAME)** se souber. Máximo de 250 palavras. Não invente doses; se incerto, diga.`,()=>drugDet(n));
 if($('lcp'))$('lcp').onclick=async()=>{try{await navigator.clipboard.writeText(LIB_()['m:'+n].txt);$('lcp').textContent='Copiado ✓'}catch(e){}}}
function noteDet(i){const N=LS('notes2',[]),n=N[i];if(!n){LSEL=null;return drawLib()}
 $('lib').innerHTML=backBtn()+`<div class="card"><h3 style="margin:0 0 6px">${esc(n.t)}</h3><div class="md">${md(n.txt)}</div><div class="fm">Salva em ${new Date(n.ts).toLocaleDateString('pt-BR')}</div><div class="row"><button class="chip" id="ncp" type="button">Copiar</button><button class="chip" id="ndl" type="button">Excluir nota</button></div></div>`;bindBack();
 $('ncp').onclick=async()=>{try{await navigator.clipboard.writeText(n.txt);$('ncp').textContent='Copiado ✓'}catch(e){}};
 $('ndl').onclick=()=>{N.splice(i,1);LSs('notes2',N);LSEL=null;drawLib()}}
drawLib();drawAI();drawCfg();

