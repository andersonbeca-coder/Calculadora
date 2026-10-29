(function(){
const {btn,draw9,nav}=window.__sp_b09_2;
const {cadTxt,f0,f1}=window.__sp_b09_0;

$('upeso').oninput=()=>{if($('peso'))$('peso').value=$('upeso').value;draw9()};
$('uidade').oninput=()=>{if($('idade'))$('idade').value=$('uidade').value;draw9()};
const _s9=showTab;showTab=function(id){_s9(id);if(id==='t-ur'){if($('peso')&&$('peso').value&&!$('upeso').value)$('upeso').value=$('peso').value;if($('idade')&&$('idade').value&&!$('uidade').value)$('uidade').value=$('idade').value;draw9()}};
nav.querySelectorAll('button').forEach(b=>{if(b!==btn&&b.dataset.t!=='t-caso')b.onclick=()=>{if(b.dataset.t==='t-bib'&&!$('t-bib').hidden)LSEL=null;showTab(b.dataset.t)}});

/* ---------- calculadoras e tabelas em Ferramentas ---------- */
SCALES.cadped={n:'CAD pediátrica: reposição, insulina e potássio',kw:'cetoacidose diabética cad pediátrica insulina potássio déficit reposição 48 horas',in:[['Peso (kg)'],['Déficit estimado',null,[['Leve — 5%',5],['Moderada — 7%',7],['Grave — 10%',10]]]],fn:v=>'<div class="ul">'+cadTxt(v[0],v[1]).map(x=>'<div>• '+esc(x)+'</div>').join('')+'</div>'};
SCALES.hvtig={n:'Hidratação venosa com TIG (SG 5% + SG 50%)',kw:'hidratação venosa tig vig taxa de infusão de glicose sg 50 sg 5 sódio potássio manutenção planilha calculo hv',in:[['Peso (kg)'],['Volume total (mL/kg/dia)'],['TIG / VIG (mg/kg/min)'],['Na⁺ (mEq/kg/dia)'],['K⁺ (mEq/kg/dia)']],fn:v=>{
 const[w,vk,tig,na,k]=v,V=w*vk,C=w*tig*1.44*100/V,nacl=w*na/3.4,kcl=w*k/1.34;
 const add=nacl+kcl,Vs=V-add;let a,b,tx;
 if(C>=5){b=(C-5)*Vs/45;a=Vs-b;tx=[['SG 5%',a],['SG 50%',b]]}else{a=C*Vs/5;b=Vs-a;tx=[['SG 5%',a],['Água destilada',b]]}
 const tot=a+b+add,g=C>=5?100*(a*0.05+b*0.5)/(a+b):C,L2=x=>f1(x/2);
 return '<div class="ul"><div>Volume total: <b>'+f0(V)+' mL/dia</b> · TIG '+f1(tig)+' mg/kg/min → glicose necessária '+f1(C)+'% do volume.</div>'+
 '<div>Por dia: '+tx.map(x=>x[0]+' '+f1(x[1])+' mL').join(' · ')+' · NaCl 20% '+f1(nacl)+' mL · KCl 10% '+f1(kcl)+' mL.</div>'+
 '<div><b>Em 2 etapas de 12 h:</b> '+tx.map(x=>x[0]+' '+L2(x[1])+' mL').join(' + ')+' + NaCl 20% '+L2(nacl)+' mL + KCl 10% '+L2(kcl)+' mL (≈ '+f1(tot/2)+' mL cada).</div>'+
 '<div>Velocidade: <b>'+f1(V/24)+' mL/h</b>. Glicose da solução final ≈ '+f1(g)+'%'+(g>12.5?' — <span class="wn">acima de 12,5%: exige acesso central</span>':' (periférico aceitável até 12,5%)')+'.</div>'+
 '<div class="fm">Baseado na planilha Calculo_HV (1 mg/kg/min de glicose = 1,44 g/kg/dia). Cálcio/magnésio à parte. Conferir antes de prescrever.</div></div>'}};
SCALES.urgped={n:'Urgências pediátricas: guia rápido (aba Urgência)',kw:'urgência pediátrica guia rápido convulsão asma crupe anafilaxia hipoglicemia desidratação bronquiolite cetoacidose sepse hipercalemia hospital casa',ref:[['Guia rápido','Abra a aba \uD83D\uDE91 Urgência: cada tema tem conduta do hospital (soro e drogas por peso) e prescrição/orientações para casa. Também há a lista completa de doses por peso e as receitas-modelo.']]};

/* ---------- novas receitas ---------- */
const mk=(k,kw,o)=>{NP(k,kw,o);const s=$('pat');if(s&&![...s.options].some(x=>x.value===k))s.add(new Option(k,k))};
const SX=()=>[L("Dipirona","gotas 500 mg/mL",500,25,6,3,1000,10,{g:20,sos:"dor ou febre",mx:100,nt:"1 gota/kg = 25 mg/kg (faixa usual 10–25)"})];
mk('Varicela (catapora)','varicela catapora vesículas coceira aciclovir',{c:[
 ...SX(),
 L("Desloratadina","xarope 0,5 mg/mL",0.5,0.1,24,5,5,60,{nt:"Para coceira. 0,1 mg/kg/dia (~1 mL a cada 5 kg)"}),
 L("Aciclovir","suspensão 200 mg/5 mL",40,20,6,5,800,150,{nt:"Só se > 12 anos, imunossuprimido, doença pulmonar/cutânea crônica, uso de corticoide. O modelo Thaíza usa 200 mg 5x/dia — conferir."}),
 X("Orientações","varicela",()=>"Banho morno com sabonete neutro, unhas curtas, roupas leves. Não usar AAS/salicilatos nem AINE. Afastar da escola até todas as lesões estarem em crosta (~7 dias). Evitar contato com gestantes e imunossuprimidos.")
 ],a:[
 T("Aciclovir","comprimido 400 mg",400,2,6,7,35,{nt:"800 mg 5x/dia por 7 dias em > 12 anos/adultos (iniciar até 72 h do exantema)"}),
 T("Loratadina","comprimido 10 mg",10,1,24,7,7,{nt:"Para coceira"}),
 ...SX()],nt:['Retornar se febre > 4 dias, pele quente/avermelhada com secreção, dor ao respirar, vômitos, sonolência ou dor de cabeça intensa.']});
mk('Escabiose (sarna)','escabiose sarna coceira noturna permetrina ivermectina',{c:[
 X("Permetrina 5% loção","corpo todo",()=>"Aplicar à noite do pescoço para baixo (inclui couro cabeludo em lactentes) por 3 noites, retirar no banho do dia seguinte; refazer o tratamento após 7 dias."),
 L("Hidroxizina","xarope 2 mg/mL",2,0.7,8,5,50,120,{nt:"Para a coceira (modelo Thaíza: peso ÷ 4 mL por dose)"}),
 X("Ivermectina 6 mg","comprimido",(w)=>w<15?"Ivermectina: não usar < 15 kg sem avaliação médica.":"Ivermectina 6 mg: "+(w<25?'½ comprimido':w<=35?'1 comprimido':w<=50?'1½ comprimido':w<=65?'2 comprimidos':w<=79?'2½ comprimidos':'3 comprimidos')+" em dose única; repetir em 7 dias (0,2 mg/kg)."),
 X("Orientações","medidas",()=>"Tratar TODOS os contactantes ao mesmo tempo. Lavar roupas de cama e toalhas com água quente e secar ao sol/ferro, ou isolar em saco fechado por 72 h. Cortar unhas. A coceira pode durar 2–4 semanas mesmo após a cura.")
 ],a:[
 X("Permetrina 5% loção","corpo todo",()=>"Aplicar à noite do pescoço para baixo e retirar no banho do dia seguinte, por 3 noites; repetir em 7 dias."),
 X("Ivermectina 6 mg","comprimido",(w)=>"Ivermectina 6 mg: "+(w<25?'½':w<=35?'1':w<=50?'1½':w<=65?'2':w<=79?'2½':'3')+" comprimido(s) em dose única; repetir em 7 dias (0,2 mg/kg)."),
 T("Loratadina","comprimido 10 mg",10,1,24,7,7)
 ],nt:['Tratar todos os contactantes domiciliares simultaneamente; lavar/isolar roupas.']});
mk('Larva migrans cutânea (bicho geográfico)','larva migrans bicho geográfico tiabendazol albendazol',{c:[
 V("Albendazol","susp. 400 mg/10 mL",40,10,24,5,50,{nt:"10 mL 1x/dia por 5 dias (modelo Thaíza)"}),
 X("Tiabendazol pomada 50 mg/g","uso tópico",()=>"Friccionar na área afetada 2–3x ao dia por 5 dias ou até desaparecerem as lesões."),
 L("Hidroxizina","xarope 2 mg/mL",2,0.7,8,5,50,120,{nt:"Para a coceira"})],a:[
 T("Albendazol","comprimido 400 mg",400,1,24,3,3,{nt:"400 mg 1x/dia por 3 dias (alguns serviços 5 dias)"}),
 X("Tiabendazol pomada 50 mg/g","uso tópico",()=>"Friccionar na área afetada 2–3x ao dia por 5 dias.")],nt:['Evitar andar descalço em areia/solo contaminado por fezes de cães e gatos.']});
mk('Doença mão-pé-boca','mão pé boca coxsackie vesículas aftas',{c:[
 ...SX(),
 X("Triancinolona 1 mg/mL","sobre as lesões",()=>"Aplicar fina camada sobre as lesões, 3x ao dia por 5 dias."),
 X("Hexomedine spray","sobre as lesões",()=>"Aplicar sobre as lesões 4x ao dia até melhorar."),
 X("Orientações","alimentação",()=>"Dieta fria/pastosa e líquidos em pequenas quantidades; evitar alimentos ácidos. Afastar da creche/escola até as lesões secarem (~7 dias). Higiene das mãos.")],
 a:[...SX(),X("Orientações","alimentação",()=>"Alimentos frios, hidratação, higiene das mãos.")],nt:['Retornar se recusa de líquidos, febre > 3 dias, sonolência, vômitos repetidos ou tremores.']});
mk('Urticária / alergia cutânea (criança)','urticária alergia coceira placas anti-histamínico prednisolona',{c:[
 L("Desloratadina","xarope 0,5 mg/mL",0.5,0.1,24,15,5,60,{nt:"Anti-histamínico de 2ª geração (1x/dia). Alternativas: loratadina 1 mg/mL (2–6 anos 5 mL; > 6 anos 10 mL), hidroxizina 2 mg/mL (peso ÷ 4 mL 8/8h), Allegra 6 mg/mL 12/12h, Polaramine (peso ÷ 4 mL 8/8h)."}),
 L("Prednisolona","solução 3 mg/mL",3,1,24,5,40,60,{nt:"Casos moderados/extensos: 5 dias pela manhã"}),
 X("Orientações","evitar gatilhos",()=>"Anotar alimentos/remédios usados antes do quadro e evitá-los. Retornar se inchaço de lábios/língua, falta de ar, vômitos repetidos ou tontura (anafilaxia).")],
 a:[T("Loratadina","comprimido 10 mg",10,1,24,7,7),L("Prednisolona","solução 3 mg/mL",3,1,24,5,60,60,{nt:"0,5–1 mg/kg/dia; adultos 20–40 mg"})],nt:[]});
mk('Gastroenterite — completa (SRO + zinco + probiótico)','gastroenterite diarreia vômitos sro zinco probiótico ondansetrona geca',{c:[
 X("Soro de reidratação oral","envelope",()=>"Dissolver 1 envelope em 1 litro de água filtrada. Oferecer após cada evacuação ou vômito: < 1 ano 50–100 mL; 1–10 anos 100–200 mL; > 10 anos à vontade. Descartar após 24 h (2 sachês)."),
 L("Ondansetrona (solução)","solução 0,8 mg/mL",0.8,0.15,8,2,4,50,{sos:"náuseas ou vômitos",nt:"Antes de oferecer o soro; máx. 4 mg/dose. Alternativas: Vonau Flash 4 mg, Ondif 4 mg filme, Nautex gotas."}),
 X("Zinco elementar","10 dias",(w)=>"Sulfato de zinco 4 mg/mL: "+(w<=10?'2,5 mL (10 mg)':'5 mL (20 mg)')+" 1x/dia por 10 dias (10 mg/dia < 6 meses; 20 mg/dia ≥ 6 meses). O modelo Thaíza usa Unizinco Kids por 14 dias."),
 X("Probiótico","opcional",()=>"Floratil 1 flaconete 12/12h por 3 dias OU Provance 1 cp mastigável 1x/dia por 5 dias."),
 ...SX(),
 X("Orientações","dieta",()=>"Manter aleitamento e dieta habitual, exceto gorduras; aumentar a ingesta hídrica. Sem antidiarreicos. Lavar as mãos; tratar a água.")
 ],a:[],nt:['Retornar se sinais de desidratação, sangue nas fezes ou vômitos que impedem o soro.']});
mk('Otite média aguda — amoxicilina + clavulanato 400/57','otite média aguda amoxicilina clavulanato 400 57 otalgia sinot atak',{c:[
 L("Amoxicilina + clavulanato","susp. 400 + 57 mg/5 mL",80,25,12,10,1000,70,{mx:90,nt:"Dose pela amoxicilina 25–45 mg/kg/dia (e-book: peso ÷ 3,5 mL 12/12h); modelo Thaíza: 7,5 mL 12/12h por 10 dias."}),
 L("Prednisolona","solução 3 mg/mL",3,1,24,5,40,60,{nt:"Opcional (modelo Thaíza); corticoide não é rotina na OMA."}),
 ...SX(),
 X("Orientações","otite",()=>"Compressa morna no ouvido afetado; cuidado com água no ouvido durante o banho. Retornar se não melhorar em 48–72 h, secreção ou febre alta.")],a:[],nt:[]});
mk('Síndrome gripal (lavagem nasal)','síndrome gripal resfriado lavagem nasal soro fisiológico',{c:[
 X("Lavagem nasal","SF 0,9%",()=>"Lavagem nasal 3x ao dia com 5 mL de soro fisiológico 0,9% em cada narina."),
 ...SX()],a:[],nt:['Retornar se febre > 3 dias, respiração rápida/difícil, dor de ouvido ou prostração.']});

/* ---------- protocolos adicionais (Drive Camilla Rocha / Medconexão), reescritos ---------- */
mk('Cerume impactado','cerume cera ouvido tampão cerumin',{c:[X("Cerumin (ou solvente de cerume)","gotas no ouvido",()=>"Aplicar 5 gotas no ouvido afetado, manter deitado com o ouvido para cima por 5 minutos, de 8/8h por 5 dias; depois lavagem/remoção na unidade.")],a:[X("Cerumin","gotas no ouvido",()=>"Aplicar 5 gotas no ouvido afetado, ficar deitado com o ouvido para cima por 5 minutos, de 8/8h por 5 dias.")],nt:['Não usar hastes de algodão. Não usar em perfuração timpânica.']});
mk('Cinetose (enjoo de viagem)','cinetose enjoo viagem meclizina dimenidrinato',{c:[X("Dimenidrinato (Dramin)","gotas/comprimido",(w)=>w?`Dramin gotas 25 mg/mL: ${Math.round(w)} gotas (1,25 mg/kg) 30 min antes de viajar, máx. 6–8/8h (2–6 a: 60 gotas/dia; 6–12 a: 120/dia).`:"Dramin gotas: 1,25 mg/kg 30 min antes de viajar.")],a:[X("Meclizina 25 mg (Meclin)","comprimido",()=>"Tomar 1 comprimido 1 hora antes de viajar; repetir após 12 horas se necessário.")],nt:[]});
mk('Oxiuríase (enterobíase)','oxiúros oxiuríase enterobíase coceira anal albendazol',{c:[V("Albendazol","susp. 400 mg/10 mL",40,10,0,1,10,{rp:"repetir a dose após 14 dias",rep:2}),X("Orientações","medidas",()=>"Tratar todos os contatos domiciliares; unhas curtas; lavar mãos; lavar roupas de cama e roupa íntima em água quente.")],a:[T("Albendazol","comprimido 400 mg",400,1,0,1,2,{rp:"repetir após 14 dias",rep:2}),X("Orientações","medidas",()=>"Tratar todos os contatos domiciliares; lavar roupas de cama e higiene pessoal.")],nt:[]});
mk('Vermífugo — amplo espectro','verminose vermífugo albendazol mebendazol nitazoxanida parasitose geral',{c:[V("Albendazol","susp. 400 mg/10 mL",40,10,0,1,10,{rp:"repetir após 7 dias",rep:2,nt:"Dose única de 10 mL; repetir em 7 dias. Alternativas: mebendazol 100 mg/5 mL 5 mL 12/12h por 3 dias; nitazoxanida 12/12h por 3 dias (por peso)."}),X("Orientações","água",()=>"Ferver e/ou filtrar toda a água consumida em casa; lavar mãos e alimentos.")],a:[T("Albendazol","comprimido 400 mg",400,1,24,3,3,{nt:"1 cp/dia por 3 dias, repetir após 7 dias"}),T("Nitazoxanida","comprimido 500 mg",500,1,12,3,6,{nt:"Alternativa: 1 cp de 12/12h por 3 dias"}),X("Orientações","água",()=>"Ferver e/ou filtrar toda a água consumida em casa.")],nt:[]});
mk('Pediculose (piolho)','piolho pediculose permetrina deltametrina ivermectina lêndeas',{c:[X("Permetrina 1% loção","couro cabeludo",()=>"Lavar com xampu, secar com toalha, aplicar em todo o cabelo úmido (nuca e atrás das orelhas), deixar 10 min, passar pente fino, enxaguar; repetir após 7 dias."),L("Dexclorfeniramina","xarope 2 mg/5 mL",0.4,0.1,8,5,6,100,{sos:"coceira",nt:"peso ÷ 4 mL de 8/8h se coceira"}),X("Ivermectina 6 mg (> 2 anos / ≥ 15 kg)","comprimido",(w)=>w<15?"Ivermectina: não usar < 15 kg.":"Ivermectina 200 mcg/kg dose única: "+(w<25?'½ comprimido':w<=35?'1 comprimido':w<=50?'1½ comprimido':w<=65?'2 comprimidos':'2½ comprimidos')+"; repetir em 7 dias.")],a:[X("Permetrina 1% loção","couro cabeludo",()=>"Aplicar no cabelo úmido, deixar 10 min, pente fino, enxaguar; repetir em 7 dias."),X("Ivermectina 6 mg","comprimido",()=>"200 mcg/kg dose única (aprox. 2 cp para 60 kg); repetir em 7 dias.")],nt:['Verificar contatos domiciliares; lavar fronhas e toalhas em água quente.']});
mk('Molusco contagioso','molusco contagioso lesões umbilicadas',{c:[X("Conduta","expectante",()=>"Resolução espontânea em 6 a 12 meses. Evitar manipular/coçar as lesões e compartilhar toalhas/objetos. Encaminhar à dermatologia se extenso, infectado ou em imunossuprimido.")],a:[X("Conduta","expectante",()=>"Observação (resolução em 6–12 meses); evitar manipulação; dermatologia se extenso.")],nt:[]});
mk('Foliculite','foliculite pústulas pele eritromicina mupirocina',{c:[X("Mupirocina 2% gel/pomada","tópico",()=>"Aplicar nas lesões após limpeza com água e sabão, 3x ao dia por 7 dias."),L("Cefalexina","susp. 250 mg/5 mL",50,12.5,6,7,500,100,{nt:"Só se extensa/disseminada (peso ÷ 4 mL de 6/6h)"})],a:[X("Mupirocina 2%","tópico",()=>"Aplicar nas lesões 3x ao dia por 7 dias, após lavar com água e sabão."),T("Eritromicina","comprimido 500 mg",500,1,6,7,28,{nt:"Se extensa: 1 cp de 6/6h por 7 dias"})],nt:[]});
mk('Pitiríase versicolor','pitiríase versicolor micose manchas fluconazol cetoconazol',{c:[X("Cetoconazol 2% creme/xampu","tópico",()=>"Aplicar na lesão após limpeza, 2x ao dia por 14–21 dias; xampu 2% em dias alternados por 10 min.")],a:[T("Fluconazol","cápsula 150 mg",150,1,168,3,3,{nt:"1 cápsula por semana, por 3 semanas"}),X("Cetoconazol 2% creme","tópico",()=>"Aplicar na lesão após limpeza, 8/8h por 21 dias.")],nt:[]});
mk('Dermatite seborreica leve','dermatite seborreica caspa couro cabeludo cetoconazol hidrocortisona',{c:[X("Cetoconazol xampu 2%","couro cabeludo",()=>"Aplicar 3x por semana, deixar agir 5 minutos e enxaguar, por 4 semanas. Em lactentes: óleo mineral para remover crostas e hidratante."),X("Hidrocortisona 1% creme","tópico",()=>"Fina camada 2x ao dia por 5 dias nas áreas inflamadas.")],a:[X("Cetoconazol xampu 2%","couro cabeludo",()=>"3x por semana, 5 min, por 4 semanas."),X("Hidrocortisona 1% creme","tópico",()=>"Fina camada 2x ao dia por 5 dias.")],nt:[]});
mk('Escoriações / feridas leves','escoriação ferida leve curativo sulfadiazina de prata',{c:[X("Cuidado local","curativo",()=>"Lavar com SF 0,9% 2x ao dia antes do curativo; sulfadiazina de prata 1% creme em fina camada 1–2x ao dia até cicatrizar. Verificar vacinação antitetânica."),...SX()],a:[X("Cuidado local","curativo",()=>"Lavar com SF 0,9% 2x ao dia; sulfadiazina de prata creme 1–2x ao dia até cicatrizar. Checar antitetânica."),...SX()],nt:[]});
mk('H. pylori — erradicação (adulto)','h pylori helicobacter amoxicilina claritromicina omeprazol metronidazol',{a:[T("Amoxicilina","comprimido 500 mg",500,2,12,7,28),T("Claritromicina","comprimido 500 mg",500,1,12,7,14),T("Omeprazol","cápsula 20 mg",20,1,12,7,14,{nt:"Alérgico à penicilina: trocar amoxicilina por metronidazol 250 mg, 2 cp de 12/12h por 7 dias"})],nt:['Esquema tríplice por 7 dias (Drive Camilla Rocha); muitos serviços usam 14 dias — conferir o protocolo local.']});
mk('PEP — profilaxia pós-exposição sexual','pep profilaxia pós exposição hiv tenofovir lamivudina dolutegravir',{a:[T("Tenofovir 300 + lamivudina 300 mg","comprimido",1,1,24,28,28),T("Dolutegravir","comprimido 50 mg",50,1,24,28,28,{nt:"Iniciar o mais rápido possível (idealmente < 2 h, máx. 72 h); seguimento no SAE/CTA"})],nt:['Colher testes rápidos (HIV, sífilis, hepatites) antes de iniciar; notificar.']});

/* ---------- inicializa o botão de abertura quando existir sessão antiga ---------- */
try{if(window.drawIX0)drawIX0()}catch(e){}
delete window.__sp_b09_0;delete window.__sp_b09_1;delete window.__sp_b09_2;
})();
