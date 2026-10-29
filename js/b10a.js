(function(){

const mk=(k,kw,o)=>{NP(k,kw,o);const s=$('pat');if(s&&![...s.options].some(x=>x.value===k))s.add(new Option(k,k))};
const f1=x=>String(Math.round(x*10)/10).replace('.',','),f0=x=>String(Math.round(x));
const F='(PS Zerado, conferir o protocolo local)';
const E=(n,f,t,o)=>X(n,f,t,o||{});
/* ---------- CARDIOLOGIA ---------- */
mk('PS adulto — Taquicardia supraventricular (estável)','tsv taquicardia supraventricular adenosina metoprolol',{a:[
E('Adenosina 6 mg/2 mL','EV rápido','1 amp. (6 mg) EV em bolus RÁPIDO na fossa cubital, seguida de flush de 20 mL de SF 0,9% e elevação do membro. Sem resposta: 12 mg (2 amp.). Evitar em doença pulmonar descompensada; não repetir se houve bloqueio AV. Pode causar assistolia/FV transitória: monitor e desfibrilador à mão.'),
E('Metoprolol 5 mg/5 mL (opção)','EV lento','2,5–5 mg EV a 1 mg/min; repetir até controlar, máx. 15 mg (3 amp.).',{off:1}),
E('Se instável','cardioversão','Hipotensão/choque, rebaixamento, dor anginosa ou dispneia cardíaca: cardioversão elétrica sincronizada, não medicação.')],
nt:['Tentar manobras vagais antes do fármaco. '+F]});
mk('PS adulto — Taquicardia ventricular (estável)','tv taquicardia ventricular amiodarona lidocaína',{a:[
E('Amiodarona 150 mg/3 mL — ataque','EV em 30 min','1 amp. (150 mg) em 100 mL de SG 5%, correr em 30 min.'),
E('Amiodarona — manutenção','BIC 24 h','3 amp. (450 mg) em 230 mL de SG 5%: 16 mL/h nas primeiras 6 h e 8 mL/h nas 18 h seguintes. Suspender se surgir bloqueio AV.'),
E('Lidocaína 2% (se falha)','EV lento','1,5 mg/kg EV lento; se falha, repetir 0,5 mg/kg. Máx. 3–4 mg/kg.',{off:1}),
E('Se instável','cardioversão','Cardioversão elétrica sincronizada (sem pulso: seguir protocolo de PCR).')],
nt:['Metoprolol VO 25 mg/dia, subindo até 100–200 mg/dia, é manutenção ambulatorial. '+F]});
mk('PS adulto — Fibrilação atrial / flutter (estável)','fa fibrilação atrial flutter amiodarona metoprolol verapamil deslanosídeo propafenona',{a:[
E('Cardioversão química — amiodarona','EV','Ataque 5–7 mg/kg em 100 mL de SG 5% em 30–60 min. Manutenção: 6 amp. (900 mg) + SG 5% 482 mL em BIC: 33 mL/h nas 6 h iniciais e 16,6 mL/h nas 18 h seguintes.'),
E('Controle de frequência — metoprolol 5 mg/5 mL','EV','1 amp. em 2 min; repetir a cada 5 min, máx. 20 mg (4 amp.).'),
E('Verapamil 5 mg/2 mL (alternativa)','EV','1–2 amp. em 2–5 min; repetir após 30 min, máx. 20 mg. Manutenção 80–160 mg VO 8/8h. Evitar em IC com FE reduzida.',{off:1}),
E('Deslanosídeo 0,4 mg/2 mL (alternativa)','EV lento','1–2 amp. EV lentamente em 24 h.',{off:1}),
T('Amiodarona (após cardioversão; preferir na IC)','comprimido 100 mg',100,3,12,30,180,{off:1}),
T('Propafenona (sem cardiopatia estrutural)','comprimido 300 mg',300,1,12,30,60,{off:1})],
nt:['Instável: cardioversão elétrica sincronizada.','FA > 48 h ou duração desconhecida: NÃO cardioverter sem excluir trombo atrial; lembrar da anticoagulação. '+F]});
mk('PS adulto — Síndrome coronariana aguda','sca iam infarto angina aas clopidogrel ticagrelor enoxaparina nitrato alteplase',{a:[
E('AAS — ataque','VO dose única','300 mg (3 comprimidos de 100 mg) mastigados, dose única.'),
T('AAS — manutenção','comprimido 100 mg',100,1,24,30,30),
E('Ticagrelor — ataque','VO dose única','180 mg (2 comprimidos de 90 mg), dose única.'),
T('Ticagrelor — manutenção','comprimido 90 mg',90,1,12,30,60),
T('Clopidogrel (alternativa)','comprimido 75 mg',75,4,24,1,4,{off:1,nt:'Alternativa ao ticagrelor. Ataque 300 mg (4 cp) — 600 mg (8 cp) se for à ICP; IAMCSST com trombólise e > 75 anos: só 75 mg (1 cp). Depois 75 mg/dia'}),
T('Atorvastatina','comprimido 40 mg',40,1,24,30,30),
E('Mononitrato de isossorbida 5 mg (dor torácica)','SL','1 cp SL; repetir a cada 5 min, até 3 doses. NÃO usar em IAM de ventrículo direito nem se usou sildenafila/vardenafila < 24 h ou tadalafila < 48 h.'),
E('Enoxaparina 60 mg','SC','1 mg/kg SC de 12/12h. > 75 anos: 0,75 mg/kg. ClCr < 30 mL/min: metade da dose.'),
E('Nitroglicerina (Tridil 25 mg/5 mL)','BIC','1 amp. em 230 mL de SF 0,9%, iniciar 5 mL/h se dor persistente ou congestão.',{off:1}),
E('Alteplase (trombólise)','EV','Bolus 15 mg; depois 0,75 mg/kg em 30 min (máx. 50 mg) e 0,5 mg/kg em 60 min (máx. 35 mg). Máx. total 100 mg.',{off:1}),
E('Oxigênio','se SpO₂ < 90%','Oferecer O₂ apenas se saturação < 90%.')],
nt:['Contraindicações absolutas à trombólise: AVC hemorrágico prévio; AVC isquêmico < 3 meses; lesão estrutural do SNC; cirurgia do SNC/medula < 2 meses; suspeita de dissecção de aorta; sangramento ativo; trauma facial/TCE grave < 3 meses; HAS grave não controlada. '+F]});
mk('PS adulto — ICAD / edema agudo de pulmão','icad insuficiência cardíaca eap edema pulmão furosemida nitroglicerina nitroprussiato dobutamina',{a:[
E('Furosemida 20 mg/2 mL','EV','Ataque 1–1,5 mg/kg EV; manutenção: a mesma dose total distribuída em 24 h.'),
E('Nitroglicerina (Tridil 50 mg/10 mL)','BIC','1 amp. (10 mL) em 240 mL de SF 0,9% (200 mcg/mL): 1–2 mL/h e titular pela PA. Dose inicial 5 mcg/min (no EAP pode iniciar mais alto).'),
E('Nitroprussiato 50 mg/2 mL','BIC','1 amp. em 248 mL de SF 0,9% (200 mcg/mL): iniciar 5 mL/h e titular pela PA. 0,25–0,5 mcg/kg/min, máx. 10 mcg/kg/min.',{off:1}),
E('Dobutamina 250 mg/20 mL (baixa perfusão)','BIC','4 amp. (80 mL) + 170 mL SF 0,9% (4 mg/mL): iniciar 2 mL/h; 2–20 mcg/kg/min. Nesta diluição, mL/h ≈ mcg/kg/min.',{off:1})],
nt:['VNI precoce. Morfina não é mais usada no EAP. Reduzir a FC em ~25% nas primeiras horas. '+F]});
/* ---------- NEURO ---------- */
mk('PS adulto — Cefaleia primária','cefaleia dor de cabeça cetoprofeno dexametasona ibuprofeno dipirona',{a:[
E('Cetoprofeno 100 mg/2 mL','EV','1 amp. em 100 mL de SF 0,9%, correr em 20 min.'),
E('Dexametasona 10 mg/2,5 mL','EV ou IM','1 amp. EV em bolus ou IM.'),
T('Ibuprofeno','comprimido 400 mg',400,1,6,3,12,{aine:1,sos:'dor'}),
T('Dipirona','comprimido 1 g',1000,1,6,3,12,{sos:'dor'}),
T('Paracetamol','comprimido 750 mg',750,1,8,3,9,{off:1,nt:'Máx. 4 g/dia (6/6h se for o de 500 mg)'})],
nt:['Atentar para cefaleia por abuso de analgésico e para sinais de alarme. '+F]});
mk('PS adulto — Enxaqueca (EV/SC e oral)','enxaqueca sumatriptano naproxeno cetoprofeno dexametasona',{a:[
E('Sumatriptano 6 mg/0,5 mL','SC','6 mg SC; nova dose após 1 h se necessário. Máx. 2 amp./dia. Pouco disponível no PS.'),
E('Cetoprofeno 100 mg/2 mL','EV','1 amp. em 100 mL de SF 0,9% em 20 min.'),
E('Dexametasona 10 mg/2,5 mL','EV ou IM','1 amp. EV em bolus ou IM.'),
T('Sumatriptano + naproxeno 50/500 mg','comprimido',1,1,2,1,2,{nt:'1 cp no início da crise; repetir após 2 h se não melhorar. Máx. 2 cp/dia'}),
T('Naproxeno','comprimido 500 mg',500,1,12,3,6,{aine:1,off:1}),
T('Dipirona','comprimido 1 g',1000,1,6,3,12,{off:1})],
nt:['Evitar triptanos em doença coronariana e HAS não controlada. '+F]});
mk('PS adulto — Crise convulsiva (esquema do PS)','convulsão crise convulsiva estado de mal epiléptico diazepam midazolam fenitoína fenobarbital',{a:[
E('1º passo: diazepam 10 mg/2 mL','EV lento','1 amp. EV em bolus lento. SEM acesso: midazolam 10 mg IM. (Diazepam não vai IM.)'),
E('Refratário em 5 min','repetir','Repetir o benzodiazepínico (diazepam 10 mg EV lento ou midazolam 10 mg IM).'),
E('Refratário aos benzodiazepínicos — fenitoína 250 mg/5 mL (Hidantal)','EV','Ataque = peso (kg) × 20 mg (ex.: 68 kg × 20 = 1.360 mg → 6 ampolas = 1.500 mg) diluídas em 250 mL de SF 0,9% e infundidas em 1 hora (a velocidade não deve passar de 50 mg/min: limite habitual, não consta no guia; monitorizar ECG e PA). Manutenção: 100 mg + 100 mL de SF 0,9% a cada 8 horas. Só em SF 0,9%; nunca IM. (PS Zerado, 2ª ed.)'),
E('Ou fenobarbital 200 mg/2 mL','EV','5 amp. em 90 mL de NaCl 0,9% (10 mg/mL): 1 mL/kg (10 mg/kg). Outras fontes: 15–20 mg/kg.',{off:1}),
E('Refratário: IOT + sedação contínua','UTI','Midazolam 50 mg/10 mL: diluir 3 ampolas (30 mL) em 120 mL de SF 0,9% (1 mg/mL); ataque 0,2 mg/kg EV e manutenção 0,1–0,4 mg/kg/h. Se persistir: + propofol 1–2 mg/kg e 5–10 mg/kg/h; + tiopental 100–250 mg e 3–5 mg/kg/h.')],
nt:['Sempre checar glicemia capilar. '+F]});
/* ---------- RESPIRATÓRIO ---------- */
mk('PS adulto — DPOC exacerbado','dpoc exacerbação prednisolona salbutamol ipratrópio amoxicilina azitromicina',{a:[
T('Prednisolona','comprimido 20 mg',20,2,24,7,14),
E('Salbutamol spray 100 mcg/jato','inalatório','2 jatos de 4/4h ou 6/6h por 7 dias.'),
E('Ipratrópio spray 25 mcg/jato','inalatório','2 jatos de 6/6h por 7 dias.'),
T('Amoxicilina + clavulanato 875/125','comprimido',875,1,12,7,14),
T('Azitromicina (alternativa)','comprimido 500 mg',500,1,24,5,5,{off:1}),
T('Levofloxacino (risco de Pseudomonas)','comprimido 750 mg',750,1,24,5,5,{off:1})],
nt:['Manutenção grupo A: salbutamol 2 jatos 6/6h. Grupo B: + formoterol 12–24 mcg 12/12h + tiotrópio 2,5 mcg 2 puffs 24/24h. '+F]});
mk('PS adulto — TVP / TEP','tvp tep trombose embolia enoxaparina heparina rivaroxabana',{a:[
E('Profilaxia — enoxaparina 40 mg','SC','40 mg SC 1x/dia (ou 0,5 mg/kg).'),
E('Terapêutico — enoxaparina','SC','1 mg/kg SC de 12/12h (40 mg: 2 seringas de 12/12h).'),
E('Heparina não fracionada 25.000 UI/5 mL','EV','5 mL em 245 mL de SF (100 UI/mL). Ataque 80 UI/kg; manutenção 18 UI/kg/h em BIC. Controlar TTPa em 1,5–2× o normal.',{off:1}),
T('Rivaroxabana 15 mg','comprimido',15,1,12,21,42,{off:1,nt:'15 mg 12/12h por 3 semanas; depois 20 mg 1x/dia por no mínimo 3 meses'})],
nt:['Checar função renal e sangramento. '+F]});
/* ---------- DIGESTIVO ---------- */
mk('PS adulto — Diarreia aguda (adulto)','diarreia aguda racecadotrila saccharomyces sais reidratação ciprofloxacino metronidazol',{a:[
T('Saccharomyces boulardii','cápsula 200 mg',200,1,12,3,6),
T('Racecadotrila','cápsula 100 mg',100,1,8,5,15,{nt:'12/12h ou 8/8h enquanto durar a diarreia; máx. 400 mg/dia'}),
E('Sais de reidratação oral','SRO','1 envelope em 500 mL de água, tomar ao longo do dia além de líquidos; parar após 24 h sem diarreia.'),
T('Ciprofloxacino (só se infecciosa)','comprimido 500 mg',500,1,12,5,10,{off:1}),
T('Metronidazol (só se infecciosa)','comprimido 400 mg',400,1,8,7,21,{off:1})],
nt:['Evitar cafeína, leite e fármacos que provoquem diarreia. Loperamida não é indicada na diarreia infecciosa. '+F]});
mk('PS adulto — Hemorragia digestiva alta','hda hemorragia digestiva alta varicosa omeprazol terlipressina octreotide ceftriaxona',{a:[
E('Omeprazol 40 mg','EV','1 amp. EV de 12/12h; suspender após EDA se sem indicação.'),
E('Ondansetrona 4 mg/mL','EV','1 amp. em 100 mL de SF em 20 min de 8/8h.'),
E('VARICOSA — terlipressina 1 mg/mL','EV','2 mg (2 amp.) em bolus, depois 1 amp. de 4/4h.'),
E('Ou octreotide 0,5 mg/mL','EV','Bolus 50 mcg e infusão 50 mcg/h (1 amp. em 250 mL de SF).',{off:1}),
E('VARICOSA — ceftriaxona 1 g','EV','1 g EV de 24/24h por 7 dias (profilaxia de PBE). Alternativas: ciprofloxacino 400 mg EV 12/12h ou norfloxacino 400 mg VO 12/12h.'),
E('VARICOSA — lactulose 667 mg/mL','VO','20–40 mL de 12/12h, ajustar para 2–3 evacuações/dia.',{off:1})],
nt:['Prioridade: estabilização hemodinâmica e acesso calibroso; EDA em 12–24 h quando estável. HDB: dieta suspensa e omeprazol + ondansetrona como acima. '+F]});
mk('PS adulto — Encefalopatia hepática','encefalopatia hepática lactulose rifaximina metronidazol ornitina',{a:[
E('Lactulose 667 mg/mL','VO','20–40 mL de 12/12h; ajustar para 2–3 evacuações/dia.'),
T('Rifaximina','comprimido 550 mg',550,1,12,14,28),
T('Metronidazol (alternativa)','comprimido 400 mg',400,1,8,14,42,{off:1}),
E('Ondansetrona 4 mg/mL','EV','1 amp. em 100 mL de SF em 20 min de 8/8h.',{off:1}),
E('L-ornitina L-aspartato 5 g','VO (refratário)','1 envelope em um copo de líquido de 12/12h ou 24/24h.',{off:1})],
nt:['Cabeceira elevada, sinais vitais 6/6h e buscar o fator precipitante. '+F]});
mk('PS adulto — Pancreatite aguda','pancreatite aguda hidratação dipirona tramadol morfina meropenem ranson',{a:[
E('Cristaloide','EV','NaCl 0,9% 3 mL/kg/h por 8–12 h. Se hipotensão: Ringer lactato 20–30 mL/kg em 30 min.'),
E('Dipirona 1 g/2 mL','EV','1 amp. em bolus lento de 6/6h.'),
E('Tramadol 100 mg/2 mL','EV','1 amp. em 100 mL de SF em 30 min de 8/8h.',{off:1}),
E('Morfina 10 mg/mL','EV','1 amp. + 9 mL de ABD (1 mg/mL): 4–5 mL de 6/6h.',{off:1}),
E('Ondansetrona 4 mg/mL','EV','1 amp. em 100 mL de SF em 20 min de 8/8h.'),
E('Enoxaparina 40 mg','SC','1 amp. SC 24/24h.'),
E('Se infecção — meropenem 1 g','EV','1 g em 10 mL de ABD, EV de 8/8h.',{off:1})],
nt:['Dieta suspensa nas primeiras 48 h, reintroduzir conforme evolução. Solicitar Ranson. '+F]});
mk('PS adulto — Colangite','colangite pipertazo ciprofloxacino cefepima metronidazol dor biliar',{a:[
E('Piperacilina + tazobactam 4 g + 500 mg','EV','EV de 8/8h por 7–10 dias (monoterapia).'),
E('Ou ciprofloxacino 400 mg/200 mL','EV','1 bolsa EV de 12/12h por 7–10 dias.',{off:1}),
E('Ou cefepima 1 g + metronidazol 500 mg','EV','Cefepima 2 g EV de 8/8h + metronidazol 500 mg EV de 8/8h por 7–10 dias.',{off:1}),
E('Dipirona 1 g/2 mL','EV','1 amp. em bolus lento de 6/6h.'),
E('Ondansetrona 4 mg/mL','EV','1 amp. em 100 mL de SF em 20 min de 8/8h.'),
E('Enoxaparina 40 mg','SC','1 amp. SC 24/24h.')],
nt:['Desobstrução da via biliar; atenção à pêntade de Reynolds (choque séptico). '+F]});
mk('PS adulto — Refluxo gastroesofágico (DRGE)','drge refluxo omeprazol esomeprazol domperidona bromoprida',{a:[
T('Omeprazol','cápsula 20 mg',20,1,24,60,60,{nt:'20–40 mg em jejum, 30 min antes do café; empírico por 4–12 semanas'}),
T('Domperidona','comprimido 10 mg',10,1,8,14,42,{off:1}),
T('Bromoprida','comprimido 10 mg',10,1,8,14,42,{off:1})],
nt:['Cabeceira elevada, não deitar após comer, perder peso, parar de fumar, evitar chocolate, café, gaseificados e refeições volumosas. '+F]});
mk('PS adulto — Anemia ferropriva','anemia ferropriva sulfato ferroso noripurum ferro endovenoso',{a:[
T('Sulfato ferroso (60 mg de ferro elementar)','comprimido 300 mg',300,1,8,90,270,{nt:'1 cp antes do café, almoço e jantar; com alimentos ácidos, longe de laticínios'}),
E('Hidróxido férrico (Noripurum EV 100 mg/5 mL)','EV','5–10 mL em 250 mL de SF 0,9% em no mínimo 30 min, 1–3 vezes por semana conforme o déficit de ferro.',{off:1})],
nt:['Investigar a causa da perda. '+F]});
/* ---------- ENDÓCRINO ---------- */
mk('PS adulto — CAD / estado hiperglicêmico hiperosmolar','cetoacidose diabética cad ehh insulina hidratação potássio',{a:[
E('Insulina regular (solução 1 UI/mL)','BIC','1 mL (100 UI) em 100 mL de SF 0,9%. SÓ iniciar se K > 3,3. Bolus 0,1–0,15 UI/kg e manutenção 0,1 UI/kg/h. Glicemia capilar de 1/1h; queda ideal 50–70 mg/dL/h.'),
E('Hidratação','EV','NaCl 0,9% 15–20 mL/kg na 1ª hora e depois ~100 mL/kg em 48 h. Se Na corrigido > 150: SF 0,45%. Cuidado em cardiopata.'),
E('Potássio','KCl','K < 3,3: repor 10–30 mEq/L de KCl antes de insulina. K 3,3–5,2: 10–20 mEq/L. K > 5,3: não repor.'),
E('Quando reduzir a insulina','ajuste','Queda > ideal ou glicemia < 200–250: 0,02–0,05 UI/kg/h + SG 5%. Queda insuficiente: dobrar a taxa.'),
E('Transição para SC','esquema','Suspender BIC com glicemia < 200 + pH > 7,3 + HCO₃ > 18 + AG < 12. Dar 10 UI de insulina regular SC e esperar 1 h. Depois basal-bolus 0,2–0,5 UI/kg/dia (50% NPH: ⅔ manhã e ⅓ noite; 50% regular dividida nas refeições).')],
nt:['Para criança use a calculadora de CAD pediátrica (aba Urgência). '+F]});
mk('PS adulto — Controle glicêmico hospitalar (insulina em BIC)','hiperglicemia insulina bomba controle glicêmico basal bolus',{a:[
E('Insulina regular 1 UI/mL','BIC','Iniciar se 2 glicemias > 180 mg/dL (meta 140–180). 1 mL (100 UI) em 100 mL de SF 0,9%. Glicemia > 180: 2 mL/h; > 220: 4 mL/h.'),
E('Ajustes','conforme glicemia','< 100: desligar a bomba. < 60: desligar e dar 40 mL de SG 50%. 160–180: manter 1 mL/h. > 189: aumentar 2 mL/h.'),
E('Após desligar a bomba','basal-bolus','Se diabético ou descontrolado: 0,2–0,5 UI/kg/dia (50% NPH ⅔ manhã e ⅓ noite; 50% regular nas refeições).')],
nt:['Só em hiperglicemia sintomática difícil com doses isoladas de regular. '+F]});
/* ---------- GU ---------- */
mk('PS adulto — ITU baixa (nitrofurantoína / fosfomicina / outras)','itu cistite nitrofurantoína fosfomicina bactrim fenazopiridina',{a:[
T('Nitrofurantoína','comprimido 100 mg',100,1,6,7,28),
E('Fosfomicina 3 g','VO dose única','1 envelope em dose única, ao deitar.',{off:1}),
T('Sulfametoxazol + trimetoprima 800/160','comprimido',800,1,12,5,10,{off:1,nt:'3–5 dias'}),
T('Levofloxacino','comprimido 750 mg',750,1,24,5,5,{off:1}),
T('Fenazopiridina (se disúria)','comprimido 200 mg',200,1,8,2,6,{off:1})],
nt:['Gestante: usar a receita específica de ITU na gestação. Nitrofurantoína evitada se ClCr baixo. '+F]});
mk('PS adulto — Pielonefrite (ITU alta)','pielonefrite itu alta ceftriaxona ciprofloxacino levofloxacino meropenem',{a:[
T('Ciprofloxacino VO','comprimido 500 mg',500,1,12,10,20),
T('Amoxicilina + clavulanato 875/125 (alternativa)','comprimido',875,1,12,10,20,{off:1,nt:'10–14 dias'}),
E('Ceftriaxona 1 g','EV','1 g EV de 24/24h por 10–14 dias.',{off:1}),
E('Ciprofloxacino 400 mg/200 mL ou levofloxacino 500 mg/100 mL','EV','Cipro 1 bolsa EV 12/12h; levofloxacino 1 bolsa EV 24/24h; por 10–14 dias.',{off:1}),
E('Complicada com sepse','EV','Piperacilina + tazobactam 4 g EV 8/8h, ou cefepima 1 g EV 12/12h, ou meropenem 1 g EV 8/8h por 10–14 dias.',{off:1})],
nt:['Hidratação venosa, analgésico, antitérmico e antiemético. '+F]});
mk('PS adulto — Uretrite gonocócica / não gonocócica','uretrite gonococica clamídia ceftriaxona azitromicina doxiciclina',{a:[
E('Gonocócica: ceftriaxona 500 mg','IM','1 amp. IM em dose única.'),
T('Gonocócica: + azitromicina 1 g','comprimido 500 mg',500,2,24,1,2,{nt:'2 comprimidos em dose única'}),
T('Doxiciclina (alternativa; também não gonocócica)','comprimido 100 mg',100,1,12,7,14,{off:1}),
T('Não gonocócica: azitromicina 1 g','comprimido 500 mg',500,2,24,1,2,{off:1,nt:'2 comprimidos em dose única'})],
nt:['Tratar parceiros; oferecer testes de HIV, sífilis e hepatites. Doxiciclina não é para gestantes. '+F]});
/* ---------- PSIQUIATRIA ---------- */
mk('PS adulto — Agitação psicomotora / agressividade','agitação agressividade haloperidol midazolam prometazina clorpromazina',{a:[
E('Manejável verbalmente: clorpromazina 25 mg','VO','25 mg VO a cada 30 min até tranquilizar; máx. 2 g/dia.'),
E('Não manejável / risco: haloperidol 5 mg/mL','IM ou EV','0,2–0,8 mL (1–4 mg) IM/EV.'),
E('Associar midazolam 15 mg/3 mL','IM ou EV','0,5 amp. (7,5 mg).'),
E('Ou prometazina 50 mg/2 mL','IM','1 amp. IM de 30/30 min, até 3 vezes. Evitar via EV (necrose/gangrena).',{off:1})],
nt:['Fazer ECG se possível (evitar haloperidol com QTc > 500 ms). Excluir causa orgânica (glicemia, hipoxemia, intoxicação). '+F]});
mk('PS adulto — Psicose aguda / delirium','psicose delirium haloperidol risperidona olanzapina quetiapina',{a:[
T('Psicose: haloperidol','comprimido 5 mg',5,1,12,7,14,{nt:'1–5 mg VO; máx. 40 mg/dia. IM: 2–4 mg (0,4–0,5 mL)'}),
T('Risperidona (se intolera haloperidol)','comprimido 2 mg',2,1,24,7,7,{off:1,nt:'2–8 mg/dia; máx. 16 mg/dia (aumentar 1 mg/dia)'}),
T('Olanzapina (refratário ou extrapiramidal)','comprimido 10 mg',10,1,24,7,7,{off:1,nt:'10–20 mg/dia; máx. 20 mg/dia'}),
E('Delirium hiperativo: haloperidol 5 mg/mL','IM ou EV','0,5 amp. (2,5 mg) de 30/30 min até estabilizar, no máx. 3 vezes. Fazer ECG: evitar se QTc > 500 ms. Fontes divergem do máximo diário (PS Zerado: 5 mg/dia VO); conferir.'),
E('Delirium: opções VO noturnas','VO','Risperidona 0,5 mg à noite (máx. 6 mg/dia); olanzapina 5 mg à noite (+2,5 mg); quetiapina 25 mg à noite.',{off:1})],
nt:['Delirium: tratar a causa (infecção, dor, retenção, medicamentos) e medidas não farmacológicas. '+F]});
mk('PS adulto — Acatisia / ansiedade e pânico','acatisia ansiedade pânico clonazepam lorazepam diazepam alprazolam propranolol',{a:[
T('Ansiedade aguda: clonazepam','comprimido 2 mg',2,1,24,1,1,{nt:'2 mg VO; manutenção 0,25–4 mg/dia'}),
T('Ou lorazepam','comprimido 2 mg',2,1,12,1,2,{off:1,nt:'0,5–2 mg; máx. 10 mg/dia'}),
T('Ou diazepam','comprimido 10 mg',10,1,12,1,2,{off:1,nt:'5–10 mg; manutenção 5–40 mg/dia'}),
T('Ou alprazolam','comprimido 0,5 mg',0.5,1,12,1,2,{off:1,nt:'0,25–1 mg; manutenção 0,5–4 mg/dia'}),
T('Acatisia: propranolol','comprimido 10 mg',10,1,12,7,14,{off:1,nt:'10 mg 2x/dia (máx. 60 mg/dia). Contraindicado em asma/DPOC. Alternativa: clonazepam 0,5–2,5 mg/dia ou lorazepam 0,5 mg 2x/dia; biperideno 2–6 mg/dia'})],
nt:['Benzodiazepínico por tempo curto; avisar sobre sonolência e não dirigir. '+F]});
mk('PS adulto — Síndrome serotoninérgica / neuroléptica maligna','síndrome serotoninérgica neuroléptica maligna ciproeptadina dantroleno bromocriptina diazepam',{a:[
E('Serotoninérgica leve','EV','Diazepam 0,1–0,2 mg/kg EV de 8/8h até resolver; suspender o serotoninérgico.'),
E('Serotoninérgica moderada/grave','EV/SNG','Ringer 20–30 mL/kg (meta diurese > 50–100 mL/h) + diazepam + ciproeptadina 12 mg VO/SNG, depois 2 mg a cada 2 h; máx. 32 mg/dia. Evitar contenção mecânica (rabdomiólise).'),
E('Neuroléptica maligna','VO/SNG/EV','Suspender o antipsicótico. Bromocriptina 2–10 mg de 8/8h (máx. 40 mg/dia, até 10 dias) ou amantadina 100 mg (máx. 400 mg/dia). Dantroleno 1–10 mg/kg/dia EV (hipertermia/rigidez); contraindicado em disfunção hepática.')],
nt:['Internar em unidade monitorada. '+F]});
/* ---------- DISTÚRBIOS HIDROELETROLÍTICOS ---------- */
mk('PS adulto — Hipercalemia','hipercalemia potássio gluconato de cálcio insulina glicose fenoterol salbutamol sorcal',{a:[
E('Com alteração no ECG: gluconato de cálcio 10%','EV','1 amp. (10 mL) em 50–100 mL de SF em 3–5 min; repetir até normalizar o ECG. Não reduz o K, só protege o coração.'),
E('Glicoinsulina','EV 1 h','Insulina regular 10 UI em 100 mL de SG 50% (ou 500 mL de SG 10%) em 1 h; repetir até de 4/4h. Vigiar glicemia.'),
E('Beta-agonista inalatório','nebulização','Fenoterol 10–15 gotas ou salbutamol 40 gotas em 3–5 mL de SF de 4/4h.',{off:1}),
E('Poliestirenossulfonato de cálcio (Sorcal 30 g)','VO','30 g em 100 mL de água ou manitol 10%, até de 4/4h.',{off:1}),
E('Furosemida 20 mg/2 mL','EV','0,5–1 mg/kg EV até de 4/4h, se diurese preservada.',{off:1}),
E('Diálise','refratária','Hemodiálise na urgência dialítica ou hipercalemia refratária.',{off:1})],
nt:[F]});
mk('PS adulto — Hipocalemia','hipocalemia potássio kcl cloreto de potássio reposição',{a:[
E('Leve (K > 3,0): KCl xarope 6%','VO','10–30 mL de 6/6h.'),
T('Ou KCl 600 mg (6 mEq)','comprimido',600,1,6,3,12,{off:1,nt:'Após as refeições'}),
E('Moderada/grave (K < 3,0): KCl 10%','EV','2 amp. (20 mL) em 500 mL de SF 0,9%, correr em 2–3 h por acesso periférico. Veia central: concentrações maiores (ex. 4 amp. em 500 mL).'),
E('Cautela','segurança','KCl EV nunca em bolus nem sem diluir. Conferir função renal e repetir o K. Repor magnésio se baixo.')],
nt:[F]});
SCALES.natcalc={n:'Hiponatremia / hipernatremia: velocidade de correção',kw:'sódio hiponatremia hipernatremia salina 3% hipertônica soro glicosado correção água corporal total',
in:[['Peso (kg)'],['Fator da água corporal (homem <65: 0,6 · homem >65 ou mulher <65: 0,5 · mulher >65: 0,45)'],['Na⁺ do paciente (mEq/L)'],['Na⁺ da solução (3%: 513 · SF 0,9%: 154 · SF 0,45%: 77 · SG 5%: 0)'],['Variação máxima em 24 h (mEq/L; use 8 a 10, máx. 12)'],['Horas de infusão (ex. 24)']],
fn:v=>{const[w,f,na,ns,mx,h]=v;if(!(w>0&&f>0&&h>0&&mx>0))return '<div class="wn">Preencha todos os campos.</div>';
 const act=w*f,dl=Math.abs(ns-na)/(act+1),vol=1000*mx/dl,rate=vol/h;
 const dir=ns>na?'aumentar':'reduzir';
 return '<div class="ul"><div>Água corporal total ≈ '+f1(act)+' L.</div><div>1 L da solução vai '+dir+' o Na⁺ em ≈ <b>'+f1(dl)+' mEq/L</b>.</div><div>Para '+dir+' '+f1(mx)+' mEq/L: <b>'+f0(vol)+' mL</b> em '+f0(h)+' h = <b>'+f1(rate)+' mL/h</b>.</div>'+
 '<div class="fm">Solução 3% = 890 mL de NaCl 0,9% + 110 mL de NaCl 20% (ou metade). Dosar o Na⁺ de 2/2h a 4/4h e reajustar; NÃO passar de 8–12 mEq/L em 24 h (risco de mielinólise). Hipernatremia crônica ou de duração desconhecida: queda de no máx. 0,5 mEq/L/h. Repor volume antes (RL ou SF). Fórmula de Adrogué-Madias (PS Zerado). Conferir antes de prescrever.</div></div>'}};
mk('PS adulto — Hipo/hipernatremia, cálcio e magnésio','hiponatremia hipernatremia cálcio hipocalcemia hipercalcemia magnésio hipomagnesemia hipermagnesemia gluconato sulfato de magnésio',{a:[
E('Sódio','calculadora','Use a calculadora "Hiponatremia / hipernatremia" na aba Calculadoras/Escalas. Meta: no máx. 8–12 mEq/L em 24 h.'),
E('Hipocalcemia sintomática — gluconato de cálcio 10%','EV','1 amp. em 50–100 mL de SF em 1 h; ou 5 amp. em 500 mL em 5–10 h. Corrigir hiperfosfatemia antes. Assintomática: cálcio VO 1.000–2.600 mg/dia.'),
E('Hipercalcemia','EV','Hidratação vigorosa 200–500 mL/h conforme tolerância; depois furosemida. Ácido zoledrônico 4 mg EV em 15 min ou pamidronato 60–90 mg EV em dose única (o texto-fonte indica "a cada 4 horas", o que parece erro: conferir).',{off:1}),
E('Hipomagnesemia grave / Torsades','EV','Sulfato de Mg 10%: 2 amp. (20 mL) em 100 mL de SG 5% em 2–5 min; manutenção 4 amp. (40 mL) em 460 mL de SF em 12–24 h. Máx. 6 g/dia (3 g se ClCr < 30).'),
E('Hipomagnesemia leve','VO/EV','Óxido de magnésio 800–1.600 mg/dia em 3–4 doses, ou sulfato de Mg 10% 1–2 amp. em 100–250 mL em 1–2 h.',{off:1}),
E('Hipermagnesemia','EV','Suspender fontes de Mg; furosemida 0,5–1 mg/kg EV; se grave/sintomática, gluconato de cálcio 10% 1 amp. em 50–100 mL em 3–5 min; refratária: diálise.',{off:1})],
nt:[F]});
/* ---------- INFECÇÕES / OLHO / ALERGIA / INTOXICAÇÕES ---------- */
mk('PS adulto — Herpes simples','herpes simples aciclovir',{a:[
T('Aciclovir 400 mg','comprimido',400,1,8,7,21,{nt:'5–10 dias'}),
E('Aciclovir 200 mg (alternativa)','VO','1 comprimido 5x ao dia por 5–10 dias.',{off:1}),
E('Grave / encefalite / neonatal','EV','Aciclovir 5–10 mg/kg EV 8/8h; encefalite ou herpes neonatal: 20 mg/kg EV 8/8h.',{off:1}),
T('Supressão (> 5 episódios/ano)','comprimido 400 mg',400,1,12,120,240,{off:1,nt:'4–6 meses'})],
nt:[F]});
mk('PS adulto — Conjuntivite viral','conjuntivite viral hialuronato dexametasona colírio',{a:[
E('Hialuronato de sódio colírio 1 mg/mL','colírio','1 gota no olho acometido de 4/4h até melhorar.'),
E('Dexametasona colírio 0,1% (só se pseudomembrana)','colírio','1 gota de 6/6h por 5 dias.',{off:1})],
nt:['Compressas frias por 10 min 6/6h; lavar as mãos. Conjuntivite bacteriana: ver a receita própria. '+F]});
mk('PS adulto — Anafilaxia (adrenalina IM)','anafilaxia choque anafilático adrenalina intramuscular',{a:[
E('Adrenalina 1 mg/mL — IM (NUNCA EV direto)','IM coxa','0,5 mg (0,5 mL = meia ampola) IM no vasto lateral da coxa se > 50 kg. 25–50 kg: 0,3 mg. 10–25 kg: 0,15 mg. < 10 kg: 0,01 mL/kg (0,01 mg/kg). Repetir a cada 5–15 min se preciso.'),
E('Depois','adjuvantes','Posição supina, O₂, acesso, SF. Anti-histamínico e corticoide só como complemento, nunca no lugar da adrenalina.')],
nt:['Use o campo "Conferir rótulo" da aba Urgência: adrenalina 1 mg/mL é INTRAMUSCULAR. '+F]});
window.__sp_b10_0={E,F,mk};
})();
