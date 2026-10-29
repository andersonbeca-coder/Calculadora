(function(){
const {f0,f1,f2}=window.__sp_b09_0;


/* ---------- tabela de doses por peso ---------- */
// [categoria, nome, apresentação, mg/mL, dose mín, dose máx, 'd' por dose | 'D' por dia, nº doses/dia, intervalo/via, máximo, macete, mg por gota, observação]
const DR=[
['Analgésicos e antitérmicos','Dipirona gotas','500 mg/mL',500,10,12,'d',4,'6/6h VO','20 gotas/dose; ≥ 3 meses ou 5 kg','peso × 0,4 = gotas',25,'1 gota = 25 mg. Faixa usual: 10–25 mg/kg/dose (0,4 a 1 gota/kg)'],
['Analgésicos e antitérmicos','Dipirona solução','50 mg/mL',50,10,12,'d',4,'6/6h VO','','peso × 0,2 = mL',0,''],
['Analgésicos e antitérmicos','Dipirona injetável','500 mg/mL',500,10,12,'d',4,'6/6h EV/IM','','peso × 0,02 = mL',0,'≥ 3 meses'],
['Analgésicos e antitérmicos','Ibuprofeno gotas','100 mg/mL',100,5,10,'d',4,'6/6h VO','200 mg/dose ou 20 gotas','1 gota por kg',10,'1 gota = 10 mg'],
['Analgésicos e antitérmicos','Paracetamol gotas','200 mg/mL',200,10,15,'d',5,'4/4h VO (máx. 5x/dia)','35 gotas/dose','',13,'~1 gota = 13 mg (varia com a marca)'],
['Antieméticos','Ondansetrona filme','4 mg/filme',4,0.1,0.3,'d',3,'8/8h','4 mg/dose','peso × 0,05 = filmes',0,''],
['Antieméticos','Ondansetrona injetável','2 mg/mL',2,0.1,0.3,'d',3,'8/8h EV (sem diluir)','','peso × 0,1 = mL',0,''],
['Antieméticos','Bromoprida gotas','4 mg/mL',4,0.17,0.17,'d',3,'8/8h VO','20 mg/dose','peso = gotas',0.17,'1 gota = 0,17 mg'],
['Antieméticos','Bromoprida injetável','5 mg/mL',5,0.2,0.2,'d',3,'8/8h EV','','peso × 0,04 = mL; diluir em 50 mL de SF ou SG 5%',0,''],
['Antieméticos','Dramin B6 gotas','25 mg/mL',25,1.25,1.25,'d',3,'6–8h VO','2–6 a: 60 gotas/dia; 6–12 a: 120; > 12 a: 320','peso = gotas',1.25,'1 gota = 1,25 mg'],
['Antieméticos','Dramin B6 DL EV','30 mg/10 mL',3,1.25,1.25,'d',3,'EV, diluído em 50 mL de SF 0,9%','300 mg/dia','',0,''],
['Antieméticos','Dramin B6 IM','50 mg/mL',50,1.25,1.25,'d',3,'IM','','peso × 0,025 = mL',0,''],
['Antialérgicos','Hidroxizina solução','2 mg/mL',2,0.7,0.7,'d',3,'8/8h VO','≤ 40 kg: 2 mg/kg/dia; > 40 kg: 100 mg/dia','peso ÷ 3 = mL (dose menor: peso ÷ 4 = 0,5 mg/kg)',0,'qualquer idade'],
['Antialérgicos','Prometazina injetável','25 mg/mL',25,0.3,0.3,'d',3,'IM','25 mg/dose','peso × 0,01 = mL',0,'acima de 2 anos'],
['Antialérgicos','Difenidramina injetável','50 mg/mL',50,1.6,1.6,'d',4,'EV/IM','300 mg/dia','peso × 0,03 = mL',0,'acima de 2 anos'],
['Corticoides','Prednisolona solução','3 mg/mL',3,1,1,'D',1,'1x/dia pela manhã','40 mg/dia','peso ÷ 3 = mL',0,''],
['Corticoides','Hidrocortisona EV','100 mg pó (reconstituir em 2 mL AD)',50,4,4,'d',1,'EV: diluir em 20 mL de SF em 2 min','','peso × 0,08 = mL',0,'dose varia 0,56–8 mg/kg/dia conforme quadro'],
['Corticoides','Metilprednisolona EV','125 mg pó (125 mg/2 mL)',62.5,1,1,'d',1,'EV: diluir em 50 mL de SF em 30 min','125 mg/dia','peso × 0,016 = mL',0,''],
['Corticoides','Dexametasona injetável','4 mg/mL',4,0.6,0.6,'D',1,'IM puro','12–16 mg/dia','peso × 0,15 = mL',0,''],
['Anafilaxia / RCP','Adrenalina IM (anafilaxia)','1 mg/mL',1,0.01,0.01,'d',1,'IM puro, repetir até 3x a cada 15 min','0,3–0,5 mg','peso ÷ 100 = mL',0,''],
['Anafilaxia / RCP','Adrenalina na RCP (1:10 — 1 mL + 9 mL SF)','0,1 mg/mL',0.1,0.01,0.01,'d',1,'EV/IO a cada 3–5 min','1 mg','peso ÷ 10 = mL da diluição',0,''],
['Anafilaxia / RCP','Amiodarona na PCR','50 mg/mL',50,5,5,'d',1,'EV em bolus','300 mg','peso ÷ 10 = mL',0,''],
['Anafilaxia / RCP','Cálcio 10% na PCR','100 mg/mL',100,60,60,'d',1,'EV puro, bolus lento (até 3x)','3 g/dose','peso × 0,6 = mL',0,''],
['Anafilaxia / RCP','Lidocaína 2% sem vasoconstritor','20 mg/mL',20,1,1,'d',1,'EV em bolus lento','75–100 mg','peso × 0,05 = mL',0,''],
['Anafilaxia / RCP','Bicarbonato de sódio 8,4%','1 mEq/mL (diluir 1:1 → 0,5 mEq/mL)',0.5,1,1,'d',1,'EV lento (mEq/kg)','','peso × 2 = mL da diluição 1:1',0,'dose em mEq/kg'],
['Anafilaxia / RCP','Glicose 10% (hipoglicemia)','0,1 g/mL',0.1,0.5,0.5,'d',1,'EV em bolus (g/kg)','12,5% máx. em veia periférica','peso × 5 = mL',0,'dose em g/kg (0,5–1 g/kg)'],
['Anafilaxia / RCP','Glicose 25% ou 50% diluída a 12,5%','0,125 g/mL',0.125,0.5,0.5,'d',1,'EV em bolus (g/kg)','','peso × 4 = mL (25%: 20 mL + 20 mL AD; 50%: 10 mL + 30 mL AD)',0,'dose em g/kg'],
['Antibióticos VO','Claritromicina 250 mg/5 mL','250 mg/5 mL',50,7.5,7.5,'d',2,'12/12h','500 mg/dose; > 3 meses','peso × 0,15 = mL',0,''],
['Antibióticos VO','Claritromicina 125 mg/5 mL','125 mg/5 mL',25,7.5,7.5,'d',2,'12/12h','500 mg/dose','peso × 0,3 = mL',0,''],
['Antibióticos VO','Amoxicilina 250 mg/5 mL','250 mg/5 mL',50,50,90,'D',2,'12/12h','1750 mg/dia','peso ÷ 2 = mL (≈ 50 mg/kg/dia)',0,''],
['Antibióticos VO','Amoxicilina 400 mg/5 mL','400 mg/5 mL',80,50,90,'D',2,'12/12h','1750 mg/dia','peso ÷ 3 = mL (≈ 53 mg/kg/dia)',0,''],
['Antibióticos VO','Azitromicina 200 mg/5 mL','200 mg/5 mL',40,10,10,'D',1,'1x/dia','500 mg/dia','peso ÷ 4 = mL',0,''],
['Antibióticos VO','Amoxicilina + clavulanato 250/62,5 por 5 mL','250 + 62,5 mg/5 mL',50,20,40,'D',3,'8/8h (dose pela amoxicilina)','1500 mg/dia','peso ÷ 4 = mL (≈ 10 mg/kg/dia de clavulanato)',0,'doses maiores aumentam diarreia'],
['Antibióticos VO','Amoxicilina + clavulanato 400/57 por 5 mL','400 + 57 mg/5 mL',80,25,45,'D',2,'12/12h','1750 mg/dia','peso ÷ 3,5 = mL',0,''],
['Antibióticos VO','Amoxicilina + clavulanato 600/42,9 por 5 mL','600 + 42,9 mg/5 mL',120,90,90,'D',2,'12/12h','4000 mg/dia','peso ÷ 2,7 = mL (dose alta sem aumentar clavulanato)',0,''],
['Antibióticos VO','Cefalexina 250 mg/5 mL','250 mg/5 mL',50,25,100,'D',4,'6/6h (12/12h em impetigo/faringite)','4 g/dia','peso ÷ 4 = mL de 6/6h',0,''],
['Antibióticos VO','Cefaclor 250 mg/5 mL','250 mg/5 mL',50,20,40,'D',3,'8/8h','1 g/dia','',0,''],
['Antibióticos VO','Cefaclor 375 mg/5 mL','375 mg/5 mL',75,20,40,'D',2,'12/12h','1 g/dia','',0,''],
['Antibióticos VO','Axetilcefuroxima 250 mg/5 mL','250 mg/5 mL',50,20,30,'D',2,'12/12h','1 g/dia','',0,''],
['Antibióticos EV','Amoxicilina + clavulanato EV','1 g + 200 mg (50 mg/mL após 20 mL AD)',50,25,25,'d',3,'0–3 m: 12/12h; > 3 m a 12 a: 8/8h. Diluir em 50–100 mL de SF','1000 mg de amoxicilina/dose','peso × 0,5 = mL',0,''],
['Antibióticos EV','Ceftriaxona EV','1 g pó (reconstituir 10 mL AD → 100 mg/mL)',100,100,100,'D',1,'1x/dia, diluir em 100 mL de SF em 60 min','4 g/dia','peso = mL',0,'dose 50–100 mg/kg/dia'],
['Antibióticos EV','Claritromicina EV','500 mg pó (reconstituir em 10 mL de AD → 50 mg/mL)',50,7.5,7.5,'d',2,'EV lento, 12/12h','500 mg/dose','peso × 0,15 = mL',0,''],
['Antibióticos EV','Ceftriaxona IM','1 g pó (reconstituir 3,5 mL AD)',286,100,100,'D',1,'IM profundo 1x/dia','','peso × 0,35 = mL',0,''],
['Antibióticos EV','Oxacilina','500 mg pó (reconstituir 5 mL → 100 mg/mL)',100,50,100,'D',4,'6/6h, diluir em 50–100 mL de SF/SG/RL','12 g/dia','peso × 0,25 = mL',0,''],
['Antibióticos EV','Ampicilina','1 g pó (reconstituir 3 mL)',333,100,400,'D',4,'6/6h, diluir em 50–100 mL','< 20 kg: 300 mg/kg/dia; > 20 kg: 12 g/dia','peso × 0,075 = mL',0,''],
['Antibióticos EV','Gentamicina < 5 anos','40 mg/mL',40,5,5,'D',1,'1x/dia, diluir em 50–100 mL','','',0,'5 mg/kg/dia'],
['Antibióticos EV','Gentamicina ≥ 5 anos','40 mg/mL',40,7.5,7.5,'D',1,'1x/dia, diluir em 50–100 mL','','peso × 0,19 = mL',0,'7,5 mg/kg/dia'],
['Antibióticos EV','Clindamicina EV','150 mg/mL',150,20,40,'D',3,'8/8h, diluir antes de infundir','2700 mg/dia','peso × 0,09 = mL (40 mg/kg/dia)',0,''],
['Antibióticos EV','Vancomicina','500 mg pó (reconstituir 10 mL AD)',50,10,10,'d',4,'6/6h, > 1 mês','2000 mg/dose','',0,''],
['Antibióticos EV','Meropenem','500 mg pó (reconstituir 10 mL)',50,40,40,'d',3,'8/8h, diluir em 50 mL de SF/SG 5%','6 g/dia','peso × 0,8 = mL',0,''],
['Antibióticos EV','Ampicilina + sulbactam','1,5 g (reconstituir 3 mL AD)',500,100,200,'D',3,'8/8h, diluir em 50 mL','','peso × 0,13 = mL (200 mg/kg/dia)',0,''],
['Antibióticos EV','Metronidazol — ataque','5 mg/mL bolsa 100 mL',5,15,15,'d',1,'EV em 60 min','50 mg/kg/dia; 4 g/dia','peso × 3 = mL',0,'manutenção 7,5 mg/kg: > 4 sem 8/8h; 1–4 sem 12/12h (peso × 1,5 mL)'],
['Antibióticos EV','Metronidazol — manutenção','5 mg/mL bolsa 100 mL',5,7.5,7.5,'d',3,'8/8h (> 4 semanas)','','peso × 1,5 = mL',0,''],
['Arritmias / bradicardia','Adenosina — 1ª dose','3 mg/mL',3,0.1,0.1,'d',1,'bolus rápido em veia de membro superior + 20 mL SF','6 mg','peso × 0,033 = mL',0,'usar torneira de 3 vias'],
['Arritmias / bradicardia','Adenosina — 2ª dose','3 mg/mL',3,0.2,0.2,'d',1,'bolus rápido + 20 mL SF','12 mg','peso × 0,066 = mL',0,''],
['Arritmias / bradicardia','Atropina','0,25 mg/mL',0.25,0.02,0.02,'d',1,'EV em bolus; pode repetir 1x em 5 min','0,5 mg ou 2 mL/dose','',0,''],
['Asma grave','Sulfato de magnésio 50%','500 mg/mL',500,25,75,'d',1,'EV em 20 min, dose única; diluir em 100 mL de SF','2 g (4 mL)','peso × 0,1 = mL',0,'média 50 mg/kg'],
['Asma grave','Sulfato de magnésio 10%','100 mg/mL (1 mL = 100 mg)',100,25,75,'d',1,'EV em 20 min, dose única; diluir em 100 mL de SF','2 g (20 mL)','peso × 0,5 = mL (50 mg/kg)',0,'média 50 mg/kg; usado apenas 1 vez'],
['Sedação / IOT','Midazolam','15 mg/3 mL (5 mg/mL)',5,0.2,0.2,'d',1,'IM/EV','10 mg/dose','peso × 0,04 = mL',0,''],
['Sedação / IOT','Cetamina','50 mg/mL',50,1,4,'d',1,'EV 1–2 mg/kg; IM até 4 mg/kg','','',0,''],
['Sedação / IOT','Propofol','10 mg/mL',10,1,3,'d',1,'EV lento, diluído em 10 mL de SF','manutenção 7,5–18 mg/kg/h','',0,''],
['Sedação / IOT','Etomidato','2 mg/mL',2,0.2,0.3,'d',1,'EV sem diluir','','',0,''],
['Sedação / IOT','Fentanil','50 mcg/mL',50,0.002,0.004,'d',1,'EV lento, diluído em 10 mL SF (mcg/kg)','50 mcg/dose','',0,'dose 2–4 mcg/kg'],
['Sedação / IOT','Rocurônio','10 mg/mL',10,1,2,'d',1,'EV em bolus','','',0,'IOT: 0,6–1,2 mg/kg (sequência rápida: 1,2 mg/kg)'],
['Sedação / IOT','Succinilcolina','10 mg/mL (reconstituir em 10 mL AD)',10,1,2,'d',1,'EV em bolus','150 mg/dose','',0,'dose padrão 1–2 mg/kg'],
['Anticonvulsivantes','Diazepam EV','5 mg/mL',5,0.2,0.5,'d',1,'EV lento, pode repetir até 3x a cada 5 min','20 mg/dia','',0,''],
['Anticonvulsivantes','Fenitoína','50 mg/mL (ampola 5 mL)',50,20,20,'d',1,'EV em 20 min; diluir em 100 mL de SF. ≤ 1–3 mg/kg/min ou 50 mg/min. Repetir 10 mg/kg se persistir','1000 mg/dose; 20 mg/kg','',0,'monitor cardíaco; diluir a 10 mg/mL e infundir em 20–30 min'],
['Anticonvulsivantes','Fenobarbital','100 mg/mL (ampola 2 mL)',100,20,20,'d',1,'EV em 20 min; diluir em 100 mL de SF. Repetir 10 mg/kg se persistir','40 mg/kg total','',0,'suporte respiratório pode ser necessário'],
['Antibióticos VO','Cefadroxila 250 mg/5 mL','250 mg/5 mL',50,25,50,'D',2,'12/12h','','0,5–1 mL/kg/dia',0,''],
['Antibióticos VO','Eritromicina 250 mg/5 mL','250 mg/5 mL',50,30,50,'D',4,'6/6h','','',0,''],
['Antibióticos VO','Sulfametoxazol + trimetoprima 200 + 40 mg/5 mL','sulfa 40 mg/mL',40,40,40,'D',2,'12/12h','','1 mL/kg/dia de sulfa em 2 doses (peso ÷ 2 mL por dose); Bactrim F',0,'dose pela sulfa (TMP 8 mg/kg/dia)'],
['Analgésicos e antitérmicos','Ibuprofeno solução 20 mg/mL','20 mg/mL',20,5,10,'d',4,'6/6h','','0,25–0,5 mL/kg/dose',0,''],
['Anti-inflamatórios','Cetoprofeno xarope 1 mg/mL','1 mg/mL',1,0.5,1,'d',3,'8/8h por 5 dias','','1 mL/kg/dose',0,'evitar em dengue'],
['Antiparasitários','Praziquantel 150 mg (teníase)','150 mg/comprimido',150,10,10,'d',1,'dose única pela manhã','','',0,'resultado em comprimidos'],
['Laxativos','Polietilenoglicol (PEG 4000) 10 g/sachê','10.000 mg/sachê',10000,500,1000,'D',1,'1x/dia dissolvido em leite/suco','','0,5–1 g/kg/dia',0,'resultado em sachês'],
['Anti-hipertensivos','Nifedipina 10 mg cápsula (conteúdo ≈ 0,3 mL)','≈ 33 mg/mL',33.3,0.5,1,'D',3,'fracionar em 3 doses (conferir)','','aspirar com seringa de insulina',0,'urgência hipertensiva; conferir no serviço'],
['Anticonvulsivantes','Oxcarbazepina 300 mg/5 mL','60 mg/mL',60,10,30,'D',2,'12/12h','','0,2–0,5 mL/kg/dia',0,''],
['Anticonvulsivantes','Difenilhidantoína 100 mg/5 mL (manutenção VO)','20 mg/mL',20,10,10,'D',2,'12/12h','','0,5 mL/kg/dia',0,''],
['Broncodilatadores','Fenoterol xarope 2,5 mg/5 mL','0,5 mg/mL',0.5,0.5,0.5,'D',4,'6/6h até melhora da tosse','','0,3 mL/kg/dose (preferir via inalatória)',0,''],
['Antibióticos EV','Cefalotina','1 g pó (diluir em 10 mL AD → 100 mg/mL)',100,80,160,'D',4,'6/6h EV/IM (padrão 100 mg/kg/dia)','','peso ÷ 4 = mL por dose',0,''],
['Antibióticos EV','Cefepime','1–2 g pó (100 mg/mL; rediluir a 40 mg/mL em SF, 30 min)',100,50,50,'d',3,'8/8h EV','2 g/dose','peso ÷ 2 = mL por dose',0,''],
['Antibióticos EV','Ceftazidima','1–2 g pó (100 mg/mL; rediluir a 40 mg/mL, 20 min)',100,100,150,'D',3,'8/8h EV/IM (IM 250 mg/mL)','6 g/dia','peso ÷ 3 = mL por dose (dose mínima)',0,''],
['Antibióticos EV','Amicacina','50 mg/mL (100 mg/2 mL)',50,15,15,'D',3,'8/8h ou 1x/dia; diluir a 5 mg/mL','1,5 g/dia','',0,'ajustar intervalo se ClCr < 50'],
['Antibióticos EV','Ciprofloxacino (pediatria)','comprimido/FA 200 mg/100 mL',2,10,10,'D',2,'EV 10 mg/kg/dia 12/12h em 60 min (VO 20 mg/kg/dia 12/12h)','','dose EV em mg/kg/dia; resultado em mL de FA 2 mg/mL',0,''],
['Sedação / IOT','Hidrato de cloral 4%','40 mg/mL',40,10,20,'d',1,'VO (sedação)','','peso ÷ 2 = mL',0,''],
['Antieméticos','Domperidona suspensão 1 mg/mL','1 mg/mL',1,0.25,0.4,'d',3,'8/8h antes das refeições','','0,3 × peso = mL',0,''],
['Antieméticos','Ondansetrona EV','2 mg/mL (rediluir 0,08 mg/mL em SF, 15 min)',2,0.15,0.15,'d',3,'EV 8/8h','','0,075 × peso = mL',0,'VO: 2–11 anos 4 mg; ≥ 12 anos 8 mg, 8/8h'],
['Broncodilatadores','Acebrofilina 25 mg/5 mL','5 mg/mL',5,1,1,'d',2,'12/12h por 5 dias','10 mL/dose','peso ÷ 5 = mL',0,'1 mg/kg/dose'],
];
/* desloratadina e fexofenadina variam por idade, não por peso */
const DRX=[['Antialérgicos','Koide D (betametasona 0,25 + dexclorfeniramina 2 mg/5 mL)','2–6 anos: 2 mL; 6–12 anos: 2,5 mL; > 12 anos: 5–10 mL — de 8/8h ou 6/6h'],['Tosse / expectorante','Torante (hera, 15 mg/mL)','2–5 anos: 2,5 mL 8/8h; 6–12 anos: 5 mL 8/8h; > 12 anos: 5 mL 8/8h'],['Antialérgicos','Cetirizina 1 mg/mL','Somente > 2 anos: 2–5 anos = 5 mL; ≥ 6 anos = 10 mL, 1x/dia'],['Anti-leucotrieno','Montelucaste','Sachê 4 mg (Singulair baby) 1x/dia em colher de alimento pastoso frio (6 m–5 a); 2–5 anos: comprimido mastigável 4 mg/dia; 6–14 anos: mastigável 5 mg/dia; ≥ 15 anos: 10 mg/dia'],['Antibióticos EV/IM','Penicilina benzatina','< 10 kg 300.000 UI; 10–27 kg 600.000 UI; > 27 kg 1.200.000 UI (outra divisão usada: < 25 kg 600.000 UI; ≥ 25 kg 1.200.000 UI) (dose única IM)'],['Antiparasitários tópicos','Benzoato de benzila loção (sarna)','Do pescoço para baixo à noite por 5 noites seguidas, retirar no banho de manhã; repetir o esquema após 1 semana'],['Antiparasitários tópicos','Monossulfiram loção (sarna)','Corpo todo à noite por 3 noites seguidas; retirar no banho; repetir após 1 semana'],['Antiparasitários tópicos','Deltametrina xampu (piolho)','Aplicar em cabelo seco, 10 min, enxaguar; repetir lavagem nos 4 dias seguintes'],['Tópicos dermatológicos','Permanganato de potássio (banho)','1 comprimido em 3 litros de água, banhar o corpo 2x/dia por 5 dias (lesões úmidas/impetigo)'],['Tópicos dermatológicos','Nistatina creme ou nistatina + óxido de zinco (assadura)','Aplicar a cada troca de fralda após higiene, até melhora completa'],['Tópicos nasais','Cromoglicato dissódico 4%','1 aplicação em cada narina de 8/8h por 30 dias'],['Tópicos otológicos','Ciprofloxacina otológica','1 gota em cada ouvido de 6/6h por 7 dias'],['Tópicos oftalmológicos','Cloranfenicol colírio','1 gota em cada olho de 4/4h por 7 dias, após limpar com SF; alternativa ofloxacino colírio'],['Tópicos proctológicos','Minilax (enema)','Aplicar todo o conteúdo por via retal'],['Broncodilatadores','Fenoterol spray 100 mcg/jato','4 jatos de 4/4h com espaçador e máscara até melhora'],['Antialérgicos','Desloratadina 0,5 mg/mL','6–11 m: 2 mL; 1–5 a: 2,5 mL; 6–11 a: 5 mL; ≥ 12 a: 10 mL — 1x/dia (> 6 meses)'],['Antialérgicos','Fexofenadina 6 mg/mL','6 m–2 a: 2,5 mL (15 mg); 2–11 a: 5 mL (30 mg) — 12/12h; máx. 180 mg/dia (240 mg/dia off-label em urticária crônica)']];
function drRow(r,w){
 const[cat,n,ap,conc,lo,hi,mode,nd,iv,mx,mac,gt,nt]=r,div=mode==='D'?nd:1,a=w*lo/div,b=w*hi/div,mc=x=>conc?x/conc:0;
 const fm=x=>x>=100?f0(x):x>=10?f1(x):x>=1?f2(x):f2(x),unit=(lo<0.01&&hi<0.01)?'mcg':'mg',mul=(lo<0.01&&hi<0.01)?1000:1;
 let txt;
 if(!w)txt=(mode==='D'?lo+(hi!==lo?'–'+hi:'')+' mg/kg/dia':lo+(hi!==lo?'–'+hi:'')+' mg/kg/dose')+' — informe o peso';
 else{
  const U=/comprim|cápsula|capsula|sachê|filme/i.test(ap)&&!/mg\/mL/.test(ap)?' unid.':' mL';const dose=fm(a*mul)+(b!==a?'–'+fm(b*mul):'')+' '+unit+'/dose';
  const ml=conc?fm(mc(a))+(b!==a?'–'+fm(mc(b)):'')+(/comprim|sachê|filme/i.test(ap)?' unid.':' mL'):'';
  const gotas=gt?' ≈ '+f0(a/gt)+(b!==a?'–'+f0(b/gt):'')+' gotas':'';
  txt=dose+(ml?' = '+ml:'')+gotas;
 }
 return{cat,n,ap,txt,iv,mx,mac,nt};
}
/* ---------- quadro rápido (fórmulas por peso) ---------- */
const AR=(n,fn)=>DRX.push(['Quadro rápido por peso',n,fn]);
const mlx=(w,f,fm)=>w?fm(w):f;
AR('Faringotonsilite',w=>`Penicilina G benzatina IM dose única: < 25 kg = 600.000 UI; > 25 kg = 1.200.000 UI (diluir com 0,5 mL de lidocaína 2% sem vasoconstritor, aplicar lento). Amoxicilina 400 mg/5 mL: ${w?f1(w/3)+' mL':'peso ÷ 3'} 12/12h por 10 dias. Azitromicina 200 mg/5 mL: ${w?f1(w/4)+' mL':'peso ÷ 4'} 1x/dia por 5 dias. Febre reumática (profilaxia/tratamento): azitromicina peso ÷ 2 (conforme fonte). Claritromicina 250 mg/5 mL: 7,5 mg/kg/dose 2x/dia (máx. 250 mg/dose) = ${w?f1(w*0.15)+' mL':'peso × 0,15 mL'}, por 10 dias.`);
AR('Pneumonia / OMA / rinossinusite (90 mg/kg/dia)',w=>`Amoxicilina 400 mg/5 mL: ${w?f1(w*0.56)+' mL':'peso × 0,56 mL'} 12/12h por 7–10 dias. Amoxicilina + clavulanato 400+57 mg/5 mL: ${w?f1(w*0.56)+' mL':'peso × 0,56 mL'} 12/12h por 7–10 dias.`);
AR('ITU / pioderme (50 mg/kg/dia)',w=>`Amoxicilina + clavulanato: ${w?f1(w/3)+' mL':'peso ÷ 3'} 12/12h por 7 dias. Cefalexina 250 mg/5 mL: ${w?f1(w/4)+' mL':'peso ÷ 4'} 6/6h por 7 dias.`);
AR('Asma — crise',w=>`Aerolin (salbutamol) spray: ${w?Math.min(10,Math.round(w/3)):'peso ÷ 3'} jatos a cada 20 min até 1 h (3 doses), máx. 10; manutenção 6/6h ou 8/8h. Atrovent: 10 gotas (até 5 anos), 20 gotas (> 5 anos), 40 gotas (> 12 anos), a cada 20 min por 60 min. Prednisolona 3 mg/mL: ${w?f1(w/3)+' mL':'peso ÷ 3'} (1–2 mg/kg/dia) por 3–5 dias; 1 mg de prednisolona = 4 mg de hidrocortisona. Dexametasona 10 mg/2,5 mL (4 mg/mL): ${w?f2(w*0.037)+' mL (= 1 mg/kg de prednisolona) ou '+f2(w*0.075)+' mL (= 2 mg/kg)':'peso × 0,037 mL (= 1 mg/kg pred.) ou × 0,075 mL (= 2 mg/kg)'}.`);
AR('Bronquiolite',w=>`Lavagem/aspiração nasal, nebulização com SF 0,9%, O₂ por cateter para SatO₂ > 92%, checar hidratação; Aerolin spray ${w?Math.min(10,Math.round(w/3))+' jatos':'peso ÷ 3 jatos'} a cada 20 min até 1 h se houver resposta (teste terapêutico).`);
AR('Laringite / crupe',w=>`NBZ com adrenalina 0,3–0,5 mL/kg${w?' ('+f1(w*0.3)+'–'+f1(w*0.5)+' mL; 1–3 ampolas)':''} + O₂ 3 L/min. Dexametasona 10 mg/2,5 mL: ${w?f2(Math.min(w*0.15,4))+' mL (peso × 0,15; máx. 4 mL)':'peso × 0,15 mL (máx. 4 mL)'} IM/EV. Decadron 2 mg/mL: ${w?f1(Math.min(w*0.3,8))+' mL (0,6 mg/kg; máx. 16 mg = 8 mL)':'0,3 mL/kg (0,6 mg/kg; máx. 8 mL)'} EV/IM.`);
AR('Náuseas e vômitos',w=>`Ondansetrona 2 mg/mL: ${w?f2(w/20)+' mL':'peso ÷ 20 mL'} IM/EV de 8/8h (EV diluir em SF). Dramin B6 gotas: 1 gota/kg VO 8/8h${w?' ('+Math.round(w)+' gotas)':''}. Dramin B6 DL (30 mg/10 mL): ${w?f1(w*0.4)+' mL':'peso × 0,4 mL'} + 10 mL de SF 0,9% EV em 2 min (> 12 anos: 1 ampola). Bromoprida 4 mg/mL: 1 gota/kg VO (> 1 ano). Bromoprida 5 mg/mL: ${w?f2(w/25)+' mL':'peso ÷ 25 mL'} (0,2 mg/kg) IM/EV lento 8/8h (> 1 ano).`);
AR('Antiespasmódicos',w=>`Simeticona gotas: ${w?Math.round(w/2)+' gotas':'peso ÷ 2 gotas'} VO de 8/8h. Buscopan gotas: ≤ 3 meses 3 gotas/kg; 3–11 meses 2 gotas/kg; 1–6 anos 1 gota/kg, de 8/8h (lactente 10 gotas; 1–6 anos 10–20; > 6 anos 20–40). Buscopan ampola 20 mg/mL: ${w?f2(w/30)+' mL':'peso ÷ 30 mL'} 8/8h EV diluída ou IM.`);
AR('Febre e dor',w=>`Dipirona gotas 500 mg/mL: ${w?Math.round(w*0.4)+' gotas (0,4 × kg)':'0,4 × kg gotas'} de 6/6h (máx. 40 gotas/dose; para dor dobrar a dose; SBP recomenda 10 mg/kg na febre). Dipirona solução 50 mg/mL: ${w?f1(w/5)+' mL':'peso ÷ 5 mL'}. Dipirona IM: ${w?f2(w/50)+' mL':'peso ÷ 50 mL'} (EV diluir em 10 mL de AD; máx. 2 mL). Paracetamol 200 mg/mL: 1 gota/kg 6/6h${w?' ('+Math.round(w)+' gotas)':''} (máx. 50 gotas/dose). Ibuprofeno 100 mg/mL: 1 gota/kg 6/6h (máx. 40 gotas); 50 mg/mL: 2 gotas/kg. Tramadol: 1–2 mg/kg IM${w?' ('+f2(w*0.02)+'–'+f2(w*0.04)+' mL)':' (0,02–0,04 mL/kg)'} ou 1–1,5 mg/kg EV 8/8h em 50–100 mL de SF em 30 min. Morfina 10 mg/mL diluída a 1 mg/mL (1 mL + 9 mL AD): ${w?f1(w/10)+' mL':'peso ÷ 10 mL'} (0,1 mg/kg) IM; por EV metade da dose, lento, para evitar rigidez torácica; dose máx.: lactentes 2 mg; 1–6 a 4 mg; 7–12 a 8 mg; > 12 a 10 mg.`);
AR('Hipoglicemia, convulsão e anafilaxia',w=>`Glicose 25%: 2–4 mL/kg EV (${w?f0(w*2)+'–'+f0(w*4)+' mL':''}; preparo: 1 FA de glicose 50% + 10 mL de AD). Diazepam 5 mg/mL: 0,3–0,5 mg/kg EV/retal = ${w?f2(w*0.06)+' mL (0,06 mL/kg), máx. 2 mL':'0,06 mL/kg, máx. 2 mL'}; na crise febril peso × 0,05. Midazolam 5 mg/mL: 0,2 mg/kg = ${w?f2(w*0.04)+' mL':'0,04 mL/kg'} IM/EV em 2–3 min. Fenitoína 50 mg/mL: ataque 15–20 mg/kg = ${w?f1(w*0.3)+'–'+f1(w*0.4)+' mL':'0,3–0,4 mL/kg'}, manutenção 5 mg/kg/dose 8/8h; velocidade máx. 1 mg/kg/min (neonato 0,5–1; 1–3 mg/kg/min ou 50 mg/min, o que for mais lento). Fenobarbital 100 mg/mL: ataque 20 mg/kg = ${w?f1(Math.min(w/5,10))+' mL (máx. 10 mL)':'peso ÷ 5 mL'}; manutenção 3,5 mg/kg = ${w?f2(w*0.035)+' mL':'peso × 0,035 mL'}. Adrenalina IM: ${w?f2(Math.min(w/100,0.5))+' mL (peso ÷ 100; máx. 0,5 mL)':'peso ÷ 100 mL'} (até 10 kg 0,1 mL; 10–20 kg 0,2 mL; 20–30 kg 0,3 mL).`);
AR('Alergia',w=>`Dexametasona 10 mg/2,5 mL: ${w?f2(Math.min(w*0.05,2.5))+' mL':'peso × 0,05 mL'} IM/EV (máx. 2,5 mL). Hidrocortisona (500 mg + 5 mL AD): ${w?f2(w*4/100)+' mL':'(peso × 4) ÷ 100 mL'} EV. Prometazina 25 mg/mL: ${w?f2(w/50)+' mL':'peso ÷ 50 mL'} IM (> 2 anos) — outro quadro do mesmo autor cita peso × 0,01 mL da ampola de 50 mg/2 mL; conferir. Hidroxizina 2 mg/mL: ${w?f1(w/4)+' mL':'peso ÷ 4'} 8/8h VO (< 2 anos e o mais seguro < 6 meses; máx. 25 mL/dose); quadro de macetes: ${w?f1(w/3)+' mL':'peso ÷ 3'} 8/8h por 5–10 dias em > 6 kg (máx. 10 mL/dose). Loratadina 1 mg/mL: 2–12 anos < 30 kg = 5 mL, > 30 kg = 10 mL, 1x/dia; > 12 anos 10 mL. Desloratadina 0,5 mg/mL: 6–11 m 2 mL; 1–5 a 2,5 mL; 6–11 a 5 mL; ≥ 12 a 10 mL.`);
AR('Tosse',w=>`Acetilcisteína 20 mg/mL (> 2 anos): 2–4 anos 5 mL 12/12h; > 4 anos 5 mL 8/8h, por 7 dias. Percof (levodropropizina 6 mg/mL, > 2 anos): 10–20 kg 3 mL 8/8h; 21–30 kg 5 mL 8/8h; > 12 anos 10 mL 8/8h, por 5 dias.`);
AR('Gastroenterite (GECA)','Azitromicina + Tiorfan (racecadotrila; reduz a secreção intestinal; usar a apresentação adequada à idade) + zinco + Colikids 5 gotas/dia. Zinco: 10 mg/dia (3–6 meses) ou 20 mg/dia (> 6 meses) por 10 dias.');
AR('Parasitoses',w=>`Metronidazol 40 mg/mL: giardíase 20 mg/kg/dia = ${w?f1(w/4)+' mL':'peso ÷ 4'} 12/12h por 7 dias; amebíase 30 mg/kg/dia = ${w?f1(w/4)+' mL':'peso ÷ 4'} 8/8h por 7 dias. Albendazol 400 mg/10 mL (10 mL): DOSE ÚNICA em ascaridíase, ancilostomíase, oxiuríase e tricuríase (repetir em 14 dias nas verminoses); 3 dias em estrongiloidíase, larva migrans e teníase; 5 dias em giardíase; 12/12h por 30 dias em neurocisticercose. Ivermectina 6 mg (0,2 mg/kg): 15 kg = ½ cp; 30 kg = 1 cp — dose única e repetir em 14 dias (parasitoses), 7 dias (escabiose, larva migrans, pediculose, tungíase).`);
AR('Laxante e outros',w=>`Lactulose 667 mg/mL, 1x/dia: lactente 5 mL; 1–6 anos 5–10 mL; 6–12 anos 10–15 mL; > 12 anos 15–30 mL. Nistatina solução oral (monilíase): prematuros 0,5 mL em cada canto da boca 6/6h por 5–10 dias; lactentes 1 mL 6/6h por 7–14 dias; crianças 2–3 mL 6/6h por 7–14 dias. Sulfato ferroso 125 mg/mL: profilaxia 1 gota/kg/dia; reposição 2–3 gotas/kg/dia${w?' ('+Math.round(w)+' ou '+Math.round(w*2)+'–'+Math.round(w*3)+' gotas)':''}, longe das refeições. Ranitidina gotas 2 gotas/kg 12/12h; injetável 50 mg/2 mL: ${w?f2(Math.min(w/20,2))+' mL EV (máx. 2 mL)':'peso ÷ 20 mL EV (máx. 2 mL)'}. Omeprazol EV 4 mg/mL: 1 mg/kg/dia pela manhã${w?' = '+f1(Math.min(w/4,15))+' mL':''} (máx. 60 mg/dia). Carvão ativado 1 g/kg/dose (máx. 50 g).`);
AR('Pele: dermatite atópica, impetigo, escabiose, furúnculo, celulite',`Dermatite atópica: hidratação 2x/dia; na crise corticoide tópico 1x/dia (hidrocortisona = baixa potência, região genital; mometasona 0,1% = média; betametasona = alta); tacrolimo 0,03% em face e região genital. Impetigo: clorexidina após lavar com água e sabão + mupirocina 2% 3x/dia por 10 dias. Escabiose: permetrina 5% corpo todo abaixo do pescoço por 12 h (lactente: incluir pescoço, couro cabeludo, têmporas e fronte), repetir em 7 dias; > 5 anos ivermectina 6 mg 1 cp a cada 30 kg, repetir em 7 dias; anti-histamínico. Furúnculo: antissépticos (água boricada/permanganato), mupirocina 2% 3x/dia por 10 dias ou ácido fusídico; ATB oral se extenso (eritromicina, azitromicina, cefalexina); termoterapia e drenar quando flutuar. Celulite não complicada: cefalexina 25–100 mg/kg/dia 6/6h por 7–14 dias ou SMX-TMP 8–12 mg/kg/dia 12/12h. Complicada (exsudato purulento, MRSA prévio, sinais sistêmicos): internar (clindamicina, SMX-TMP, linezolida ou vancomicina). Erisipela: penicilina benzatina (< 25 kg 600.000 UI; > 25 kg 1.200.000 UI), amoxicilina-clavulanato ou cefalexina; formas moderadas/graves: ceftriaxona 100 mg/kg/dia EV 24/24h ou 12/12h. Síndrome da pele escaldada (Ritter): cefazolina, oxacilina ou vancomicina; associar clindamicina se necessário.`);
AR('Anti-inflamatórios (adolescente/adulto)','Cetoprofeno 100 mg 12/12h por 5 dias; piroxicam 20 mg 1x/dia por 5 dias; nimesulida 100 mg 12/12h por 5 dias; cetorolaco 10 mg SL 8/8h. Evitar em dengue, asma induzida por AINE e insuficiência renal.');
AR('Vitaminas',`Growvit: 4–6 anos 5 mL/dia; 7–10 anos 10 mL/dia. Growvit BB 6 gotas/dia; Grow D 1 gota/dia; Grow Ferro 1 gota/dia; Grow Zinco 0,5 mL/dia.`);
window.__sp_b09_1={DR,DRX,drRow};
})();
