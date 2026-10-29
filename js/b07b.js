(function(){
const {D,DX,GEN,S,SI}=window.__sp_b07_0;

window.dxRefresh=()=>{try{const e=document.getElementById('caso');if(e&&e.children.length){if(!Object.keys(C.it).length&&!C.hist)drawCaso();else update()}}catch(e){}};
D('Resfriado comum (IVAS viral)','Resfriado /',10,{},{cor:5,obs:4,esp:3,dga:2,tos:2,feb:1,mia:1,cef:1,febalta:-3,dis:-3,tqp:-3,hip:-4});
D('Influenza / síndrome gripal','Influenza',6,{},{feb:5,mia:4,tos:4,cef:3,cal:3,pro:3,ast:3,dga:2,cor:2,imun:1,febalta:1,exs:-1},'Dispneia, SpO2 < 95% ou fator de risco: tratar como grave e avaliar oseltamivir/internação');
D('Faringoamigdalite viral','Faringoamigdalite viral',7,{age:[1,60]},{dga:5,odi:4,feb:3,cor:3,tos:3,rou:2,exs:-1});
D('Amigdalite bacteriana (estreptococo)','Amigdalite — amoxicilina 10',4,{age:[3,45]},{dga:5,odi:5,feb:4,exs:5,gan:4,tos:-3,cor:-3,rou:-1,cef:1,nau:1});
D('Mononucleose infecciosa','',1.5,{age:[8,35]},{dga:4,feb:4,gan:5,ast:5,exs:3,pro:3},'Evitar amoxicilina (exantema); procurar esplenomegalia');
D('Otite média aguda','Otite média',6,{age:[0,12]},{ota:5,feb:3,oto:3,pro:1,cor:2,tos:1});
D('Otite externa','Otite externa',3,{},{ota:5,oto:3,feb:-1,cor:-2});
D('Rinossinusite aguda','',4,{age:[3,90]},{sinu:5,obs:4,cor:3,cef:3,feb:2,tos:2,esp:-1});
D('Rinite alérgica','Rinite',6,{dur:'c'},{esp:5,pnas:5,cor:4,obs:4,puro:2,feb:-4,hasm:3,mia:-2});
D('Conjuntivite bacteriana','Conjuntivite bacteriana',4,{},{olv:5,sec:5,puro:1,feb:-1});
D('Conjuntivite alérgica','Conjuntivite alérgica',3,{},{olv:4,puro:5,esp:2,pnas:3,sec:-2});
D('Bronquite aguda','Bronquite',6,{age:[1,90]},{tos:5,tosp:3,dga:1,feb:1,sib:1,hip:-3,cre:-3,tqp:-2});
D('Pneumonia adquirida na comunidade','Pneumonia — sem comorbidade',4,{},{feb:4,tosp:4,tos:2,dis:4,dtp:3,cre:5,hip:4,tqp:4,pro:3,cal:2,febalta:2,tqc:2,rig:-2,cor:-1},'Avaliar gravidade (CURB-65, SpO2, FR) e decidir internação');
D('Asma (crise)','Crise de asma',5,{},{sib:5,dis:4,tos:3,tqp:2,hasm:4,feb:-3,cre:-2,hip:2},'Dispneia intensa, fala entrecortada, SpO2 baixa ou silêncio torácico: crise grave');
D('Bronquiolite viral aguda','',5,{age:[0,2]},{cor:3,tos:4,sib:4,dis:3,tqp:3,feb:2,ina:2});
D('Laringite viral (crupe)','',4,{age:[0.5,6]},{tosl:5,rou:4,cor:2,feb:2,dis:1},'Estridor em repouso ou desconforto respiratório: emergência');
D('DPOC exacerbado','',3,{age:[40,110]},{dis:4,tosp:4,sib:3,tab:4,tos:3,feb:1,hip:2});
D('Tuberculose pulmonar','',1.5,{dur:'c'},{tos:4,sud:5,per:4,hem:3,feb:2,ast:2,tosp:2,imun:2},'Tosse > 3 semanas: baciloscopia/TRM-TB e notificação');
D('Insuficiência cardíaca descompensada','',2.5,{age:[45,110],dur:'s'},{dis:4,edm:4,orto:5,ast:3,tos:2,cre:2,has:1});
D('Embolia pulmonar','',1.5,{age:[15,110]},{dis:4,dtp:3,hem:2,tvp:4,imob:4,pal:2,sin:2,tqp:2,hip:2,feb:-1},'Aplicar escore de Wells; emergência se instável');
D('Síndrome coronariana aguda','',2.5,{age:[30,110]},{dto:5,dis:3,sdf:4,nau:3,irr:4,has:1,dm:1,tab:1},'ECG em até 10 minutos; emergência');
D('Dengue','Dengue',5,{},{feb:5,cef:4,mia:4,art:3,den:4,exa:3,nau:3,vom:2,pro:3,ast:2,cor:-2,tos:-2,dga:-1,sgr:2},'Sinais de alarme (dor abdominal intensa, vômitos persistentes, sangramento, letargia, hipotensão): classificar grupo A–D');
D('Gastroenterite aguda','Gastroenterite',8,{},{dia:5,vom:4,nau:3,dab:3,dabc:3,feb:2,dsg:-2,cont:2},'Desidratação grave, sangue nas fezes ou mais de 7 dias: investigar');
D('Disenteria / colite infecciosa','Disenteria',2.5,{},{dsg:5,dab:4,feb:3,dia:3,dabc:3});
D('Giardíase / amebíase','Giardíase',2,{dur:'c'},{dia:4,dab:3,per:2,dabc:2,ina:1});
D('Parasitose intestinal','Parasitose',4,{age:[1,15]},{dab:3,pra:5,ina:2,per:1,ast:1,dia:1});
D('Gastrite / dispepsia','Gastrite',7,{age:[12,110]},{epi:5,azi:4,nau:3,vom:1,feb:-3,dab:1});
D('Doença do refluxo gastroesofágico','Gastrite',4,{age:[12,110],dur:'c'},{azi:5,epi:3,tos:1,nau:1});
D('Apendicite aguda','',2.5,{age:[3,70]},{fid:5,dab:3,nau:3,vom:3,feb:3,ina:4,dia:-1},'Dor em FID com febre, anorexia ou vômitos: avaliação cirúrgica');
D('Constipação funcional','',5,{dur:'c'},{con:5,dab:2,dabc:2,dev:2,hmr:1});
D('Hemorroidas / fissura anal','Hemorroidas',4,{age:[15,110]},{hmr:5,dev:4,pra:3,con:2});
D('Cólica renal (litíase urinária)','Cólica renal',4,{age:[15,75]},{lomc:5,hma:3,nau:3,vom:3,dsu:1,feb:-2},'Febre + cólica: pensar em pielonefrite obstrutiva (emergência)');
D('Cistite (ITU baixa)','ITU',7,{sx:{f:1,m:-1.5}},{dsu:5,pol:5,hma:2,dpe:2,lom:-1,feb:-2,vom:-1});
D('Pielonefrite','',2.5,{},{lom:4,feb:5,dsu:3,pol:3,nau:3,vom:2,cal:3,febalta:2},'Febre + dor lombar: considerar antibiótico parenteral e internação');
D('Prostatite / ITU no homem','',1.5,{sex:'m',age:[18,110]},{dsu:4,pol:4,dpe:3,feb:3,lom:1});
D('Vaginose bacteriana','Vaginose',5,{sex:'f',age:[12,60]},{corv:5,odv:5,puv:1});
D('Candidíase vulvovaginal','Candidíase',5,{sex:'f',age:[12,110]},{corv:4,puv:5,dsu:2,odv:-2});
D('Tricomoníase','Tricomon',2,{sex:'f',age:[12,70]},{corv:4,odv:3,puv:3,dsu:2});
D('Cervicite','Cervicite',2.5,{sex:'f',age:[12,60]},{corv:4,dsp:3,sgv:2,dpe:1});
D('Doença inflamatória pélvica','DIP',2,{sex:'f',age:[12,50]},{dpe:5,dsp:3,corv:3,feb:2,sgv:1},'Dor pélvica com febre ou dor à mobilização do colo: tratar DIP e avaliar internação');
D('Sífilis (primária / secundária)','Sífilis',2,{age:[12,110]},{ulg:5,exa:3,gan:2,mia:1});
D('Sangramento uterino anormal','Sangramento uterino',4,{sex:'f',age:[10,55],nogest:1},{sgv:5,pali:2,ast:2,atm:-3,dpe:-1},'Instabilidade hemodinâmica: encaminhar');
D('Gravidez ectópica / abortamento','',2,{sex:'f',age:[12,50]},{atm:4,sgv:4,dpe:4,nau:1,sin:2},'Atraso menstrual + dor ou sangramento: BHCG e encaminhar');
D('Dismenorreia primária','Dismenorreia',5,{sex:'f',age:[10,45],nogest:1},{dme:5,dpe:2,nau:1});
D('Enxaqueca','Enxaqueca',5,{age:[8,70]},{cefpul:5,fot:4,nau:4,vom:2,cef:3,feb:-3,rig:-4,def:-1});
D('Cefaleia tensional','',7,{},{cef:4,cefpul:-2,fot:-1,nau:-1,feb:-3,rig:-4});
D('Meningite','',1,{},{febalta:4,feb:2,cef:4,rig:5,fot:3,vom:3,pro:4,pet:4,conf:3,exa:1},'Suspeita: emergência, não atrasar o antibiótico');
D('Labirintite / VPPB','Labirintite',5,{age:[15,110]},{vert:5,nau:3,vom:2,ota:-1,def:-4,cef:-1});
D('Acidente vascular cerebral','',2,{age:[35,110]},{def:5,conf:2,cef:2,vert:2,has:1},'Déficit focal agudo: janela terapêutica, emergência');
D('Lombalgia mecânica','Dor lombar',6,{age:[15,70]},{lom:4,dlm:5,cia:2,feb:-5,per:-3});
D('Lesão musculoesquelética (trauma / entorse)','Dor forte em membro',4,{},{tra:5,dar:5});
D('Herpes zoster','',2,{age:[30,110]},{dfa:5,ves:5,pru:1});
D('Impetigo','Impetigo',4,{age:[1,12]},{cro:5,pru:2,feb:-1});
D('Micose superficial (tinha)','Micose',4,{dur:'c'},{plc:5,pru:4});
D('Escabiose','',3,{},{prun:5,pru:5,cont:3});
D('Urticária / reação alérgica','Alergia',4,{},{urt:5,pru:5,exa:2,feb:-3},'Dispneia, edema de lábios/língua ou hipotensão: anafilaxia (adrenalina IM)');
D('Varicela','',3,{age:[1,15]},{ves:5,feb:3,pru:3,exa:3,pro:1});
D('Exantema viral (sarampo, rubéola e outros)','',2.5,{age:[0.5,30]},{exa:5,feb:4,cor:3,olv:3,tos:3,cont:2});
D('Hiperglicemia / diabetes descompensado','',2,{age:[8,110],dur:'s'},{pdp:5,per:3,ast:3,dm:3,vom:1,dab:1,conf:1},'Vômitos, dor abdominal, respiração rápida ou confusão: pensar em cetoacidose');
D('Anemia','',3,{dur:'c'},{ast:5,pali:5,dis:2,vert:2,pal:2,sgv:1});
D('Pré-eclâmpsia','',1.5,{sex:'f',req:'gest'},{cef:4,pah:5,edm:3,esc:5,epi:3},'Gestante com PA ≥ 140x90 e sintomas: emergência obstétrica');
D('Náuseas e vômitos da gestação','Gestante — náuseas',6,{sex:'f',req:'gest'},{nau:5,vom:4,ina:2,dab:-2,feb:-3});
D('Pirose / refluxo da gestação','Gestante — pirose',4,{sex:'f',req:'gest'},{azi:5,epi:3});
D('ITU na gestação','Gestante — infecção',3,{sex:'f',req:'gest'},{dsu:5,pol:5,lom:2,feb:1});
D('Hipertensão / crise hipertensiva','',3,{age:[18,110]},{pah:5,cef:3,vert:2,has:3,dto:1,def:1},'PA ≥ 180x120 com sintomas: emergência hipertensiva');
D('Anafilaxia','',0.8,{},{urt:3,dis:4,exa:2,vom:2,hipt:4,sib:3,pru:2},'Emergência: adrenalina IM');
D('Choque / sepse','',1,{},{febalta:2,feb:2,hipt:5,tqc:3,tqp:3,conf:4,pro:3,cal:3},'Sinais de sepse: ressuscitação, culturas e antibiótico na 1ª hora');
D('Chikungunya','',2.5,{},{feb:4,art3:5,art:3,exa:3,mia:2,cef:2,ast:2,dengreg:2},'Artralgia > 3 semanas: cronificação; avaliar reumatologia. Descartar dengue (hidratação, sem AINE até excluir)');
D('Malária','',1.2,{},{feb:5,cal:5,cef:3,mia:3,sud:3,amaz:6,vom:2,pali:2,ict:1,exot:3},'Febre + exposição em área endêmica ou viagem: gota espessa/teste rápido; emergência se grave');
D('Leptospirose','',1.5,{},{feb:4,mia:5,tvp:2,cef:3,enx:6,ict:3,olv:3,vom:2,hma:1,dis:1,pet:1},'Mialgia em panturrilha + exposição a água/lama: tratar precoce; icterícia, oligúria, dispneia ou hemorragia = grave');
D('Hepatite viral aguda','',1.5,{},{ict:5,nau:3,vom:2,ast:3,ina:3,feb:1,dab:2,mia:1});
const WX=(pre,o)=>{const d=DX.find(x=>x.n.startsWith(pre));if(d)Object.assign(d.w,o)};
WX('Pneumonia',{imun:2,neop:2,intern:3,dm:1,tab:1});WX('Bronquiolite',{prem:3,des:1});WX('Choque',{imun:2,neop:1,intern:2});WX('Influenza',{imun:1,obes:1});
WX('Dengue',{dengreg:3,exot:1});WX('Meningite',{imun:1});WX('Tuberculose',{imun:3,des:2,dm:1});WX('Asma',{prem:1});WX('Insuficiência cardíaca',{obes:1,dm:1});WX('Embolia',{neop:3,obes:1});WX('Cistite',{dm:1});
const findP=pre=>pre?Object.keys(P).find(k=>k.startsWith(pre)):null;

/* ---------- estado ---------- */
const DEF={it:{},hist:'',v:{},dur:'a',sex:'',unit:'a'};
let C=Object.assign({},DEF,LS('case2',{}));C.it=C.it||{};C.v=C.v||{};
const save=()=>LSs('case2',C);
const nzt=s=>nz(String(s||''));
function ageY(){const a=parseFloat($('idade').value);return isNaN(a)?null:a}
function derived(){const d={},v=C.v,a=ageY(),A=a==null?30:a,num=x=>{const n=parseFloat(String(x).replace(',','.'));return isNaN(n)?null:n};
 const t=num(v.t),fc=num(v.fc),fr=num(v.fr),sp=num(v.sp),ps=num(v.ps),pd=num(v.pd);
 if(t!=null){if(t>=37.8)d.feb=1;if(t>=39)d.febalta=1}
 if(sp!=null&&sp<94)d.hip=1;
 const frMax=A<1?53:A<3?37:A<7?28:A<11?25:20,fcMax=A<1?180:A<3?140:A<7?120:A<11?118:100;
 if(fr!=null&&fr>frMax)d.tqp=1;if(fc!=null&&fc>fcMax)d.tqc=1;
 if(ps!=null){const lim=A<1?70:A<11?70+2*A:90;if(ps<lim)d.hipt=1;if(A>=12&&(ps>=160||(pd!=null&&pd>=100)))d.pah=1}
 return d}
function findings(){const f={};Object.keys(C.it).forEach(k=>f[k]=C.it[k]);const d=derived();Object.keys(d).forEach(k=>{if(f[k]!==-1)f[k]=1});return f}

/* ---------- ranking ---------- */
/* ===== aprendizado com casos confirmados ===== */
let LRN=LS('dxl',{cases:[]});if(!LRN.cases)LRN={cases:[]};
function lcNames(){const s=new Set();DX.forEach(d=>s.add(d.n));Object.keys(P).forEach(k=>s.add(k));Object.keys(LIB_()).filter(k=>k.startsWith("d:")).forEach(k=>s.add(k.slice(2)));return [...s].filter(Boolean).sort((a,b)=>a.localeCompare(b,"pt"))}
function lcSel(R){const top=(R&&R.out&&R.out[0]&&R.out[0].d)?R.out[0].d.n:"";return '<input id="lcf" list="lcdl" value="'+esc(top)+'" placeholder="Digite o diagnóstico ou escolha da lista" autocomplete="off" style="width:100%;margin:6px 0"><datalist id="lcdl">'+lcNames().map(n=>'<option value="'+esc(n)+'">').join("")+'</datalist><div class="row" style="margin:4px 0"><button class="chip" id="lcn" type="button" style="margin:0">Nome correto pela IA</button><button class="chip" id="lcc" type="button" style="margin:0">Montar conduta com IA</button></div><div class="fm" id="lcx"></div>'}
const LRN_SAVE=()=>LSs('dxl',LRN);
function lrnStats(){const cnt={},sc={},rej={};LRN.cases.forEach(c=>{cnt[c.conf]=(cnt[c.conf]||0)+1;(sc[c.conf]=sc[c.conf]||{});(c.pres||[]).forEach(s=>sc[c.conf][s]=(sc[c.conf][s]||0)+1);if(c.top&&c.top[0]&&c.top[0]!==c.conf){rej[c.top[0]]=rej[c.top[0]]||[];rej[c.top[0]].push(c.pres||[])}});return{cnt,sc,rej}}
let LST=null;
function learnBonus(n,pres){if(!LRN.cases.length)return 0;if(!LST)LST=lrnStats();const c=LST.cnt[n]||0;let b=0;
 if(c){b+=0.25*Math.log(1+c);let h=0;pres.forEach(s=>{h+=(LST.sc[n][s]||0)/c});b+=0.35*Math.min(1,c/3)*h}
 (LST.rej[n]||[]).forEach(r=>{if(!r.length)return;const ov=pres.filter(s=>r.includes(s)).length/Math.max(pres.length,r.length);if(ov>=0.6)b-=0.5*ov});
 return b}
function lrnRecord(conf,note){const R=rank();const f=findings();const rec={t:Date.now(),conf,top:R.out.slice(0,3).map(r=>r.d.n),pres:R.pres,abs:R.abs,age:ageY(),sex:C.sex,gest:$('gest').checked,dur:C.dur,note:String(note||'').slice(0,600)};LRN.cases.push(rec);
 if(LRN.cases.length>2000)LRN.cases.shift();LRN_SAVE();LST=null;lrnSync()}
async function lrnSync(){if(typeof sbPushCase!=='function')return 0;let n=0;for(const c of LRN.cases){if(c.s)continue;if(await sbPushCase(c)){c.s=1;n++}}if(n)LRN_SAVE();return n}
window.lrnGot=d=>{if(!d||!d.conf||!d.t||LRN.cases.some(c=>c.t===d.t))return;d.s=1;LRN.cases.push(d);LRN_SAVE();LST=null};
setTimeout(()=>{lrnSync()},3000);
function rank(){const f=findings(),a=ageY(),sex=C.sex,gest=$('gest').checked,du=C.dur;
 const pres=Object.keys(f).filter(k=>f[k]===1),abs=Object.keys(f).filter(k=>f[k]===-1);
 if(!pres.length)return{out:[],pres,abs,f};
 const out=[];
 DX.forEach(d=>{const o=d.o;
  if(o.sex&&sex&&o.sex!==sex)return;if(o.req==='gest'&&!gest)return;if(o.nogest&&gest&&false)return;
  let L=Math.log(d.pr),sup=[],mis=[];
  if(a!=null&&o.age){if(a<o.age[0]||a>o.age[1])L-=3}
  if(sex&&o.sx&&o.sx[sex])L+=o.sx[sex];
  if(gest){if(o.req==='gest')L+=1.5;if(o.nogest)L-=3;if(d.n.startsWith('Gravidez ect'))L+=1.5}
  const dd=o.dur||'a';if(du===dd)L+=0.4;else if(du==='c'&&dd!=='c')L-=1.8;else if(du==='a'&&dd==='c')L-=1.2;
  pres.forEach(s=>{const w=d.w[s];if(w!==undefined){L+=0.55*w;if(w>0)sup.push(s)}else L-=GEN[s]?0.1:0.35});
  L+=learnBonus(d.n,pres);
  abs.forEach(s=>{const w=d.w[s];if(w===undefined)return;if(w>=3)L-=0.45*w;else if(w<0)L+=0.3*(-w)});
  Object.keys(d.w).forEach(s=>{if(d.w[s]>=3&&f[s]===undefined)mis.push(s)});
  if(!sup.length)return;
  out.push({d,L,sup,mis})});
 out.sort((x,y)=>y.L-x.L);const mx=out.length?out[0].L:0;
 out.forEach(r=>{r.rel=Math.exp(r.L-mx)});
 return{out:out.slice(0,10),pres,abs,f,all:out}}
function nextQ(R){const top=R.out.slice(0,5);if(top.length<2)return[];const sc={};
 SI&&Object.keys(SI).forEach(s=>{if(R.f[s]!==undefined)return;const ws=top.map(r=>r.d.w[s]||0);if(Math.max(...ws)<3)return;
  const m=top.reduce((a,r,i)=>a+r.rel*ws[i],0)/top.reduce((a,r)=>a+r.rel,0),v=top.reduce((a,r,i)=>a+r.rel*Math.pow(ws[i]-m,2),0)/top.reduce((a,r)=>a+r.rel,0);
  sc[s]=v+0.15*Math.max(...ws)});
 return Object.keys(sc).sort((x,y)=>sc[y]-sc[x]).slice(0,6)}

/* ---------- interface ---------- */
const ST=v=>v===1?'on':v===-1?'off':'';
function chip(s){const v=C.it[s];return`<button type="button" class="sx ${ST(v)}" data-s="${s}">${v===-1?'✗ ':v===1?'✓ ':''}${esc(SI[s].n)}</button>`}
window.drawCaso=function(){const w=$('caso');if(!w)return;
 const a=$('idade').value,dm=C.unit==='m';
 const groups=[...new Set(S.map(x=>x[2]))];
 w.innerHTML=`<div class="card"><b>Caso clínico</b><div class="fm" style="margin:2px 0 8px">Preencha a história: os diagnósticos mais prováveis aparecem e se reordenam a cada dado novo. Apoio ao raciocínio, não substitui o exame.</div>
 <div class="grid"><div><label>Idade</label><div class="row" style="margin:0"><input id="cia" type="number" step="any" min="0" inputmode="decimal" value="${a?(dm?Math.round(a*12):a):''}" style="flex:1;width:auto"><select id="ciu" style="width:92px"><option value="a" ${dm?'':'selected'}>anos</option><option value="m" ${dm?'selected':''}>meses</option></select></div></div>
 <div><label>Peso (kg)</label><input id="cip" type="number" step="0.1" min="0" inputmode="decimal" value="${esc($('peso').value)}"></div>
 <div class="full"><label>Sexo</label><div class="seg" id="csx"><button type="button" data-v="f" class="${C.sex==='f'?'on':''}">Feminino</button><button type="button" data-v="m" class="${C.sex==='m'?'on':''}">Masculino</button></div></div>
 <div class="ck" id="cgw" ${C.sex==='f'?'':'hidden'}><input id="cig" type="checkbox" ${$('gest').checked?'checked':''}><span>Gestante</span></div>
 <div class="full"><label>Tempo de evolução</label><div class="seg" id="cdu"><button type="button" data-v="a" class="${C.dur==='a'?'on':''}">Até 7 dias</button><button type="button" data-v="s" class="${C.dur==='s'?'on':''}">1 a 3 semanas</button><button type="button" data-v="c" class="${C.dur==='c'?'on':''}">&gt; 3 semanas</button></div></div></div></div>
 <div class="card"><b>História, diagnóstico ou pedido de conduta</b><div class="fm" style="margin:2px 0 6px">Escreva a história do paciente <u>ou</u> peça direto: “conduta AVC”, “crise asmática grave”, “pielonefrite casa”. Já sabe o diagnóstico? A conduta, as prescrições e os critérios de internação aparecem logo abaixo.</div><textarea id="chs" rows="3" style="width:100%" placeholder="Ex.: menina de 5 anos, febre há 2 dias, dor de garganta e dor ao engolir, sem tosse, placas nas amígdalas  —  ou  —  conduta AVC">${esc(C.hist)}</textarea>
 <div class="row" style="margin:0"><button class="chip" id="cre" type="button" style="margin:6px 6px 0 0">Reconhecer sintomas no texto</button><button class="chip" id="cai" type="button" style="margin:6px 6px 0 0">IA: estruturar a história</button><button class="chip" id="cbusca" type="button" style="margin:6px 6px 0 0">\uD83D\uDD0E Buscar conduta</button><button class="chip" id="cim" type="button" style="margin:6px 0 0">\uD83D\uDCF7 Foto / imagem</button></div><input id="cimf" type="file" accept="image/*" multiple hidden><div id="cmsg" class="fm"></div><div id="csug"></div><div id="cimg"></div></div>
 <div id="cpan"></div>
 <div class="card"><b>Sintomas e achados</b> <span class="fm">(toque: presente ✓ → ausente ✗ → remover)</span>
 <input id="csq" autocomplete="off" placeholder="Digite a 1ª letra: f → febre, fraqueza…" style="margin-top:8px"><div id="css"></div>
 <div id="csel" style="margin-top:6px"></div>
 ${groups.map(g=>`<details ${['Geral','Respiratório'].includes(g)?'open':''}><summary class="fm" style="margin-top:8px"><b>${g}</b></summary><div>${S.filter(x=>x[2]===g).map(x=>chip(x[0])).join('')}</div></details>`).join('')}</div>
 <details class="card"><summary><b>Sinais vitais</b> <span class="fm">(opcional: viram achados automaticamente)</span></summary><div class="grid" style="margin-top:8px">
 ${[['t','Temperatura (°C)'],['fc','FC (bpm)'],['fr','FR (irpm)'],['sp','SpO2 (%)'],['ps','PA sistólica'],['pd','PA diastólica']].map(x=>`<div><label>${x[1]}</label><input class="cvi" data-k="${x[0]}" inputmode="decimal" value="${esc(C.v[x[0]]||'')}"></div>`).join('')}</div><div id="cder" class="fm" style="margin-top:6px"></div></details>
 <div id="cres"></div>
 <div class="row"><button class="chip" id="ccl" type="button" style="margin:0">Limpar caso</button><button class="chip" id="cia2" type="button" style="margin:0">Analisar este caso com a IA</button><button class="chip" id="crx" type="button" style="margin:0">Ir para a receita</button></div>`;
 bind();update()}
function sync(){const v=parseFloat($('cia').value);if(!isNaN(v)){const y=C.unit==='m'?v/12:v;$('idade').value=String(Math.round(y*100)/100);const t=y<12?'c':'a';if($('tipo').value!==t){$('tipo').value=t;$('tipo').dispatchEvent(new Event('change'))}}else $('idade').value='';
 $('peso').value=$('cip').value;$('gest').checked=$('cig').checked&&C.sex==='f';$('idade').dispatchEvent(new Event('input'));$('peso').dispatchEvent(new Event('input'));$('gest').dispatchEvent(new Event('change'))}
function bind(){
 $('cia').oninput=$('cip').oninput=()=>{sync();update()};$('ciu').onchange=e=>{C.unit=e.target.value;save();sync();update()};$('cig').onchange=()=>{sync();update()};
 $('csx').querySelectorAll('button').forEach(b=>b.onclick=()=>{C.sex=C.sex===b.dataset.v?'':b.dataset.v;save();$('csx').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.v===C.sex));$('cgw').hidden=C.sex!=='f';if(C.sex!=='f')$('cig').checked=false;sync();update()});
 $('cdu').querySelectorAll('button').forEach(b=>b.onclick=()=>{C.dur=b.dataset.v;save();$('cdu').querySelectorAll('button').forEach(x=>x.classList.toggle('on',x.dataset.v===C.dur));update()});
 $('chs').oninput=e=>{C.hist=e.target.value;save()};
 $('cre').onclick=()=>{const n=recog($('chs').value);$('cmsg').textContent=n?`Reconhecidos ${n} item(ns). Confira os chips abaixo.`:'Nenhum sintoma reconhecido no texto.';refresh()};
 $('cai').onclick=aiStruct;
 document.querySelectorAll('#caso .cvi').forEach(i=>i.oninput=()=>{C.v[i.dataset.k]=i.value;save();update()});
 $('csq').oninput=suggest;$('csq').onkeydown=e=>{if(e.key==='Enter'){const f=$('css').querySelector('[data-a]');if(f)f.click()}};
 $('ccl').onclick=()=>{C=Object.assign({},DEF,{it:{},v:{}});save();$('chs').value='';drawCaso()};
 $('crx').onclick=()=>showTab('t-rx');
 $('cia2').onclick=()=>{const R=rank(),top=R.out.slice(0,5).map(r=>r.d.n).join('; ');showTab('t-ia');csend('Analise este caso clínico com base nos dados do app: sugira o diagnóstico diferencial mais provável (com justificativa), o que perguntar e examinar para diferenciar, exames se necessários, sinais de alarme e a conduta inicial.'+(top?' Hipóteses do ranking local: '+top+'.':''))};
 wireChips()}
function wireChips(){document.querySelectorAll('#caso .sx').forEach(b=>b.onclick=()=>{cycle(b.dataset.s);refresh()});}
function cycle(s){const v=C.it[s];if(v===undefined)C.it[s]=1;else if(v===1)C.it[s]=-1;else delete C.it[s];save()}
function setS(s,v){if(v===0)delete C.it[s];else C.it[s]=v;save()}
function refresh(){document.querySelectorAll('#caso .sx').forEach(b=>{const v=C.it[b.dataset.s],t=SI[b.dataset.s].n;b.className='sx '+ST(v);b.textContent=(v===-1?'✗ ':v===1?'✓ ':'')+t});update()}
function suggest(){const q=nzt($('csq').value.trim()),o=$('css');if(!q){o.innerHTML='';return}
 const tk=q.split(/\s+/),r=S.filter(x=>{const t=nzt(x[1]+' '+(x[3]||'').replace(/\|/g,' '));return tk.every(k=>t.split(/[^a-z0-9]+/).some(y=>y.startsWith(k)))}).slice(0,8);
 o.innerHTML=r.map(x=>`<div class="lbi" data-a="${x[0]}"><span>${esc(x[1])}</span><span class="fm">${x[2]}</span></div>`).join('');
 o.querySelectorAll('[data-a]').forEach(e=>e.onclick=()=>{setS(e.dataset.a,1);$('csq').value='';o.innerHTML='';refresh()})}
/* reconhecimento local no texto livre */
function recog(txt){const t=nzt(txt);let n=0;
 let m=t.match(/(\d+(?:[.,]\d+)?)\s*(anos?|a\b)/);if(m){C.unit='a';$('cia').value=m[1].replace(',','.')}else{m=t.match(/(\d+)\s*(meses|mes|m\b)/);if(m){C.unit='m';$('cia').value=m[1]}}
 if(/\b(feminin|mulher|menina|senhora|gestante|gravida)/.test(t)){C.sex='f'}else if(/\b(masculin|homem|menino|senhor)\b/.test(t))C.sex='m';
 if(/gestante|gravida/.test(t))$('cig').checked=true;
 const tm=t.match(/(?:temperatura|temp|tax)[^0-9]{0,8}(3[5-9][.,]?\d?|4[0-2][.,]?\d?)/);if(tm)C.v.t=tm[1].replace(',','.');
 const sp=t.match(/(?:sat|spo2)[^0-9]{0,8}(\d{2})/);if(sp)C.v.sp=sp[1];
 if(/(mais de|ha mais de) *(3|tres|4|quatro|um|1) *(semana|mes)|cronic|ha meses/.test(t))C.dur='c';else if(/(1|2|3|uma|duas|tres) *semana/.test(t))C.dur='s';
 S.forEach(x=>{if(!x[3])return;const re=new RegExp(x[3],'g');let mm,hit=0,neg=0;
  while((mm=re.exec(t))){const pre=t.slice(Math.max(0,mm.index-28),mm.index);hit=1;if(/(\bsem\b|\bnega\b|\bnao (tem|apresenta|refere)\b|ausencia de|afebril|\bnao\b)[^.;,]*$/.test(pre))neg=1}
  if(hit&&C.it[x[0]]===undefined){C.it[x[0]]=neg?-1:1;n++}});
 save();sync();return n}
async function aiStruct(){const o=$('cmsg'),t=$('chs').value.trim();if(!t){o.textContent='Escreva a história primeiro.';return}
 if(!aiMode()){o.textContent=errTxt({code:'sem_ia'});return}
 o.textContent='A IA está estruturando a história…';
 try{const r=await askAI(`Extraia dados desta história clínica para um painel. Texto: "${t}". Use APENAS estes ids de sintomas: ${S.map(x=>x[0]+'='+x[1]).join('; ')}. Responda JSON: {"idade_anos": número ou null, "sexo":"f"|"m"|null, "gestante":true|false, "duracao":"a"(até 7 dias)|"s"(1 a 3 semanas)|"c"(mais de 3 semanas)|null, "presentes":[ids], "ausentes":[ids que o texto diz explicitamente que NÃO tem], "sinais_vitais":{"t":número,"fc":número,"fr":número,"sp":número,"ps":número,"pd":número}}. Não invente achados.`);
  let n=0;(r.presentes||[]).forEach(s=>{if(SI[s]){C.it[s]=1;n++}});(r.ausentes||[]).forEach(s=>{if(SI[s]){C.it[s]=-1;n++}});
  if(r.sexo==='f'||r.sexo==='m')C.sex=r.sexo;if(['a','s','c'].includes(r.duracao))C.dur=r.duracao;
  if(r.idade_anos!=null){C.unit='a';$('cia').value=String(r.idade_anos)}if(r.gestante)$('cig').checked=true;
  Object.keys(r.sinais_vitais||{}).forEach(k=>{if(r.sinais_vitais[k]!=null)C.v[k]=String(r.sinais_vitais[k])});
  save();sync();drawCaso();$('cmsg').textContent=`IA estruturou ${n} achado(s). Confira os chips.`}catch(e){o.textContent='⚠ '+errTxt(e)}}

function update(){const R=rank(),w=$('cres');if(!w)return;
 const der=derived();$('cder')&&($('cder').innerHTML=Object.keys(der).length?Object.keys(der).map(k=>`<span class="pill ok">${esc(SI[k].n)}</span>`).join(''):'');
 const sel=Object.keys(C.it);$('csel').innerHTML=sel.length?sel.map(s=>`<span class="pill ${C.it[s]===1?'ok':'w'}">${C.it[s]===1?'✓':'✗'} ${esc(SI[s].n)} <a href="#" data-x="${s}" style="text-decoration:none">×</a></span>`).join(''):'';
 $('csel').querySelectorAll('[data-x]').forEach(a=>a.onclick=e=>{e.preventDefault();setS(a.dataset.x,0);refresh()});
 const al=[...new Set(R.pres.filter(s=>SI[s]&&SI[s].al).map(s=>SI[s].n))];
 let h='';
 if(al.length)h+=`<div class="card" style="border-color:var(--wn)"><b>⚠ Sinais de alarme presentes</b><div class="wn">${al.map(esc).join(' · ')}</div><div class="fm">Estabilize e avalie encaminhamento/emergência antes de seguir com a conduta ambulatorial.</div></div>`;
 if(!R.pres.length)h+='<div class="card fm">Adicione sintomas, achados ou sinais vitais para ver os diagnósticos mais prováveis.</div>';
 else if(!R.out.length)h+='<div class="card fm">Nenhum diagnóstico da base combina com esses achados. Use “Analisar este caso com a IA”.</div>';
 else{h+=`<div class="card"><b>Diagnósticos mais prováveis</b> <span class="fm">(${R.pres.length} achado(s) presente(s))</span>`+R.out.map((r,i)=>{const pk=findDx(r.d),lab=r.rel>=0.37?'Mais provável':r.rel>=0.08?'Possível':'Menos provável',cl=r.rel>=0.37?'ok':'';
   return`<div class="sec"><div class="row" style="margin:0;justify-content:space-between"><b>${i+1}. ${esc(r.d.n)}</b><span class="pill ${cl}">${lab}</span></div>
   <div style="height:6px;border-radius:4px;background:var(--bd);margin:4px 0"><div style="height:6px;border-radius:4px;background:var(--ac);width:${Math.max(4,Math.round(Math.pow(r.rel,0.5)*100))}%"></div></div>
   <div class="fm">A favor: ${r.sup.map(s=>esc(SI[s].n)).join(', ')}</div>${r.mis.length?`<div class="fm">Perguntar/procurar: ${r.mis.slice(0,4).map(s=>esc(SI[s].n)).join(', ')}</div>`:''}
   ${r.d.al?`<div class="wn">⚠ ${esc(r.d.al)}</div>`:''}
   <div class="row" style="margin:2px 0 0">${pk?`<button class="chip" data-rx="${esc(pk)}" data-dst="c" type="button" style="margin:0">\uD83C\uDFE0 Receita para casa</button><button class="chip" data-rx="${esc(pk)}" data-dst="h" type="button" style="margin:0">\uD83C\uDFE5 Prescrição hospital</button><button class="chip" data-cd="${esc(pk)}" type="button" style="margin:0">Conduta</button>`:'<span class="fm">Sem protocolo cadastrado: use “Perguntar à IA” para gerar receita e conduta.</span>'}<button class="chip" data-ai="${i}" type="button" style="margin:0">Perguntar à IA</button><button class="chip" data-ok="${i}" type="button" style="margin:0">✔ Era este</button></div></div>`}).join('')+'</div>';
  h+=`<div class="card"><b>Confirmar o diagnóstico final</b><div class="fm">Registre o que você concluiu. O app guarda os achados + o diagnóstico e usa isso para melhorar o ranking nos próximos casos. Se o seu diagnóstico não estiver na lista, digite-o: as sugestões aparecem enquanto você escreve. Use a IA para padronizar o nome e montar um rascunho de conduta.</div>
   ${lcSel(R)}
   <textarea id="lnote" rows="2" placeholder="História / observações (opcional)" style="width:100%"></textarea>
   <div class="row"><button id="lsv" type="button" style="margin:0">Salvar caso confirmado</button><button class="chip" id="lex" type="button" style="margin:0">Exportar casos</button><button class="chip" id="lim" type="button" style="margin:0">Importar</button></div>
   <div class="fm" id="lst">${LRN.cases.length} caso(s) confirmado(s) guardado(s) neste aparelho.</div></div>`;
  const nq=nextQ(R);if(nq.length)h+=`<div class="card"><b>Perguntas que mais ajudam a diferenciar</b><div class="fm">Responda para refinar o ranking.</div>`+nq.map(s=>`<div class="row" style="margin:4px 0"><span style="flex:1">${esc(SI[s].n)}?</span><button class="chip" data-q="${s}" data-v="1" type="button" style="margin:0">Sim</button><button class="chip" data-q="${s}" data-v="-1" type="button" style="margin:0">Não</button></div>`).join('')+'</div>'}
 w.innerHTML=h;
 const lst=m=>{const e=$('lst');if(e)e.textContent=m};
 w.querySelectorAll('[data-ok]').forEach(b=>b.onclick=()=>{const r=R.out[+b.dataset.ok];lrnRecord(r.d.n,($('lnote')||{}).value);lst('✔ Salvo: "'+r.d.n+'" (enviando ao banco online…). Total: '+LRN.cases.length)});
 const sv=$('lsv');if(sv)sv.onclick=()=>{const v=$('lcf').value.trim();if(!v){lst('Digite o diagnóstico.');return}lrnRecord(v,$('lnote').value);lst('✔ Salvo: "'+v+'". Total: '+LRN.cases.length)};
 const lcnB=$('lcn');if(lcnB)lcnB.onclick=async()=>{const t=$('lcf').value.trim(),x=$('lcx');if(!t){x.textContent="Digite o diagnóstico primeiro.";return}x.textContent="Consultando a IA…";
 try{const j=await askAI('Um médico digitou o diagnóstico "'+t+'" (Brasil: atenção básica, pronto-socorro ou pediatria). Qual o nome padronizado em português, como aparece em protocolos brasileiros (Ministério da Saúde, SBP, SBMFC, CID-10)? Responda {"nome":"..."}. Se o termo já estiver correto, devolva-o igual.');const n=String((j&&j.nome)||"").trim();if(!n)throw 0;$('lcf').value=n;x.textContent="✓ Nome padronizado: "+n+". Confira e salve o caso."}catch(e){x.textContent="Não consegui padronizar. Confirme o nome manualmente."}};
const lccB=$('lcc');if(lccB)lccB.onclick=async()=>{const t=$('lcf').value.trim(),x=$('lcx');if(!t){x.textContent="Digite o diagnóstico primeiro.";return}if(!aiMode()){x.textContent="Configure a IA em Config (Gemini ou Claude) para montar a conduta.";return}x.textContent="Montando o rascunho da conduta… (alguns segundos)";
 const li=a=>(Array.isArray(a)?a:[]).map(o=>typeof o==="string"?o:[o.med,o.dose,o.via,o.freq,o.dur].filter(Boolean).join(" · ")).map(s=>"- "+s).join("\n")||"- —";
 const ls=a=>(Array.isArray(a)?a:[]).map(s=>"- "+s).join("\n")||"- —";
 try{const j=await askAI('Monte um RASCUNHO de conduta para "'+t+'" (Brasil; adulto e pediatria quando indicado). Escreva com suas próprias palavras. Responda JSON: {"conduta":"texto curto","receita_casa":[{"med":"","dose":"","via":"","freq":"","dur":""}],"receita_hosp":[{"med":"","dose":"","via":"","freq":"","dur":""}],"orientacoes":["..."],"sinais_alarme":["..."],"internacao":"quando internar","exames":["..."],"seguranca":"alergias, gestação, interações, ajuste renal ou hepático"}. Em pediatria, doses por peso. Se não houver consenso, diga isso no texto.');
  if(!j||(!j.conduta&&!j.receita_casa))throw 0;
  const txt="Rascunho gerado por IA: revisar com o protocolo local antes de usar.\n\n**Conduta:** "+(j.conduta||"—")+"\n\n**Receita para casa:**\n"+li(j.receita_casa)+"\n\n**Prescrição hospitalar:**\n"+li(j.receita_hosp)+"\n\n**Orientações:**\n"+ls(j.orientacoes)+"\n\n**Sinais de alarme:**\n"+ls(j.sinais_alarme)+"\n\n**Internação:** "+(j.internacao||"—")+"\n\n**Exames:**\n"+ls(j.exames)+"\n\n**Segurança:** "+(j.seguranca||"—");
  libSet("d:"+t,{txt,ts:Date.now()});x.textContent="✓ Rascunho salvo como resumo de \""+t+"\". Revise antes de usar. Ele fica na Biblioteca e é enviado ao banco online."}catch(e){x.textContent="A IA não devolveu um rascunho válido. Tente de novo."}};
const ex=$('lex');if(ex)ex.onclick=async()=>{const t=JSON.stringify(LRN);try{await navigator.clipboard.writeText(t);lst('Casos copiados para a área de transferência ('+LRN.cases.length+').')}catch(e){prompt('Copie:',t)}};
 const im=$('lim');if(im)im.onclick=()=>{const t=prompt('Cole o JSON exportado:');if(!t)return;try{const o=JSON.parse(t);if(!o.cases)throw 0;LRN.cases=LRN.cases.concat(o.cases.filter(c=>c&&c.conf)).slice(-2000);LRN_SAVE();LST=null;update()}catch(e){lst('JSON inválido.')}};
 w.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{setS(b.dataset.q,+b.dataset.v);refresh()});
 w.querySelectorAll('[data-rx]').forEach(b=>b.onclick=()=>{if(window.condOpen&&P[b.dataset.rx]){condOpen(b.dataset.rx,b.dataset.dst==='h'?'hosp':'casa');return}const k=b.dataset.rx,pk=P[k],t=pk.c&&!pk.a?'c':pk.a&&!pk.c?'a':$('tipo').value||'a';if(!$('tipo').value||(pk.c&&!pk.a)||(pk.a&&!pk.c)){$('tipo').value=t;$('tipo').dispatchEvent(new Event('change'))}$('pat').value=k;$('q').value=k;$('dest').value=b.dataset.dst||'c';build();rx();showTab('t-rx')});
 w.querySelectorAll('[data-cd]').forEach(b=>b.onclick=()=>{if(window.condOpen&&P[b.dataset.cd]){condOpen(b.dataset.cd,'cond');return}LSEL={t:'d',k:b.dataset.cd};LT='d';showTab('t-bib')});
 w.querySelectorAll('[data-ai]').forEach(b=>b.onclick=()=>{const r=R.out[+b.dataset.ai];showTab('t-ia');csend(`Neste caso, discuta "${r.d.n}": critérios diagnósticos, o que confirma ou afasta, exames, conduta e sinais de alarme.`)});window.__cu&&window.__cu()}

/* integra o caso ao contexto do chat de IA */
const _cx=ctxPac;
ctxPac=function(){let s=_cx();const f=findings(),pres=Object.keys(f).filter(k=>f[k]===1).map(k=>SI[k].n),abs=Object.keys(f).filter(k=>f[k]===-1).map(k=>SI[k].n);
 if(!(pres.length||abs.length||C.hist||C.sex))return s;
 const R=rank();
 return s+'\nCaso clínico: sexo '+(C.sex==='f'?'feminino':C.sex==='m'?'masculino':'não informado')+'; evolução '+({a:'até 7 dias',s:'1 a 3 semanas',c:'> 3 semanas'})[C.dur]+'; achados presentes: '+(pres.join(', ')||'nenhum')+'; ausentes: '+(abs.join(', ')||'nenhum')+(C.hist?'; história: '+C.hist.slice(0,600):'')+(R.out.length?'; ranking local do app: '+R.out.slice(0,5).map(r=>r.d.n).join('; '):'')+'.'};

/* abas */
const _st=showTab;
showTab=function(id){_st(id);if(id==='t-caso')drawCaso()};
const st=document.createElement('style');st.textContent='.sx,:root:not([data-theme="light"]) .sx{margin:5px 5px 0 0;padding:7px 11px;background:var(--in);color:var(--tx);border:1px solid var(--bd);border-radius:99px;font-weight:500;font-size:13px}.sx.on,:root:not([data-theme="light"]) .sx.on{background:var(--ac);color:#fff;border-color:var(--ac)}:root:not([data-theme="light"]) .sx.on{color:#06201c}.sx.off,:root:not([data-theme="light"]) .sx.off{text-decoration:line-through;color:var(--wn);border-color:var(--wn)}.tabbar button{font-size:10px}';document.head.appendChild(st);
const main=document.querySelector('main'),sec=document.createElement('section');sec.id='t-caso';sec.innerHTML='<div id="caso"></div>';main.insertBefore(sec,$('t-rx'));
const nav=document.querySelector('.tabbar'),btn=document.createElement('button');btn.dataset.t='t-caso';btn.innerHTML='<span>\uD83E\uDE7A</span>Caso';nav.insertBefore(btn,nav.firstChild);
btn.onclick=()=>showTab('t-caso');
nav.querySelectorAll('button').forEach(b=>{if(b!==btn)b.onclick=()=>{if(b.dataset.t==='t-bib'&&!$('t-bib').hidden)LSEL=null;showTab(b.dataset.t)}});
window.__caso={get C(){return C},S,SI,DX:()=>DX,findDx,save,sync,setS,refresh,update,rank};
})();
