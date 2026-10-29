(function(){


/* ---------- Laboratórios ---------- */
SCALES.labsang={n:'Laboratório: hemograma e bioquímica (adulto)',kw:'laboratório valores de referência hemograma hemoglobina leucócitos plaquetas glicemia creatinina ureia sódio potássio cálcio magnésio tgo tgp bilirrubina pcr tsh colesterol ácido úrico hba1c',ref:[
['Aviso','Valores típicos de adulto. Variam com método, laboratório, idade e sexo: use sempre a faixa do laudo quando houver.'],
['Hemoglobina','Homem 13 a 17 g/dL · mulher 12 a 16 g/dL (gestante: anemia se < 11 g/dL no 1º e 3º trimestre e < 10,5 no 2º).'],
['Hematócrito','Homem 40 a 52% · mulher 36 a 47%.'],
['VCM','80 a 100 fL. Microcitose < 80 (ferropenia, talassemia); macrocitose > 100 (B12/folato, álcool, hipotireoidismo).'],
['Leucócitos','4.000 a 11.000/mm³. Neutrófilos 1.800 a 7.700; linfócitos 1.000 a 4.800; eosinófilos até 500. Neutropenia grave: < 500.'],
['Plaquetas','150.000 a 450.000/mm³. Risco de sangramento espontâneo: < 10.000 a 20.000. Procedimentos: geralmente > 50.000.'],
['Glicemia de jejum','Normal < 100 mg/dL · pré-diabetes 100 a 125 · diabetes ≥ 126 (confirmar em 2 ocasiões). Glicemia casual ≥ 200 com sintomas = diabetes. Hipoglicemia: < 70 (grave < 54).'],
['Hemoglobina glicada (HbA1c)','Normal < 5,7% · pré-diabetes 5,7 a 6,4% · diabetes ≥ 6,5%.'],
['Creatinina','Homem 0,7 a 1,3 mg/dL · mulher 0,6 a 1,1 mg/dL. TFG: CKD-EPI. Lesão renal aguda: aumento ≥ 0,3 mg/dL em 48 h ou ≥ 1,5 vez a basal.'],
['Ureia','15 a 45 mg/dL (varia com o laboratório e a hidratação).'],
['Sódio','135 a 145 mEq/L. Hiponatremia grave sintomática: < 120 ou com convulsão/confusão.'],
['Potássio','3,5 a 5,0 mEq/L. Hipercalemia importante: ≥ 6,0 ou com alteração no ECG. Hipocalemia grave: < 2,5.'],
['Cálcio total','8,5 a 10,5 mg/dL. Corrigir pela albumina: Ca + 0,8 × (4 − albumina). Cálcio iônico 1,12 a 1,32 mmol/L.'],
['Magnésio','1,7 a 2,4 mg/dL.'],
['Fósforo','2,5 a 4,5 mg/dL.'],
['TGO (AST) e TGP (ALT)','Até cerca de 40 U/L (TGP mulher até cerca de 32). Elevação > 10 vezes o limite sugere lesão hepatocelular aguda (hepatite viral, medicamentos, isquemia).'],
['Bilirrubina total e direta','Total 0,3 a 1,2 mg/dL; direta até 0,3. Icterícia visível acima de cerca de 2,5 a 3.'],
['Fosfatase alcalina e GGT','FA 40 a 129 U/L; GGT homem até cerca de 60, mulher até cerca de 40. Elevação conjunta sugere colestase.'],
['Amilase e lipase','Amilase 28 a 100 U/L; lipase até cerca de 60 U/L. Pancreatite: lipase > 3 vezes o limite superior.'],
['Albumina','3,5 a 5,0 g/dL.'],
['PCR','< 5 mg/L (< 0,5 mg/dL). Elevações altas sugerem infecção bacteriana ou inflamação importante, sem especificidade.'],
['CK e CK-MB','CK total homem até cerca de 190, mulher até cerca de 170 U/L (varia). Rabdomiólise: CK > 5 vezes o limite, geralmente > 5.000.'],
['Troponina','Depende do ensaio (convencional ou ultrassensível): interpretar pelo limite do percentil 99 do laboratório e pela curva (0 h e 1 a 3 h).'],
['D-dímero','< 500 ng/mL (FEU). Em maiores de 50 anos, ponto de corte ajustado: idade × 10. Serve para excluir TEV em baixa probabilidade, não para confirmar.'],
['TSH e T4 livre','TSH 0,4 a 4,5 mUI/L (gestante: limites mais baixos por trimestre); T4 livre 0,8 a 1,8 ng/dL.'],
['Lipídios','Colesterol total desejável < 190 mg/dL; HDL > 40 (homem) e > 50 (mulher); triglicerídeos < 150 (jejum); LDL: meta conforme o risco cardiovascular (< 130 baixo, < 100 intermediário, < 70 alto, < 50 muito alto).'],
['Ácido úrico','Homem 3,4 a 7,0 mg/dL · mulher 2,4 a 6,0 mg/dL.'],
['Vitamina B12, ácido fólico, ferritina','B12 > 300 pg/mL (200 a 300 limítrofe); folato > 4 ng/mL; ferritina homem 30 a 400, mulher 15 a 150 ng/mL (ferropenia < 30, ou < 100 se inflamação).'],
['Lactato','< 2 mmol/L. Acima de 4: hipoperfusão grave.']]};
SCALES.labgaso={n:'Laboratório: gasometria, coagulação e líquor',kw:'gasometria arterial ph pco2 bicarbonato lactato inr tap ttpa coagulação líquor liquor gasometria acidose alcalose',ref:[
['Gasometria arterial','pH 7,35 a 7,45 · PaCO2 35 a 45 mmHg · HCO3 22 a 26 mEq/L · PaO2 80 a 100 mmHg (ar ambiente) · BE ± 2 · SatO2 > 94%.'],
['Gasometria venosa','pH cerca de 0,03 menor que o arterial; PvCO2 cerca de 4 a 6 mmHg maior; HCO3 semelhante ao arterial.'],
['Leitura rápida','pH baixo + HCO3 baixo = acidose metabólica · pH baixo + PCO2 alta = acidose respiratória · pH alto + HCO3 alto = alcalose metabólica · pH alto + PCO2 baixa = alcalose respiratória.'],
['Ânion gap','Na − (Cl + HCO3): normal 8 a 12. Corrigir pela albumina (+ 2,5 para cada 1 g/dL abaixo de 4). Elevado: cetoacidose, lactato, uremia, intoxicações (metanol, etilenoglicol, salicilato).'],
['Compensação esperada','Acidose metabólica: PCO2 = 1,5 × HCO3 + 8 (± 2) (Winters).'],
['Relação PaO2/FiO2','> 300 normal · 200 a 300 leve · 100 a 200 moderada · < 100 grave (critérios de SDRA).'],
['INR e TAP','INR 0,8 a 1,2. Alvo terapêutico da varfarina: 2,0 a 3,0 (prótese mecânica mitral: 2,5 a 3,5).'],
['TTPa','25 a 35 s (varia com o reagente); relação 1,5 a 2,5 na heparina não fracionada.'],
['Fibrinogênio','200 a 400 mg/dL.'],
['Líquor (adulto)','Normal: leucócitos 0 a 5/mm³, proteínas 15 a 45 mg/dL, glicose 50 a 80 mg/dL (≥ 60% da glicemia). Bacteriana: leucócitos altos com neutrófilos, proteína alta, glicose baixa. Viral: linfócitos, proteína levemente alta, glicose normal.'],
['Derrame pleural','Critérios de Light (exsudato se ≥ 1): proteína líquido/soro > 0,5; DHL líquido/soro > 0,6; DHL do líquido > 2/3 do limite superior do soro.'],
['Ascite','Gradiente albumina soro-ascite (GASA) ≥ 1,1 = hipertensão portal. PBE: neutrófilos ≥ 250/mm³.']]};
SCALES.laburi={n:'Laboratório: urina (EAS), urocultura e proteinúria',kw:'urina eas urina tipo 1 urocultura proteinúria albuminúria nitrito leucocitúria hematúria densidade cilindros',ref:[
['EAS: valores usuais','Densidade 1,005 a 1,030 · pH 4,5 a 8 · proteína, glicose, cetonas, bilirrubina e nitrito negativos · leucócitos < 5/campo (ou < 10.000/mL) · hemácias < 3/campo (ou < 10.000/mL).'],
['Leucocitúria','> 10 leucócitos/campo (> 10.000/mL) sugere inflamação do trato urinário. Pode ocorrer sem infecção (litíase, uretrite, vulvovaginite).'],
['Nitrito positivo','Muito específico para bactérias Gram-negativas, mas baixa sensibilidade. Negativo não exclui ITU.'],
['Urocultura (ITU)','Mulher sintomática: ≥ 10³ UFC/mL já pode ser significativo; geralmente ≥ 10⁵ UFC/mL. Bacteriúria assintomática: tratar só em gestante e antes de procedimento urológico.'],
['Hematúria','Mais de 3 hemácias/campo. Dismórficas e cilindros hemáticos sugerem origem glomerular; hemácias normais sugerem origem urológica (litíase, infecção, tumor).'],
['Proteinúria','Normal < 150 mg/24 h. Relação proteína/creatinina em amostra isolada: < 0,15 g/g normal; ≥ 0,3 g/g sugere pré-eclâmpsia na gestante hipertensa. Nefrótica: > 3,5 g/24 h.'],
['Albuminúria','Relação albumina/creatinina < 30 mg/g normal · 30 a 300 moderada · > 300 grave.'],
['Cilindros','Hialinos: podem ser normais. Leucocitários: pielonefrite/nefrite intersticial. Hemáticos: glomerulonefrite. Granulosos: lesão tubular.'],
['Gestante','Urocultura de rotina no pré-natal; bacteriúria assintomática deve ser tratada.']]};

/* ---------- Vacinação (PNI) ---------- */
SCALES.vaccri={n:'Vacinação: calendário da criança (PNI 2026)',kw:'vacinação vacina calendário criança bcg hepatite b penta vip rotavírus pneumocócica meningocócica febre amarela tríplice viral varicela hepatite a dtp hpv influenza covid pni',ref:[
['Fonte','Calendário Nacional de Vacinação da Criança 2026 (Ministério da Saúde, atualizado em 30/01/2026). O PNI muda com frequência: confirme com a unidade ou no site do Ministério da Saúde.'],
['Ao nascer','BCG (dose única, até 30 dias; pode ser dada até 4 anos 11 meses 29 dias se assintomática e avaliada) e Hepatite B (1ª dose, preferencialmente nas primeiras 12 h, até 30 dias). Filho de mãe HBsAg positiva: vacina + imunoglobulina anti-hepatite B.'],
['2 meses','Penta (DTP + Hib + HB) 1ª dose · VIP (pólio inativada) 1ª dose · Rotavírus oral 1ª dose (de 1 mês e 15 dias a 11 meses e 29 dias) · Pneumocócica conjugada 1ª dose.'],
['3 meses','Meningocócica C: 1ª dose.'],
['4 meses','Penta 2ª dose · VIP 2ª dose · Rotavírus 2ª dose (de 3 meses e 15 dias a 23 meses e 29 dias) · Pneumocócica 2ª dose.'],
['5 meses','Meningocócica C: 2ª dose.'],
['6 meses','Penta 3ª dose · VIP 3ª dose · Influenza (a partir de 6 meses: 2 doses com 30 dias de intervalo na primeira vez, depois 1 dose por ano) · Covid-19 (a partir de 6 meses: Pfizer 3 doses aos 6, 7 e 9 meses; Moderna 2 doses aos 6 e 7 meses).'],
['9 meses','Febre amarela (1ª dose) — recomendada em todo o país. Entre 6 e 8 meses, só em viagem a área de transmissão ativa, avaliando risco e benefício.'],
['12 meses','Pneumocócica (reforço) · Meningocócica ACWY (reforço, intervalo mínimo de 60 dias da última Men C) · Tríplice viral (SCR) 1ª dose.'],
['15 meses','SCR 2ª dose · Varicela 1ª dose · Hepatite A (dose única) · DTP 1º reforço · VIP reforço.'],
['4 anos','DTP 2º reforço · Febre amarela (reforço) · Varicela 2ª dose.'],
['9 a 14 anos','HPV: 1 dose (quem já tomou pelo menos 1 dose não precisa de outra). Os estados podem fazer resgate de 15 a 19 anos com dose única.'],
['Depois dos 7 anos','Penta e DTP são contraindicadas a partir de 7 anos: usar dT. Reforço de dT a cada 10 anos (5 anos se risco de tétano ou difteria). Hepatite B a partir de 7 anos: 3 doses (0, 1 e 6 meses).'],
['Observações úteis','Tetraviral pode substituir SCR + varicela a partir de 12 meses se a varicela monovalente faltar. Abaixo de 2 anos, não dar febre amarela junto com SCR/tetraviral (intervalo de 30 dias; mínimo de 15). Febre amarela e varicela podem ser dadas juntas em locais diferentes.'],
['Atraso vacinal','Não reiniciar esquemas: completar as doses que faltam respeitando os intervalos mínimos. Rotavírus tem idade limite (não aplicar após 11 meses e 29 dias a 1ª dose e 23 meses e 29 dias a 2ª).']]};
SCALES.vacadu={n:'Vacinação: adolescente, adulto, idoso e gestante (PNI)',kw:'vacinação vacina adulto idoso gestante gestação dtpa dt hepatite b influenza covid pneumocócica vsr febre amarela hpv tríplice viral',ref:[
['Fonte','Calendário Nacional de Vacinação 2026 (Ministério da Saúde). Itens marcados com (confirmar) vêm de esquemas rotineiros do PNI que não pude checar no texto oficial deste ano: confira no calendário vigente.'],
['Gestante: dTpa','1 dose a partir da 20ª semana, em cada gestação. Se o esquema básico de difteria/tétano estiver incompleto, completar com dT na gestação. Se não der, vacinar até 45 dias após o parto.'],
['Gestante: VSR','1 dose única por gestação, a partir da 28ª semana.'],
['Gestante: influenza','1 dose por gestação, em cada temporada (ou até 45 dias após o parto se não vacinada na gestação).'],
['Gestante: covid-19','1 dose em cada gestação, em qualquer idade gestacional, com intervalo mínimo de 6 meses da última dose.'],
['Gestante: hepatite B','Se esquema incompleto, iniciar já no pré-natal e completar na gestação ou até 45 dias pós-parto. Gestante suscetível exposta: vacina + imunoglobulina.'],
['Gestante: contraindicadas','BCG e vacinas de vírus vivo atenuado (SCR, varicela) são contraindicadas na gravidez. Febre amarela só em situação excepcional, após avaliação de risco e benefício.'],
['Adulto: dT / dTpa','Completar esquema com dT (3 doses se nunca vacinado) e reforço a cada 10 anos (5 anos em risco). Profissionais de saúde: 1 dose de dTpa.'],
['Adulto: hepatite B','3 doses (0, 1 e 6 meses) se sem esquema completo. Revacinar se anti-HBs < 10 mUI/mL em hemodiálise, profissionais de saúde e imunossuprimidos.'],
['Adulto: febre amarela (5 a 59 anos)','2 doses antes dos 5 anos = completo. 1 dose antes dos 5 anos = 1 reforço (intervalo ≥ 30 dias). 1 dose a partir dos 5 anos = completo. Vacinar pelo menos 10 dias antes de viajar.'],
['Adulto: tríplice viral (confirmar)','Até 29 anos: 2 doses; 30 a 59 anos: 1 dose, se sem comprovação vacinal. Contraindicada na gestação e em imunossupressão grave.'],
['Adolescente: HPV e meningocócica (confirmar)','HPV 9 a 14 anos, dose única. Meningocócica ACWY em adolescentes (11 a 14 anos) conforme calendário vigente. Hepatite B se não vacinado (3 doses).'],
['Dengue (confirmar)','Vacina dengue (DNG4) no SUS para 10 a 14 anos em 2 doses com intervalo de 3 meses; público e disponibilidade variam por município: conferir.'],
['Influenza','1 dose anual: crianças de 6 meses a 5 anos, gestantes, puérperas, idosos ≥ 60 anos, profissionais de saúde, pessoas com comorbidades e outros grupos prioritários.'],
['Idoso (≥ 60 anos)','Influenza anual · Covid-19 a cada 6 meses (intervalo mínimo de 6 meses) · Pneumocócica 20-valente: 60 a 84 anos acamados ou institucionalizados (dose única) e toda a população ≥ 85 anos · dT/hepatite B se esquema incompleto · Febre amarela por avaliação caso a caso, se for a área de risco.'],
['Imunossuprimidos','Evitar vacinas vivas atenuadas (SCR, varicela, febre amarela, BCG) sem avaliação especializada; vacinas inativadas são seguras e podem ter resposta menor. Consultar os CRIE (Centros de Referência para Imunobiológicos Especiais).']]};

/* ---------- Toxicologia ---------- */
SCALES.toxant={n:'Toxicologia: antídotos e condutas iniciais',kw:'toxicologia intoxicação envenenamento antídoto paracetamol naloxona flumazenil organofosforado chumbinho monóxido de carbono metanol digoxina betabloqueador antidepressivo tricíclico varfarina isoniazida ferro carvão ativado',ref:[
['Aviso','Referência rápida de plantão. Doses de antídoto: confirme com o Centro de Informação e Assistência Toxicológica. Disque-Intoxicação (Anvisa): 0800 722 6001, 24 h, gratuito.'],
['Abordagem geral','1) ABC e glicemia capilar. 2) Identificar substância, quantidade, via e horário. 3) Monitorizar e fazer ECG. 4) Descontaminar: carvão ativado 1 g/kg (máx. 50 g) se ingestão há menos de 1 a 2 h e via aérea protegida; não induzir vômito; evitar em cáusticos, hidrocarbonetos e rebaixamento sem proteção de via aérea. 5) Antídoto específico. 6) Observação conforme a substância.'],
['Paracetamol','Antídoto: N-acetilcisteína. Dose tóxica: > 150 mg/kg ou > 7,5 a 10 g em adulto. Nível sérico 4 h após a ingestão no nomograma de Rumack-Matthew. Protocolo IV de 21 h: 150 mg/kg em 1 h, depois 50 mg/kg em 4 h, depois 100 mg/kg em 16 h. Oral (72 h): 140 mg/kg de ataque, depois 70 mg/kg a cada 4 h por 17 doses. Iniciar até 8 h da ingestão para máxima eficácia, mas tratar mesmo tardio se houver dano hepático.'],
['Opioides','Sedação, miose e depressão respiratória. Naloxona 0,4 a 2 mg IV/IM/intranasal, repetir a cada 2 a 3 min (criança 0,01 a 0,1 mg/kg). Meia-vida curta: observar por recorrência.'],
['Benzodiazepínicos','Suporte ventilatório na maioria. Flumazenil 0,2 mg IV em 30 s, repetir 0,1 a 0,2 mg até 1 mg. Evitar em uso crônico, convulsão ou coingestão de tricíclico (risco de convulsão).'],
['Organofosforados e carbamatos ("chumbinho")','Síndrome colinérgica (miose, sialorreia, broncorreia, bradicardia, fasciculações). Atropina 1 a 2 mg IV em adulto (criança 0,02 mg/kg), dobrar a dose a cada 5 min até secar as secreções. Pralidoxima 1 a 2 g IV em 30 min nos organofosforados. Descontaminar a pele e as roupas. Equipe com proteção.'],
['Monóxido de carbono','Oxigênio a 100% com máscara não reentrante (ou câmara hiperbárica nos casos graves, gestantes e com alteração neurológica). A oximetria de pulso é falsamente normal: usar carboxihemoglobina.'],
['Metanol e etilenoglicol','Acidose com ânion gap elevado. Fomepizol 15 mg/kg IV de ataque; se indisponível, etanol. Considerar hemodiálise. Metanol: ácido fólico; atenção a alterações visuais.'],
['Digoxina','Anticorpo antidigoxina (Fab) em arritmia grave, bloqueio, hipercalemia > 5 ou ingestão grande. Corrigir potássio e magnésio; evitar cálcio IV.'],
['Betabloqueadores','Bradicardia e hipotensão. Glucagon 3 a 5 mg IV (criança 0,05 mg/kg), repetir ou manter em infusão; considerar cálcio, insulina em altas doses e vasopressores.'],
['Bloqueadores de canal de cálcio','Cálcio IV (gluconato de cálcio 10%, 10 a 20 mL, repetir), vasopressores, insulina em alta dose com glicose; monitorar glicemia e potássio.'],
['Antidepressivos tricíclicos','QRS > 100 ms ou arritmia ventricular: bicarbonato de sódio 1 a 2 mEq/kg IV em bolus, repetir até QRS estreitar; alcalinização do pH sérico para 7,45 a 7,55. Benzodiazepínico para convulsão. Evitar flumazenil.'],
['Varfarina','Sem sangramento e INR > 10: vitamina K 2,5 a 5 mg VO. Sangramento grave: vitamina K 5 a 10 mg IV lenta + complexo protrombínico (ou plasma). Heparina: protamina 1 mg para cada 100 UI de heparina recente.'],
['Isoniazida','Convulsão refratária: piridoxina (vitamina B6) 1 g para cada grama ingerido (se desconhecido, 5 g IV em adulto) + benzodiazepínico.'],
['Ferro','Deferoxamina IV 15 mg/kg/h em intoxicação sintomática ou com nível alto. Carvão ativado não adsorve ferro.'],
['Metemoglobinemia','Cianose sem resposta ao oxigênio e sangue cor de chocolate. Azul de metileno 1 a 2 mg/kg IV (1%) em 5 min. Evitar em deficiência de G6PD.'],
['Cianeto (fumaça de incêndio)','Hidroxocobalamina 5 g IV em 15 min (adulto; criança 70 mg/kg).'],
['Sulfonilureias','Hipoglicemia prolongada: glicose e octreotida 50 mcg SC/IV a cada 6 a 12 h. Observar por pelo menos 24 h.'],
['Salicilatos','Alcalinização com bicarbonato para urina de pH 7,5 a 8; hemodiálise em casos graves. Evitar intubação sem ventilação adequada (acidose).'],
['Álcool: abstinência e Wernicke','Tiamina 100 a 500 mg IV antes de dar glicose em alcoolista. Abstinência: diazepam ou lorazepam por escala (CIWA-Ar).'],
['Animais peçonhentos','Acidente ofídico: soro antiofídico específico (botrópico, crotálico, laquético, elapídico), classificado pela gravidade. Escorpião e aranha: soro conforme classificação. Lavar o local, imobilizar, hidratar, sem torniquete, sem cortar ou sugar. Notificar e encaminhar ao serviço de referência.']]};

/* ---------- atalhos na aba Ferramentas ---------- */
const fe=$('t-fe'),h2=fe&&fe.querySelector('h2');
if(fe&&h2){const q=document.createElement('div');q.className='card';q.innerHTML='<b>Acesso rápido</b><div style="margin-top:6px"></div>';
 [['interac','\uD83D\uDC8A Interações'],['labsang','\uD83E\uDDEA Laboratório'],['labgaso','\uD83E\uDE78 Gasometria'],['laburi','\uD83D\uDEBD Urina'],['vaccri','\uD83D\uDC89 Vacina criança'],['vacadu','\uD83D\uDC89 Vacina adulto/gestante'],['toxant','☠️ Toxicologia']].forEach(x=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=x[1];b.onclick=()=>{openScale(x[0]);$('scr').scrollIntoView({behavior:'smooth'})};q.lastChild.appendChild(b)});
 h2.after(q)}
if(typeof scList==='function')scList();
})();
