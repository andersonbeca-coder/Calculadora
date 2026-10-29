
/* ===== Parte 3: gestante (queixas frequentes), infusão contínua, drogas de emergência, pré-natal ===== */
(function(){
/* --- protocolos de gestante (adulto) --- */
const add=(k,kw,o)=>{NP(k,kw,o);const s=$('pat');if(s&&![...s.options].some(x=>x.value===k))s.add(new Option(k,k))};
add("Gestante — náuseas e vômitos","gestante gravidez náuseas vômitos enjoo hiperêmese primeiro trimestre",{a:[
 T("Dimenidrinato + piridoxina","comprimido 50 mg (+ piridoxina 10 mg)",50,1,8,5,10,{sos:"náuseas",nt:"Máximo de 3 comprimidos ao dia"}),
 T("Meclizina","comprimido 25 mg",25,1,8,5,20,{sos:"náuseas",off:1}),
 T("Metoclopramida","comprimido 10 mg",10,1,8,5,20,{sos:"náuseas",off:1}),
 T("Prometazina","comprimido 25 mg",25,1,24,5,10,{sos:"náuseas",off:1,nt:"À noite; pode repetir pela manhã se necessário"})],
 nt:["Orientar: fracionar as refeições, evitar jejum prolongado, comer alimento seco ao acordar e evitar gordura e cheiros fortes.","Vômitos incoercíveis, perda de peso, desidratação ou cetonúria: avaliar internação."]});
add("Gestante — pirose / refluxo","gestante gravidez azia pirose refluxo queimação estômago segundo terceiro trimestre",{a:[
 T("Bromoprida","comprimido 10 mg",10,1,8,5,20,{sos:"azia"}),
 X("Antiácido (hidróxido de alumínio + magnésio + simeticona)","suspensão oral","Tomar 10 a 20 mL VO após as refeições e ao deitar, se azia.",{hd:"1 frasco"})],
 nt:["Orientar: elevar a cabeceira, evitar refeições volumosas, gordura, frituras, café e chocolate."]});
add("Gestante — cefaleia","gestante gravidez dor de cabeça cefaleia",{a:[
 T("Paracetamol","comprimido 500 mg",500,1,4,3,20,{sos:"dor",nt:"Máximo de 6 comprimidos ao dia"})],
 nt:["Sempre medir a PA: se ≥ 140x90, escotomas ou dor epigástrica, descartar pré-eclâmpsia (encaminhar à maternidade)."]});
add("Gestante — constipação e cólica intestinal","gestante gravidez constipação intestino preso prisão de ventre gases cólica",{a:[
 T("Hioscina","comprimido 10 mg",10,1,8,3,20,{sos:"cólica"}),
 T("Dimeticona","comprimido 40 mg",40,1,6,5,20,{sos:"gases",nt:"40 a 80 mg por dose"}),
 X("Supositório de glicerina","supositório","1 supositório via retal em dose única, se não evacuar após as medidas dietéticas.",{hd:"1 supositório"})],
 nt:["Orientar: aumentar água e fibras (frutas, verduras, cereais integrais) e fazer atividade física leve."]});
add("Gestante — cãibras","gestante gravidez cãibra câimbra perna",{a:[
 X("Magnésio quelato","comprimido","100 mg pela manhã e 200 mg à noite, se as cãibras forem frequentes e persistentes.",{hd:"conforme apresentação"})],
 nt:["Orientar: alongamento, hidratação, caminhadas leves e evitar longos períodos em pé."]});
add("Gestante — hemorroidas e varizes","gestante gravidez hemorroida varizes pernas dor ao evacuar",{a:[
 X("Pomada de policresuleno + cinchocaína (Proctyl)","pomada retal","Aplicar via retal de 8/8 horas, após evacuar e antes de dormir.",{hd:"1 bisnaga"}),
 X("Creme de cumarina + heparina (Venalot H)","creme","Aplicar fina camada nas pernas de 8/8 horas, principalmente antes de dormir (varizes).",{hd:"1 bisnaga",off:1})],
 nt:["Tratar a constipação, higiene local, elevar as pernas e usar meias de compressão."]});
add("Gestante — infecção urinária (cistite)","gestante gravidez itu infecção urinária cistite ardência urinar bacteriúria",{a:[
 T("Nitrofurantoína","cápsula 100 mg",100,1,6,7,28,{nt:"Evitar no fim da gestação (risco de hemólise neonatal)"}),
 T("Amoxicilina + clavulanato","comprimido 500 + 125 mg",500,1,8,7,21,{off:1,nt:"7 a 10 dias"}),
 T("Cefalexina","comprimido 500 mg",500,1,6,10,40,{off:1}),
 T("Cefuroxima","comprimido 250 mg",250,1,12,7,14,{off:1,nt:"7 a 10 dias; de preferência após o antibiograma"})],
 nt:["Colher urina tipo 1 e urocultura; febre ou dor lombar: pensar em pielonefrite (encaminhar)."]});
add("Gestante — suplementação do pré-natal","gestante gravidez pré-natal ácido fólico ferro cálcio vitamina suplementação",{a:[
 X("Ácido fólico","comprimido 400 mcg","1 comprimido VO 1x ao dia, o mais cedo possível, até a 12ª semana (prevenção de defeitos do tubo neural).",{hd:"conforme semanas"}),
 X("Sulfato ferroso 40 mg de ferro elementar","comprimido","1 comprimido VO após o almoço, a partir da 20ª semana (antes, se anemia), até 3 meses após o parto.",{hd:"conforme duração"}),
 X("Carbonato de cálcio 1.250 mg (500 mg de cálcio elementar)","comprimido","1 comprimido VO 2x ao dia (manhã e noite), com intervalo mínimo de 2 horas do ferro.",{hd:"conforme duração"})],
 nt:["As fontes divergem no início do cálcio (12ª ou 20ª semana): siga o protocolo local.","Prevenção de pré-eclâmpsia: cálcio; anemia: ferro."]});
FAM.push([/^Gestante — /,'gest']);
CL.gest={q:["Idade gestacional (DUM/USG)? Está fazendo pré-natal?","Sangramento, perda de líquido ou contrações?","Movimentos fetais presentes?","PA atual? Cefaleia forte, escotomas, dor epigástrica ou inchaço súbito?","Alergias e medicações em uso?"],
 or:["Use apenas o que foi prescrito e evite automedicação.","Mantenha o pré-natal e as vacinas em dia.","Procure a maternidade se tiver sangramento, perda de líquido, contrações, redução dos movimentos do bebê, febre, dor de cabeça forte com visão turva ou inchaço súbito."]};

/* --- calculadoras e tabelas --- */
const ID=[
 {n:'Adrenalina',u:'mcg/kg/min',c:1000,per:'min',lo:0.05,hi:1,dil:'SF 0,9%',pr:'ampola 1 mg/mL'},
 {n:'Noradrenalina',u:'mcg/kg/min',c:1000,per:'min',lo:0.05,hi:2,dil:'SG 5% ou SF 0,9% (conforme protocolo)',pr:'ampola 1 mg/mL'},
 {n:'Dopamina',u:'mcg/kg/min',c:5000,per:'min',lo:2,hi:20,dil:'SF 0,9%',pr:'ampola 5 mg/mL'},
 {n:'Dobutamina',u:'mcg/kg/min',c:12500,per:'min',lo:2,hi:20,dil:'SF 0,9%',pr:'ampola 12,5 mg/mL'},
 {n:'Milrinona',u:'mcg/kg/min',c:1000,per:'min',lo:0.1,hi:1,dil:'SF 0,9%',pr:'ampola 1 mg/mL'},
 {n:'Nitroprussiato de sódio',u:'mcg/kg/min',c:25000,per:'min',lo:0.3,hi:10,dil:'SG 5%',pr:'ampola 25 mg/mL',note:'Proteger da luz (equipo fotoprotetor); risco de toxicidade por cianeto em doses altas ou uso prolongado.'},
 {n:'Vasopressina',u:'UI/kg/h',c:20,per:'h',lo:0.01,hi:0.6,dil:'SF 0,9%',pr:'ampola 20 UI/mL'},
 {n:'Fentanil',u:'mcg/kg/h',c:50,per:'h',lo:1,hi:5,dil:'SF 0,9%',pr:'ampola 50 mcg/mL'},
 {n:'Midazolam',u:'mg/kg/h',c:5,per:'h',lo:0.06,hi:0.6,dil:'SF 0,9%',pr:'ampola 5 mg/mL',max:15,maxu:'mg/h'},
 {n:'Rocurônio',u:'mcg/kg/min',c:10000,per:'min',lo:5,hi:12,dil:'SF 0,9%',pr:'ampola 10 mg/mL',note:'Não sedativo nem analgésico: usar sempre com sedação e analgesia, em ventilação mecânica.'}];
const f1=x=>x<1?(Math.round(x*100)/100):(Math.round(x*10)/10);
const fs=x=>String(f1(x)).replace('.',',');
SCALES.inf24={n:'Infusão contínua pediátrica (seringa de 24 h): preparo e velocidade',kw:'infusão contínua pediátrica seringa bic vasoativa sedação adrenalina noradrenalina dopamina dobutamina milrinona nitroprussiato vasopressina fentanil midazolam rocurônio 1,44 diluição criança',
 in:[['Droga (unidade da dose)',0,ID.map((d,i)=>[d.n+' ('+d.u+')',i])],['Dose desejada (na unidade da droga escolhida)'],['Peso (kg)'],['Volume final da seringa',0,[['24 mL (infundir 1 mL/h)',24],['48 mL (infundir 2 mL/h)',48],['72 mL (infundir 3 mL/h)',72]]]],
 fn:v=>{const d=ID[v[0]],dose=v[1],w=v[2],V=v[3];if(!(dose>0&&w>0))return 'Informe dose e peso positivos.';
  const tot=dose*w*(d.per==='min'?1440:24),ml=tot/d.c,r=f1(ml),dil=V-r;
  if(dil<0)return `<span class="wn">Volume do fármaco (${fs(ml)} mL) maior que a seringa: escolha 48 ou 72 mL.</span>`;
  const real=r*d.c/24/w/(d.per==='min'?60:1),rate=V/24,w2=[];
  if(dose<d.lo||dose>d.hi)w2.push(`Dose fora da faixa usual (${d.lo} a ${d.hi} ${d.u}).`);
  if(d.max&&dose*w>d.max)w2.push(`Passa do máximo de ${d.max} ${d.maxu}.`);
  return `<b>${d.n}</b> (${d.pr}) — ${fs(ml)} mL ≈ <b>${fs(r)} mL</b><br>${d.dil}: <b>${fs(dil)} mL</b> → total ${V} mL<br>Infundir <b>${rate} mL/h</b> em bomba de infusão contínua (dura 24 h).<br>Nesta solução: 1 mL/h = ${fs(real/rate)} ${d.u} (dose real após arredondar: ${fs(real)} ${d.u}).`+(d.note?`<div class="wn">⚠ ${d.note}</div>`:'')+(w2.length?`<div class="wn">⚠ ${w2.join(' ')}</div>`:'')+'<div class="fm">'+(v[0]<=6?'Vasoativos: preferir acesso central e monitorização contínua. ':'Monitorização contínua. ')+'Conferir com o protocolo do serviço.</div>'}};
const EM=[
 ['Adrenalina — parada (1:10.000: 1 mL + 9 mL SF)',w=>fs(w*0.1)+' mL EV/IO','0,01 mg/kg; repetir a cada 3–5 min'],
 ['Adrenalina pura 1 mg/mL — anafilaxia IM',w=>fs(Math.min(w*0.01,0.5))+' mL IM','0,01 mg/kg; máx. 0,5 mL'],
 ['Atropina 0,25 mg/mL',w=>fs(w*0.08)+' mL EV','0,02 mg/kg (dose única máx. 0,5 mg); com 0,5 mg/mL use metade do volume'],
 ['Diazepam 10 mg/2 mL — convulsão',w=>fs(w*0.04)+' a '+fs(w*0.06)+' mL EV (diluir no dobro de SF)','0,2 a 0,3 mg/kg (as fontes divergem); máx. 10 mg por dose; repetir a cada 5 min, até 3 vezes (máx. 20 mg)'],
 ['Midazolam 5 mg/mL — convulsão IM (sem acesso)',w=>fs(w*0.03)+' a '+fs(w*0.04)+' mL IM','Fontes: 0,03 mL/kg (0,15 mg/kg) ou 0,04 mL/kg (0,2 mg/kg)'],
 ['Fenitoína 50 mg/mL — convulsão > 15 min',w=>fs(w*0.4)+' mL (diluir no dobro de SF)','20 mg/kg; infundir lento (máx. 1 mg/kg/min) com monitorização'],
 ['Fenobarbital 100 mg/mL',w=>fs(w*0.2)+' mL IM/EV lento','20 mg/kg; 1ª escolha no neonato'],
 ['Cetamina 50 mg/mL',w=>fs(w*0.04)+' mL EV','2 mg/kg'],
 ['Flumazenil 0,1 mg/mL',w=>fs(w*0.1)+' mL EV','0,01 mg/kg'],
 ['Naloxona 0,4 mg/mL',w=>fs(w*0.25)+' mL EV','0,1 mg/kg'],
 ['Morfina 10 mg/mL (diluída)',w=>fs(w*0.01)+' mL EV lento','0,1 mg/kg'],
 ['Sulfato de magnésio 50% — asma grave refratária',w=>fs(w*0.1)+' mL em 100 mL SF, EV em 30 min','50 mg/kg; monitorizar PA (hipotensão)'],
 ['Dexametasona 4 mg/mL — crupe',w=>fs(w/10)+' mL IM','Se não houver, usar hidrocortisona'],
 ['Adrenalina pura 1:1.000 — crupe grave (inalatória)',w=>fs(Math.min(w/2,5))+' mL em nebulização','Máx. 5 mL'],
 ['Salbutamol spray 100 mcg/jato — crise de asma',w=>Math.min(8,Math.max(1,Math.round(w/3)))+' jato(s) com espaçador','3 séries, a cada 20 min; máx. 8 jatos'],
 ['Dipirona 500 mg/mL',w=>fs(w*0.03)+' mL IM ou EV diluído','15 mg/kg'],
 ['Adenosina — TSV (aplicação rápida)',w=>fs(Math.min(w*0.1,6))+' mg EV rápido; 2ª dose '+fs(Math.min(w*0.2,12))+' mg','0,1 mg/kg (máx. 6 mg); 2ª dose 0,2 mg/kg (máx. 12 mg)'],
 ['Amiodarona — TV/FV/TSV',w=>fs(Math.min(w*5,300))+' mg EV','5 mg/kg (máx. 300 mg); com pulso, infundir em 20–60 min'],
 ['Desfibrilação / cardioversão',w=>fs(w*2)+' J (1º choque) · '+fs(w*4)+' J (2º)','Desfibrilação 2 J/kg, depois 4 J/kg; cardioversão sincronizada 0,5–1 J/kg, depois 2 J/kg'],
 ['Bolus de cristaloide — choque',w=>fs(w*20)+' mL EV','20 mL/kg; reavaliar a cada bolus; se persistir após 60 mL/kg, considerar vasoativo']];
SCALES.emerg={n:'Drogas de emergência pediátrica: volume por peso',kw:'emergência pediátrica drogas dose por peso adrenalina atropina diazepam midazolam fenitoína fenobarbital cetamina naloxona flumazenil morfina magnésio crupe convulsão parada anafilaxia criança',
 in:[['Peso da criança (kg)']],
 fn:v=>{const w=v[0];if(!(w>0))return 'Informe o peso.';
  return (w>40?'<div class="wn">⚠ Acima de 40 kg: usar doses de adulto.</div>':'')+'<table class="md" style="width:100%"><tr><th align="left">Droga</th><th align="left">Dose</th></tr>'+EM.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1](w)}<div class="fm">${r[2]}</div></td></tr>`).join('')+'</table><div class="fm">Valores calculados a partir dos guias de emergência pediátrica fornecidos. Confira sempre a apresentação disponível e o protocolo local.</div>'}};
SCALES.prenat={n:'Pré-natal: roteiro por trimestre e alertas (APS)',kw:'pré-natal gestação gestante primeira consulta exames morfológica rh coombs anti-d tótg dtpa movimentos fetais afu hipertensão',ref:[
 ['1ª consulta (idealmente antes de 12 semanas)','Testes rápidos (sífilis, HIV, hepatites B e C) e exames do 1º trimestre; USG transvaginal obstétrica para datar a IG (7 a 10 semanas, ideal até 13); suplementação; orientar vacinas, repelente, consulta odontológica e maternidade de referência; retorno mensal.'],
 ['Ultrassons','Morfológica de 1º trimestre (translucência nucal): 11ª a 13ª semana · Morfológica de 2º trimestre: 20ª a 24ª semana · Ecocardiograma fetal com Doppler: 24ª a 28ª semana.'],
 ['2º trimestre (14 a 27 semanas)','TOTG 75 g entre 24 e 28 semanas; dTpa após 20 semanas; sintomáticos se necessário; retorno mensal.'],
 ['Suplementação','Ácido fólico 400 mcg até a 12ª semana · Sulfato ferroso 40 mg de ferro elementar a partir da 20ª semana · Carbonato de cálcio 1.250 mg 2x/dia (início na 12ª ou 20ª semana: fontes divergem).'],
 ['Rh negativo','Tipagem e Coombs indireto na 1ª consulta. Parceiro Rh+ ou desconhecido: repetir Coombs mensal até 28 semanas e quinzenal depois. Imunoglobulina anti-D 300 mcg IM entre 28 e 34 semanas e até 72 h após o parto (RN Rh+) ou após aborto, sangramento ou procedimento invasivo. Coombs > 1:16: encaminhar ao alto risco.'],
 ['Hipertensão','PA ≥ 140x90 em 3 ou mais avaliações, em dias diferentes: acompanhar no alto risco. Cefaleia com escotomas, dor epigástrica ou edema súbito: descartar pré-eclâmpsia.'],
 ['Altura uterina','Diferença > 3 cm da IG, ou abaixo do P10 / acima do P90: pedir USG obstétrica.'],
 ['Movimentos fetais','Menos de 10 movimentos em 2 horas (> 20 semanas) ou menos de 10 em 24 horas (30 a 40 semanas): avaliar BCF e encaminhar à maternidade.']]};
SCALES.gesesp={n:'Gestação: situações especiais (APS)',kw:'gravidez ectópica aborto abortamento mola hidatiforme interrupção legal violência sexual sangramento gestação',ref:[
 ['Gravidez ectópica','Suspeitar com dor pélvica unilateral + sangramento escuro + atraso menstrual. Pedir BHCG quantitativo se disponível e encaminhar imediatamente ao hospital; não esperar USG se o quadro for sugestivo.'],
 ['Abortamento incompleto','Sangramento persistente, cólica e eliminação parcial de conteúdo. Avaliar sinais vitais, exame especular se capacitado, analgesia e encaminhar à referência para esvaziamento uterino.'],
 ['Abortamento retido','Sem sintomas gestacionais ou regressão do útero. Pedir USG obstétrica e encaminhar para definir conduta (expectante, medicamentosa ou cirúrgica); acolher a paciente.'],
 ['Mola hidatiforme','Náuseas intensas, sangramento escuro, útero maior que a IG, ausência de BCF. BHCG quantitativo e USG; encaminhar com urgência à maternidade de referência; contracepção por 6 a 12 meses após o tratamento.'],
 ['Interrupção legal da gestação','Violência sexual, risco à vida da gestante ou anencefalia confirmada. Acolhimento sigiloso, notificação (SINAN), sem exigir boletim de ocorrência ou autorização judicial; encaminhar à maternidade de referência.']]};
try{scList()}catch(e){}
})();
