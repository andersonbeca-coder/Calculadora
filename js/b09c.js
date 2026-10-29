(function(){
const {T9,TOP,cl,f0,f1,f2,need}=window.__sp_b09_0;
const {DR,DRX,drRow}=window.__sp_b09_1;


T9('doses','⚖️','Doses por peso — lista completa','doses por peso lista antitérmico antibiótico corticoide sedação rcp macete dipirona ibuprofeno amoxicilina ceftriaxona midazolam adrenalina fenitoína caique',null,function(box,w){
 const q=(box.querySelector('#drq')||{value:''}).value||'';
 const nzq=nz(q);
 const rows=DR.map(r=>drRow(r,w)).filter(r=>!nzq||nz(r.n+' '+r.cat+' '+r.ap).includes(nzq));
 const ext=DRX.filter(r=>!nzq||nz(r[1]+r[0]+(typeof r[2]==='function'?r[2](0):r[2])).includes(nzq));
 let h='<div class="card"><label>Buscar medicação</label><input id="drq" placeholder="ex.: amoxicilina, dipirona, midazolam" value="'+esc(q)+'">'+(w?'':'<div class="wn" style="margin-top:6px">'+need+'</div>')+'<div class="fm" style="margin-top:6px">Doses por peso calculadas automaticamente. O “macete” é um atalho de conta para o plantão. Em conflito com outros protocolos o app avisa; sempre conferir.</div></div>';
 let last='';
 rows.forEach(r=>{if(r.cat!==last){h+='<h3 style="margin:12px 0 4px">'+esc(r.cat)+'</h3>';last=r.cat}
  h+='<div class="card ul"><b>'+esc(r.n)+'</b> <span class="fm">'+esc(r.ap)+'</span><div>'+esc(r.txt)+'</div>'+(r.iv?'<div>• '+esc(r.iv)+'</div>':'')+(r.mx?'<div>• Máx.: '+esc(r.mx)+'</div>':'')+(r.mac?'<div>• Macete: '+esc(r.mac)+'</div>':'')+(r.nt?'<div class="fm">'+esc(r.nt)+'</div>':'')+'</div>'});
 if(ext.length){h+='<h3 style="margin:12px 0 4px">Pela idade (sem cálculo por peso)</h3>';ext.forEach(r=>{const tx=typeof r[2]==='function'?r[2](w):r[2];h+='<div class="card ul"><b>'+esc(r[1])+'</b><div>'+esc(tx)+'</div></div>'})}
 if(!rows.length&&!ext.length)h+='<div class="card">Nenhuma medicação encontrada.</div>';
 box.innerHTML=h;
 const qi=box.querySelector('#drq');qi.oninput=()=>{const p=qi.selectionStart;draw9(true);const n=$('drq');if(n){n.focus();try{n.setSelectionRange(p,p)}catch(e){}}};
});

/* ---------- receitas-modelo ---------- */
function MOD(w,ag){
 const B=(fn)=>w?fn():'___',gts=B(()=>f0(w*0.4)),px4=B(()=>f1(w/4)),pred=B(()=>f1(Math.min(w,60)/3)),jt=B(()=>String(cl(Math.round(w/3.5),2,10)));
 const nz2=ag==null||isNaN(ag)?null:ag;
 const lor=nz2==null?'2–6 anos: 5 mL; > 6 anos: 10 mL':nz2<2?'consultar (< 2 anos)':nz2<=6?'5 mL':'10 mL';
 const deslo=nz2==null?'6–11 m 2 mL; 1–5 a 2,5 mL; 6–11 a 5 mL; ≥ 12 a 10 mL':nz2<1?'2 mL':nz2<6?'2,5 mL':nz2<12?'5 mL':'10 mL';
 const anti=['LORATADINA 10 mg — 1 cp 1x/dia (> 6 anos)','LORATADINA 1 mg/mL — '+lor+' 1x/dia','DESLORATADINA 0,5 mg/mL — '+deslo+' 1x/dia','HIXIZINE 2 mg/mL — '+px4+' mL de 8/8h (peso ÷ 4)','ALLEGRA 6 mg/mL — '+(nz2!=null&&nz2>=2?'5':'2,5–5')+' mL de 12/12h (6 m a 12 anos)','ALLEGRA 120 mg — 1 cp 1x/dia (> 12 anos)','POLARAMINE 2 mg/5 mL — '+px4+' mL de 8/8h (peso ÷ 4)','POLARAMINE 2 mg — 1 cp de 8/8h'];
 const alt='\nOU\n';
 return[
 ['1. Síndrome gripal','USO NASAL\n1. Lavagem nasal 3x/dia com 5 mL de soro fisiológico 0,9% em cada narina.'],
 ['2. GECA (diarreia e vômitos)','USO ORAL\n1. Soro de reidratação oral (Pedialyte/Hidralite) — 2 sachês. Colocar 1 sachê em 1 litro de água e oferecer livremente após cada evacuação ou vômito.\n2. Vonau Flash 4 mg — 1 cx. 1 cp sob a língua, de 8/8h, se náuseas ou vômitos\nOU Nautex gotas — __ gotas de 8/8h, se náuseas ou vômitos\nOU Ondif 4 mg — 1 filme sob a língua de 8/8h, se náuseas ou vômitos.\n3. Floratil — 1 flaconete de 12/12h por 3 dias\nOU Provance — 1 cp mastigável 1x ao dia por 5 dias.\n4. Unizinco Kids — __ mL 1x ao dia por 14 dias.\n5. Dipirona gotas — '+gts+' gotas de 6/6h, se dor ou febre.\n6. Aumento de ingesta hídrica (água, chá, suco).\n7. Alimentação normal, exceto comidas gordurosas.\n\nSE NECESSÁRIO: Albendazol 40 mg/mL — 10 mL hoje e repetir após 15 dias.\nSE INFECCIOSA: Azitromicina 200 mg/5 mL — 4 mL 1x ao dia por 3 dias (peso ÷ 4 = '+px4+' mL)\nOU Bactrim F — __ mL de 12/12h por 7 dias.'],
 ['3. Asma','USO INALATÓRIO\n1. Aerolin spray 100 mcg — 1 tubo. Inalar '+jt+' puffs, com espaçador, de 4/4h, por 5 dias.\nUSO ORAL\n2. Predsim 3 mg/mL (sem corante) — 1 frasco. Tomar '+pred+' mL 1x pela manhã por 5 dias.\n+++ Realizar lavagem nasal ao menos 6x ao dia.'],
 ['4. Rinite alérgica','USO INTRANASAL\n1. Nasonex 50 mcg ou mometasona 50 mcg — 1 tubo. 1 jato em cada narina, 1x à noite, por 30 dias.\nUSO NASAL\n2. Lavagem nasal com __ mL de SF 0,9% em cada narina, 3x ao dia.\nUSO ORAL\n3. Desloratadina 0,5 mg/mL (Esalerg) — 1 frasco. Dar '+deslo+' 1x ao dia por 15 dias.\n+++ Realizar lavagem nasal ao menos 6x ao dia.\nUSO INALATÓRIO\nNazzo nebulize — 1 fr. Nebulizar com 3 mL de SF e gotas de Nazzo 3x ao dia: 0–1 ano = 3 gts; 1–6 a = 5 gts; 6–12 a = 10 gts; ≥ 12 a = 20 gts.'],
 ['5. Impetigo','SE LOCALIZADO — USO TÓPICO\n1. Mupirocina 20 mg/g — 1 tubo. Aplicar na região afetada, 3x ao dia, por 7 dias.\n\nSE DISSEMINADO — USO ORAL\n1. Cefalexina 500 mg — 28 cp. 1 cp de 6/6h por 7 dias\nOU Cefalexina 250 mg/5 mL — '+px4+' mL de 6/6h por __ dias (peso ÷ 4).\n2. Anti-histamínico para a coceira (um dos abaixo):\n'+anti.join(alt)],
 ['6. Urticária','USO ORAL\n1. Anti-histamínico (um dos abaixo):\n'+anti.join(alt)+'\n2. Prednisolona 3 mg/mL — '+pred+' mL 1x pela manhã por 5 dias\nOU Prednisolona 20 mg — 2 cp 1x pela manhã por 5 dias.'],
 ['7. Larva migrans','USO TÓPICO\n1. Tiabendazol pomada 50 mg/g — 1 cx. Friccionar na área afetada 2–3x ao dia por 5 dias ou até desaparecer.\nUSO ORAL\n2. Albendazol 40 mg/mL — 50 mL. Tomar 10 mL 1x ao dia por 5 dias.\n3. Anti-histamínico (opcional):\n'+anti.join(alt)],
 ['8. Otite externa','USO TÓPICO\n1. Otociriax — 1 frasco. Aplicar 3 gotas no ouvido de 12/12h por 7 dias\nOU Otosporin — 1 frasco. 2 gotas de 8/8h no ouvido afetado por 7 dias.'],
 ['9. Otite média aguda','USO ORAL\n1. Sinot Clav ou Atak Clav (400 + 57 mg/5 mL) — 1 fr. Dar 7,5 mL de 12/12h por 10 dias (peso ÷ 3,5 = '+B(()=>f1(w/3.5))+' mL).\n2. Predsim 3 mg/mL — '+pred+' mL 1x pela manhã por 5 dias\nOU Prednisolona 20 mg — 2 cp 1x pela manhã por 5 dias.\n3. Dipirona gotas — '+gts+' gotas de 6/6h, se dor ou febre.\nCUIDADOS: compressa morna no ouvido afetado; cuidado com água no ouvido durante o banho.'],
 ['10. Mão-pé-boca','USO TÓPICO\n1. Triancinolona 1 mg/mL — 1 cx. Aplicar fina camada sobre as lesões, 3x ao dia por 5 dias.\n2. Hexomedine spray — 1 fr. Aplicar sobre as lesões, 4x ao dia até melhorar.'],
 ['11. Varicela','USO ORAL\n1. Dipirona 500 mg/mL — 1 fr. Dar '+gts+' gotas 4x ao dia se dor ou febre.\n2. Desloratadina 0,5 mg/mL — 1 cx. Dar '+deslo+' 1x ao dia por 5 dias.\n3. Aciclovir 200 mg — 25 cp. 1 cp 5x ao dia por 5 dias (indicado em > 12 anos, imunossuprimidos ou casos graves; criança saudável: sintomáticos).'],
 ['12. Escabiose','USO TÓPICO\n1. Permetrina 5% — 1 fr. Aplicar a loção à noite por 3 noites e retirar no banho do dia seguinte. Refazer o tratamento após 7 dias. (o arquivo de origem cita este item como “menores de 2 meses”; conferir.)\nUSO ORAL\n2. Hixizine xarope — 1 fr. Dar 3,5 mL de 8/8h por 5 dias.\n3. Ivermectina 6 mg — 4 cp. Tomar '+B(()=>w<15?'não usar < 15 kg':w<25?'½ cp':w<=35?'1 cp':w<=50?'1½ cp':w<=65?'2 cp':w<=79?'2½ cp':'3 cp')+' em dose única (0,2 mg/kg). Repetir após 7 dias.'],
 ['13. Dengue','1. Dipirona 500 mg/mL — '+gts+' gotas de 6/6h, se dor ou febre (> 37,8)\nOU Dipirona 50 mg/mL — '+B(()=>f1(w*0.2))+' mL de 6/6h, se dor ou febre (> 37,8)\nOU Paracetamol 200 mg/mL — '+B(()=>f0(w))+' gotas de 6/6h, se dor ou febre (> 37,8).\n2. Aumento de ingesta hídrica (água, suco, chá).\n3. Repouso.\n4. Retornar à urgência se: sangramento de mucosas (boca, nariz, gengiva), tontura, dor abdominal intensa, vômitos persistentes.\nNÃO USAR ibuprofeno, nimesulida, cetoprofeno e outros anti-inflamatórios.'],
 ['Exame físico normal — menino','Ao exame, BEG, normocorado, hidratado, ativo, afebril, anictérico, acianótico, eupneico, normotenso.\nAR: MV+ em AHT SRA\nAC: RCR2T BCNF SS\nOrofaringe: sem alterações\nOtoscopia: sem alterações\nAbdome: RHA+, plano, flácido, indolor à palpação superficial e profunda, timpanismo preservado\nExt: sem edemas e bem perfundida'],
 ['Exame físico normal — menina','Ao exame, BEG, normocorada, hidratada, ativa e reativa, afebril, anictérica, acianótica, eupneica, normotensa.\nAR: MV+ em AHT SRA\nAC: RCR2T BCNF SS\nOrofaringe: sem alterações\nOtoscopia: sem alterações\nAbdome: RHA+, plano, flácido, indolor à palpação superficial e profunda, timpanismo preservado\nExt: sem edemas e bem perfundidas']
 ];
}
T9('modelos','\uD83D\uDCCB','Receitas-modelo prontas','receitas modelo prontas síndrome gripal geca asma rinite impetigo urticária larva migrans otite mão pé boca varicela escabiose dengue exame físico',null,function(box,w){
 const ag=parseFloat($('uidade').value),M=MOD(w,ag);
 box.innerHTML=(w?'':'<div class="card wn">'+need+' Os números aparecem como ___ até lá.</div>')+'<div class="card"><div class="fm">Modelos prontos com as doses por peso preenchidas (dipirona gotas = peso × 0,4; Hixizine/Polaramine/cefalexina = peso ÷ 4; prednisolona 1 mg/kg). Toque em copiar e cole na receita/prontuário.</div></div>'+M.map((m,i)=>'<div class="card ul"><b>'+esc(m[0])+'</b><div style="white-space:pre-wrap;margin-top:6px">'+esc(m[1])+'</div><button type="button" class="ucp" data-mc="'+i+'">Copiar</button></div>').join('');
 box.querySelectorAll('[data-mc]').forEach(b=>b.onclick=()=>{const t=M[+b.dataset.mc][0]+'\n'+M[+b.dataset.mc][1],old=b.textContent,done=()=>{b.textContent='Copiado ✓';setTimeout(()=>b.textContent=old,1400)};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(done,()=>{fb(t);done()});else{fb(t);done()}});
});

/* ---------- SEGURANÇA DO PACIENTE: barra global, varredura de alergia/gestação/uso contínuo, alertas de via, conferência pelo rótulo ---------- */
const fnt=DR.find(r=>r[1]==='Fentanil');if(fnt){fnt[3]=0.05}
const ALG={pen:['Penicilinas',/penicilina|amoxicilina|ampicilina|oxacilina|clavulan|benzatina/],dip:['Dipirona',/dipirona|metamizol|novalgina/],aine:['AINEs',/ibuprofeno|cetoprofeno|diclofenaco|nimesulida|piroxicam|cetorolaco|naproxeno|meloxicam|alivium|cataflam/],mac:['Macrolídeos',/azitromicina|claritromicina|eritromicina/],qui:['Quinolonas',/ciprofloxacino|levofloxacino|norfloxacino|ofloxacino/]};
const GESTX=/ibuprofeno|cetoprofeno|diclofenaco|nimesulida|piroxicam|cetorolaco|naproxeno|meloxicam|ciprofloxacino|levofloxacino|norfloxacino|ivermectina|albendazol|mebendazol|fluconazol|doxiciclina|tetraciclina|enalapril|captopril|losartana|misoprostol|valpro|fenitoína|fenitoina|carbamazepina|fenobarbital|gentamicina|amicacina|claritromicina|tramadol|morfina|metronidazol|tenofovir|dolutegravir/;
const DN=/amoxicilina|ampicilina|oxacilina|penicilina|cefalexina|ceftriaxona|azitromicina|claritromicina|eritromicina|ciprofloxacino|dipirona|ibuprofeno|cetoprofeno|nimesulida|piroxicam|cetorolaco|diclofenaco|naproxeno|tramadol|morfina|metronidazol|fenitoína|fenitoina|fenobarbital|diazepam|midazolam|adrenalina|prednisolona|dexametasona|hidrocortisona|metilprednisolona|ondansetrona|bromoprida|domperidona|salbutamol|ipratrópio|ipratropio|magnésio|furosemida|albendazol|ivermectina|fluconazol|aciclovir|vancomicina|gentamicina|clindamicina|meropenem|amiodarona|atropina|amicacina|cetamina|fentanil|propofol|omeprazol|ranitidina|loratadina|hidroxizina|nifedipina|amicacina|enoxaparina|varfarina/gi;
function sfState(){
 const g=id=>$(id),al=[...document.querySelectorAll('#alg input')].filter(i=>i.checked).map(i=>i.value);
 return{al,nao:al.includes('nao'),outra:(g('alo')&&g('alo').value||'').trim(),gest:!!(g('gest')&&g('gest').checked),uso:(g('uso')&&g('uso').value||'').trim()};
}
function scan(text){
 const S=sfState(),t=nz(text),out=[];
 Object.keys(ALG).forEach(k=>{if(S.al.includes(k)){const m=t.match(new RegExp(ALG[k][1].source,'g'));if(m)out.push({s:3,m:'\uD83D\uDEAB ALERGIA a '+ALG[k][0]+' marcada — este conteúdo cita: '+[...new Set(m)].join(', ')+'. NÃO prescrever.'})}});
 if(S.al.includes('pen')&&/cefalexina|cefaclor|cefadroxila|ceftriaxona|cefepime|cefalotina|ceftazidima|cefuroxima|cefazolina/.test(t))out.push({s:2,m:'⚠ Alergia a penicilina: cefalosporinas têm reação cruzada baixa (~2%), mas avalie o tipo de reação antes.'});
 S.outra.split(/[,;]/).map(x=>nz(x.trim())).filter(x=>x.length>3).forEach(x=>{if(t.includes(x))out.push({s:3,m:'\uD83D\uDEAB ALERGIA informada: "'+x+'" aparece neste conteúdo. NÃO prescrever.'})});
 if(S.gest){const m=t.match(new RegExp(GESTX.source,'g'));if(m)out.push({s:3,m:'\uD83E\uDD30 GESTANTE: evitar/avaliar risco — '+[...new Set(m)].join(', ')+'.'})}
 if(S.uso&&window.analyzeIX){
  const meds=S.uso.split(/[,;+]/).map(x=>x.trim()).filter(Boolean).slice(0,8),found=[...new Set((text.match(DN)||[]).map(x=>x.toLowerCase()))].slice(0,14);
  meds.forEach(md=>found.forEach(d=>{try{const r=window.analyzeIX([md,d]);r.out.filter(o=>o.s>=2).forEach(o=>out.push({s:o.s,m:'\uD83D\uDC8A INTERAÇÃO: '+md+' + '+d+' — '+o.t}))}catch(e){}}))}
 return out;
}
/* ---- barra global ---- */
const bar=document.createElement('div');bar.id='sfbar';
bar.innerHTML='<button type="button" id="sfb"></button><div id="sfp" hidden></div>';
document.querySelector('main').before(bar);
const stsf=document.createElement('style');stsf.textContent='#sfbar{position:sticky;top:0;z-index:30;background:var(--bg);padding:6px 12px 0;max-width:760px;margin:0 auto}#sfb,:root:not([data-theme="light"]) #sfb{width:100%;text-align:left;padding:8px 10px;border-radius:10px;font-size:13px;font-weight:600;border:1px solid var(--bd);background:var(--cd);color:var(--tx);margin:0}#sfb.bad,:root:not([data-theme="light"]) #sfb.bad{background:#7f1d1d;color:#fff;border-color:#b91c1c}#sfb.ok{border-color:var(--ac)}#sfp{background:var(--cd);border:1px solid var(--bd);border-radius:10px;padding:10px;margin-top:6px;max-height:55vh;overflow:auto}.alrt{background:#7f1d1d;color:#fff;padding:7px 9px;border-radius:8px;margin:6px 0;font-size:13px;font-weight:600}.alrt.w{background:#92400e}.alrt.ok{background:#14532d}';document.head.appendChild(stsf);
const fieldsHTML='<label>Alergias</label><div class="grid" id="sfal">'+[['pen','Penicilinas'],['dip','Dipirona'],['aine','AINEs'],['mac','Macrolídeos'],['qui','Quinolonas'],['nao','Nenhuma alergia conhecida']].map(a=>'<label class="ck"><input type="checkbox" data-sf="'+a[0]+'">'+a[1]+'</label>').join('')+'</div><label>Outra alergia (nome do medicamento)</label><input id="sfalo"><label class="ck" style="margin-top:8px"><input type="checkbox" id="sfg"> Gestante</label><label>Medicamentos em uso</label><input id="sfuso" placeholder="ex.: varfarina, losartana, fluoxetina"><div class="fm" style="margin-top:6px">Pergunte SEMPRE: alergia a remédio, gravidez e remédios de uso contínuo. Os alertas valem para todas as telas.</div>';
$('sfp').innerHTML=fieldsHTML;
function sfRefresh(){
 const S=sfState(),b=$('sfb');
 const known=S.al.length>0;
 const parts=[known?(S.nao?'Alergias: nenhuma':'Alergias: '+S.al.map(k=>(ALG[k]||[k])[0]).join(', ')+(S.outra?', '+S.outra:'')):'⚠ ALERGIAS NÃO INFORMADAS',S.gest?'\uD83E\uDD30 Gestante':'Gestante: não',S.uso?'Em uso: '+S.uso:'Uso contínuo: não informado'];
 b.className=known?'ok':'bad';b.textContent='\uD83D\uDEE1 '+parts.join(' · ')+'  ▾';
 const bx=[...document.querySelectorAll('#sfal input')];bx.forEach(i=>{i.checked=S.al.includes(i.dataset.sf)});
 if($('sfalo')!==document.activeElement)$('sfalo').value=S.outra;if($('sfuso')!==document.activeElement)$('sfuso').value=S.uso;$('sfg').checked=S.gest;
}
function sfPush(){ // painel -> campos da receita
 document.querySelectorAll('#sfal input').forEach(i=>{const r=document.querySelector('#alg input[value="'+i.dataset.sf+'"]');if(r&&r.checked!==i.checked){r.checked=i.checked;r.dispatchEvent(new Event('change',{bubbles:true}))}});
 const set=(id,v,ev)=>{const e=$(id);if(e&&e.value!==v){e.value=v;e.dispatchEvent(new Event(ev,{bubbles:true}))}};
 set('alo',$('sfalo').value,'input');set('uso',$('sfuso').value,'input');
 const g=$('gest');if(g&&g.checked!==$('sfg').checked){g.checked=$('sfg').checked;g.dispatchEvent(new Event('change',{bubbles:true}))}
 sfRefresh();try{if(!$('t-ur').hidden)draw9(true)}catch(e){}
}
$('sfb').onclick=()=>{$('sfp').hidden=!$('sfp').hidden};
$('sfp').addEventListener('change',sfPush);$('sfp').addEventListener('input',e=>{if(e.target.id==='sfalo'||e.target.id==='sfuso')sfPush()});
['alg','alo','uso','gest'].forEach(id=>{const e=$(id);if(e)e.addEventListener(id==='alg'?'change':'input',()=>setTimeout(sfRefresh,30),true);if(e&&(id==='gest'||id==='alg'))e.addEventListener('change',()=>setTimeout(sfRefresh,30),true)});
sfRefresh();
/* ---- alertas de via e erros fatais ---- */
const VIA=[['Adrenalina 1 mg/mL (1:1000)','ANAFILAXIA: IM no vasto lateral, 0,01 mg/kg (peso ÷ 100 = mL). NUNCA EV nesta concentração. EV/IO só na PCR, diluída 1:10 (1 mL + 9 mL SF = 0,1 mg/mL), 0,01 mg/kg = peso ÷ 10 mL. Confira a ampola e a via em voz alta.'],['Penicilina benzatina','Somente IM profunda. NUNCA EV (parada cardíaca/morte).'],['Cloreto de potássio','Nunca em bolus nem puro. Diluir; máx. 40 mEq/L em veia periférica; velocidade controlada em bomba.'],['Fenitoína','Só EV, lenta (máx. 1 mg/kg/min ou 50 mg/min), com monitor. Não IM. Não diluir em SG nem junto com soluções com K.'],['Diazepam','Não fazer IM (absorção errática). EV puro e lento ou retal.'],['Gluconato de cálcio / glicose 25–50%','EV lento; extravasamento causa necrose; glicose > 12,5% só diluída em veia periférica.'],['Insulina','Sempre seringa de insulina (U-100); regular EV só em bomba; conferir unidades x mL.'],['Sulfato de magnésio, amiodarona, morfina, bicarbonato','Diluir e infundir no tempo indicado; morfina por EV em metade da dose, lenta.'],['Ceftriaxona IM','Diluir em lidocaína 1% sem vasoconstritor; nunca EV com lidocaína. Não administrar com cálcio EV em RN.'],['Lidocaína com vasoconstritor','Nunca EV.'],['Regra dos “certos”','Paciente certo, medicamento certo, DOSE certa, VIA certa, hora certa; ler o rótulo 3 vezes (pegar, preparar, aplicar); dupla checagem em alto risco; nunca preparar de memória; conferir concentração (mg/mL) e não só “1 ampola”.']];
SCALES.viaalto={n:'⚠ Medicamentos de alto risco: via e conferência',kw:'alto risco via erro adrenalina intramuscular endovenosa potássio benzatina insulina rótulo dupla checagem',ref:VIA};
/* ---- conferência pelo rótulo ---- */
function baseUnit(n){return /glicose/i.test(n)?'g':/bicarbonato/i.test(n)?'mEq':'mg'}
function perDoseMg(r,w){const[cat,n,ap,conc,lo,hi,mode,nd]=r,div=mode==='D'?nd:1;return{lo:w*lo/div,hi:w*hi/div}}
const ROUTES=['VO','IM','EV','IO','SC','Intranasal','Retal','Inalatória'];
T9('rotulo','\uD83D\uDD0D','Conferir pelo rótulo (dose x concentração)','rótulo concentração ampola frasco conferir dose volume adrenalina erro de dose via segurança dupla checagem',null,function(box,w){
 const opts=DR.map((r,i)=>'<option value="'+i+'">'+esc(r[1]+' — '+r[2])+'</option>').join('');
 const keep=['rlbd','rlam','rlun','rlvo','rlvia','rlmg','rlmx','rllo','rlhi','rlvol'].reduce((o,k)=>{const e=box.querySelector('#'+k);if(e)o[k]=e.value;return o},{});
 box.innerHTML='<div class="card"><b>\uD83D\uDD0D Conferir pelo rótulo</b><div class="fm" style="margin:4px 0 8px">Com a ampola/frasco na mão: informe o que está escrito no rótulo e o app diz quanto aspirar. Ele compara com a apresentação de referência e avisa se a concentração for diferente ou se a via estiver errada.</div>'+
 (w?'':'<div class="alrt">Informe o peso lá em cima antes de conferir.</div>')+
 '<label>Medicamento</label><select id="rlbd"><option value="">— escolha —</option>'+opts+'<option value="x">Outro (digitar dose por kg)</option></select><div id="rlx" hidden><div class="grid"><div><label>Dose mín (mg/kg)</label><input id="rllo" type="number" step="any" inputmode="decimal"></div><div><label>Dose máx (mg/kg)</label><input id="rlhi" type="number" step="any" inputmode="decimal"></div></div></div>'+
 '<label>Rótulo: quantidade</label><div class="grid"><div><input id="rlam" type="number" step="any" inputmode="decimal" placeholder="ex.: 1"></div><div><select id="rlun"><option>mg</option><option>mcg</option><option>g</option><option>mEq</option><option>% (p/v)</option></select></div></div>'+
 '<label>Rótulo: em quantos mL? (para % deixe 100 ou em branco)</label><input id="rlvo" type="number" step="any" inputmode="decimal" placeholder="ex.: 1 (ampola de 1 mL)">'+
 '<label>Via que pretende usar</label><select id="rlvia">'+ROUTES.map(r=>'<option>'+r+'</option>').join('')+'</select>'+
 '<label>Volume que pretende aplicar (mL) — opcional, para conferir</label><input id="rlmx" type="number" step="any" inputmode="decimal"></div><div id="rlo"></div>';
 Object.keys(keep).forEach(k=>{const e=box.querySelector('#'+k);if(e)e.value=keep[k]});
 const calc=()=>{
  const o=$('rlo'),b=$('rlbd').value;$('rlx').hidden=b!=='x';
  if(!w||b===''){o.innerHTML='';return}
  const am=parseFloat($('rlam').value),un=$('rlun').value,vo=parseFloat($('rlvo').value)||(un.startsWith('%')?100:NaN),via=$('rlvia').value,pl=parseFloat($('rlmx').value);
  let name,ref=null,lo,hi,base='mg',mx='',iv='',mac='',cref=0;
  if(b==='x'){const a=parseFloat($('rllo').value),c=parseFloat($('rlhi').value)||a;if(!(a>0)){o.innerHTML='<div class="card fm">Digite a dose mín/máx em mg/kg.</div>';return}name='Dose digitada';lo=w*a;hi=w*c}
  else{ref=DR[+b];name=ref[1];base=baseUnit(name);const d=perDoseMg(ref,w);lo=d.lo;hi=d.hi;mx=ref[9];iv=ref[8];mac=ref[10];cref=ref[3]}
  if(!(am>0)||!(vo>0)){o.innerHTML='<div class="card fm">Preencha o rótulo (quantidade e mL).</div>';return}
  let conc; // na unidade base por mL
  if(un.startsWith('%'))conc=base==='g'?am*0.01*(vo/100)/(vo/100):am*10;
  else{const f={mg:{mg:1,mcg:0.001,g:1000},g:{mg:0.001,mcg:1e-6,g:1},mEq:{mEq:1}}[base];if(!f||f[un]==null){o.innerHTML='<div class="alrt">Unidade do rótulo ('+un+') incompatível com a unidade deste medicamento ('+base+').</div>';return}conc=am*f[un]/vo}
  const U=base==='mEq'?'mEq':base;
  const fm=x=>x>=100?f0(x):x>=10?f1(x):x>=1?f2(x):String(Math.round(x*1000)/1000).replace('.',',');
  const mcg=(lo<0.5&&base==='mg'&&b!=='x'&&ref&&ref[4]<0.01),mcgF=mcg?1000:1,UU=mcg?'mcg':U;
  let h='<div class="card ul"><b>'+esc(name)+'</b>';
  h+='<div>Concentração do rótulo: <b>'+fm(conc)+' '+U+'/mL</b>'+(cref?' · referência do app: '+fm(cref)+' '+U+'/mL':'')+'</div>';
  if(cref&&Math.abs(conc/cref-1)>0.05)h+='<div class="alrt">⚠ O rótulo NÃO é a apresentação de referência (diferença de '+f1(conc/cref)+'×). Ignore o “macete” em mL e use só o volume calculado abaixo.</div>';
  const vlo=lo/conc,vhi=hi/conc;
  h+='<div>Dose para '+f1(w)+' kg: <b>'+fm(lo*mcgF)+(hi!==lo?'–'+fm(hi*mcgF):'')+' '+UU+'</b></div>';
  h+='<div class="alrt ok" style="font-size:15px">ASPIRAR: '+fm(vlo)+(hi!==lo?' a '+fm(vhi):'')+' mL</div>';
  if(mx)h+='<div>Máximo: '+esc(mx)+'</div>';if(iv)h+='<div>Via/intervalo/diluição: '+esc(iv)+'</div>';if(mac)h+='<div>Macete: '+esc(mac)+'</div>';
  if(b!=='x'){
   const rr=[...iv.matchAll(/\b(VO|IM|EV|IO|SC|retal|intranasal|inalat)/gi)].map(m=>m[1].toUpperCase());
   if(rr.length&&!rr.some(x=>x.startsWith(via.toUpperCase().slice(0,3))))h+='<div class="alrt">⚠ A via escolhida ('+via+') não está entre as vias indicadas ('+esc(iv)+'). Confira antes de aplicar.</div>';
   if(/Adrenalina IM/.test(name)&&via!=='IM')h+='<div class="alrt">\uD83D\uDEAB PARE: adrenalina 1 mg/mL na anafilaxia é INTRAMUSCULAR. Por EV só diluída 1:10 e apenas na PCR. Erro de via já causou mortes.</div>';
   if(/Adrenalina na RCP/.test(name)&&conc>0.11)h+='<div class="alrt">\uD83D\uDEAB PARE: a RCP usa adrenalina DILUÍDA 0,1 mg/mL (1 mL + 9 mL de SF). Sua concentração é '+fm(conc)+' mg/mL — dilua antes.</div>';
   if(/Fenitoína/.test(name)&&(via==='IM'))h+='<div class="alrt">\uD83D\uDEAB Fenitoína não pode ser IM.</div>';
   if(/Diazepam/.test(name)&&via==='IM')h+='<div class="alrt">\uD83D\uDEAB Diazepam não deve ser IM (absorção errática).</div>';
   if(/Penicilina/.test(name)&&via==='EV')h+='<div class="alrt">\uD83D\uDEAB Penicilina benzatina NUNCA por EV.</div>';
   if(/Ceftriaxona IM/.test(name)&&via==='EV')h+='<div class="alrt">\uD83D\uDEAB Ceftriaxona IM (diluída em lidocaína) não pode ir por EV.</div>';
  }
  if(pl>0){const mgG=pl*conc,mgkg=mgG/w,lk=lo/w,hk=hi/w;let st,cls;
   if(mgG>hi*1.05){st='ACIMA da dose máxima: '+f1(mgG/hi)+'× o limite superior';cls='alrt'}else if(mgG<lo*0.95){st='abaixo da faixa (subdose, '+f1(mgG/lo)+'× o limite inferior)';cls='alrt w'}else{st='dentro da faixa';cls='alrt ok'}
   h+='<div class="'+cls+'">Você vai aplicar '+fm(pl)+' mL = '+fm(mgG*mcgF)+' '+UU+' ('+fm(mgkg*mcgF)+' '+UU+'/kg) → '+st+' (faixa '+fm(lk*mcgF)+(hk!==lk?'–'+fm(hk*mcgF):'')+' '+UU+'/kg).</div>'}
  h+='<div class="fm">Faixa de referência; confirme com a prescrição médica e o protocolo do serviço. Dupla checagem: peça a um colega para ler o rótulo e a conta em voz alta.</div></div>';
  o.innerHTML=h;const sc=scan(o.innerText);if(sc.length)o.firstChild.insertAdjacentHTML('afterbegin',sc.slice(0,4).map(x=>'<div class="alrt'+(x.s<3?' w':'')+'">'+esc(x.m)+'</div>').join(''))};
 box.querySelectorAll('input,select').forEach(e=>{e.oninput=calc;e.onchange=calc});calc();
});
T9('via','⚠','Alto risco: via e conferência','alto risco via erro adrenalina intramuscular endovenosa potássio benzatina insulina rótulo dupla checagem',null,function(box,w){box.innerHTML='<div class="card"><b>⚠ Medicamentos de alto risco — via e conferência</b></div>'+VIA.map(v=>'<div class="card ul"><b>'+esc(v[0])+'</b><div>'+esc(v[1])+'</div></div>').join('')});
{const i=TOP.findIndex(t=>t.id==='rotulo');if(i>0){TOP.unshift(TOP.splice(i,1)[0]);const k=TOP.findIndex(t=>t.id==='via');TOP.splice(1,0,TOP.splice(k,1)[0])}}
/* ---- varredura de segurança em cada tela da aba Urgência ---- */
function annotate(){
 const body=$('ubody');let all=[];
 const S=sfState();
 if(!S.al.length)body.insertAdjacentHTML('afterbegin','<div class="alrt">⚠ ALERGIAS NÃO INFORMADAS — pergunte ao paciente/responsável antes de prescrever (toque na barra \uD83D\uDEE1 no topo).</div>');
 body.querySelectorAll('.card').forEach(c=>{if(c.querySelector('select,input'))return;const r=scan(c.innerText);if(!r.length)return;c.insertAdjacentHTML('afterbegin',r.slice(0,4).map(x=>'<div class="alrt'+(x.s<3?' w':'')+'">'+esc(x.m)+'</div>').join(''));all=all.concat(r)});
 if(all.some(x=>x.s>=3))body.insertAdjacentHTML('afterbegin','<div class="alrt">\uD83D\uDEAB Há conflito de segurança (alergia/gestação/interação) em itens abaixo — leia os avisos vermelhos antes de usar.</div>');
}

/* ---------- interface ---------- */
const sec=document.createElement('section');sec.id='t-ur';sec.hidden=true;
sec.innerHTML='<h2>\uD83D\uDE91 Guia rápido de urgências pediátricas</h2><div class="card"><div class="grid"><div><label>Peso (kg)</label><input id="upeso" type="number" step="0.1" min="0" inputmode="decimal"></div><div><label>Idade (anos)</label><input id="uidade" type="number" step="0.1" min="0" inputmode="decimal"></div></div><div class="fm" style="margin-top:6px">Doses calculadas pelo peso em tempo real. Cada tema traz a conduta de <b>hospital/PS</b> (soro, medicações, observação) e a <b>prescrição + orientações para casa</b>. Organizado a partir de diretrizes pediátricas nacionais e internacionais (SBP, Ministério da Saúde, OMS); confirme sempre com o protocolo do seu serviço.</div></div><div id="uchips" style="margin:8px 0"></div><div id="ubody"></div>';
const main=document.querySelector('main');main.insertBefore(sec,$('t-rx'));
const nav=document.querySelector('.tabbar'),btn=document.createElement('button');btn.dataset.t='t-ur';btn.innerHTML='<span>\uD83D\uDE91</span>Urgência';
const first=nav.querySelector('button[data-t="t-caso"]');nav.insertBefore(btn,first?first.nextSibling:nav.firstChild);btn.onclick=()=>showTab('t-ur');
const st9=document.createElement('style');st9.textContent='.uc{margin:4px 4px 0 0;padding:7px 11px;border-radius:99px;border:1px solid var(--bd);background:var(--in);color:var(--tx);font-size:13px;font-weight:500}.uc.on{background:var(--ac);color:#fff;border-color:var(--ac)}:root:not([data-theme="light"]) .uc.on{color:#06201c}.ul div{margin:4px 0}.ul .h3{font-weight:700;margin-top:10px}.ucp{margin-top:8px;padding:7px 12px;font-size:13px}';document.head.appendChild(st9);
function LSg(k){try{return localStorage.getItem(k)}catch(e){return null}}
function LSw(k,v){try{localStorage.setItem(k,v)}catch(e){}}
let cur9=LSg('ur9')||'rotulo';
function plain(a){return a.map(x=>x.replace(/^#/,'')).join('\n')}
function lines(a){return a.map(x=>x[0]==='#'?'<div class="h3">'+esc(x.slice(1))+'</div>':'<div>• '+esc(x)+'</div>').join('')}
function fb(t){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove()}
function draw9(keepChips){
 const w=parseFloat($('upeso').value)||0,ag=parseFloat($('uidade').value);
 $('uchips').innerHTML=TOP.map(t=>'<button type="button" class="uc'+(t.id===cur9?' on':'')+'" data-u="'+t.id+'">'+t.ic+' '+esc(t.n.split(' (')[0].split(' — ')[0])+'</button>').join('');
 $('uchips').querySelectorAll('[data-u]').forEach(b=>b.onclick=()=>{cur9=b.dataset.u;LSw('ur9',cur9);draw9()});
 const t=TOP.find(x=>x.id===cur9)||TOP[0];
 if(t.r9){t.r9($('ubody'),w);annotate();return}
 const o=t.fn(w||0,ag);
 $('ubody').innerHTML=(w?'':'<div class="card wn">'+need+'</div>')+
 '<div class="card ul"><b>\uD83C\uDFE5 Hospital / PS — conduta e prescrição</b>'+lines(o.h)+'<button type="button" class="ucp" data-cp="h">Copiar conduta do hospital</button></div>'+
 '<div class="card ul"><b>\uD83C\uDFE0 Casa — prescrição e orientações</b>'+lines(o.c)+'<button type="button" class="ucp" data-cp="c">Copiar orientações de casa</button>'+((o.rx||[]).filter(k=>P[k]).map(k=>'<button type="button" class="ucp" data-rx9="'+esc(k)+'">Abrir receita: '+esc(k)+'</button>').join(' '))+'</div>'+
 (o.r&&o.r.length?'<div class="card ul"><b>⚠ Retornar / procurar o PS se</b>'+o.r.map(x=>'<div>• '+esc(x)+'</div>').join('')+'<button type="button" class="ucp" data-cp="r">Copiar sinais de alerta</button></div>':'');
 annotate();
 $('ubody').querySelectorAll('[data-cp]').forEach(b=>b.onclick=()=>{const k=b.dataset.cp,txt=(k==='r'?'Retornar ao pronto-socorro se:\n'+o.r.map(x=>'- '+x).join('\n'):plain(o[k])),old=b.textContent;
  const done=()=>{b.textContent='Copiado ✓';setTimeout(()=>b.textContent=old,1400)};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(done,()=>{fb(txt);done()});else{fb(txt);done()}});
 $('ubody').querySelectorAll('[data-rx9]').forEach(b=>b.onclick=()=>{const k=b.dataset.rx9,pk=P[k],tp=pk.c&&!pk.a?'c':pk.a&&!pk.c?'a':'c';$('tipo').value=tp;$('tipo').dispatchEvent(new Event('change'));if($('peso')&&w)$('peso').value=w;$('pat').value=k;$('q').value=k;build();showTab('t-rx')});
}
window.__sp_b09_2={btn,draw9,nav};
})();
