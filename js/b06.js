
/* ===== Parte 6: emergência adulto (infusões padrão, alteplase, CAD, tabela de doses) ===== */
(function(){
const f=x=>String(Math.round(x*10)/10).replace('.',','),f2=x=>String(Math.round(x*100)/100).replace('.',',');
const AD=[
 {n:'Noradrenalina',pr:'16 mL (ampolas de 1 mg/mL) + 234 mL de SF 0,9% ou SG 5% = 250 mL (64 mcg/mL)',c:64,u:'mcg/kg/min',t:'kgmin',lo:0.05,hi:1.5},
 {n:'Adrenalina',pr:'6 mL (6 mg) + 100 mL de SG 5% ou SF 0,9% (≈ 57 mcg/mL; 1 mL/h ≈ 1 mcg/min)',c:6000/106,u:'mcg/kg/min',t:'kgmin',lo:0.05,hi:1},
 {n:'Dobutamina',pr:'1 ampola (250 mg/20 mL) + 230 mL de SG 5% = 250 mL (1.000 mcg/mL)',c:1000,u:'mcg/kg/min',t:'kgmin',lo:2.5,hi:20},
 {n:'Nitroprussiato de sódio',pr:'1 ampola (50 mg/2 mL) + 248 mL de SG 5% ou SF 0,9% = 250 mL (200 mcg/mL); proteger da luz',c:200,u:'mcg/kg/min',t:'kgmin',lo:0.5,hi:10},
 {n:'Nitroglicerina',pr:'1 ampola (50 mg/10 mL) + 240 mL de SF 0,9% ou SG 5% = 250 mL (200 mcg/mL)',c:200,u:'mcg/min',t:'min',lo:5,hi:200},
 {n:'Vasopressina',pr:'1 mL (20 UI) + 99 mL de SF 0,9% ou SG 5% = 100 mL (0,2 UI/mL)',c:0.2,u:'UI/min',t:'min',lo:0.01,hi:0.04},
 {n:'Midazolam',pr:'30 mL (150 mg) + 120 mL de SF 0,9% ou SG 5% = 150 mL (1 mg/mL)',c:1,u:'mg/kg/h',t:'kgh',lo:0.02,hi:0.2},
 {n:'Fentanil',pr:'20 mL (1.000 mcg) + 80 mL de SG 5% = 100 mL (10 mcg/mL)',c:10,u:'mcg/kg/h',t:'kgh',lo:1,hi:2},
 {n:'Dexmedetomidina',pr:'2 mL (200 mcg) + 48 mL de SF 0,9% = 50 mL (4 mcg/mL)',c:4,u:'mcg/kg/h',t:'kgh',lo:0.2,hi:1.5},
 {n:'Propofol',pr:'Sem diluição (10 mg/mL)',c:10,u:'mg/kg/h',t:'kgh',lo:0.5,hi:5},
 {n:'Cisatracúrio',pr:'25 mL (50 mg) + 25 mL de SF 0,9% ou SG 5% = 50 mL (1.000 mcg/mL)',c:1000,u:'mcg/kg/min',t:'kgmin',lo:1,hi:3,note:'Sem efeito sedativo ou analgésico: usar com sedação e analgesia.'}];
SCALES.infad={n:'Infusão contínua adulto: velocidade (mL/h) com diluição padrão',kw:'bomba de infusão adulto noradrenalina adrenalina dobutamina nitroprussiato nitroglicerina vasopressina midazolam fentanil dexmedetomidina propofol cisatracúrio diluição padrão ml/h',
 in:[['Droga (unidade da dose)',0,AD.map((d,i)=>[d.n+' ('+d.u+')',i])],['Dose desejada (na unidade da droga)'],['Peso (kg)']],
 fn:v=>{const d=AD[v[0]],dose=v[1],w=v[2];if(!(dose>0&&w>0))return 'Informe dose e peso positivos.';
  const r=d.t==='kgmin'?dose*w*60/d.c:d.t==='kgh'?dose*w/d.c:dose*60/d.c,wn=[];
  if(dose<d.lo||dose>d.hi)wn.push(`Dose fora da faixa usual (${d.lo} a ${d.hi} ${d.u}).`);
  return `<b>${d.n}</b><br>Preparo: ${d.pr}<br>Infundir <b>${f2(r)} mL/h</b> em bomba de infusão (${dose} ${d.u}${d.t==='min'?'':' × '+w+' kg'}).`+(d.note?`<div class="wn">⚠ ${d.note}</div>`:'')+(wn.length?`<div class="wn">⚠ ${wn.join(' ')}</div>`:'')+'<div class="fm">Confirme a concentração da sua ampola e o protocolo do serviço.</div>'}};
SCALES.altep={n:'Alteplase: doses por indicação e peso',kw:'alteplase actilyse trombolítico iam infarto avc isquêmico tromboembolismo pulmonar tep trombólise',
 in:[['Indicação',0,[['Infarto com supra de ST (regime acelerado)',0],['AVC isquêmico agudo',1],['Embolia pulmonar',2]]],['Peso (kg)']],
 fn:v=>{const w=v[1];if(!(w>0))return 'Informe o peso.';
  if(v[0]===0)return w>=65?'<b>≥ 65 kg:</b> bolus 15 mg IV (1–2 min) → 50 mg em 30 min → 35 mg em 60 min (total 100 mg).<div class="fm">Regime acelerado: início do tratamento em até 6 h dos sintomas.</div>':`<b>&lt; 65 kg:</b> bolus 15 mg IV (1–2 min) → <b>${f(Math.min(0.75*w,50))} mg</b> em 30 min (0,75 mg/kg, máx. 50) → <b>${f(Math.min(0.5*w,35))} mg</b> em 60 min (0,5 mg/kg, máx. 35).<div class="fm">Regime acelerado: início do tratamento em até 6 h dos sintomas.</div>`;
  if(v[0]===1){const t=Math.min(0.9*w,90);return `Total <b>${f(t)} mg</b> (0,9 mg/kg, máx. 90): bolus de <b>${f(t*0.1)} mg</b> em 1–2 min e o restante, <b>${f(t*0.9)} mg</b>, em 60 min.<div class="wn">⚠ Confirme os critérios de inclusão e exclusão e a janela terapêutica. Evitar heparina e AAS nas primeiras 24 h.</div>`}
  return `Total 100 mg em 2 h: bolus de 10 mg em 1–2 min + 90 mg em 120 min.`+(w<65?`<div class="wn">⚠ Peso < 65 kg: dose total máxima de ${f(1.5*w)} mg (1,5 mg/kg).</div>`:'')+'<div class="fm">Iniciar/retomar heparina quando o TTPa for menor que 2x o limite superior.</div>'}};
SCALES.cad={n:'Cetoacidose diabética: insulina regular em bomba',kw:'cetoacidose diabética cad insulina regular bomba 0,1 ui/kg/h glicemia',in:[['Peso (kg)']],
 fn:v=>{const w=v[0];if(!(w>0))return 'Informe o peso.';return `Preparo: 100 UI (1 mL) de insulina regular + 99 mL de SF 0,9% = 1 UI/mL.<br>Infundir <b>${f2(0.1*w)} mL/h</b> (0,1 UI/kg/h).<div class="fm">Só iniciar se K > 3,3 mEq/L. Glicemia capilar de 1/1 h; alvo: queda de 50 a 70 mg/dL por hora (se a queda for maior que 70, reduzir a taxa pela metade; se a glicemia cair abaixo de 50, aumentar). Suspender a bomba quando 2 de 3 critérios: pH &gt; 7,3, ânion gap &lt; 12, bicarbonato ≥ 15.</div>`}};
SCALES.emadu={n:'Emergência adulto: doses e diluições de referência',kw:'emergência adulto drogas doses diluições adenosina adrenalina amiodarona bicarbonato cálcio fenitoína fenobarbital furosemida haloperidol hidrocortisona lidocaína manitol metilprednisolona etomidato cetamina propofol succinilcolina rocurônio magnésio eclâmpsia potássio terlipressina octreotida oseltamivir glucagon',ref:[
 ['Adenosina (TSV estável)','6 mg IV em bolus rápido + flush de 20 mL de SF; se não reverter, 12 mg.'],
 ['Adrenalina','PCR: 1 mg IV a cada 3–5 min. Anafilaxia: 0,3 a 0,5 mg IM, repetir a cada 5 min.'],
 ['Amiodarona','PCR: 300 mg IV em bolus; 2ª dose 150 mg. Controle de ritmo: 150 mg em 100 mL de SG 5% em 10 min, depois 900 mg em 24 h.'],
 ['Bicarbonato de sódio 8,4%','PCR por acidose metabólica ou hiperpotassemia: 1 mL/kg IV. Reposição se pH < 7,15–7,2 em 4 a 8 h. Na cetoacidose tolera-se pH até 6,9.'],
 ['Cloreto de potássio 19,1% (ampola 10 mL = 25 mEq)','Acesso central: 2 ampolas em 100 mL, em 3 h. Acesso periférico: 2 ampolas em 500 mL, em no mínimo 3 h.'],
 ['Gluconato de cálcio 10%','Hiperpotassemia: 1 ampola (10 mL) diluída em 100 mL. Hipocalcemia leve: 1–2 g IV em 2 h.'],
 ['Dexmedetomidina','2 mL + 48 mL de SF (4 mcg/mL); 0,2 a 1,5 mcg/kg/h.'],
 ['Diazepam','0,2 a 0,5 mg/kg IV. Não usar em infusão contínua.'],
 ['Etomidato','0,3 mg/kg IV na intubação de sequência rápida. Não usar em infusão contínua.'],
 ['Cetamina (IOT)','Diluir 2 mL + 8 mL de SF (10 mg/mL).'],
 ['Propofol','IOT: 1,5 mg/kg. Manutenção: 0,5 a 5 mg/kg/h.'],
 ['Succinilcolina','1 a 2 mg/kg IV na IOT (em geral 100 mg).'],
 ['Rocurônio','IOT: 1 mg/kg IV (em geral 1 ampola).'],
 ['Fentanil (IOT/procedimentos)','1 a 2 mcg/kg IV.'],
 ['Midazolam','IOT: 10 a 15 mg IV. Agitação ou procedimento: 5 mg IM. Manutenção: 0,02 a 0,2 mg/kg/h.'],
 ['Fenitoína','Ataque: 20 mL (1 g) em 250 mL de SF em 30 min, sem passar de 50 mg/min. Manutenção: 100 mg IV de 6/6 ou 8/8 h.'],
 ['Fenobarbital','Após falha de benzodiazepínico e fenitoína: 15 a 18 mg/kg IV a 25–60 mg/min, repetir em 20 min se necessário; máx. 30 mg/kg.'],
 ['Furosemida','0,5 a 1 mg/kg IV em bolus (IC descompensada, EAP, crise hipertensiva, hipercalemia); máx. 160–200 mg/dose.'],
 ['Haloperidol','Agitação: 2,5 a 10 mg IM a cada 15 min (até 3 vezes). Náuseas refratárias: 1 mg IV de 8/8 h.'],
 ['Hidrocortisona','Asma ou DPOC exacerbada: 100 mg IV de 8/8 h por 5 dias. Choque séptico refratário: 50 mg IV de 6/6 h.'],
 ['Metilprednisolona','Anafilaxia: 125 mg IV. Asma/DPOC: 1 mg/kg/dia por 5 dias.'],
 ['Difenidramina','50 mg IV de 6/6 h na anafilaxia.'],
 ['Lidocaína','1,5 mg/kg IV (IOT de sequência rápida, arritmias graves, PCR).'],
 ['Manitol 20%','250 mL IV rápido na hipertensão intracraniana.'],
 ['Sulfato de magnésio','Asma: 2 g IV em 20 min. Pré-eclâmpsia/eclâmpsia: 4 g IV em 20 min e manter 1 a 2 g/h. Torsades: 2 g IV em bolus.'],
 ['Glucagon','1 ampola IM na hipoglicemia grave sem acesso venoso nem condição de ingerir glicose.'],
 ['Octreotida (HDA varicosa)','25 a 50 mcg/h em bomba por 5 dias.'],
 ['Terlipressina (HDA varicosa)','1 a 2 mg IV em bolus, repetir 1 a 2 mg a cada 4 h por 48 h.'],
 ['Oseltamivir','75 mg VO de 12/12 h por 5 dias; se TFG < 30 mL/min, 75 mg uma vez ao dia.'],
 ['Carvão ativado','1 g/kg por SNG (máx. 50 g), se ingestão potencialmente fatal em até 1 h.'],
 ['Hemocomponentes','Hemácias: infundir em 2–3 h (máx. 4 h). Plasma: 10–15 mL/kg. Crioprecipitado: 1 UI para cada 10 kg. Plaquetas: infundir em ~30 min.']]};
try{scList()}catch(e){}
})();
