
/* ===== Parte 15 — conteúdo vindo do banco online (protocolos p:, diagnósticos dx:, sintomas sx:) ===== */
(function(){
const OK=['off','aine','sos','nt','g','mx','min','hd','rp','rep','ho','ca'];
const hs=[0,2,3,4,6,8,12,24];
const f1=x=>String(Math.round(x*10)/10).replace('.',','),f2=x=>String(Math.round(x*100)/100).replace('.',',');
const opts=o=>{const r={};if(o&&typeof o==='object')OK.forEach(k=>{if(o[k]!=null&&o[k]!==false&&o[k]!=='')r[k]=(typeof o[k]==='string'?o[k].slice(0,300):o[k])});return r};
function a2o(a){const t=a[0];
 if(t==='T')return{t,n:a[1],f:a[2],mg:a[3],tb:a[4],h:a[5],d:a[6],box:a[7],o:a[8]};
 if(t==='L')return{t,n:a[1],f:a[2],c:a[3],k:a[4],h:a[5],d:a[6],cap:a[7],vol:a[8],o:a[9]};
 if(t==='X')return{t,n:a[1],f:a[2],x:a[3],o:a[4]};
 if(t==='K')return{t,n:a[1],f:a[2],mgkg:a[3],max:a[4],conc:a[5],via:a[6],h:a[7],d:a[8],pre:a[9],pos:a[10],o:a[11],tab:a[12]};
 return null}
function dbItem(it){if(Array.isArray(it))it=a2o(it);if(!it||!it.n)return null;const n=String(it.n).slice(0,90),f=String(it.f||'').slice(0,90),o=opts(it.o),h=+it.h||0,d=Math.max(1,Math.min(90,Math.round(+it.d||1)));
 if(it.t==='T'){if(!(+it.mg>0&&+it.tb>0)||!hs.includes(h))return null;return T(n,f,+it.mg,+it.tb,h,d,+it.box||10,o)}
 if(it.t==='L'){if(!(+it.c>0&&+it.k>0)||!hs.includes(h))return null;return L(n,f,+it.c,+it.k,h,d,+it.cap||0,+it.vol||60,o)}
 if(it.t==='K'){const mg=+it.mgkg;if(!(mg>0))return null;const mxd=+it.max||0,cc=+it.conc||0,via=String(it.via||'').slice(0,40),pre=String(it.pre||'').slice(0,120),pos=String(it.pos||'').slice(0,400);
  return X(n,f,w=>{let dose=mg*w,lim='';if(mxd&&dose>mxd){dose=mxd;lim=` (limitada ao máximo de ${f1(mxd)} mg/dose)`}
   let s=(pre?pre+' ':'')+`${f2(mg)} mg/kg = ${f1(dose)} mg${lim}`;if(cc)s+=` = ${f2(dose/cc)} mL (${f2(cc)} mg/mL)`;if(+it.tab>0)s+=` = ${f1(dose/+it.tab)} comprimido(s) de ${f2(+it.tab)} mg`;if(via)s+=' '+via;if(h)s+=` de ${h}/${h} h`;if(+it.d)s+=` por ${it.d} dia(s)`;if(pos)s+='. '+pos;return s},o)}
 if(it.t==='X'){const x=String(it.x||'').slice(0,1200);return x?X(n,f,x,o):null}
 return null}
const DBP={};
const strs=(a,m)=>(Array.isArray(a)?a:[]).map(x=>String(x).slice(0,400)).slice(0,m||20);
function dbProto(k,d){if(!k||!d)return;const mp=a=>(Array.isArray(a)?a:[]).map(dbItem).filter(Boolean);const c=mp(d.c),a=mp(d.a);if(!c.length&&!a.length)return;
 const nt=strs(d.nt,10);nt.push('Base online'+(d.fonte?' — fonte: '+String(d.fonte).slice(0,160):'')+'. Confira doses, alergias, gestação e o protocolo local antes de prescrever.');
 NP(k,String(d.kw||k).slice(0,400),{c:c.length?c:undefined,a:a.length?a:undefined,nt});
 const cd=d.cd&&typeof d.cd==='object'?{dx:strs(d.cd.dx),tx:strs(d.cd.tx),enc:strs(d.cd.enc),alta:strs(d.cd.alta),ret:strs(d.cd.ret)}:undefined;
 CLX[k]={q:strs(d.q).length?strs(d.q):['Há quantos dias e como começou? Febre, dor, vômitos, falta de ar?','Alergia a medicamentos, gestação e medicamentos em uso?','Doenças de base (diabetes, hipertensão, rins, fígado, coração)?'],or:strs(d.or).length?strs(d.or):['Tome os medicamentos nos horários prescritos.','Volte se piorar ou surgirem sinais de alarme.'],hosp:strs(d.hosp),al:strs(d.al,12).length?strs(d.al,12):undefined,sc:Array.isArray(d.sc)?d.sc:undefined,diet:d.diet?String(d.diet).slice(0,300):undefined,hyd:d.hyd?String(d.hyd).slice(0,300):undefined,cd};
 DBP[k]=1;const s=$('pat');if(s&&![...s.options].some(o=>o.value===k))s.add(new Option(k,k))}
function dbApply(k,d){try{
 if(k.startsWith('p:'))dbProto(k.slice(2),d);
 else if(k.startsWith('dx:')){if(window.dxAdd)dxAdd(d)}
 else if(k.startsWith('sx:')){if(window.sxAdd)sxAdd([d.id,d.n,d.g,d.re,d.al])}}catch(e){}}
window.dbApply=dbApply;window.DBP=DBP;
try{(LS('airows',[])||[]).forEach(x=>{if(x&&x.chave&&x.dados)dbApply(x.chave,x.dados)})}catch(e){}
window.dbDone=()=>{try{window.dxRefresh&&dxRefresh()}catch(e){}};
/* aplica o que ficou na fila (resposta chegou antes deste script) e o cache do último carregamento */
(window.__dbq||[]).forEach(x=>dbApply(x[0],x[1]));window.__dbq=[];
try{const c=JSON.parse(localStorage.getItem('dbc')||'[]');c.forEach(x=>{const k=String(x.chave);if(k.startsWith('sx:'))dbApply(k,x.dados)});c.forEach(x=>{const k=String(x.chave);if(k.startsWith('p:')||k.startsWith('dx:'))dbApply(k,x.dados);else if(k.startsWith('cond:'))CLX[k.slice(5)]=x.dados});dbDone()}catch(e){}
})();
