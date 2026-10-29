(function(){

/* ---------- classes de medicamentos: id, nome, regex (sem acento), exemplos ---------- */
const CL8=[
['varf','Varfarina','varfarina|marevan',['Varfarina']],['doac','Anticoagulante oral direto','rivaroxabana|apixabana|dabigatrana|edoxabana|xarelto|eliquis',['Rivaroxabana','Apixabana','Dabigatrana']],
['hep','Heparina / enoxaparina','heparina|enoxaparina|clexane',['Enoxaparina','Heparina']],
['aas','AAS','^aas$|acido acetilsalicilico|aspirina|\\baas\\b',['AAS']],['clop','Antiagregante (clopidogrel, ticagrelor)','clopidogrel|ticagrelor|prasugrel',['Clopidogrel','Ticagrelor']],
['aine','AINE','ibuprofeno|diclofenaco|naproxeno|cetoprofeno|nimesulida|piroxicam|meloxicam|etoricoxibe|celecoxibe|cetorolaco|indometacina',['Ibuprofeno','Diclofenaco','Naproxeno','Cetoprofeno','Nimesulida','Meloxicam','Cetorolaco']],
['ieca','IECA','enalapril|captopril|ramipril|lisinopril|perindopril',['Enalapril','Captopril','Ramipril']],['bra','BRA','losartana|valsartana|candesartana|olmesartana|telmisartana|irbesartana',['Losartana','Valsartana','Candesartana']],
['dt','Tiazídico','hidroclorotiazida|clortalidona|indapamida',['Hidroclorotiazida','Clortalidona','Indapamida']],['furos','Furosemida','furosemida|lasix',['Furosemida']],['espiro','Espironolactona','espironolactona|aldactone',['Espironolactona']],
['kcl','Cloreto de potássio','cloreto de potassio|\\bkcl\\b|slow.?k',['Cloreto de potássio']],['digox','Digoxina','digoxina',['Digoxina']],['amio','Amiodarona','amiodarona|ancoron',['Amiodarona']],
['bb','Betabloqueador','atenolol|metoprolol|propranolol|carvedilol|bisoprolol|nebivolol|sotalol',['Atenolol','Metoprolol','Propranolol','Carvedilol','Bisoprolol']],['verap','Verapamil / diltiazem','verapamil|diltiazem',['Verapamil','Diltiazem']],['amlo','Di-hidropiridínico','anlodipino|nifedipino|felodipino',['Anlodipino','Nifedipino']],
['estat','Estatina','sinvastatina|atorvastatina|rosuvastatina|pravastatina|lovastatina',['Sinvastatina','Atorvastatina','Rosuvastatina']],
['macro','Claritromicina / eritromicina','claritromicina|eritromicina',['Claritromicina','Eritromicina']],['azi','Azitromicina','azitromicina|zitromax',['Azitromicina']],
['cipro','Quinolona','ciprofloxacino|levofloxacino|norfloxacino|moxifloxacino|ofloxacino',['Ciprofloxacino','Levofloxacino','Norfloxacino','Moxifloxacino']],
['metron','Metronidazol / tinidazol','metronidazol|tinidazol|secnidazol|flagyl',['Metronidazol','Tinidazol','Secnidazol']],['azol','Azólico antifúngico','fluconazol|cetoconazol|itraconazol|voriconazol',['Fluconazol','Cetoconazol','Itraconazol']],
['rifa','Rifampicina','rifampicina',['Rifampicina']],['isoni','Isoniazida','isoniazida',['Isoniazida']],['sulfa','Sulfametoxazol + trimetoprima','sulfametoxazol|trimetoprima|bactrim',['Sulfametoxazol + trimetoprima']],
['tetra','Tetraciclina','doxiciclina|tetraciclina|minociclina',['Doxiciclina']],['pen','Penicilina / amoxicilina','amoxicilina|ampicilina|penicilina|piperacilina|clavulanato',['Amoxicilina','Ampicilina','Penicilina']],
['amg','Aminoglicosídeo','gentamicina|amicacina|estreptomicina|tobramicina',['Gentamicina','Amicacina']],['vanco','Vancomicina','vancomicina',['Vancomicina']],
['fenit','Fenitoína / fenobarbital','fenitoina|fenobarbital|hidantal|gardenal',['Fenitoína','Fenobarbital']],['carba','Carbamazepina','carbamazepina|tegretol',['Carbamazepina']],['valpro','Valproato','valproato|acido valproico|depakene|depakote',['Valproato']],
['benzo','Benzodiazepínico','diazepam|clonazepam|alprazolam|midazolam|lorazepam|bromazepam|rivotril|valium',['Diazepam','Clonazepam','Alprazolam','Midazolam','Lorazepam','Bromazepam']],
['opio','Opioide','tramadol|morfina|codeina|fentanil|oxicodona|metadona|tramal',['Tramadol','Morfina','Codeína','Fentanil','Metadona']],
['isrs','ISRS / IRSN','fluoxetina|sertralina|paroxetina|citalopram|escitalopram|venlafaxina|duloxetina|fluvoxamina|prozac|zoloft',['Fluoxetina','Sertralina','Paroxetina','Citalopram','Escitalopram','Venlafaxina','Duloxetina']],
['tric','Antidepressivo tricíclico','amitriptilina|nortriptilina|imipramina|clomipramina',['Amitriptilina','Nortriptilina']],['ima','IMAO / linezolida','selegilina|moclobemida|linezolida|tranilcipromina|rasagilina',['Linezolida','Selegilina']],
['li','Lítio','litio|carbolitium',['Lítio']],['antipsic','Antipsicótico','haloperidol|quetiapina|risperidona|olanzapina|clorpromazina|aripiprazol|ziprasidona|levomepromazina',['Haloperidol','Quetiapina','Risperidona','Olanzapina','Clorpromazina']],
['ondans','Ondansetrona','ondansetrona|vonau',['Ondansetrona']],['metoc','Metoclopramida / bromoprida / domperidona','metoclopramida|bromoprida|domperidona|plasil',['Metoclopramida','Bromoprida','Domperidona']],
['sedat','Anti-histamínico sedativo','prometazina|hidroxizina|difenidramina|dexclorfeniramina|fenergan|hixizine',['Prometazina','Hidroxizina','Dexclorfeniramina']],
['sild','Inibidor de PDE5','sildenafila|tadalafila|vardenafila|viagra',['Sildenafila','Tadalafila']],['nitr','Nitrato','isossorbida|nitroglicerina|mononitrato|dinitrato',['Isossorbida','Nitroglicerina']],
['insul','Insulina','insulina|nph|glargina|lispro|aspart|regular',['Insulina NPH','Insulina regular']],['sulfo','Sulfonilureia','glibenclamida|glicazida|glimepirida|clorpropamida',['Glibenclamida','Glicazida','Glimepirida']],['metf','Metformina','metformina|glifage',['Metformina']],
['corti','Corticoide sistêmico','prednisona|prednisolona|dexametasona|hidrocortisona|betametasona|metilprednisolona',['Prednisona','Prednisolona','Dexametasona','Hidrocortisona','Metilprednisolona']],
['ibp','Inibidor de bomba de prótons','omeprazol|pantoprazol|esomeprazol|lansoprazol|rabeprazol',['Omeprazol','Pantoprazol','Esomeprazol']],['antiac','Antiácido / cálcio / sucralfato','hidroxido de aluminio|hidroxido de magnesio|sucralfato|carbonato de calcio|leite de magnesia|calcio',['Hidróxido de alumínio','Sucralfato','Carbonato de cálcio']],
['ferro','Ferro','sulfato ferroso|ferro|noripurum',['Sulfato ferroso']],['levot','Levotiroxina','levotiroxina|puran|euthyrox',['Levotiroxina']],['contra','Anticoncepcional hormonal','etinilestradiol|anticoncepcional|levonorgestrel|drospirenona|desogestrel|gestodeno',['Anticoncepcional oral']],
['mtx','Metotrexato','metotrexato|metotrexate',['Metotrexato']],['alop','Alopurinol','alopurinol|zyloric',['Alopurinol']],['azat','Azatioprina','azatioprina',['Azatioprina']],['cic','Ciclosporina / tacrolimo','ciclosporina|tacrolimo|sirolimo',['Ciclosporina','Tacrolimo']],
['teof','Teofilina / aminofilina','teofilina|aminofilina',['Teofilina','Aminofilina']],['para','Paracetamol','paracetamol|acetaminofeno|tylenol',['Paracetamol']],['dipi','Dipirona','dipirona|metamizol|novalgina',['Dipirona']],
['ergot','Ergotamina','ergotamina|dihidroergotamina|migrane',['Ergotamina']],['sumat','Triptano','sumatriptano|rizatriptana|zolmitriptana|naratriptana',['Sumatriptano','Rizatriptana']],
['alc','Álcool','alcool|etanol|bebida alcoolica|cerveja|vinho',['Álcool']]];
const QT=/amiodarona|claritromicina|eritromicina|azitromicina|ciprofloxacino|levofloxacino|moxifloxacino|ofloxacino|fluconazol|haloperidol|quetiapina|risperidona|clorpromazina|ziprasidona|ondansetrona|citalopram|escitalopram|domperidona|metadona|amitriptilina|sotalol|hidroxicloroquina|levomepromazina|fluoxetina|venlafaxina/;
/* regras: a|b|gravidade (3 grave, 2 moderada, 1 leve)|texto. Grupos separados por + dentro de a ou b valem como qualquer um */
const R8=`varf|aine|3|Sangramento (principalmente digestivo). Evitar; se inevitável, protetor gástrico e INR próximo.
varf|aas|3|Sangramento. Só se houver indicação clara de associar.
varf|clop|3|Sangramento. Associar só com indicação cardiológica definida.
varf|cipro|2|Eleva o INR. Monitorar INR em 3 a 5 dias.
varf|macro|3|Claritromicina/eritromicina elevam o INR e o risco de sangramento. Preferir outro antibiótico ou monitorar o INR de perto.
varf|metron|3|Metronidazol eleva muito o INR. Evitar ou reduzir a varfarina e monitorar.
varf|azol|3|Fluconazol e outros azólicos elevam muito o INR. Monitorar de perto.
varf|sulfa|3|Sulfametoxazol + trimetoprima eleva muito o INR. Evitar ou monitorar de perto.
varf|rifa|2|Rifampicina reduz o efeito da varfarina (indutor). Ajustar pelo INR.
varf|fenit|2|Efeito variável sobre o INR. Monitorar.
varf|carba|2|Carbamazepina reduz o efeito da varfarina. Monitorar INR.
varf|para|2|Doses altas e uso regular de paracetamol elevam o INR.
varf|amio|3|Amiodarona eleva o INR (reduzir a varfarina em 30% a 50% e monitorar).
varf|estat|2|Algumas estatinas elevam levemente o INR. Monitorar ao iniciar.
varf|isrs|2|Aumenta risco de sangramento. Monitorar.
varf|corti|2|Corticoide pode alterar o INR e aumenta risco de sangramento digestivo.
varf|tetra|2|Doxiciclina pode elevar o INR.
doac|aine|3|Sangramento. Evitar AINE.
doac|aas|2|Aumenta sangramento. Associar só com indicação definida.
doac|clop|3|Aumenta sangramento. Associar só com indicação definida.
doac|rifa|3|Reduz muito o nível do anticoagulante. Evitar.
doac|carba|3|Reduz o nível do anticoagulante. Evitar.
doac|fenit|3|Reduz o nível do anticoagulante. Evitar.
doac|azol|2|Eleva o nível do anticoagulante (cetoconazol/itraconazol: evitar).
doac|macro|2|Claritromicina eleva o nível do anticoagulante. Cautela.
doac|verap|2|Eleva o nível (dabigatrana/rivaroxabana). Cautela.
doac|amio|2|Eleva o nível da dabigatrana. Cautela.
hep|aine|2|Sangramento. Evitar AINE.
hep|aas|2|Aumenta sangramento.
aas|aine|2|AINE (ibuprofeno/naproxeno) antagoniza o efeito antiplaquetário do AAS e soma risco digestivo.
aas|clop|2|Dupla antiagregação: só com indicação definida (risco de sangramento).
aas|isrs|2|Aumenta risco de sangramento digestivo.
aas|corti|2|Aumenta risco de úlcera e sangramento digestivo.
clop|ibp|2|Omeprazol/esomeprazol reduzem a ativação do clopidogrel. Preferir pantoprazol.
aine|aine|3|Duplicidade de AINE: aumenta lesão renal e sangramento sem ganho. Usar só um.
aine|ieca|2|Lesão renal e menor efeito anti-hipertensivo.
aine|bra|2|Lesão renal e menor efeito anti-hipertensivo.
aine|dt|2|Menor efeito diurético e risco de lesão renal.
aine|furos|2|Menor efeito diurético e risco de lesão renal.
aine|li|3|AINE eleva o lítio (toxicidade). Evitar ou monitorar a litemia.
aine|mtx|3|AINE aumenta toxicidade do metotrexato. Evitar.
aine|corti|2|Aumenta risco de úlcera e sangramento digestivo.
aine|isrs|2|Aumenta risco de sangramento digestivo.
aine|cic|2|Soma nefrotoxicidade.
aine|cipro|2|Quinolona + AINE: risco de convulsão.
aine|amg|2|Soma nefrotoxicidade.
aine|alc|2|Aumenta risco de sangramento digestivo.
ieca|bra|2|Duplo bloqueio: hipercalemia e lesão renal. Evitar.
ieca|kcl|3|Hipercalemia grave. Evitar ou monitorar potássio.
ieca|espiro|3|Hipercalemia. Monitorar potássio e creatinina.
ieca|sulfa|3|Hipercalemia (trimetoprima). Monitorar potássio.
ieca|li|2|Eleva o lítio. Monitorar litemia.
ieca|alop|2|Risco de reação de hipersensibilidade.
ieca|cic|2|Hipercalemia e nefrotoxicidade.
bra|kcl|3|Hipercalemia grave. Evitar ou monitorar potássio.
bra|espiro|3|Hipercalemia. Monitorar potássio e creatinina.
bra|sulfa|3|Hipercalemia (trimetoprima). Monitorar potássio.
bra|li|2|Eleva o lítio. Monitorar litemia.
kcl|espiro|3|Hipercalemia. Evitar.
kcl|sulfa|3|Hipercalemia (trimetoprima). Monitorar.
kcl|cic|2|Hipercalemia.
digox|amio|3|Amiodarona eleva a digoxina (reduzir a dose em cerca de 50% e monitorar).
digox|verap|3|Eleva a digoxina e causa bradicardia/bloqueio. Reduzir dose e monitorar.
digox|macro|3|Claritromicina/eritromicina elevam a digoxina (toxicidade).
digox|furos|2|Hipocalemia aumenta o risco de toxicidade digitálica. Monitorar potássio.
digox|dt|2|Hipocalemia aumenta o risco de toxicidade digitálica. Monitorar potássio.
digox|corti|2|Hipocalemia aumenta o risco de toxicidade digitálica.
digox|bb|2|Bradicardia e bloqueio AV. Monitorar.
bb|verap|3|Bradicardia grave, bloqueio AV e hipotensão. Evitar a via IV; por VO, monitorar.
bb|amio|2|Bradicardia e bloqueio AV. Monitorar.
bb|insul|2|Pode mascarar sinais de hipoglicemia.
bb|sulfo|2|Pode mascarar sinais de hipoglicemia.
bb|teof|2|Betabloqueador não seletivo pode causar broncoespasmo e antagoniza a teofilina.
verap|estat|2|Verapamil/diltiazem elevam sinvastatina e atorvastatina. Limitar a dose (sinvastatina até 10 mg).
verap|cic|2|Eleva ciclosporina/tacrolimo.
verap|carba|2|Eleva carbamazepina.
amlo|estat|2|Anlodipino com sinvastatina: limitar sinvastatina a 20 mg.
estat|macro|3|Claritromicina/eritromicina + sinvastatina/atorvastatina: risco de rabdomiólise. Suspender a estatina durante o tratamento.
estat|azol|2|Eleva a estatina (miopatia). Cautela, principalmente com sinvastatina.
estat|amio|2|Amiodarona eleva a sinvastatina (limitar a 20 mg).
estat|rifa|2|Reduz o efeito da estatina.
estat|cic|2|Ciclosporina eleva as estatinas (miopatia).
estat|estat|3|Duplicidade de estatina.
macro|ergot|3|Ergotismo (isquemia grave). Contraindicado.
macro|cic|3|Eleva ciclosporina/tacrolimo (nefrotoxicidade). Monitorar nível.
macro|carba|3|Claritromicina/eritromicina elevam a carbamazepina (toxicidade).
macro|teof|2|Eleva a teofilina. Monitorar.
macro|benzo|3|Eleva midazolam/alprazolam/triazolam (sedação prolongada). Evitar ou reduzir a dose.
macro|sild|2|Eleva sildenafila. Reduzir dose.
macro|amlo|2|Pode elevar anlodipino/nifedipino e causar hipotensão.
cipro|antiac|2|Quelação: reduz a absorção. Tomar a quinolona 2 h antes ou 6 h depois do antiácido/cálcio/ferro.
cipro|ferro|2|Quelação: reduz a absorção. Tomar a quinolona 2 h antes ou 6 h depois do ferro.
cipro|teof|3|Quinolona (ciprofloxacino) eleva a teofilina (toxicidade). Monitorar ou evitar.
cipro|sulfo|2|Risco de hipoglicemia ou hiperglicemia. Monitorar glicemia.
cipro|insul|2|Risco de disglicemia. Monitorar glicemia.
cipro|corti|2|Aumenta risco de tendinopatia/ruptura de tendão.
cipro|cic|2|Pode elevar ciclosporina.
tetra|antiac|2|Quelação: reduz a absorção. Separar por 2 a 3 horas.
tetra|ferro|2|Quelação: reduz a absorção. Separar por 2 a 3 horas.
levot|antiac|2|Reduz a absorção da levotiroxina. Separar por 4 horas.
levot|ferro|2|Reduz a absorção da levotiroxina. Separar por 4 horas.
levot|ibp|1|Pode reduzir a absorção da levotiroxina. Monitorar TSH.
ferro|ibp|1|Reduz a absorção do ferro.
ferro|antiac|2|Antiácido reduz a absorção do ferro. Separar por 2 horas.
metron|alc|2|Efeito tipo dissulfiram (náuseas, rubor, taquicardia). Orientar a evitar álcool durante e até 48 h após.
metron|li|2|Metronidazol eleva o lítio. Monitorar litemia.
metron|carba|1|Pode elevar a carbamazepina.
azol|insul|2|Risco de hipoglicemia. Monitorar.
azol|sulfo|3|Azólicos elevam a sulfonilureia (hipoglicemia grave). Monitorar glicemia.
azol|fenit|3|Fluconazol eleva a fenitoína (toxicidade). Monitorar nível.
azol|cic|3|Eleva ciclosporina/tacrolimo (nefrotoxicidade). Monitorar nível.
azol|benzo|2|Eleva midazolam/alprazolam. Reduzir dose.
azol|ergot|3|Ergotismo. Contraindicado.
azol|rifa|2|Rifampicina reduz o azólico.
rifa|contra|3|Reduz a eficácia do anticoncepcional. Usar método não hormonal adicional.
rifa|corti|2|Reduz o efeito do corticoide.
rifa|sulfo|2|Reduz o efeito da sulfonilureia.
rifa|benzo|2|Reduz o efeito do benzodiazepínico.
rifa|isoni|2|Soma hepatotoxicidade. Monitorar enzimas hepáticas.
rifa|cic|3|Reduz muito o nível de ciclosporina/tacrolimo.
rifa|teof|2|Reduz o nível da teofilina.
rifa|para|2|Aumenta risco de hepatotoxicidade.
isoni|fenit|3|Isoniazida eleva a fenitoína (toxicidade). Monitorar.
isoni|carba|3|Isoniazida eleva a carbamazepina (toxicidade). Monitorar.
isoni|antiac|2|Hidróxido de alumínio reduz a absorção da isoniazida. Separar por 2 horas.
isoni|alc|2|Soma hepatotoxicidade.
isoni|para|2|Soma hepatotoxicidade.
isoni|benzo|2|Isoniazida prolonga o efeito de diazepam e outros.
fenit|contra|3|Reduz a eficácia do anticoncepcional hormonal. Usar outro método.
carba|contra|3|Reduz a eficácia do anticoncepcional hormonal. Usar outro método.
fenit|valpro|2|Interação em ambos os sentidos: monitorar níveis.
carba|valpro|2|Interação em ambos os sentidos: monitorar níveis.
fenit|carba|2|Interação: monitorar níveis.
fenit|corti|2|Reduz o efeito do corticoide.
carba|corti|2|Reduz o efeito do corticoide.
carba|tric|2|Reduz o nível do tricíclico.
fenit|teof|2|Reduz o nível da teofilina.
carba|teof|2|Reduz o nível da teofilina.
fenit|para|2|Aumenta risco de hepatotoxicidade com paracetamol em doses altas.
carba|para|2|Aumenta risco de hepatotoxicidade com paracetamol em doses altas.
sulfa|sulfo|3|Risco de hipoglicemia grave.
sulfa|mtx|3|Pancitopenia grave. Evitar.
sulfa|fenit|2|Eleva a fenitoína.
sulfa|cic|2|Nefrotoxicidade e hipercalemia.
sulfa|dt|2|Hiponatremia e trombocitopenia, principalmente em idosos.
benzo|opio|3|Depressão respiratória e sedação profunda. Usar só se indispensável, com menor dose e monitorização.
benzo|alc|3|Depressão respiratória e sedação. Orientar a evitar álcool.
opio|alc|3|Depressão respiratória e sedação. Orientar a evitar álcool.
benzo|sedat|2|Soma sedação.
opio|sedat|2|Soma sedação.
benzo|antipsic|2|Soma sedação; olanzapina IM com benzodiazepínico pode causar hipotensão e depressão respiratória.
benzo|benzo|2|Duplicidade de benzodiazepínico: soma sedação.
opio|opio|2|Duplicidade de opioide: soma depressão respiratória.
benzo|valpro|2|Soma sedação.
opio|isrs|3|Tramadol/meperidina/fentanil com ISRS: síndrome serotoninérgica e risco de convulsão. Cautela.
opio|tric|2|Soma sedação; tramadol aumenta risco de convulsão e serotonina.
opio|ima|3|Síndrome serotoninérgica (tramadol, meperidina). Contraindicado.
opio|carba|2|Reduz o efeito do tramadol.
isrs|ima|3|Síndrome serotoninérgica grave. Contraindicado (intervalo de washout).
isrs|isrs|3|Duplicidade de antidepressivo serotoninérgico: síndrome serotoninérgica.
isrs|sumat|2|Risco de síndrome serotoninérgica (baixo, mas descrito). Cautela.
isrs|tric|2|Fluoxetina/paroxetina elevam o nível do tricíclico. Monitorar.
isrs|li|2|Risco de síndrome serotoninérgica e toxicidade pelo lítio.
isrs|metoc|2|Risco de efeitos extrapiramidais e síndrome serotoninérgica.
isrs|antipsic|2|Fluoxetina/paroxetina elevam alguns antipsicóticos.
ima|sumat|3|Contraindicado com IMAO.
li|dt|3|Tiazídico eleva o lítio (toxicidade). Evitar ou monitorar litemia.
li|furos|2|Pode alterar o nível do lítio. Monitorar.
li|antipsic|2|Neurotoxicidade (principalmente haloperidol). Monitorar.
li|dipi|1|Dipirona pode alterar o nível do lítio.
antipsic|antipsic|2|Duplicidade de antipsicótico: soma efeitos extrapiramidais e QT.
antipsic|metoc|3|Soma efeitos extrapiramidais; risco de síndrome neuroléptica.
antipsic|tric|2|Soma efeitos anticolinérgicos e QT.
metoc|opio|1|Metoclopramida pode potencializar a sedação.
sild|nitr|3|Hipotensão grave. Contraindicado: aguardar 24 h (sildenafila) ou 48 h (tadalafila).
nitr|amlo|1|Soma hipotensão. Monitorar.
sulfo|corti|2|Corticoide eleva a glicemia: pode exigir ajuste do antidiabético.
insul|corti|2|Corticoide eleva a glicemia: pode exigir ajuste da insulina.
metf|alc|2|Aumenta risco de acidose láctica.
metf|cipro|1|Pode causar disglicemia.
corti|dt|2|Soma hipocalemia.
corti|furos|2|Soma hipocalemia.
corti|aine|2|Aumenta risco de úlcera e sangramento digestivo.
furos|amg|3|Soma ototoxicidade e nefrotoxicidade. Evitar ou monitorar.
amg|vanco|3|Soma nefrotoxicidade e ototoxicidade. Monitorar função renal e níveis.
amg|cic|3|Soma nefrotoxicidade.
amg|aine|2|Soma nefrotoxicidade.
vanco|furos|2|Soma ototoxicidade e nefrotoxicidade.
mtx|ibp|2|IBP pode elevar o metotrexato (principalmente em dose alta).
mtx|pen|2|Penicilinas reduzem a eliminação do metotrexato. Monitorar toxicidade.
mtx|dipi|2|Dipirona com metotrexato: risco de agranulocitose e toxicidade hematológica. Evitar.
alop|azat|3|Mielotoxicidade grave: reduzir a azatioprina para cerca de 1/4 da dose.
alop|pen|2|Aumenta risco de exantema com amoxicilina/ampicilina.
cic|dipi|2|Dipirona pode reduzir o nível da ciclosporina.
teof|ibp|1|Pode elevar a teofilina (omeprazol).
para|alc|2|Aumenta risco de hepatotoxicidade, principalmente com uso crônico ou doses altas.
dipi|antipsic|2|Clorpromazina com dipirona: hipotermia grave.
ergot|sumat|3|Vasoconstrição prolongada. Separar por pelo menos 24 h.
ergot|isrs|2|Risco de síndrome serotoninérgica.
ergot|bb|2|Vasoconstrição periférica aumentada.
ergot|azi|1|Cautela: azitromicina tem interação menor que claritromicina.
tric|ondans|2|Soma QT; risco de serotonina.
tric|alc|2|Soma sedação.
sedat|alc|2|Soma sedação.
valpro|alc|2|Soma sedação e hepatotoxicidade.
benzo|ibp|1|Omeprazol pode elevar diazepam.
metoc|alc|1|Soma sedação.`.split('\n').map(l=>{const p=l.split('|');return{a:p[0],b:p[1],s:+p[2],t:p.slice(3).join('|')}});
const SEV={3:['Grave','evitar ou monitorar de perto','#d64545'],2:['Moderada','monitorar ou ajustar','#d98e1f'],1:['Leve','cautela','#6b8e23']};
const cl=n=>{const q=nz(n),out=[];CL8.forEach(c=>{if(new RegExp(c[2]).test(q))out.push(c[0])});return out};
const NAMES=[].concat(...CL8.map(c=>c[3])).sort((a,b)=>a.localeCompare(b,'pt'));
const CN={};CL8.forEach(c=>CN[c[0]]=c[1]);

let IX=[];try{IX=JSON.parse(localStorage.getItem('ix2')||'[]')}catch(e){}
const svIX=()=>{try{localStorage.setItem('ix2',JSON.stringify(IX))}catch(e){}};
function analyze(list){
 const d=list.map(n=>({n,c:cl(n),qt:QT.test(nz(n))})),out=[],seen=new Set();
 const push=(i,j,s,t)=>{const k=i+'-'+j+'-'+t;if(seen.has(k))return;seen.add(k);out.push({a:d[i].n,b:d[j].n,s,t})};
 for(let i=0;i<d.length;i++)for(let j=i+1;j<d.length;j++){
  d[i].c.forEach(x=>d[j].c.forEach(y=>{R8.forEach(r=>{if((r.a===x&&r.b===y)||(r.a===y&&r.b===x))push(i,j,r.s,r.t)})}))}
 const qts=d.filter(x=>x.qt);
 if(qts.length>=2)out.push({a:qts.map(x=>x.n).join(' + '),b:'',s:2,t:'Somam risco de prolongar o QT (torsades de pointes). Fazer ECG, corrigir potássio e magnésio e evitar associações desnecessárias.'});
 const has=k=>d.some(x=>x.c.includes(k));
 if(has('aine')&&(has('ieca')||has('bra'))&&(has('dt')||has('furos')||has('espiro')))out.push({a:'AINE + IECA/BRA + diurético',b:'',s:3,t:'"Tripla ameaça": alto risco de lesão renal aguda, principalmente em idosos, desidratados e com doença renal. Evitar o AINE.'});
 out.sort((x,y)=>y.s-x.s);
 return{out,unk:d.filter(x=>!x.c.length).map(x=>x.n)}}
window.analyzeIX=analyze;
function drawIX(b){
 b.innerHTML=`<div class="card"><b>\uD83D\uDC8A Interações medicamentosas</b><div class="fm" style="margin:4px 0 8px">Adicione até 10 medicamentos (ou use a receita atual). O app cruza as classes e mostra a gravidade e a conduta.</div>
 <input id="ixi" autocomplete="off" placeholder="Digite o nome: varfarina, ibuprofeno, fluoxetina…"><div id="ixs"></div><div id="ixl" style="margin-top:6px"></div>
 <div class="row"><button class="chip" id="ixr" type="button" style="margin:0">Trazer da receita atual</button><button class="chip" id="ixu" type="button" style="margin:0">Trazer do uso contínuo</button><button class="chip" id="ixc" type="button" style="margin:0">Limpar</button></div></div><div id="ixo"></div>`;
 const add=n=>{n=n.trim();if(!n||IX.length>=10||IX.some(x=>nz(x)===nz(n)))return;IX.push(n);svIX();draw()};
 const draw=()=>{
  $('ixl').innerHTML=IX.map((n,i)=>`<span class="pill ${cl(n).length?'ok':'w'}">${esc(n)} <a href="#" data-r="${i}" style="text-decoration:none">×</a></span>`).join('')||'<span class="fm">Nenhum medicamento adicionado.</span>';
  $('ixl').querySelectorAll('[data-r]').forEach(a=>a.onclick=e=>{e.preventDefault();IX.splice(+a.dataset.r,1);svIX();draw()});
  const o=$('ixo');
  if(IX.length<2){o.innerHTML='<div class="card fm">Adicione pelo menos 2 medicamentos.</div>';return}
  const R=analyze(IX);
  let h='';
  if(R.unk.length)h+=`<div class="card"><b>Não reconhecidos na base</b><div class="fm">${R.unk.map(esc).join(', ')}: não foram checados. Confira na bula ou pergunte à IA.</div></div>`;
  if(!R.out.length)h+='<div class="card"><b>Nenhuma interação relevante encontrada na base do app.</b><div class="fm">Isso não garante ausência de interação: a base cobre as mais comuns. Confirme em bula ou fonte oficial, principalmente em idosos, gestantes e insuficiência renal ou hepática.</div></div>';
  else h+=R.out.map(r=>{const v=SEV[r.s];return`<div class="card" style="border-left:5px solid ${v[2]}"><div class="row" style="margin:0;justify-content:space-between"><b>${esc(r.a)}${r.b?' + '+esc(r.b):''}</b><span class="pill" style="border-color:${v[2]};color:${v[2]}">${v[0]}</span></div><div>${esc(r.t)}</div></div>`}).join('');
  h+=`<div class="row"><button class="chip" id="ixa" type="button" style="margin:0">Pedir revisão à IA</button></div><div class="fm">Base resumida de interações comuns, escrita a partir de farmacologia de referência. Não substitui bula, Micromedex/Lexicomp ou farmacêutico clínico.</div>`;
  o.innerHTML=h;
  $('ixa').onclick=()=>{showTab('t-ia');csend('Revise as interações medicamentosas entre: '+IX.join(', ')+'. Para cada par relevante, diga a gravidade, o mecanismo e a conduta prática (evitar, ajustar dose, espaçar horários, monitorar o quê). Considere o paciente atual do app, se houver.')}};
 $('ixi').oninput=()=>{const q=nz($('ixi').value.trim()),o=$('ixs');if(!q){o.innerHTML='';return}
  const r=NAMES.filter(n=>nz(n).includes(q)).slice(0,6);
  o.innerHTML=r.map(n=>`<div class="lbi" data-a="${esc(n)}"><span>${esc(n)}</span></div>`).join('')+`<div class="lbi" data-a="${esc($('ixi').value.trim())}"><span class="fm">Adicionar “${esc($('ixi').value.trim())}”</span></div>`;
  o.querySelectorAll('[data-a]').forEach(e=>e.onclick=()=>{add(e.dataset.a);$('ixi').value='';o.innerHTML=''})};
 $('ixi').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();const f=$('ixs').querySelector('[data-a]');if(f)f.click()}};
 $('ixr').onclick=()=>{try{cur.filter(m=>m.on&&!(m.r&&m.r.need)).forEach(m=>add(String(m.n).replace(/\s*\(.*$/,'')))}catch(e){}draw()};
 $('ixu').onclick=()=>{String($('uso').value||'').split(/[,;\n]| e /).forEach(x=>add(x.replace(/\d+\s*(mg|mcg|g|ml|ui)\b.*$/i,'').replace(/\s+\d.*$/,'')));draw()};
 $('ixc').onclick=()=>{IX=[];svIX();draw()};
 draw()}
SCALES.interac={n:'\uD83D\uDC8A Interações medicamentosas (até 10 remédios)',kw:'interação medicamentosa interações drogas remédios varfarina aine ieca qt serotonina lítio digoxina estatina',custom:drawIX,ref:[]};
const _os=openScale;
openScale=function(id){const s=SCALES[id];if(s&&s.custom){s.custom($('scr'));return}return _os(id)};
})();
