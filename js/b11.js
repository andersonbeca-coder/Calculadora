
/* ===== Parte 11 — Receituário adulto (Yule Nogueira): protocolos que faltavam ===== */
(function(){
const mk=(k,kw,o)=>{NP(k,kw,o);const s=$('pat');if(s&&![...s.options].some(x=>x.value===k))s.add(new Option(k,k))};
const E=(n,f,t,o)=>X(n,f,t,o||{});
const Y='(Receituário Yule Nogueira)';
const DIP=()=>T('Dipirona','comprimido 500 mg',500,2,6,3,12,{sos:'dor ou febre',nt:'1–2 cp (500–1000 mg) de 6/6h se dor ou febre; máx. 4 g/dia'});
const IBU=()=>T('Ibuprofeno','comprimido 600 mg',600,1,8,5,15,{aine:1,nt:'Com alimento; evitar em gestante, úlcera, doença renal'});
const CET=(d)=>T('Cetoprofeno','comprimido 100 mg',100,1,12,d||5,(d||5)*2,{aine:1,nt:'Com alimento; evitar em gestante, úlcera, doença renal'});
/* ---------- Respiratório / ORL ---------- */
mk('Receituário — IVAS em gestante','ivas gestante gripe resfriado amoxicilina prednisolona acetilcisteína ipratrópio',{a:[
T('Amoxicilina','comprimido 500 mg',500,1,8,7,21),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5,{nt:'Corticoide na gestação: avaliar indicação'}),
T('Paracetamol','comprimido 500 mg',500,1,6,3,12,{sos:'dor ou febre'}),
E('Acetilcisteína 600 mg','sachê','1 envelope dissolvido em água, 1x/dia por 7 dias.'),
E('Inalação','ipratrópio','SF 0,9% 5 mL + ipratrópio (Atrovent) 30 gotas, 3x/dia por 5 dias.')],
nt:['Evitar AINEs e dipirona em gestante. '+Y]});
mk('Receituário — Gripe/IVAS (adulto, esquema completo)','resfriado gripe ivas cloperastina prednisolona ibuprofeno loratadina dexclorfeniramina',{a:[
IBU(),
T('Loratadina','comprimido 10 mg',10,1,24,7,7),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5,{off:1,nt:'Só se componente alérgico/inflamatório importante'}),
E('Cloperastina xarope 3,54 mg/mL (Seki)','VO','10 mL de 8/8h por 7 dias (tosse seca).',{off:1}),
T('Dexclorfeniramina','comprimido 2 mg',2,1,8,5,15,{off:1,nt:'Sedativo'}),
T('Dipirona','comprimido 500 mg',500,1,6,3,12,{sos:'febre ou dor'})],nt:[Y]});
mk('Receituário — Tosse (produtiva e seca/alérgica)','tosse expectorante acetilcisteína ambroxol acebrofilina brondilat cloperastina loratadina prednisolona',{a:[
E('Produtiva: acetilcisteína 600 mg','sachê','1 envelope dissolvido em água, 1x/dia por 7 dias.'),
E('Ambroxol 30 mg/mL','gotas/xarope','10 mL (dose do xarope conforme a concentração do rótulo) de 8/8h por 7 dias.',{off:1}),
E('Acebrofilina xarope','VO','10 mL de 8/8h por 7 dias.',{off:1}),
E('Seca/alérgica: cloperastina 3,54 mg/mL (Seki)','VO','10 mL de 8/8h por 7 dias.'),
T('Loratadina','comprimido 10 mg',10,1,24,5,5),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5,{off:1})],nt:['Conferir a concentração do rótulo antes de converter em mL. '+Y]});
mk('Receituário — Sinusite (adulto)','sinusite amoxicilina clavulanato azitromicina prednisolona mometasona',{a:[
T('Amoxicilina + clavulanato 500/125','comprimido',500,1,8,10,30),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5),
T('Loratadina','comprimido 10 mg',10,1,24,10,10),
IBU(),DIP(),
T('Azitromicina (alternativa)','comprimido 500 mg',500,1,24,5,5,{off:1}),
E('Mometasona nasal 50 mcg','nasal','2 jatos em cada narina 1x/dia ao deitar por 30 dias.',{off:1})],nt:[Y]});
mk('Receituário — Derrame pleural / pneumonia (associações)','derrame pleural pneumonia levofloxacino azitromicina prednisona fluimucil',{a:[
T('Levofloxacino','comprimido 750 mg',750,1,24,7,7),
T('Azitromicina','comprimido 500 mg',500,1,24,5,5),
T('Prednisona','comprimido 20 mg',20,1,12,5,10),
E('Acetilcisteína 600 mg (Fluimucil)','sachê','1 envelope em meio copo de água 1x/dia por 7 dias.')],nt:['Derrame pleural exige avaliação da causa e da necessidade de punção/drenagem. '+Y]});
mk('Receituário — Rinite alérgica (adulto)','rinite alérgica budesonida mometasona loratadina prednisolona neosoro',{a:[
T('Loratadina','comprimido 10 mg',10,1,24,10,10),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5),
E('Budesonida nasal 32 mcg','nasal','2 jatos em cada narina 1x/dia ao deitar por 60 dias.'),
E('Cloperastina 3,54 mg/mL','VO','10 mL de 8/8h por 7 dias.',{off:1}),
E('Nafazolina (Neosoro) 0,5 mg/mL','nasal','2 gotas em cada narina de 4/4h só se congestão; no máximo 3–5 dias (rinite medicamentosa).',{off:1}),
E('Mometasona nasal 50 mcg','nasal','2 jatos em cada narina 1x/dia ao deitar por 30 dias.',{off:1})],nt:[Y]});
mk('Receituário — Abscesso dentário (dor de dente)','abscesso dentário dor de dente amoxicilina clavulanato cetoprofeno dipirona',{a:[
T('Amoxicilina + clavulanato 500/125','comprimido',500,1,8,7,21),
CET(5),DIP()],nt:['Encaminhar ao dentista. '+Y]});
mk('Receituário — Afta / estomatite','afta aftas estomatite nistatina orabase bismu-jet',{a:[
E('Nistatina solução oral','bochecho','1 colher diluída em ½ copo de água, bochechar por 5 dias ou até curar.'),
E('Triamcinolona em orabase (Omcilon-A)','local','Aplicar 3x/dia na lesão até curar.',{off:1})],nt:[Y]});
/* ---------- Olhos ---------- */
mk('Receituário — Trauma ocular','trauma ocular olho colírio tampão cetoprofeno',{a:[
E('Colírio antibiótico (ex.: ofloxacino 3 mg/mL)','colírio','2 gotas no olho afetado de 6/6h por 7 dias.'),
E('Pomada oftálmica regeneradora (ex.: Epitezan)','pomada','Aplicar no olho afetado 2x/dia, de preferência ao deitar.',{off:1}),
CET(5),
E('Tampão ocular','curativo','Trocar diariamente por 5 dias.',{off:1})],nt:['Encaminhar ao oftalmologista. Não prescrever colírio anestésico para uso em casa (toxicidade para a córnea). '+Y]});
mk('Receituário — Hordéolo (terçol)','hordéolo terçol compressa cetoprofeno',{a:[
E('Compressas de água morna','local','Sobre o olho por 15 min de 3/3h até o terçol desaparecer.'),CET(5)],nt:[Y]});
mk('Receituário — Queimadura ocular / química','queimadura ocular olho tobramicina regencel',{a:[
E('Lavagem imediata','orientação','Irrigar com soro fisiológico/água limpa em abundância por 15–30 min antes de qualquer coisa.'),
E('Tobramicina colírio','colírio','2 gotas em cada olho 6x/dia por 5 dias.',{off:1}),
CET(5)],nt:['Encaminhar sempre ao oftalmologista. Anestésico tópico só dentro da unidade de saúde. '+Y]});
/* ---------- Psiquiatria / sono ---------- */
mk('Receituário — Depressão / antidepressivos (ISRS)','depressão antidepressivo fluoxetina sertralina paroxetina citalopram escitalopram toc pânico',{a:[
T('Fluoxetina','cápsula 20 mg',20,1,24,30,30,{nt:'Pela manhã. Comprimidos de 10 ou 20 mg'}),
T('Sertralina','comprimido 50 mg',50,1,24,30,30,{off:1,nt:'Pela manhã. Faixa 25–200 mg'}),
T('Paroxetina','comprimido 20 mg',20,1,24,30,30,{off:1}),
T('Citalopram','comprimido 20 mg',20,1,24,30,30,{off:1,nt:'Indicado em TOC, pós-estado depressivo e pânico'}),
T('Escitalopram','comprimido 10 mg',10,1,24,30,30,{off:1})],
nt:['Receita de controle especial (C1, branca em 2 vias). Iniciar com dose baixa e reavaliar em 2–4 semanas; avisar sobre piora inicial da ansiedade e risco de ideação suicida em jovens. '+Y]});
mk('Receituário — Benzodiazepínico / insônia (receita azul B1)','insônia benzodiazepínico diazepam clonazepam zolpidem pasalix receita azul',{a:[
T('Diazepam','comprimido 5 mg',5,1,12,30,60,{nt:'Alternativa: 1 cp à noite'}),
T('Clonazepam','comprimido 0,5 mg',0.5,1,12,30,60,{off:1,nt:'Ansiolítico 0,25–4 mg/dia; usual 0,5–1,5 mg/dia em 3 tomadas'}),
T('Zolpidem','comprimido 10 mg',10,1,24,30,30,{off:1,nt:'1 cp à noite, 30 min antes de deitar'})],
nt:['Receita AZUL (notificação B1). Zolpidem também é B1. Uso por curto período, avisar sobre sonolência, não dirigir e não associar a álcool. '+Y]});
mk('Receituário — Ansiedade / bruxismo','ansiedade bruxismo escitalopram ciclobenzaprina cetoprofeno',{a:[
T('Escitalopram','comprimido 10 mg',10,1,24,30,30,{nt:'Pela manhã; a fonte lista 20 mg, comece com 10 mg'}),
T('Ciclobenzaprina','comprimido 10 mg',10,1,24,10,10,{nt:'À noite (após as 20h)'}),
CET(5)],nt:['Receita C1. '+Y]});
mk('Receituário — Soluços','soluço soluços baclofeno',{a:[T('Baclofeno','comprimido 5 mg',5,1,12,3,6,{nt:'Até melhorar o sintoma'})],nt:[Y]});
/* ---------- Pele ---------- */
mk('Receituário — Intertrigo / assadura de dobras','intertrigo assadura isoconazol dobras',{a:[E('Isoconazol 1% pomada','tópico','Aplicar 2x/dia nas lesões até a cura.')],nt:[Y]});
mk('Receituário — Hematomas','hematoma equimose hirudoid trombofob',{a:[E('Hirudoid gel 5 mg/g','tópico','Aplicar na lesão 4x/dia por 10 dias.'),E('Dipirona 500 mg','VO','1–2 cp de 6/6h se dor.',{off:1})],nt:[Y]});
mk('Receituário — Tinea (cruris, corporis)','tinea cruris corporis micose cetoconazol itraconazol nistatina isoconazol',{a:[
E('Cetoconazol creme 2%','tópico','Aplicar 2x/dia na lesão por 4 semanas.'),
E('Isoconazol 1% pomada','tópico','Aplicar 2x/dia até a cura.',{off:1}),
E('Nistatina + óxido de zinco (Dermodex)','tópico','2x/dia por 4 semanas.',{off:1}),
T('Itraconazol (extensa)','cápsula 100 mg',100,1,24,28,28,{off:1})],nt:['Corticoide associado (ex.: betametasona + cetoconazol) só por curto período e fora de dobras. '+Y]});
mk('Receituário — Mordedura de cachorro','mordedura mordida cachorro raiva vacina dt amoxicilina clavulanato',{a:[
E('Cuidados imediatos','orientação','Lavar o ferimento com água e sabão por vários minutos. Não suturar mordidas profundas/contaminadas.'),
E('Vacina antirrábica','UBS','Esquema conforme avaliação do animal e da lesão (ex.: dias 0, 3, 7 e 14); soro/imunoglobulina nas lesões graves.'),
E('Vacina dT','UBS','1 dose se esquema desatualizado.'),
T('Amoxicilina + clavulanato 875/125','comprimido',875,1,12,10,20)],nt:['Observar o animal por 10 dias quando possível; notificar. '+Y]});
mk('Receituário — Dermatite de fralda','dermatite fralda assadura dexametasona dexclorfeniramina',{c:[
E('Dexametasona creme 1 mg/g','tópico','Pequena quantidade na área afetada 3x/dia até melhorar (curto prazo).'),
E('Dexclorfeniramina 2 mg/5 mL','VO','2,5 mL de 8/8h por 5 dias.',{off:1})],nt:['Trocar a fralda com frequência e usar pomada de barreira (óxido de zinco). '+Y]});
mk('Receituário — Queimaduras (leves)','queimadura sulfadiazina de prata cefalexina dipirona',{a:[
E('Sulfadiazina de prata creme 1%','tópico','Aplicar 3x/dia por 10 dias após limpeza.'),
T('Cefalexina','cápsula 500 mg',500,1,6,7,28,{off:1,nt:'Só se sinais de infecção'}),DIP()],nt:['Evitar sulfa em alérgico a sulfa. '+Y]});
mk('Receituário — Sutura / ferimento cortocontuso','sutura ferimento cortocontuso cefalexina ibuprofeno dipirona tétano',{a:[
T('Cefalexina','cápsula 500 mg',500,1,6,7,28),IBU(),DIP(),
E('Cuidados','orientação','Lavar com água e sabão; retirar pontos em 7 dias na UBS.')],nt:['Checar vacina antitetânica (ver "Profilaxia do tétano"). '+Y]});
mk('Receituário — Profilaxia do tétano','tétano antitetânico imunoglobulina soro sat ighat dt',{a:[
E('Vacina dT','UBS','Conforme a carteira vacinal.'),
E('Imunoglobulina antitetânica (IGHAT)','IM','250 UI IM, dose única, em ferimento de risco sem esquema vacinal completo.'),
E('Soro antitetânico (SAT)','IM','5.000 UI IM, dose única (quando não houver IGHAT; teste de sensibilidade conforme rotina).',{off:1})],nt:['Ferimento corto-contuso enferrujado/contaminado e sem histórico vacinal: encaminhar à UBS/PS. '+Y]});
mk('Receituário — Fratura, trauma e entorse (analgesia)','fratura entorse trauma tramadol cetoprofeno dipirona compressa fria',{a:[
CET(5),T('Dipirona','comprimido 500 mg',500,2,6,3,24,{sos:'dor'}),
T('Tramadol','comprimido 50 mg',50,1,12,5,10,{off:1,sos:'dor forte',nt:'Receita de controle especial; sonolência e náusea'}),
E('Compressa fria','local','20 min de 6/6h por 5 dias.')],nt:['Imobilização e encaminhamento ortopédico conforme o caso. '+Y]});
mk('Receituário — Pé diabético / ferida diabética','pé diabético ferida cefalexina ciprofloxacino hidrogel colagenase',{a:[
T('Cefalexina','cápsula 500 mg',500,1,6,10,40),
T('Ciprofloxacino (alternativa)','comprimido 500 mg',500,1,12,10,20,{off:1}),
E('Hidrogel (Dersani)','tópico','2x/dia após limpeza, com curativo.'),
E('Colagenase + cloranfenicol (Iruxol)','tópico','2x/dia após limpeza, com curativo.',{off:1})],nt:['Avaliar profundidade, isquemia e osteomielite. '+Y]});
mk('Receituário — Lesão ulcerativa infectada','úlcera lesão ulcerativa ciprofloxacino clindamicina neomicina bacitracina',{a:[
T('Ciprofloxacino','comprimido 500 mg',500,1,12,14,28),
T('Clindamicina','cápsula 300 mg',300,2,8,14,84,{off:1}),
E('Neomicina + bacitracina','tópico','2x/dia após limpeza por 10 dias.')],nt:[Y]});
mk('Receituário — Miíase (berne)','miíase berne larvas ivermectina vaselina',{a:[
E('Retirada das larvas','procedimento','Anestesia local, incisão em cruz e remoção; ou oclusão com vaselina para as larvas saírem.'),
E('Ivermectina 6 mg','VO','1 comprimido 1x/dia por 3 dias (dose ≈ 200 mcg/kg; conferir o peso).')],nt:[Y]});
mk('Receituário — Herpes zóster','herpes zóster cobreiro aciclovir prednisolona',{a:[
E('Aciclovir 400 mg','VO','800 mg (2 comprimidos) 5x ao dia (de 4/4h, sem dose noturna) por 7 dias. A fonte escreve "2 cp de 4/4h", o que passaria da dose usual: conferir.'),
DIP(),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5,{off:1}),
E('Aciclovir creme','tópico','Aplicar 5x/dia até as lesões secarem.',{off:1})],nt:['Ajustar o aciclovir se função renal reduzida. '+Y]});
mk('Receituário — Farmacodermia','farmacodermia reação a droga loratadina prednisolona',{a:[T('Loratadina','comprimido 10 mg',10,1,24,5,5),T('Prednisolona','comprimido 20 mg',20,1,24,5,5),E('Retirar o medicamento causador','orientação','Suspender o fármaco suspeito; registrar a alergia no prontuário.')],nt:['Sinais de gravidade (bolhas, mucosas, febre, descamação): encaminhar com urgência. '+Y]});
mk('Receituário — Furunculose','furúnculo furunculose mupirocina cefalexina',{a:[
E('Mupirocina 20 mg/g (Bactroban)','tópico','3x/dia por até 10 dias.'),
E('Compressa morna','local','2x/dia sobre a lesão.'),
T('Cefalexina','cápsula 500 mg',500,1,6,7,28)],nt:['Abscesso grande: drenagem. '+Y]});
mk('Receituário — Pitiríase versicolor (adulto, VO)','pitiríase versicolor pano branco fluconazol itraconazol cetoconazol shampoo',{a:[
E('Cetoconazol shampoo','tópico','Aplicar no couro cabeludo e nas lesões; deixar agir e enxaguar.'),
T('Itraconazol','cápsula 100 mg',100,2,24,7,14,{off:1,nt:'200 mg/dia por 7 dias (conferir)'}),
T('Fluconazol','comprimido 150 mg',150,3,24,1,3,{off:1,nt:'450 mg em dose única, segundo a fonte'})],nt:[Y]});
mk('Receituário — Psoríase','psoríase calcipotriol betametasona tracolimo metotrexato',{a:[
E('Calcipotriol + betametasona pomada','tópico','2x/dia nas placas por 4 semanas.'),
E('Tacrolimo pomada','tópico','Em dobras e face.',{off:1}),
E('Lesões extensas: metotrexato 10 mg','VO SEMANAL','1 comprimido UMA vez por semana (nunca diário). Só com acompanhamento especializado, hemograma e função hepática/renal; contraindicado na gestação.',{off:1})],nt:[Y]});
mk('Receituário — Verruga plantar (olho de peixe)','verruga plantar olho de peixe crioterapia nitrogênio líquido',{a:[E('Crioterapia com nitrogênio líquido','procedimento','2 ciclos de congelamento na lesão, com pequena margem. Espera-se necrose da verruga e queda em alguns dias.')],nt:[Y]});
/* ---------- Cardio / renal / GU ---------- */
mk('Receituário — Insuficiência cardíaca (uso contínuo)','insuficiência cardíaca icc losartana carvedilol furosemida espironolactona aas sinvastatina',{a:[
T('Losartana','comprimido 50 mg',50,1,12,30,60),
T('Carvedilol','comprimido 6,25 mg',6.25,1,12,30,60,{nt:'Dose individualizada (6,25 a 25 mg 12/12h)'}),
T('Furosemida','comprimido 40 mg',40,1,24,30,30,{nt:'Pela manhã (a fonte usa de manhã e às 16h)'}),
T('Espironolactona','comprimido 50 mg',50,1,24,30,30,{nt:'Às 16h; checar potássio'}),
T('AAS','comprimido 100 mg',100,1,24,30,30,{nt:'Após o almoço'}),
T('Sinvastatina','comprimido 20 mg',20,1,24,30,30,{nt:'À noite'})],nt:['Modelo de uso contínuo: individualizar doses, checar PA, creatinina e potássio. '+Y]});
mk('Receituário — Uso contínuo (HAS + DM + dislipidemia)','hipertensão diabetes losartana metformina glifage sinvastatina carvedilol nifedipino omeprazol',{a:[
T('Losartana','comprimido 50 mg',50,1,12,30,60),
T('Metformina XR','comprimido 500 mg',500,1,12,30,60,{nt:'Após o almoço e o jantar'}),
T('Sinvastatina','comprimido 20 mg',20,1,24,30,30),
T('Carvedilol','comprimido 12,5 mg',12.5,1,12,30,60,{off:1}),
T('Nifedipino','comprimido 20 mg',20,1,12,30,60,{off:1}),
T('Omeprazol','comprimido 20 mg',20,1,12,30,60,{off:1})],nt:['Modelo de uso contínuo: confirme doses com a condição e o exame do paciente. '+Y]});
mk('Receituário — ITU (variações)','itu infecção urinária levofloxacino norfloxacino fosfomicina nitrofurantoína pyridium sepurin',{a:[
T('Levofloxacino','comprimido 500 mg',500,1,24,7,7),
T('Norfloxacino','comprimido 400 mg',400,1,12,10,20,{off:1}),
T('Nitrofurantoína','cápsula 100 mg',100,1,6,7,28,{off:1}),
E('Fosfomicina trometamol 3 g (Monuril)','VO','1 envelope dissolvido em 50–75 mL de água, em jejum, à noite, depois de urinar. A fonte prescreve 2 doses em dias consecutivos; a posologia usual é dose única: conferir.',{off:1}),
T('Fenazopiridina (Pyridium) 100 mg','comprimido',100,1,8,2,6,{off:1,nt:'Apenas 2 dias; urina fica alaranjada'}),
T('Ceclor 750 (cefaclor)','comprimido 750 mg',750,1,12,7,14,{off:1}),
DIP()],nt:['Gestante: usar a receita de ITU na gestação. '+Y]});
mk('Receituário — Cálculo renal (conduta expectante)','cálculo renal litíase doxazosina buscopan tylex cetoprofeno',{a:[
T('Doxazosina','comprimido 2 mg',2,1,24,14,14,{nt:'Às 22h; avisar sobre tontura/hipotensão'}),
CET(5),
T('Paracetamol + codeína (Tylex) 500+30','comprimido',500,1,6,3,12,{off:1,sos:'dor forte',nt:'Controle especial'}),
E('Orientação','coar a urina','Peneirar a urina para observar a saída do cálculo; retornar se febre, dor refratária ou anúria.')],nt:[Y]});
mk('Receituário — Balanopostite / fimose','balanopostite fimose miconazol nistatina fluconazol hidrocortisona postec',{a:[
E('Nitrato de miconazol 2% creme','tópico','2x/dia nas lesões por 10 dias.'),
E('Nistatina creme','tópico','1x/dia por 7 dias.',{off:1}),
T('Fluconazol','cápsula 150 mg',150,1,24,1,1,{off:1,nt:'Dose única'}),
E('Hidrocortisona 1% creme','tópico','2x/dia nas lesões (curto prazo).',{off:1}),
E('Fimose: corticoide tópico (ex.: Postec)','tópico','2x/dia na glande por 3 semanas, com retração suave.',{off:1})],nt:['Higiene local; cirurgia se necessário. '+Y]});
mk('Receituário — Gonorreia (antiga: não recomendada)','gonorreia ciprofloxacino azitromicina',{a:[
E('Ver a receita "PS adulto — Uretrite gonocócica"','recomendado','Ceftriaxona 500 mg IM dose única + azitromicina 1 g VO dose única.')],
nt:['O receituário-fonte usa ciprofloxacino 500 mg 12/12h por 10 dias + azitromicina 1 g. Por resistência, o esquema atual recomendado é com ceftriaxona: use a receita "PS adulto — Uretrite gonocócica / não gonocócica". '+Y]});
/* ---------- Digestivo ---------- */
mk('Receituário — Vômitos / náuseas (adulto)','vômito náusea ondansetrona metoclopramida dimenidrato bromoprida',{a:[
T('Ondansetrona','comprimido 8 mg',8,1,12,3,6,{nt:'Também em filme sublingual (Vonau flash 8 mg)'}),
T('Metoclopramida','comprimido 10 mg',10,1,8,3,9,{off:1,nt:'Máx. 30 mg/dia; evitar uso prolongado'}),
T('Dimenidrato (Dramin) 100 mg','comprimido',100,1,6,3,12,{off:1}),
T('Bromoprida','comprimido 10 mg',10,1,8,3,9,{off:1})],nt:[Y]});
mk('Receituário — Cólica abdominal / gases','cólica gases buscopan simeticona luftal',{a:[
T('Butilescopolamina + dipirona (Buscopan composto)','comprimido',1,1,8,3,9,{sos:'cólica abdominal'}),
T('Simeticona','comprimido 40 mg',40,1,8,3,9,{sos:'gases'}),
E('Simeticona gotas 75 mg/mL','VO','13 gotas de 8/8h se gases.',{off:1})],nt:[Y]});
mk('Receituário — Diarreia / GECA (adulto, esquema completo)','diarreia geca virose floratil ondansetrona bromoprida sro dramin 20 bio',{a:[
T('Saccharomyces boulardii (Floratil)','cápsula 200 mg',200,1,12,5,10,{nt:'Longe das refeições'}),
T('Bromoprida','comprimido 10 mg',10,1,8,5,15,{off:1}),
T('Ondansetrona','comprimido 4 mg',4,1,6,3,12,{off:1,sos:'vômitos'}),
T('Butilescopolamina','comprimido 10 mg',10,1,8,3,9,{off:1,sos:'cólica'}),
E('SRO','reidratação','1 envelope em 1 L de água filtrada ou fervida; consumir em 24 h, guardar na geladeira.'),
DIP()],nt:['Com sangue: ver "Disenteria". '+Y]});
mk('Receituário — Caxumba','caxumba parotidite dipirona cataflan compressa',{a:[
T('Dipirona','comprimido 500 mg',500,1,6,3,12,{sos:'febre'}),
T('Diclofenaco potássico (Cataflan) 50 mg','comprimido',50,1,6,3,12,{aine:1,off:1,sos:'dor ou febre'}),
E('Compressa fria','local','20 min de 6/6h por 5 dias.'),
E('Orientações','medidas','2 L de água por dia, dieta branda, repouso, evitar esforço físico; retornar se piora, dor testicular ou rigidez de nuca.')],nt:['Notificação compulsória. '+Y]});
mk('Receituário — Anemia ferropriva (VO + ácido fólico)','anemia ferropriva sulfato ferroso ácido fólico noripurum',{a:[
T('Sulfato ferroso','comprimido 40 mg ferro elementar',40,1,24,30,30,{nt:'1 cp ao dia por 30 dias (dose conforme o ferro elementar do rótulo)'}),
T('Ácido fólico','comprimido 5 mg',5,1,24,30,30),
E('Hospital-dia: Noripurum 50 mg/mL','EV','2 amp. em 250 mL de SF 1x por semana por 4 semanas (8 amp.).',{off:1})],nt:['A fonte lista 50 mg/mL (Noripurum EV 100 mg/5 mL = 20 mg/mL); confira o rótulo da apresentação antes de preparar. '+Y]});
mk('Receituário — Constipação','constipação óleo mineral lactulose naturetti',{a:[
E('Lactulose xarope','VO','15 mL de 12/12h até evacuar; interromper e reiniciar se ressecamento.'),
E('Óleo mineral','VO','1 colher de sopa 2x/dia por 30 dias (não usar em quem se engasga ou é acamado).',{off:1}),
E('Naturetti cápsulas','VO','1 cápsula de 12/12h se constipação.',{off:1}),
E('Orientações','medidas','Fibras, 2 L de água por dia, não fazer força excessiva ao evacuar.')],nt:[Y]});
mk('Receituário — Gastrite / DRGE (opções)','gastrite drge pantoprazol omeprazol domperidona bromoprida mylanta',{a:[
T('Pantoprazol','comprimido 40 mg',40,1,24,60,60,{nt:'Em jejum pela manhã'}),
T('Omeprazol','cápsula 20 mg',20,1,24,60,60,{off:1,nt:'20–40 mg em jejum pela manhã'}),
T('Domperidona','comprimido 10 mg',10,1,8,30,90,{off:1,nt:'30 min antes das refeições'}),
T('Bromoprida','comprimido 10 mg',10,1,8,5,15,{off:1,sos:'náusea ou vômito'}),
E('Hidróxido de Al/Mg + simeticona (Mylanta Plus)','VO','3 colheres de chá entre as refeições.',{off:1})],nt:['Ranitidina (listada no receituário-fonte) foi retirada do mercado brasileiro. '+Y]});
mk('Receituário — Dor abdominal por giardíase/amebíase e cisto pilonidal','giardíase amebíase cisto pilonidal metronidazol ciprofloxacino buscopan',{a:[
T('Metronidazol','comprimido 400 mg',400,1,8,7,21),
T('Ciprofloxacino','comprimido 500 mg',500,1,12,7,14,{off:1,nt:'Cisto pilonidal infectado'}),
T('Butilescopolamina composta','comprimido',1,1,8,3,9,{sos:'cólica'})],nt:['Cisto pilonidal abscedado: drenagem cirúrgica. '+Y]});
mk('Receituário — Fissura anal','fissura anal lactulose proctyl',{a:[
E('Lactulose xarope','VO','15 mL de 12/12h por 7 dias.'),
E('Pomada anestésica anal (ex.: Proctyl)','tópico','3x/dia por 5 dias.')],nt:['Amolecer as fezes; banho de assento morno. '+Y]});
/* ---------- Osteoarticular / dor / GO ---------- */
mk('Receituário — Dor lombar / muscular (opções)','lombalgia dor muscular tenoxicam celecoxibe tandrilax flancox toragesic ciclobenzaprina',{a:[
CET(5),
T('Ciclobenzaprina','comprimido 10 mg',10,1,24,5,5,{nt:'À noite'}),
T('Dipirona','comprimido 500 mg',500,2,6,3,24,{sos:'dor'}),
T('Tenoxicam','comprimido 20 mg',20,1,24,5,5,{aine:1,off:1}),
T('Celecoxibe','cápsula 200 mg',200,1,12,5,10,{aine:1,off:1}),
T('Paracetamol + codeína 500+30','comprimido',500,1,6,3,12,{off:1,sos:'dor forte',nt:'Controle especial'}),
T('Tramadol','comprimido 50 mg',50,1,12,5,10,{off:1,sos:'dor'}),
E('Cetorolaco sublingual 10 mg (Toragesic)','SL','1 comprimido de 8/8h por 5 dias.',{off:1,aine:1}),
E('Compressas','local','Frias nas primeiras 48 h (20 min de 6/6h) e mornas depois.')],nt:['Evitar AINE em gestante, úlcera e doença renal. '+Y]});
mk('Receituário — Gota (crise)','gota artrite gotosa colchicina prednisolona',{a:[
T('Colchicina','comprimido 0,5 mg',0.5,1,12,3,6),
T('Prednisolona','comprimido 20 mg',20,1,24,5,5),
T('Dipirona','comprimido 500 mg',500,2,6,3,24,{sos:'dor'})],nt:['Atenção a doença renal e diarreia pela colchicina. '+Y]});
mk('Receituário — Metrorragia / sangramento vaginal','metrorragia sangramento vaginal ácido tranexâmico ponstan meloxicam',{a:[
T('Ácido mefenâmico (Ponstan)','comprimido 500 mg',500,1,8,3,9,{aine:1}),
T('Ácido tranexâmico','comprimido 250 mg',250,2,6,5,40,{nt:'Contraindicado se história de trombose'}),
T('Meloxicam','comprimido 15 mg',15,1,24,5,5,{aine:1,off:1})],nt:['Avaliar gravidez, hemodinâmica e hemoglobina antes. '+Y]});
mk('Receituário — Hemorroida e fissura (esquema completo)','hemorroida daflon metamucil proctyl dipirona óleo mineral',{a:[
E('Pomada anal (ex.: Proctyl)','tópico','Aplicar na região afetada, introduzindo o conteúdo no ânus, de 8/8h por 10 dias.'),
T('Daflon 500 (diosmina + hesperidina) 450+50 mg','comprimido',500,1,12,28,56),
E('Metamucil','sachê','1 sachê em 1 copo de água, 1x/dia por 10 dias.',{off:1}),DIP(),
E('Orientações','medidas','Mais fibras, 2 L de água por dia, não forçar, preferir ducha higiênica.')],nt:[Y]});
mk('Receituário — Erisipela pós-infecção (pomada manipulada)','erisipela pomada manipulada rifamicina cetoconazol neomicina dexametasona ciprofloxacino',{a:[
E('Rifamicina spray','tópico','2x/dia após limpeza; aguardar secar 15 min e depois aplicar a mistura de cremes.'),
E('Mistura de pomadas (em partes iguais)','manipulada','Cetoconazol 30 g (2 tubos) + neomicina 15 g (4 tubos) + dexametasona 1 mg/g 10 g (6 tubos). Aplicar em camada espessa nas lesões, mantendo os membros em repouso.'),
T('Ciprofloxacino','comprimido 500 mg',500,1,12,14,28,{off:1,nt:'Para erisipela ativa, o primeiro esquema costuma ser penicilina/cefalexina: conferir.'})],nt:[Y]});
mk('Receituário — Prescrição hospitalar modelo (PS)','prescrição hospitalar modelo dieta sf dipirona bromoprida cetoprofeno buscopan tramadol ceftriaxona insulina escala',{a:[
E('Dieta e acesso','cuidados','Dieta oral (restrita para hipertensos e/ou diabéticos). Acesso periférico salinizado.'),
E('SF 0,9% 500 mL','EV','Manutenção de 12/12h.'),
E('Dipirona 500 mg/mL','EV','1 amp. EV de 6/6h se dor ou temperatura axilar > 37,8 ºC.'),
E('Bromoprida','EV','1 amp. EV + SF 0,9% 100 mL de 8/8h se náusea ou vômitos.'),
E('Cetoprofeno','EV','1 amp. EV + SF 0,9% 100 mL de 12/12h.',{aine:1}),
E('Buscopan','EV','1 amp. EV de 8/8h se dor abdominal.'),
E('Tramadol 50 mg/mL','EV','1 amp. EV + SF 0,9% 100 mL de 6/6h se dor.'),
E('Ceftriaxona 1 g','EV','1 g EV + SF 0,9% 100 mL, 1x ao dia.',{off:1}),
E('Insulina regular SC (escala)','SC','Glicemia 150–199: 2 UI; 200–249: 4 UI; 250–299: 6 UI; 300–349: 8 UI; 350–399: 10 UI; > 400: 12 UI.',{off:1})],nt:['Modelo de prescrição de PS: conferir alergias e função renal. '+Y]});
mk('Receituário — Queda de cabelo / unhas frágeis / hipovitaminose','queda de cabelo unhas biotina polivitamínico fraqueza hipovitaminose',{a:[
E('Biotina','VO','1 comprimido 1x/dia por 90 dias.'),
E('Polivitamínico + poliminerais','VO','1 comprimido 1x/dia no almoço por 30 dias.',{off:1}),
E('Complexo manipulado (pantotenato de cálcio, cistina, tiamina, queratina, levedura, ácido aminobenzoico)','VO','1 comprimido de 8/8h por 90 dias.',{off:1})],nt:['Investigar ferritina, tireoide e outras causas. '+Y]});
})();

