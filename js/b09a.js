(function(){

const f1=x=>String(Math.round(x*10)/10).replace('.',','),f0=x=>String(Math.round(x)),f2=x=>String(Math.round(x*100)/100).replace('.',',');
const cl=(x,a,b)=>Math.max(a,Math.min(b,x));
const hol=w=>w<=10?100*w:w<=20?1000+50*(w-10):1500+20*(w-20);
const need='Informe o peso da criança acima para calcular as doses.';
const TOP=[];
const T9=(id,ic,n,kw,fn,r9)=>TOP.push({id,ic,n,kw,fn,r9});

T9('conv','⚡','Crise convulsiva','convulsão crise convulsiva status epilepticus febril midazolam diazepam fenitoína fenobarbital',(w,a)=>{
 const mid=Math.min(w*0.3,w<40?5:10),mid1=Math.min(w*0.1,w<40?5:10);
 return{h:[
 '#Primeiros minutos',
 'Posição de segurança, vias aéreas pérvias, O₂, monitor (SatO₂, FC), acesso venoso e glicemia capilar. Se glicemia < 60 mg/dL: SG 10% '+f1(w*2.5)+' mL EV (2,5 mL/kg) ou SG 25% '+f1(w*2)+'–'+f1(w*4)+' mL (2–4 mL/kg).',
 '#1ª linha (> 3 meses): benzodiazepínico — repetir em 5 min, máx. 3 doses; preparar para intubar a partir da 2ª dose',
 'Midazolam EV 0,1–0,3 mg/kg = '+f1(w*0.1)+'–'+f1(mid)+' mg (máx. '+(w<40?5:10)+' mg). Diluir 1 mL (5 mg) + 4 mL AD → 1 mg/mL: '+f1(mid1)+'–'+f1(mid)+' mL.',
 'Sem acesso: midazolam intranasal puro 0,2–0,3 mg/kg = '+f1(w*0.2)+'–'+f1(Math.min(w*0.3,7.5))+' mg ('+f2(w*0.2/5)+'–'+f2(Math.min(w*0.3,7.5)/5)+' mL da ampola 5 mg/mL, dividido nas duas narinas; máx. 7,5 mg). IM 0,2 mg/kg = '+f1(w*0.2)+' mg.',
 'Alternativa: diazepam EV 0,2–0,4 mg/kg = '+f1(w*0.2)+'–'+f1(Math.min(w*0.4,10))+' mg (ampola 10 mg/2 mL = 5 mg/mL → '+f1(w*0.2/5)+'–'+f1(Math.min(w*0.4,10)/5)+' mL), puro e lento, máx. 10 mg. Retal: 0,3–0,5 mg/kg = '+f1(w*0.3)+'–'+f1(Math.min(w*0.5,20))+' mg (RFOFOS chega a 1 mg/kg; UPA usa 0,3). Não usar IM.',
 '#Se persistir após benzodiazepínicos',
 'Fenitoína 20 mg/kg = '+f0(Math.min(w*20,1000))+' mg EV (máx. 1000 mg): ampola 50 mg/mL diluída 1:4 em SF → 10 mg/mL = '+f1(Math.min(w*2,100))+' mL em 20–30 min (máx. 50 mg/min). NÃO diluir em SG nem infundir junto com KCl/Ringer. Repetir 5 mg/kg até 30 mg/kg. Preferir em crise focal, tumor de SNC, TCE.',
 'Fenobarbital 20 mg/kg = '+f0(w*20)+' mg EV (ampola 100 mg/mL diluída 1:9 → 10 mg/mL = '+f1(w*2)+' mL) em 10 min; leva 15–20 min para agir. 1ª escolha em < 3 meses. Repetir 5–10 mg/kg (máx. total 30 mg/kg).',
 'Ordem em < 3 meses: fenobarbital → fenitoína → midazolam → tiopental.',
 'Refratário (> 30 min): midazolam contínuo 1–18 mcg/kg/min (iniciar 1 e subir a cada minuto) ou propofol/quetamina/tiopental em UTI.',
 'Manutenção (se indicada): fenobarbital 3–5 mg/kg/dia 1x/dia ('+f0(w*3)+'–'+f0(Math.min(w*5,300))+' mg/dia) ou fenitoína 5–10 mg/kg/dia 8/8h, iniciando 12 h após o ataque.',
 'Procurar causa em crise nova: glicemia, eletrólitos (Na, Ca, Mg), infecção de SNC, TCE, intoxicação. Observação mínima de 4 h após a crise (UPA); regulação para UTI/SAMU se refratária.'
 ],c:[
 '#Orientações de alta (crise febril simples ou primeira crise já resolvida)',
 'Durante nova crise: deitar a criança de lado, afrouxar roupas, não colocar nada na boca, não segurar os movimentos, cronometrar. Se durar mais de 5 minutos: SAMU 192 / ir ao pronto-socorro.',
 'Febre: antitérmico para conforto (dipirona ou paracetamol) — não previne novas convulsões febris.',
 'Crise febril simples (6 m–5 a, < 15 min, generalizada, 1x em 24 h): costuma ser benigna; explicar risco de recorrência (~30%).',
 'Encaminhar à neuropediatria se crise afebril, focal, > 15 min, déficit neurológico ou < 6 meses.'
 ],r:['Crise > 5 min ou repetida','Rebaixamento de consciência','Febre alta com vômitos, rigidez de nuca ou petéquias'],rx:[]}});

T9('asma','🫁','Crise de asma / broncoespasmo','asma crise broncoespasmo chiado salbutamol ipratrópio prednisolona magnésio sibilância',(w,a)=>{
 const j=cl(Math.round(w/3.5),2,10),ip=w<10?10:w<=20?20:40;
 return{h:[
 '#Conduta básica (RFOFOS/Albert Sabin 2026, André Ribeiro)',
 'O₂ se SatO₂ < 95%. Gravidade: leve (fala frases, SatO₂ > 95%), moderada (musculatura acessória, SatO₂ 90–94%), grave (fala entrecortada, SatO₂ < 90%), iminência de PCR (tórax silencioso, confusão).',
 'Salbutamol spray 100 mcg com espaçador: 1 jato/3–4 kg = '+j+' jatos (mín. 2, máx. 10) a cada 20 min por 3 doses; depois 1/1 h ou 2/2 h conforme melhora. Alternativa NBZ 0,5–1 mL (2,5–5 mg) em 2 mL SF.',
 'Brometo de ipratrópio (0,25 mg/mL) nas 3 primeiras horas: '+ip+' gotas/dose (< 10 kg: 10; 10–20 kg: 20; > 20 kg: 40) junto ao β2, a cada 20 min nas crises moderada/grave; ou spray 4–8 jatos.',
 'Corticoide precoce (idealmente < 1 h): prednisolona 1–2 mg/kg VO = '+f0(Math.min(w,60))+'–'+f0(Math.min(w*2,60))+' mg ('+f1(Math.min(w,60)/3)+'–'+f1(Math.min(w*2,60)/3)+' mL de solução 3 mg/mL; máx. 60 mg) ou dexametasona 0,6 mg/kg 1x = '+f1(Math.min(w*0.6,16))+' mg (máx. 16 mg).',
 'EV: metilprednisolona 1–2 mg/kg = '+f0(w)+'–'+f0(w*2)+' mg 6/6h, ou hidrocortisona 10 mg/kg ataque = '+f0(Math.min(w*10,200))+' mg e 4–6 mg/kg 6/6h.',
 '#Crise grave / sem resposta em 1–2 h',
 'Sulfato de magnésio 25–75 mg/kg (média 50) = '+f0(Math.min(w*25,2000))+'–'+f0(Math.min(w*75,2000))+' mg EV (máx. 2 g), a 2,5 mg/kg/min (~20 min). Macete (Mg 50%): peso × 0,1 mL = '+f1(Math.min(w*0.1,4))+' mL em 100 mL de SF.',
 'Terbutalina SC 0,01 mg/kg (máx. 0,4 mg) a cada 15–20 min por 3 doses = '+f2(Math.min(w*0.01,0.4))+' mg. Monitorar PA, FC, glicemia e K.',
 'Considerar UTI / ventilação não invasiva; evitar sedação. Radiografia só se suspeita de pneumonia/pneumotórax.',
 '#Alta da emergência',
 'Melhora sustentada, SatO₂ ≥ 94% em ar ambiente, β2 espaçado ≥ 4/4 h. Manter corticoide oral 5 dias (1 mg/kg/dia) e iniciar/ajustar medicação inalatória de manutenção (beclometasona).'
 ],c:[
 '#Receita para casa',
 'Aerolin (salbutamol) spray 100 mcg: '+(w?j+' jatos':'jatos por peso')+' com espaçador de 4/4h por 5 dias (modelo Thaíza), depois conforme necessidade (usar também em crise).',
 'Predsim/prednisolona 3 mg/mL: '+(w?f1(Math.min(w,60)/3)+' mL (1 mg/kg)':'1 mg/kg')+' 1x ao dia pela manhã por 5 dias.',
 'Lavagem nasal ao menos 6x/dia. Se asma persistente: beclometasona (Clenil HFA) conforme faixa etária por 3 meses, com reavaliação.',
 'Controle ambiental: evitar poeira, mofo, fumaça de cigarro, animais; lavar roupas de cama semanalmente.',
 'Reavaliação na UBS em 48–72 h e plano de ação escrito.'
 ],r:['Falta de ar com dificuldade de falar, tiragem intercostal ou lábios arroxeados','Salbutamol sem alívio por 4 h','Sonolência, exaustão, tórax "silencioso"'],rx:['Asma moderada — crise moderada','Asma grave — crise grave (PS)']}});

T9('crupe','🐕','Crupe / laringite (estridor)','crupe laringite estridor tosse rouca dexametasona adrenalina nebulização budesonida',(w,a)=>({h:[
 '#Conduta',
 'Manter a criança calma (no colo); evitar exame de orofaringe se suspeita de epiglotite. O₂ umidificado se SatO₂ < 94%. Classificar: Westley (ver Ferramentas).',
 'Dexametasona 0,15–0,6 mg/kg dose única VO/IM/EV = '+f1(Math.min(w*0.15,10))+'–'+f1(Math.min(w*0.6,10))+' mg (máx. 10 mg; 0,6 mg/kg nos casos moderados/graves). Macete (4 mg/mL): peso × 0,15 mL IM puro.',
 'Budesonida NBZ 2–4 mg (alternativa se não tolera VO).',
 'Estridor em repouso/moderado-grave: adrenalina 1:1000 (1 mg/mL) NBZ 0,5 mL/kg = '+f1(Math.min(w*0.5,5))+' mL (máx. 5 mL; André Ribeiro 0,3–0,5 mL/kg) diluída em SF até 3–5 mL; pode repetir. Observar ≥ 2–4 h após adrenalina (rebote).',
 'Internar se: estridor persistente em repouso após tratamento, hipoxemia, > 2 doses de adrenalina, toxemia, < 6 meses, dificuldade de retorno.'
 ],c:[
 'Dexametasona 0,15 mg/kg VO dose única ('+(w?f1(Math.min(w*0.15,10))+' mg':'por peso')+'), ou prednisolona 1 mg/kg/dia por 3 dias.',
 'Ambiente calmo, hidratação, antitérmico se febre. Evitar medicamentos para tosse.'
 ],r:['Estridor em repouso, tiragem, cianose','Salivação intensa com recusa de engolir (suspeitar epiglotite)','Sonolência ou prostração']}));

T9('anafi','🐝','Anafilaxia','anafilaxia alergia grave adrenalina choque anafilático urticária edema glote',(w,a)=>({h:[
 '#Conduta imediata (não atrasar a adrenalina)',
 'Adrenalina IM (1 mg/mL, sem diluir) 0,01 mg/kg = '+f2(Math.min(w*0.01,0.5))+' mg = '+f2(Math.min(w*0.01,0.5))+' mL no vasto lateral da coxa (macete: peso ÷ 100 mL). Máx. 0,5 mg (RFOFOS) — o e-book do Dr. Caíque usa 0,3 mg. Repetir a cada 5–15 min até 3x. Dose fixa: < 6 m 0,1–0,15 mg; 6 m–6 a 0,15 mg; 6–12 a 0,3 mg; > 12 a 0,5 mg.',
 'Deitar com pernas elevadas, O₂ 100%, 2 acessos, monitor. Cristaloide (SF/Ringer) 20 mL/kg = '+f0(w*20)+' mL em bolus se hipotensão, repetindo se necessário.',
 'Broncoespasmo: salbutamol spray/NBZ (ver Asma). Estridor: adrenalina NBZ.',
 'Adjuvantes (não substituem a adrenalina): anti-histamínico, corticoide — metilprednisolona 1–2 mg/kg = '+f0(w)+'–'+f0(w*2)+' mg EV ou prednisolona 1 mg/kg.',
 'Refratária: adrenalina em infusão contínua 0,05–1 mcg/kg/min em UTI.',
 'Observação: leve 4–6 h; grave ou ≥ 2 doses de adrenalina 12–24 h (risco de reação bifásica).'
 ],c:[
 'Prednisolona 1 mg/kg/dia por 3 dias e anti-histamínico (desloratadina ou hidroxizina) por 5–7 dias.',
 'Evitar o alérgeno suspeito; anotar o que a criança comeu/usou antes do quadro.',
 'Encaminhar ao alergologista; considerar adrenalina autoinjetável e plano de ação por escrito.'
 ],r:['Falta de ar, rouquidão, edema de lábios/língua','Tontura, palidez, desmaio','Vômitos repetidos com urticária']}));

T9('hipog','🍬','Hipoglicemia','hipoglicemia glicemia baixa glicose glucagon vig soro glicosado',(w,a)=>({h:[
 '#Conduta (< 60 mg/dL ou sintomas)',
 'Consciente e deglutindo: 15 g de carboidrato VO (suco, açúcar), repetir glicemia em 15 min.',
 'Inconsciente/convulsão: SG 25% 2–4 mL/kg = '+f0(w*2)+'–'+f0(w*4)+' mL EV (0,5–1 g/kg) — em veia periférica diluir a 12,5% — ou SG 10% 5 mL/kg = '+f0(w*5)+' mL. Sem acesso: glucagon IM '+(w<25?'0,5':'1')+' mg.',
 'Manutenção com VIG: SG 10% — mL/h = VIG × peso × 0,6. VIG 4: '+f1(4*w*0.6)+' mL/h; VIG 6: '+f1(6*w*0.6)+' mL/h; VIG 8: '+f1(8*w*0.6)+' mL/h (VIG usual 4–8 mg/kg/min; periférico até 12,5% de glicose).',
 'Glicemia de 1/1 h até estável. Buscar causa: jejum, infecção, insulina/sulfonilureia, erro inato do metabolismo, insuficiência adrenal (coletar glicemia, insulina, cortisol e cetonas antes da glicose se possível).'
 ],c:[
 'Reconhecer sintomas (suor, tremor, palidez, irritabilidade, sonolência) e oferecer açúcar/suco imediatamente; nada sólido se inconsciente.',
 'Fracionar a alimentação, não ficar longos períodos em jejum, principalmente com infecção/vômitos.',
 'Diabético em insulina: diário de glicemias e kit de glucagon quando prescrito.'
 ],r:['Sonolência, convulsão ou não acordar bem','Glicemia repetidamente < 70 mg/dL','Vômitos que impedem alimentação']}));

T9('gast','💧','Diarreia e desidratação (planos A, B, C)','diarreia vômitos desidratação gastroenterite sro soro reidratação oral zinco ondansetrona plano a b c geca',(w,a)=>({h:[
 '#Avaliar hidratação',
 'Plano A (sem desidratação): hidratar em casa. Plano B (sede, olhos fundos, turgor diminuído, irritado): SRO supervisionada. Plano C (letárgico, não bebe, pulsos fracos, turgor muito diminuído): EV.',
 'Plano B — SRO 50–100 mL/kg em 4–6 h = '+f0(w*50)+'–'+f0(w*100)+' mL, em pequenos volumes frequentes (colher/seringa); reavaliar a cada hora. Se vomitar, esperar 10 min e recomeçar mais devagar.',
 'Ondansetrona 0,1–0,15 mg/kg EV/VO = '+f1(Math.min(w*0.1,4))+'–'+f1(Math.min(w*0.15,4))+' mg (ampola 2 mg/mL: '+f2(Math.min(w*0.1,4)/2)+'–'+f2(Math.min(w*0.15,4)/2)+' mL; máx. 4 mg/dose), dose única antes da SRO se vomita muito.',
 'Plano C — fase rápida: SF 0,9% ou Ringer lactato 20 mL/kg = '+f0(w*20)+' mL EV em 20–30 min, repetindo até pulsos e perfusão normalizarem (MS: 100 mL/kg totais: 30 mL/kg em 30 min + 70 mL/kg em 2,5 h se ≥ 1 ano; 1 h + 5 h se < 12 meses).',
 'Depois: manutenção + reposição (Holliday-Segar: '+f0(hol(w))+' mL/dia = '+f1(hol(w)/24)+' mL/h) e iniciar SRO assim que possível. Dosar Na, K, glicemia, ureia/creatinina se grave.',
 'Internar se: Plano C, falha da SRO, vômitos incoercíveis, < 3 meses, doença de base, sinais de acidose/hipernatremia, família sem condições de retorno.'
 ],c:[
 '#Prescrição para casa (Plano A) — modelo Thaíza',
 'Soro de reidratação oral (Pedialyte/Hidralite) 2 sachês: 1 sachê em 1 litro de água; oferecer livremente após cada evacuação ou vômito (< 1 ano 50–100 mL; 1–10 anos 100–200 mL; > 10 anos à vontade). Descartar após 24 h.',
 'Ondansetrona (Vonau Flash 4 mg / Ondif 4 mg filme / Nautex gotas) de 8/8h se náuseas ou vômitos.',
 'Floratil 1 flaconete de 12/12h por 3 dias ou Provance 1 cp mastigável ao dia por 5 dias.',
 'Unizinco Kids 1x/dia por 14 dias (modelo Thaíza) — ou zinco elementar 10 mg/dia (< 6 meses) / 20 mg/dia (≥ 6 meses) por 10 dias (OMS/André Ribeiro).',
 'Dipirona gotas '+(w?f0(w*0.4)+' gotas':'(peso × 0,4 gotas)')+' de 6/6h se dor ou febre.',
 'Aumentar ingesta hídrica; alimentação normal, exceto comidas gordurosas; manter aleitamento.',
 'Se necessário: albendazol 40 mg/mL 10 mL hoje e repetir em 15 dias. Se infecciosa: azitromicina 200 mg/5 mL '+(w?f1(w/4)+' mL (peso ÷ 4)':'peso ÷ 4 mL')+' 1x/dia por 3 dias (modelo Thaíza usa 4 mL fixos), ou Bactrim F 12/12h por 7 dias.',
 'Sem antidiarreicos (loperamida). Antibiótico só se disenteria (sangue/muco com febre).'
 ],r:['Muita sede, olhos fundos, boca seca, sem urinar > 6 h','Vômitos repetidos que impedem tomar o soro','Sangue nas fezes, febre alta persistente, barriga muito dolorida','Sonolência, irritabilidade excessiva, recusa de líquidos'],rx:['Gastroenterite — sem sangue (hidratação + antiemético)','Gastroenterite — completa (SRO + zinco + probiótico)']}));

T9('hv','🩸','Hidratação venosa de manutenção (soro)','hidratação venosa manutenção holliday segar soro sg sf sgf potássio sódio tig vig hv',(w,a)=>{
 const v=hol(w),pc=v/100;
 return{h:[
 '#Volume (Holliday-Segar): '+f0(v)+' mL/dia = '+f1(v/24)+' mL/h',
 'Regra 4-2-1 (mL/h): 4 mL/kg nos primeiros 10 kg, 2 mL/kg nos 10 kg seguintes, 1 mL/kg acima de 20 kg.',
 'Eletrólitos/dia: Na⁺ 3 mEq/kg e K⁺ 2 mEq/kg (peso calórico = volume/100 = '+f1(pc)+').',
 'NaCl 20% (3,4 mEq/mL): '+f1(3*pc/3.4)+' mL/dia  ·  KCl 10% (1,34 mEq/mL): '+f1(2*pc/1.34)+' mL/dia (só após diurese; máx. 40 mEq/L em acesso periférico).',
 'Opção clássica: SGF 1:1 (SG 5% + SF 0,9% em partes iguais) com NaCl/KCl calculados, em 4 fases de 6 h.',
 'Opção isotônica (JPED/SPSP 2016 — reduz hiponatremia hospitalar): SF 0,9% com glicose ~5% (ex.: SF 0,9% 500 mL + SG 50% 50 mL) + KCl 10% (20 mEq/L ≈ 15 mL/L), sobretudo em doença aguda, pós-operatório, SNC, pulmonar.',
 'Para glicose exata (VIG/TIG) use a calculadora "Hidratação com TIG" em Ferramentas. Evitar hiperhidratação em bronquiolite, SIHAD, meningite, TCE.',
 'Monitorar peso, diurese, Na⁺ e glicemia a cada 12–24 h; reavaliar a necessidade da via EV diariamente.'
 ],c:['Retomar via oral assim que possível; oferecer líquidos fracionados.'],r:['Diurese diminuída, prostração, vômitos'],rx:[]}});

T9('bvia','👶','Bronquiolite viral aguda (lactente)','bronquiolite vsr lactente sibilância viral aspiração nasal oxigênio nirsevimabe',(w,a)=>({h:[
 '#Conduta (HMV / RFOFOS): suporte',
 'Lavagem nasal com SF 0,9% + aspiração das vias aéreas superiores; O₂ se SatO₂ < 92% persistente (RFOFOS: manter > 94%); cabeceira elevada.',
 'Hidratação/alimentação: fracionar a dieta; se não suporta VO, sonda ou SF 0,9% + glicose com volume de manutenção ('+f0(hol(w))+' mL/dia), evitando hiperhidratação.',
 'Não usar de rotina: broncodilatador, corticoide, solução salina 3%, fisioterapia respiratória, antibiótico.',
 'Internar se: apneia, FR > 60, SatO₂ < 92% persistente, < 3 meses (ou prematuro), desidratação/recusa alimentar, esforço respiratório, cardiopatia/doença pulmonar, família sem condições de observar.',
 'UTI: apneia recorrente, hipoxemia refratária, fadiga respiratória/acidose, necessidade de suporte ventilatório.',
 'Prevenção: nirsevimabe conforme indicações do PNI/serviço (prematuros e cardiopatas).'
 ],c:[
 'Lavagem nasal com SF 0,9% antes das mamadas e ao dormir; aspiração suave se necessário.',
 'Mamadas menores e mais frequentes; manter aleitamento; cabeceira elevada.',
 'Antitérmico (dipirona/paracetamol) apenas se febre/desconforto. Evitar fumaça de cigarro e aglomerações.',
 'Sem antibiótico nem xaropes. Reavaliar em 24–48 h; piora comum entre o 3º e 5º dia.'
 ],r:['Respiração rápida (> 60 irpm), tiragem, gemência','Cianose ou pausas respiratórias','Recusa de mamar ou poucas fraldas molhadas','Muito sonolento ou irritado']}));

function cadTxt(w,pct){
 const man=hol(w),def=w*10*pct,t48=(def+2*man)/48;
 return [
 'Critérios: glicemia > 200, pH < 7,3 e/ou HCO₃ < 15 e cetose. Leve (pH 7,2–<7,3 / HCO₃ 10–<15), moderada (7,1–<7,2 / 5–<10), grave (<7,1 / <5).',
 'Déficit estimado '+pct+'%: '+f0(def)+' mL. Manutenção Holliday: '+f0(man)+' mL/dia.',
 '1ª hora: 2 acessos + expansão 10–20 mL/kg = '+f0(w*10)+'–'+f0(w*20)+' mL de SF 0,9% ou Ringer lactato (RL evita acidose hiperclorêmica) em 30–60 min, reavaliando após cada bolus. Bicarbonato só se pH < 6,9.',
 'Reposição em 48 h: (déficit + 2 × manutenção) ÷ 48 = '+f0(t48)+' mL/h (inclui K e glicose).',
 'Potássio: K ≥ 5,5 não colocar e reavaliar em 1 h (checar diurese); 3,5–5,5 → 40 mEq/L na hidratação; < 3,5 → 0,5 mEq/kg/h por 1 h com monitor (máx. 60 mEq/L periférico) e adiar a insulina 1 h.',
 'Insulina regular 0,1 UI/kg/h = '+f1(w*0.1)+' UI/h (0,05 UI/kg/h = '+f2(w*0.05)+' UI/h se < 5 anos ou moderada), 1–2 h após a expansão e correção do K. Preparo: regular 50 UI + SF 0,9% 500 mL (1 mL = 0,1 UI) → 0,1 UI/kg/h = '+f1(w)+' mL/h ('+f1(w/2)+' mL/h para 0,05). Trocar solução a cada 6 h.',
 'Glicose: se glicemia < 250 acrescentar SG 5%; < 150, SG 10% (VIG 2,5–5 mg/kg/min) — nunca pare a insulina por glicemia baixa, aumente a glicose. Queda ideal 40–90 mg/dL/h.',
 'Monitorizar: glicemia e neurológico 1/1 h, balanço hídrico, gasometria/eletrólitos 2–4 h, cetonemia 2/2 h. Dieta zero.',
 'Edema cerebral (cefaleia, bradicardia, confusão): manitol 0,25–1 g/kg ('+f0(w*0.25)+'–'+f0(w)+' g) ou NaCl 3% 5–10 mL/kg ('+f0(w*5)+'–'+f0(w*10)+' mL), cabeceira elevada, reduzir fluidos.',
 'Resolução: pH > 7,3, HCO₃ > 18, glicemia < 200. 1 h antes de pausar a bomba: insulina regular IM 0,05–0,1 UI/kg ('+f2(w*0.05)+'–'+f1(w*0.1)+' UI); depois dieta.'
 ];
}
T9('cad','🧪','Cetoacidose diabética (CAD)','cetoacidose diabética cad insulina diabetes cetonemia hiperglicemia potássio bomba',(w,a)=>({h:[
 '#CAD moderada (7%) — ajuste o % no calculador "CAD pediátrica" em Ferramentas',
 ...cadTxt(w,7),
 '#Insulinoterapia de transição (após resolução)',
 'Dose total 0,3–0,5 UI/kg/dia (lactentes), 0,5–0,7 (crianças), 0,8–2 (púberes): metade NPH e metade regular/rápida (café, almoço, jantar). Fator de sensibilidade = 1500 ÷ dose diária (1800 para análogos). Com 0,7 UI/kg/dia: '+f0(w*0.7)+' UI/dia.'
 ],c:[
 '#Alta após CAD (diabetes novo ou descompensado)',
 'Educação da família: insulina (técnica, rodízio), automonitorização, reconhecer hipo/hiperglicemia, dia de doença (nunca suspender insulina; checar cetonas).',
 'Insulina NPH + regular/rápida conforme esquema; kit de glucagon; carboidrato 15 g para hipoglicemia.',
 'Encaminhar à endocrinopediatria em < 1 semana; nutrição; vacinação em dia.'
 ],r:['Sede intensa, urinar muito, hálito cetônico, dor abdominal, vômitos','Respiração rápida e profunda, sonolência','Glicemia > 250 com cetonas positivas']}));

T9('sepse','🔥','Sepse / choque séptico','sepse choque séptico bolus cristaloide antibiótico adrenalina vasoativa sirs febre',(w,a)=>({h:[
 '#Reconhecimento: SIRS + foco infeccioso presumido (Phoenix não é triagem). Antibiótico em até 1 h (choque) / 3 h (sepse); hemocultura antes, sem atrasar.',
 'Expansão: SF 0,9% ou Ringer lactato 10–20 mL/kg ('+f0(w*10)+'–'+f0(w*20)+' mL) em 5–20 min, reavaliando após cada bolus. Máx. 40 mL/kg ('+f0(w*40)+' mL) sem UTI; até 60 mL/kg ('+f0(w*60)+' mL) com UTI garantida. Parar se hepatomegalia, crepitações, esforço respiratório.',
 'Sem resposta: vasoativo precoce (pode ser periférico) — adrenalina 0,05–0,3 mcg/kg/min (choque frio) ou noradrenalina (choque quente). POCUS ajuda a distinguir o tipo de choque.',
 'Exames: culturas, lactato, gasometria, hemograma, PCR/procalcitonina, ureia, creatinina, TGO/TGP, bilirrubinas, coagulograma, glicemia, eletrólitos.',
 'Antibiótico empírico conforme foco/idade e protocolo local, ex.: ceftriaxona 100 mg/kg/dia ('+f0(Math.min(w*100,4000))+' mg/dia = '+f1(w)+' mL de reconstituição 100 mg/mL); acrescentar vancomicina 10 mg/kg 6/6h se pele/partes moles ou MRSA; < 1 mês: ampicilina + gentamicina. Controle do foco.',
 'Glicemia e cálcio ionizado; hidrocortisona se choque refratário a catecolamina. Meta: perfusão capilar ≤ 2 s, diurese > 1 mL/kg/h, PA adequada para a idade.'
 ],c:[
 'Febre sem foco em > 3 meses com bom estado geral: antitérmico, hidratação e retorno em 24–48 h.',
 'Febre em < 3 meses ou toxemia: sempre avaliar em hospital.'
 ],r:['Prostração, gemência, palidez/moteado, extremidades frias','Respiração rápida, sonolência','Manchas roxas na pele (petéquias)','Diurese reduzida']}));

T9('hipk','🧂','Hipercalemia e urgência dialítica','hipercalemia potássio gluconato cálcio insulina glicose salbutamol sorcal diálise aeiou',(w,a)=>({h:[
 '#Hipercalemia (fluxo UPA: emergência se sintomas/ECG alterado ou K > 6,5)',
 'Doses pediátricas de referência (o fluxo da UPA não traz doses): monitor cardíaco e ECG.',
 '1) Estabilizar a membrana: gluconato de cálcio 10% 0,5–1 mL/kg = '+f1(w*0.5)+'–'+f1(Math.min(w,20))+' mL EV em 5–10 min (máx. 20 mL); repetir em 5 min se persistir.',
 '2) Deslocar o K: insulina regular 0,1 UI/kg = '+f1(w*0.1)+' UI + glicose 0,5 g/kg (SG 25% 2 mL/kg = '+f0(w*2)+' mL), glicemia 1/1 h; e/ou salbutamol NBZ 2,5 mg (< 25 kg) ou 5 mg; bicarbonato 1–2 mEq/kg = '+f0(w)+'–'+f0(w*2)+' mEq se acidose.',
 '3) Eliminar: furosemida 1 mg/kg EV = '+f0(w)+' mg se diurese preservada; resina de troca (poliestirenossulfonato de cálcio) 1 g/kg VO/enema; diálise se refratário/anúrico.',
 '4) Suspender fontes de K (IECA, espironolactona, AINE, reposições) e tratar a causa. Reavaliar K em 1–2 h.',
 '#Urgência dialítica — AEIOU',
 'Acidose refratária (pH < 7,10) · Eletrólitos (K > 6,5 refratário) · Intoxicação dialisável (lítio, metanol, salicilato...) · Overload (sobrecarga volêmica refratária a diurético) · Uremia sintomática (pericardite, encefalopatia, sangramento).'
 ],c:['Hipercalemia leve (K < 5,5) assintomática: orientação alimentar (reduzir banana, laranja, tomate, batata, sal light), revisar medicações e repetir exame em 24–72 h.'],r:['Fraqueza muscular, palpitações, arritmia']}));
window.__sp_b09_0={T9,TOP,cadTxt,cl,f0,f1,f2,need};
})();
