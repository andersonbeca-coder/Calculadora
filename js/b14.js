
/* ===== Parte 16 — Caso: pedido livre de conduta, painel de conduta e foto/imagem ===== */
(function(){
const CA=window.__caso;if(!CA||!document.getElementById('caso'))return;
const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const g=id=>document.getElementById(id);
const z=s=>String(s==null?'':s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const tk=s=>z(s).split(/[^a-z0-9]+/).filter(Boolean);
const LSg2=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const LSw2=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const st=document.createElement('style');
st.textContent=`#cpan .cpn{border-color:var(--ac);padding:12px}#cpan h3{margin:0;font-size:16px;line-height:1.3}
#cpan details.s2{border-top:1px solid var(--bd);margin-top:10px;padding-top:6px}#cpan details.s2>summary{font-weight:700;font-size:14px;padding:6px 0}
#cpan ul{margin:4px 0 4px 18px;padding:0}#cpan .two{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px}
@media(max-width:560px){#cpan .two{grid-template-columns:1fr}}
#cpan .bx{border:1px solid var(--bd);border-radius:10px;padding:8px 10px}#cpan .bx.int{border-color:var(--wn)}#cpan .bx.hom{border-color:var(--ac)}#cpan .bx>b{display:block;margin-bottom:2px}
#cpan .itm{display:flex;gap:8px;align-items:flex-start;margin:6px 0;font-size:14px}#cpan .itm input{width:20px;height:20px;flex:none;margin-top:2px}
#cpan .rxv{border-radius:10px;margin-top:8px;overflow:auto}#cpan .rxv .rb,#cpan .rxv .rb2{font-size:13px}
#cpan .cpb,#cimg .cpb{margin:8px 8px 0 0;padding:9px 13px;font-size:13px}
#cpan .alb,#cimg .alb,#csug .alb{border:1px solid var(--wn);border-radius:10px;padding:8px 10px;margin-top:8px;color:var(--wn);font-size:13px}#cpan .alb div,#cimg .alb div,#csug .alb div{margin:2px 0}
#cpan .hd2{display:flex;justify-content:space-between;gap:8px;align-items:flex-start}#cpan .hd2 .chip{margin:0;flex:none}
.imt{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.imt figure{position:relative;margin:0;width:92px;height:92px;border-radius:10px;overflow:hidden;border:1px solid var(--bd);background:var(--in)}
.imt img{width:100%;height:100%;object-fit:cover;display:block}.imt button{position:absolute;top:3px;right:3px;margin:0;padding:1px 8px;font-size:13px;border-radius:99px;background:rgba(0,0,0,.65);color:#fff}
#cimg .grid{grid-template-columns:1fr}
#cimg table{border-collapse:collapse;font-size:13px;margin:6px 0;width:100%}#cimg td,#cimg th{border:1px solid var(--bd);padding:3px 6px;text-align:left}#cimg tr.hi td{color:var(--wn);font-weight:600}
#csug .chip.on{border-color:var(--ac);color:var(--ac)}
#cpan .alc,:root:not([data-theme="light"]) #cpan .alc{margin:5px 5px 0 0;padding:7px 11px;background:var(--in);color:var(--tx);border:1px solid var(--bd);border-radius:99px;font-weight:500;font-size:13px}
#cpan .alc.on,:root:not([data-theme="light"]) #cpan .alc.on{background:var(--ac);color:#fff;border-color:var(--ac)}:root:not([data-theme="light"]) #cpan .alc.on{color:#06201c}`;
document.head.appendChild(st);

/* ---------- busca de protocolos por nome, sigla e sinônimo ---------- */
const STOP=new Set('de da do das dos no na nos nas em para por com sem o a os as um uma e ou ao aos pelo pela que se ate pro pra'.split(' '));
const GENT=new Set('ps adulto receituario conduta emergencia modelo ubs completo esquema opcoes sintomaticos variacoes uso continuo unica pediatrico crianca ambulatorial hospitalar'.split(' '));
const SEV=['leve','moderada','moderado','grave'];
const OPTT=new Set('grave leve moderada moderado intensa forte aguda agudo cronica cronico crise episodio quadro caso paciente casa alta hospital internado internar internacao observacao enfermaria uti ps upa ubs emergencia urgencia adulto crianca infantil pediatrico idoso estavel instavel grau tipo sinais sintomas'.split(' '));
const NARR=new Set('menino menina homem mulher feminino masculino senhor senhora anos ano meses mes kg quilos dias dia semanas semana horas hora pcte sexo idade peso tem ha ja faz desde'.split(' '));
const CMDS='condutas?|tratamentos?|tratar|tto|manejo|manejar|protocolos?|prescri[a-z]*|receit[a-z]*|abordagem|terapeutic[a-z]*|terapia|orienta[a-z]*|o que fazer|como (?:tratar|manejar|conduzir)';
const CMD=new RegExp('\\b(?:'+CMDS+')\\b'),CMDG=new RegExp('\\b(?:'+CMDS+')\\b','g');
const ALI=[
['avc','ave','acidente vascular cerebral','acidente vascular encefalico','derrame cerebral','avc isquemico','avc hemorragico','avci','avch'],
['iam','infarto','infarto agudo do miocardio','sindrome coronariana','sindrome coronariana aguda','sca','iamcsst','iamsst'],
['eap','edema agudo de pulmao','edema agudo pulmonar','icad','insuficiencia cardiaca descompensada','ic descompensada'],
['icc','insuficiencia cardiaca','ic'],
['tep','embolia pulmonar','tromboembolismo pulmonar'],
['tvp','trombose venosa profunda','trombose'],
['dpoc','doenca pulmonar obstrutiva cronica','enfisema','bronquite cronica'],
['cad','cetoacidose','cetoacidose diabetica'],
['ehh','estado hiperglicemico hiperosmolar','hiperosmolar'],
['hda','hemorragia digestiva alta','sangramento digestivo alto','hematemese'],
['hdb','hemorragia digestiva baixa','hematoquezia'],
['itu','infeccao urinaria','infeccao do trato urinario'],
['ivas','resfriado','gripe','sindrome gripal','infeccao de vias aereas superiores'],
['geca','gastroenterite','diarreia aguda','gastroenterocolite'],
['pac','pneumonia comunitaria','pneumonia'],
['dip','doenca inflamatoria pelvica'],
['has','hipertensao arterial','hipertensao','pressao alta'],
['crise hipertensiva','urgencia hipertensiva','emergencia hipertensiva','pico hipertensivo'],
['dm','diabetes','diabetes mellitus'],
['lra','lesao renal aguda','insuficiencia renal aguda'],
['crise asmatica','asma','broncoespasmo','exacerbacao de asma','asma aguda'],
['asmatica','asma'],['asmatico','asma'],
['convulsao','crise convulsiva','crise epileptica','epilepsia','estado de mal epileptico','eme'],
['sepse','choque septico','choque'],
['anafilaxia','reacao anafilatica','choque anafilatico','reacao alergica grave'],
['pcr','parada cardiorrespiratoria','parada cardiaca'],
['fa','fibrilacao atrial','flutter'],
['tsv','taquicardia supraventricular'],['tv','taquicardia ventricular'],
['ist','infeccao sexualmente transmissivel','dst'],
['cefaleia','dor de cabeca'],['enxaqueca','migranea'],
['colica renal','calculo renal','litiase urinaria','ureterolitiase','pedra no rim'],
['colica biliar','colelitiase','pedra na vesicula'],
['queimadura','queimado'],
['intoxicacao','envenenamento','overdose'],
['hipoglicemia','glicemia baixa'],['hiperglicemia','glicemia alta'],
['ansiedade','panico','crise de panico','crise de ansiedade'],
['agitacao','agitacao psicomotora','agressividade'],
['psicose','surto psicotico','delirium'],
['tce','traumatismo cranioencefalico','trauma de cranio'],
['epistaxe','sangramento nasal'],
['sifilis','vdrl'],['tb','tuberculose'],['varicela','catapora'],['escabiose','sarna'],['pediculose','piolho'],
['verminose','parasitose','vermes'],['cinetose','enjoo de viagem'],
['dor abdominal','abdome agudo','dor na barriga'],
['amigdalite','faringoamigdalite','dor de garganta','faringite'],
['sinusite','rinossinusite'],['lombalgia','dor lombar','dor nas costas'],
['mordedura','mordida'],['tetano','profilaxia do tetano'],
['hipercalemia','potassio alto'],['hipocalemia','potassio baixo'],['hiponatremia','sodio baixo'],['hipernatremia','sodio alto'],
['pre eclampsia','eclampsia','doenca hipertensiva da gestacao'],
['aborto','abortamento','sangramento na gravidez'],['gravidez ectopica','ectopica']];
const ALR=ALI.map(gr=>gr.map(m=>[m,new RegExp('(^| )'+m.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'( |$)')]));
function variants(n){const out=[n];
 ALR.forEach(gr=>gr.forEach(([m,re])=>{if(re.test(n))gr.forEach(([m2])=>{if(m2!==m){const v=n.replace(re,(_,a,b)=>a+m2+b);if(!out.includes(v))out.push(v)}})}));
 return out.slice(0,40)}
function tm(a,b){if(a===b)return true;const la=a.length,lb=b.length,m=Math.min(la,lb);if(m<4)return false;
 if(a.startsWith(b)||b.startsWith(a))return true;
 let i=0;while(i<m&&a[i]===b[i])i++;if(i>=5&&i>=Math.ceil(0.72*m))return true;
 if(m>=6&&Math.abs(la-lb)<=1&&typeof lev==='function'&&lev(a,b)<=1)return true;return false}
let IDX=null,IDXN=-1,IDXV=-1,VOC=null,VOCS=null;
function indexNow(){const keys=Object.keys(P),dxn=CA.DX().length;
 if(IDX&&IDXN===keys.length&&IDXV===dxn)return IDX;
 const dxBy={};try{CA.DX().forEach(d=>{const k=CA.findDx(d);if(k)(dxBy[k]=dxBy[k]||[]).push(d.n)})}catch(e){}
 const voc=new Set();
 IDX=keys.map(k=>{const pk=P[k]||{},e={k,name:z(k).replace(/[^a-z0-9]+/g,' ').trim(),nt:tk(k),kt:tk(KW[k]||''),dt:tk((dxBy[k]||[]).join(' ')),mt:[]};
  ['c','a'].forEach(t=>(pk[t]||[]).forEach(m=>tk(m.n).forEach(w=>{if(w.length>3)e.mt.push(w)})));e.mt=[...new Set(e.mt)];
  [e.nt,e.kt,e.dt,e.mt].forEach(a=>a.forEach(w=>voc.add(w)));return e});
 VOCS=voc;VOC=[...voc];IDXN=keys.length;IDXV=dxn;return IDX}
const known=t=>VOCS.has(t)||VOC.some(w=>tm(t,w));
function scoreVar(vt,e){let s=0,req=0;
 for(const t of vt){let b=0;
  for(const w of e.nt)if(tm(t,w))b=Math.max(b,GENT.has(w)?0.4:3);
  if(b<3)for(const w of e.kt)if(tm(t,w)){b=Math.max(b,2);break}
  if(b<2)for(const w of e.dt)if(tm(t,w)){b=Math.max(b,1.7);break}
  if(b<1.7)for(const w of e.mt)if(tm(t,w)){b=Math.max(b,1.1);break}
  const opt=OPTT.has(t);if(!opt)req++;
  if(b>0)s+=opt?Math.min(b,1)*0.5:b;else if(!opt)return 0}
 return req?s:0}
function parseQ(raw){const n=z(raw).replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
 const cmd=CMD.test(n),body=n.replace(CMDG,' ').replace(/\s+/g,' ').trim();
 const dest=/\b(?:casa|alta|ambulatori[a-z]*|ubs|domicili[a-z]*)\b/.test(n)?'casa':/\b(?:hospital[a-z]*|internad[a-z]*|internar|internacao|enfermaria|uti|observacao|ps|upa)\b/.test(n)?'hosp':'';
 const sev=SEV.filter(s=>(' '+body+' ').includes(' '+s+' '));
 return{n,body,cmd,dest,sev,digits:/\d/.test(n)}}
const QUAL=new Set('complicada complicado grave graves alergia alergico refrataria refratario resistente recorrente internacao instavel uti choque falha associacao associacoes'.split(' '));
const GESTR=/gestante|gestacao|gravidez|gravida|puerper/;
function search(raw){const q=parseQ(raw),idx=indexNow();
 const toks=v=>v.split(' ').filter(t=>t&&!STOP.has(t)&&!/^\d+$/.test(t)&&!NARR.has(t));
 const vars=[];variants(q.body).forEach(v=>{const all=toks(v),kp=all.filter(known);
  if(!kp.length||all.some(t=>!OPTT.has(t)&&!known(t)))return;
  if(kp.every(t=>OPTT.has(t)&&!SEV.includes(t)))return;
  vars.push({vt:kp,req:Math.max(1,kp.filter(t=>!OPTT.has(t)).length)})});
 const age=parseFloat(g('idade')&&g('idade').value),gest=!!(g('gest')&&g('gest').checked)||GESTR.test(q.n),qt=new Set(tk(q.body));
 const best=new Map();
 vars.forEach(({vt,req})=>idx.forEach(e=>{let s=scoreVar(vt,e);if(s<=0)return;
  if(q.body&&e.name===q.body)s+=4;else if(q.body.length>3&&e.name.includes(q.body))s+=1.5;
  if(q.sev.length){const has=SEV.filter(w=>e.nt.includes(w));if(has.some(w=>q.sev.includes(w)))s+=1.5;else if(has.length)s-=2.5}
  if(q.dest==='hosp'&&/^PS adulto|\(PS\)|emerg/i.test(e.k))s+=0.6;
  if(q.dest==='casa'&&/alta|Receitu|UBS/i.test(e.k))s+=0.6;
  let pen=0;e.nt.forEach(w=>{if(QUAL.has(w)&&!qt.has(w))pen+=0.7});s-=Math.min(1.4,pen);
  if(!gest&&GESTR.test(e.name))s-=1.5;
  if(!isNaN(age)){const pk=P[e.k]||{},hc=!!(pk.c&&pk.c.length),ha=!!(pk.a&&pk.a.length);if(age>=12&&hc&&!ha)s-=1.2;else if(age<12&&ha&&!hc)s-=1.2}
  s-=0.02*e.nt.length;
  const st=s/req,o=best.get(e.k);if(!o)best.set(e.k,{s,st});else{if(s>o.s)o.s=s;if(st>o.st)o.st=st}}));
 const res=[...best].map(([k,o])=>({k,s:o.s,st:o.st})).sort((a,b)=>b.s-a.s||a.k.length-b.k.length).slice(0,10);
 return{q,res,decisive:res.length>0&&(res.length===1||res[0].s-res[1].s>=0.8),full:res.length>0&&res[0].st>=2.4}}
function analyze(raw){const A=search(raw);const q=A.q;A.mode='narr';
 if(!q.body&&!q.cmd){A.mode='none';return A}
 if(q.cmd){A.mode=A.res.length?'cmd':'cmd0';return A}
 const nt=q.body.split(' ').filter(t=>t&&!STOP.has(t)).length;
 if(!q.digits&&nt>=1&&nt<=4&&A.res.length&&A.full)A.mode='name';
 return A}
const GENW=new Set('doenca sindrome infeccao crise quadro lesao processo transtorno disturbio aguda agudo cronica cronico sinais sintomas tipo caso'.split(' '));
function condFind0(txt){const w=String(txt||'').trim().split(/\s+/).slice(0,7),lo=Math.max(1,Math.ceil(w.length/2));
 for(let n=w.length;n>=lo;n--){const part=w.slice(0,n);if(n===1&&(GENW.has(z(part[0]))||z(part[0]).length<4))break;
  const A=search('conduta '+part.join(' '));if(A.res.length&&A.full)return A.res[0].k}return null}
window.condFind=txt=>{try{return condFind0(txt)}catch(e){return null}};

/* ---------- dados do paciente informados no próprio texto ---------- */
function fillDemo(raw){const n=z(raw),C=CA.C;let ch=0;
 const set=(id,v)=>{const e=g(id);if(e&&!String(e.value).trim()){e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}));ch=1}};
 let m=n.match(/(\d+(?:[.,]\d+)?)\s*(?:kg|quilos?|kilos?)\b/);if(m)set('cip',m[1].replace(',','.'));
 m=n.match(/\b(\d{1,3})\s*anos?\b/);if(m)set('cia',m[1]);
 else{m=n.match(/\b(\d{1,2})\s*(?:meses|mes)\b/);if(m&&!String(g('cia').value).trim()){C.unit='m';const u=g('ciu');if(u)u.value='m';set('cia',m[1])}}
 if(!C.sex){if(/\b(?:menina|mulher|feminin[a-z]*|senhora|gestante|gravida)\b/.test(n)){C.sex='f';ch=1}else if(/\b(?:menino|homem|masculin[a-z]*|senhor)\b/.test(n)){C.sex='m';ch=1}
  if(ch){CA.save();const b=document.querySelector('#csx button[data-v="'+C.sex+'"]');if(b)b.classList.add('on');const gw=g('cgw');if(gw)gw.hidden=C.sex!=='f'}}
 if(/\b(?:gestante|gravida)\b/.test(n)&&g('cig')&&!g('cig').checked){g('cig').checked=true;ch=1}
 if(ch){CA.sync()}return ch}

/* ---------- estado do painel ---------- */
const PAN={k:null,sec:{cond:1,int:1,hosp:0,casa:0},ovr:{},tov:'',force:0,safe:0,last:'',closedFor:''};
const famOf=k=>(FAM.find(x=>x[0].test(k))||[])[1];
const clOf=k=>getCl(k,famOf(k))||{};
const cdOf=k=>{const c=clOf(k);return(c&&c.cd)||(autoCl(k)||{}).cd||{}};
const hospOnly=k=>/conduta de emerg|\(PS\)|crise grave|internação|instável|\bUTI\b|choque|sepse|trombólise|parada card/i.test(k);
const isHosp=k=>{if(hospOnly(k)||/^PS adulto/i.test(k))return true;
 const pk=P[k]||{},all=[...(pk.c||[]),...(pk.a||[])].filter(m=>!m.off);return all.length>0&&all.filter(m=>RT(m)==='USO PARENTERAL').length/all.length>=0.5};
function pickType(k){const pk=P[k]||{},a=parseFloat(g('idade')&&g('idade').value),has={c:!!(pk.c&&pk.c.length),a:!!(pk.a&&pk.a.length)};
 const want=PAN.tov||(!isNaN(a)?(a>=12?'a':'c'):'');let t=want&&has[want]?want:(has.a&&!has.c?'a':has.c&&!has.a?'c':(want||'a'));
 const mismatch=!PAN.tov&&!!want&&!has[want]&&(has.a||has.c)&&!PAN.force;
 return{t,want,has,mismatch,unk:isNaN(a)&&!PAN.tov&&has.a&&has.c}}
const okey=(k,t,m)=>k+'|'+t+'|'+m.n+'|'+m.f;
const isOn=(k,t,m)=>{const q=okey(k,t,m);return q in PAN.ovr?PAN.ovr[q]:!m.off};
function protoRx(k,t,dest){
 const sel={pat:g('pat'),tipo:g('tipo'),dest:g('dest')},sv={pat:sel.pat.value,tipo:sel.tipo.value,dest:sel.dest.value,cur:cur,CUR_OR:CUR_OR};
 try{
  if(![...sel.pat.options].some(o=>o.value===k))sel.pat.add(new Option(k,k));
  sel.pat.value=k;sel.tipo.value=t;sel.dest.value=dest;
  const hosp=isHosp(k),L=(P[k]&&P[k][t])||[],keep=[];
  const hoOnly=hospOnly(k);
  L.forEach((m,i)=>{if(dest==='h'?m.ca:(m.ho||(hoOnly&&!m.ca)||(hosp&&RT(m)==='USO PARENTERAL'&&!m.ca)))return;keep.push(i)});
  cur=keep.map(i=>({...L[i],on:isOn(k,t,L[i]),_i:i}));
  CUR_OR=clOf(k).or||null;
  cur.forEach(m=>{m.r=calc(m)});
  const al=[];safety(al);
  const html=rxHtml(true),items=cur.map(m=>({i:m._i,m,r:m.r,blk:m.blk,on:m.on})),bany={};
  /* segunda passada: marca contraindicação também nas alternativas ainda não selecionadas */
  const real=cur;try{cur=real.map(m=>({...m,on:true,el:null}));cur.forEach(m=>{m.r=calc(m)});safety([]);cur.forEach(m=>{if(m.blk)bany[m._i]=m.blk})}catch(e){}finally{cur=real}
  items.forEach(x=>{x.blkAny=bany[x.i]||''});
  return{html,al,items,bany};
 }finally{sel.pat.value=sv.pat;sel.tipo.value=sv.tipo;sel.dest.value=sv.dest;cur=sv.cur;CUR_OR=sv.CUR_OR}}
function h2t(root){const out=[];
 const walk=(n,up)=>{if(n.nodeType===3){const t=n.nodeValue.replace(/\s+/g,' ');out.push(up?t.toUpperCase():t);return}
  if(n.nodeType!==1)return;const tg=n.tagName;if(tg==='BR'){out.push('\n');return}
  const up2=up||(/\bit\b/.test(n.className||'')&&!/text-transform:\s*none/.test(n.getAttribute('style')||''));
  const blk=/^(DIV|P|UL|OL|H\d)$/.test(tg);if(tg==='LI')out.push('\n- ');else if(blk)out.push('\n');
  [...n.childNodes].forEach(c=>walk(c,up2));if(blk)out.push('\n')};
 walk(root,false);return out.join('').replace(/[ \t]*\n[ \t]*/g,'\n').replace(/\n{3,}/g,'\n\n').replace(/^\s+|\s+$/g,'')}
const toNode=html=>{const d=document.createElement('div');d.innerHTML=html;return d};
const bullets=a=>(a||[]).map(x=>'- '+x).join('\n');
function copyText(txt,btn){const old=btn&&btn.textContent;const done=ok=>{if(btn){btn.textContent=ok?'Copiado ✓':'Copie manualmente';setTimeout(()=>btn.textContent=old,1500)}};
 const fb=()=>{const a=document.createElement('textarea');a.value=txt;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}a.remove();done(ok)};
 if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(()=>done(true),fb);else fb()}
/* ---------- painel de conduta ---------- */
const fmtAge=a=>{a=parseFloat(a);if(isNaN(a))return'';return a<1?Math.round(a*12)+' meses':(Math.round(a*10)/10)+' anos'};
function patLine(){const b=[],a=g('idade').value,w=g('peso').value,sx=CA.C.sex;if(a)b.push(fmtAge(a));if(w)b.push(w+' kg');if(sx)b.push(sx==='f'?'feminino':'masculino');if(g('gest').checked)b.push('gestante');return b.length?b.join(' · '):'idade e peso não informados'}
const li=a=>a&&a.length?'<ul>'+a.map(x=>'<li>'+E(x)+'</li>').join('')+'</ul>':'';
const blk=(t,a)=>a&&a.length?'<div class="sec"><b>'+t+'</b>'+li(a)+'</div>':'';
const DEFALTA=['Estável, sem nenhum critério de internação ao lado.','Aceita a via oral e consegue seguir a receita.','Tem acompanhante e como voltar rápido se piorar.'];
const DEFENC=['Sinais de alarme, instabilidade, falha do tratamento ou comorbidade grave: avaliar internação ou encaminhar.'];
const NOALTA=['Conduta hospitalar: a alta só vem depois de reavaliação, melhora sustentada e estabilidade clínica. Se houver receita de alta relacionada, ela aparece na seção 4.'];
const altaOf=(k,d)=>d.alta&&d.alta.length?d.alta:(hospOnly(k)?NOALTA:DEFALTA);
function dxAlarms(k){const o=[];try{CA.DX().forEach(d=>{if(d.al&&CA.findDx(d)===k&&!o.includes(d.al))o.push(d.al)})}catch(e){}return o}
function homeSib(k){const f=famOf(k);if(!f)return null;return Object.keys(P).find(x=>x!==k&&famOf(x)===f&&/alta|ambulatorial|ubs|domic|casa|receitu/i.test(x))||null}
function condText(k){const c=clOf(k),d=cdOf(k),o=['CONDUTA — '+k,''];
 const add=(t,a)=>{if(a&&a.length){o.push(t+':');o.push(bullets(a));o.push('')}};
 add('Diagnóstico e exames',d.dx);add('Tratamento',d.tx);if(isHosp(k))add('Se hospital / observação',c.hosp);return o.join('\n').trim()}
function intText(k){const d=cdOf(k),o=['INTERNAR / ENCAMINHAR SE:',bullets(d.enc&&d.enc.length?d.enc:DEFENC),'','PODE IR PARA CASA SE:',bullets(altaOf(k,d))];
 if(d.ret&&d.ret.length){o.push('');o.push('RETORNO E SEGUIMENTO:');o.push(bullets(d.ret))}return o.join('\n')}
function rxBlock(html,sel){const n=toNode(html);return[...n.querySelectorAll(sel)].map(h2t).join('\n\n')}
function checklist(k,t,R,L){
 if(!R.items.length)return'';
 let h='<div class="fm" style="margin-top:6px">Marque ou desmarque os itens; a prescrição abaixo se atualiza.</div>';
 R.items.forEach(x=>{const m=x.m,r=x.r||{},sh=r.need?'['+r.need+']':(r.hx||r.x||'');
  h+='<label class="itm"><input type="checkbox" data-pa="tog" data-i="'+x.i+'" '+(x.on?'checked':'')+'><span><b>'+E(m.n)+'</b> <span class="fm">'+E(m.f&&m.f!=='manual'?m.f:'')+(m.off?' · alternativa':' · padrão')+'</span>'+((x.blk||(!x.on&&x.blkAny))?'<div class="wn">⛔ '+E(x.blk||x.blkAny)+(x.blk?' — fora da receita':' — não recomendado para este paciente')+'</div>':'')+'<br><span class="fm">'+E(String(sh).slice(0,170))+'</span></span></label>'});
 const hints=[];R.items.forEach(x=>{if(!x.m.off&&!x.on){const alts=L.map((a,j)=>({a,j})).filter(y=>y.a.off&&!isOn(k,t,y.a)&&RT(y.a)===RT(x.m)&&!(R.bany&&R.bany[y.j]));
   if(alts.length)hints.push('<div class="fm" style="margin-top:6px">Sem <b>'+E(x.m.n)+'</b> na unidade? Alternativas deste protocolo: '+alts.map(y=>'<button class="chip" type="button" data-pa="alt" data-i="'+y.j+'" style="margin:2px 4px 0 0">+ '+E(y.a.n)+'</button>').join('')+'</div>')}});
 return h+hints.join('')}
function safetyBox(){const A=[...document.querySelectorAll('#alg input')];
 const chips=A.map(i=>'<button type="button" class="alc '+(i.checked?'on':'')+'" data-pa="alg" data-v="'+E(i.value)+'">'+E(i.parentElement.textContent.trim())+'</button>').join('');
 const inf=algTxt()!=='não informado';
 return '<details class="s2" data-sec="safe" '+((!inf||PAN.safe)?'open':'')+'><summary>Segurança: alergias e medicamentos em uso '+(inf?'<span class="pill ok">informado</span>':'<span class="pill w">preencher</span>')+'</summary><div>'+chips+'</div><div class="grid" style="margin-top:6px"><div><label>Outra alergia</label><input id="pao" value="'+E(g('alo').value)+'" autocomplete="off"></div><div><label>Medicamentos em uso</label><input id="pau" value="'+E(g('uso').value)+'" autocomplete="off" placeholder="ex.: varfarina, losartana"></div></div></details>'}
function panelHtml(k){
 const pk=P[k],cl=clOf(k),cd=cdOf(k),ty=pickType(k),hospT=isHosp(k),tags=[];
 if(pk.c&&pk.c.length)tags.push('<span class="pill ok">\uD83D\uDC76 criança</span>');if(pk.a&&pk.a.length)tags.push('<span class="pill ok">\uD83E\uDDD1 adulto</span>');
 if(typeof BK!=='undefined'&&BK[k])tags.push('<span class="pill w">IA — não revisado</span>');else if(window.DBP&&DBP[k])tags.push('<span class="pill ok">banco online</span>');
 if(cl.auto)tags.push('<span class="pill w">roteiro padrão (sem conduta detalhada)</span>');
 let h='<div class="card cpn"><div class="hd2"><div><h3>\uD83E\uDE7A '+E(k)+'</h3><div class="fm">'+tags.join('')+'</div></div><button class="chip" type="button" data-pa="close" aria-label="Fechar painel">✕</button></div>';
 h+='<div class="fm" style="margin-top:4px">Paciente: <b>'+E(patLine())+'</b> · Alergias: <b>'+E(algTxt())+'</b></div>';
 let H=null,Cc=null;
 if(ty.mismatch){h+='<div class="alb"><div>⚠ Paciente '+(ty.want==='c'?'criança':'adulto')+', mas este protocolo só tem modelo '+(ty.want==='c'?'de adulto':'pediátrico')+'. As doses não foram calculadas para evitar erro de faixa etária.</div><div><button class="chip" type="button" data-pa="force" style="margin:4px 6px 0 0">Ver o modelo mesmo assim (só referência)</button><button class="chip" type="button" data-pa="ai" style="margin:4px 0 0">\uD83E\uDD16 Pedir à IA</button></div></div>'}
 else{
  if(ty.unk)h+='<div class="alb"><div>Idade não informada: mostrando o modelo de '+(ty.t==='a'?'adulto':'criança')+'. Escolha: <button class="chip" type="button" data-pa="typ" data-v="c" style="margin:2px 4px 0 0">\uD83D\uDC76 Criança</button><button class="chip" type="button" data-pa="typ" data-v="a" style="margin:2px 0 0">\uD83E\uDDD1 Adulto</button></div></div>';
  H=protoRx(k,ty.t,'h');Cc=protoRx(k,ty.t,'c');
  const al=[];[...H.al,...Cc.al,...(pk.nt||[]).map(x=>'Nota: '+x)].forEach(x=>{if(!al.includes(x))al.push(x)});
  if(al.length)h+='<div class="alb">'+al.map(x=>'<div>⚠ '+E(x)+'</div>').join('')+'</div>'}
 /* 1 conduta */
 const so=id=>PAN.sec[id]?' open':'';
 const alm=dxAlarms(k);
 h+='<details class="s2" data-sec="cond"'+so('cond')+'><summary>1. Conduta</summary>'+(cl.auto?'<div class="fm">Conduta detalhada ainda não cadastrada: roteiro padrão.</div>':'')+blk('Diagnóstico e exames',cd.dx)+blk('Tratamento',cd.tx)+(hospT?blk('Se hospital / observação',cl.hosp):'')+alm.map(x=>'<div class="wn">⚠ '+E(x)+'</div>').join('')+'<button class="chip cpb" type="button" data-pa="cp" data-w="cond">Copiar conduta</button></details>';
 /* 2 internar x casa */
 h+='<details class="s2" data-sec="int"'+so('int')+'><summary>2. Internar ou ir para casa?</summary><div class="two"><div class="bx int"><b>\uD83C\uDFE5 Internar / observar / encaminhar se</b>'+li(cd.enc&&cd.enc.length?cd.enc:DEFENC)+'</div><div class="bx hom"><b>\uD83C\uDFE0 Pode ir para casa se</b>'+li(altaOf(k,cd))+'</div></div>'+blk('↩ Retorno e seguimento',cd.ret)+'<button class="chip cpb" type="button" data-pa="cp" data-w="int">Copiar critérios</button></details>';
 /* 3 e 4 prescrições */
 h+=safetyBox();
 if(H){const L=P[k][ty.t]||[];
  h+='<details class="s2" data-sec="hosp"'+so('hosp')+'><summary>3. Prescrição no momento (hospital / PS) <span class="fm">· '+H.items.filter(x=>x.on&&!x.blk).length+' item(ns)</span></summary>'+checklist(k,ty.t,H,L)+'<div class="rxv">'+H.html+'</div><button class="chip cpb" type="button" data-pa="cp" data-w="hosp">Copiar prescrição do hospital</button><button class="chip cpb" type="button" data-pa="rxtab" data-d="h">Abrir na aba Receita</button></details>';
  const sib=hospT&&!Cc.items.length?homeSib(k):null,sib2=hospT&&Cc.items.length?homeSib(k):null;
  h+='<details class="s2" data-sec="casa"'+so('casa')+'><summary>4. Receita para casa <span class="fm">· '+Cc.items.filter(x=>x.on&&!x.blk).length+' item(ns)</span></summary>'+
   (Cc.items.length?checklist(k,ty.t,Cc,L):'<div class="fm">Esta conduta é hospitalar: não há receita domiciliar padrão. Se o paciente for liberado, prescreva conforme a evolução.'+(sib?'':'')+'</div>')+
   ((sib||sib2)?'<div class="fm" style="margin-top:6px">Receita de alta relacionada: <button class="chip" type="button" data-pa="sug" data-k="'+E(sib||sib2)+'" data-s="casa" style="margin:2px 0 0">'+E(sib||sib2)+'</button></div>':'')+
   (Cc.items.length?'<div class="rxv">'+Cc.html+'</div><button class="chip cpb" type="button" data-pa="cp" data-w="rec">Copiar receita</button><button class="chip cpb" type="button" data-pa="cp" data-w="ori">Copiar orientações e sinais de alarme</button><button class="chip cpb" type="button" data-pa="rxtab" data-d="c">Abrir na aba Receita</button>':'')+'</details>'}
 h+='<div class="row" style="margin-top:10px"><button class="chip cpb" type="button" data-pa="cp" data-w="all" style="margin-top:0">\uD83D\uDCCB Copiar tudo</button><button class="chip cpb" type="button" data-pa="ai" style="margin-top:0">\uD83E\uDD16 Pedir à IA para este paciente</button></div>';
 h+='<div class="fm" style="margin-top:6px">Apoio à decisão: confira bula, alergias, função renal, gestação e o protocolo do seu serviço antes de prescrever.</div></div>';
 return h}
function render(){const box=g('cpan');if(!box)return;
 if(!PAN.k||!P[PAN.k]){box.innerHTML='';return}
 try{box.innerHTML=panelHtml(PAN.k)}catch(e){box.innerHTML='<div class="card wn">Não foi possível montar a conduta: '+E(e&&e.message||e)+'</div>';console.error(e)}}
let RT16=0;const renderSoon=()=>{clearTimeout(RT16);RT16=setTimeout(render,200)};
function allText(k){const ty=pickType(k);const o=[condText(k),'',intText(k)];
 if(!ty.mismatch){const H=protoRx(k,ty.t,'h'),Cc=protoRx(k,ty.t,'c');o.push('','PRESCRIÇÃO NO MOMENTO (HOSPITAL / PS)',h2t(toNode(H.html)),'','RECEITA PARA CASA',h2t(toNode(Cc.html)))}return o.join('\n')}
function copyWhat(w){const k=PAN.k,ty=pickType(k);
 if(w==='cond')return condText(k);if(w==='int')return intText(k);if(w==='all')return allText(k);
 if(ty.mismatch)return'';
 if(w==='hosp')return h2t(toNode(protoRx(k,ty.t,'h').html));
 const C0=protoRx(k,ty.t,'c');
 if(w==='rec')return rxBlock(C0.html,'.rb');if(w==='ori')return rxBlock(C0.html,'.rb2');return h2t(toNode(C0.html))}
function openRxTab(k,d){const pk=P[k],ty=pickType(k),t=ty.t||(pk.c&&!pk.a?'c':'a');g('tipo').value=t;g('tipo').dispatchEvent(new Event('change'));g('pat').value=k;g('q').value=k;g('dest').value=d||'c';build();rx();showTab('t-rx')}
window.condOpen=(k,sec,quiet)=>{if(!P[k])return;
 PAN.k=k;PAN.tov='';PAN.force=0;PAN.closedFor='';
 PAN.sec=sec&&typeof sec==='object'?Object.assign({cond:0,int:0,hosp:0,casa:0},sec):sec==='hosp'?{cond:0,int:0,hosp:1,casa:0}:sec==='casa'?{cond:0,int:0,hosp:0,casa:1}:sec==='rx'?{cond:0,int:0,hosp:1,casa:1}:{cond:1,int:1,hosp:0,casa:0};
 const t=g('t-caso');if(t&&t.hidden){showTab('t-caso')}else render();
 if(!quiet)setTimeout(()=>{const b=g('cpan');if(b&&b.scrollIntoView)b.scrollIntoView({behavior:'smooth',block:'start'})},60)};
function panelClick(e){const b=e.target.closest('[data-pa]');if(!b)return;const a=b.dataset.pa;
 if(a==='tog')return;
 if(a==='close'){PAN.k=null;PAN.closedFor=z((g('chs')||{}).value||'');render();if(window.__sg16)window.__sg16();return}
 if(a==='alt'){const k=PAN.k,ty=pickType(k),m=P[k][ty.t][+b.dataset.i];PAN.ovr[okey(k,ty.t,m)]=true;render();return}
 if(a==='typ'){PAN.tov=b.dataset.v;render();return}
 if(a==='force'){PAN.force=1;render();return}
 if(a==='alg'){const i=document.querySelector('#alg input[value="'+b.dataset.v+'"]');if(i){i.click()}PAN.safe=1;render();return}
 if(a==='cp'){copyText(copyWhat(b.dataset.w),b);return}
 if(a==='rxtab'){openRxTab(PAN.k,b.dataset.d);return}
 if(a==='sug'){condOpen(b.dataset.k,b.dataset.s||'cond');return}
 if(a==='ai'){const k=PAN.k;showTab('t-ia');csend('Paciente: '+patLine()+'. Alergias: '+algTxt()+'. Em uso: '+(g('uso').value||'não informado')+'. Diagnóstico: '+k+'. Dê a conduta completa: confirmação diagnóstica, critérios de internação x alta, prescrição para o momento (hospital) e receita para casa com doses para este paciente, orientações e sinais de alarme.');return}}
function panelChange(e){const b=e.target;
 if(b.matches&&b.matches('input[data-pa="tog"]')){const k=PAN.k,ty=pickType(k),m=P[k][ty.t][+b.dataset.i];PAN.ovr[okey(k,ty.t,m)]=b.checked;render();return}
 if(b.id==='pao'){g('alo').value=b.value;g('alo').dispatchEvent(new Event('input',{bubbles:true}));PAN.safe=1;render();return}
 if(b.id==='pau'){g('uso').value=b.value;g('uso').dispatchEvent(new Event('input',{bubbles:true}));PAN.safe=1;render();return}}
function panelToggle(e){const d=e.target;if(d&&d.tagName==='DETAILS'&&d.dataset.sec){if(d.dataset.sec==='safe')PAN.safe=d.open?1:0;else PAN.sec[d.dataset.sec]=d.open?1:0}}
/* ---------- foto / imagem do caso ---------- */
const IM={list:[],busy:null,ocr:'',res:null,err:'',txt:'',ai:null};
const ITYPES=[['','Detectar sozinho'],['lesao','Lesão de pele ou ferida'],['ecg','ECG'],['rx','Raio-X, tomografia ou ultrassom'],['exame','Exame de sangue, urina ou laudo (texto)'],['receita','Receita, bula ou caixa de remédio'],['garganta','Garganta, olho ou ouvido'],['outro','Outra imagem clínica']];
const TNOME={lesao:'Lesão de pele / ferida',lesao_pele:'Lesão de pele',ferida:'Ferida',ecg:'ECG',radiografia:'Radiografia',rx:'Imagem radiológica',tomografia:'Tomografia',ultrassom:'Ultrassom',exame_laboratorial:'Exame laboratorial',exame:'Exame / laudo',laudo:'Laudo',receita:'Receita',embalagem:'Embalagem de medicamento',orofaringe:'Orofaringe',olho:'Olho',ouvido:'Ouvido',garganta:'Garganta / olho / ouvido',outro:'Outra imagem'};
const VSYS='Você apoia um médico no Brasil (UBS, UPA/PS, plantão). Analise a(s) imagem(ns) clínica(s) enviada(s). Regras: (1) descreva apenas o que é visível e não invente achados; (2) você NÃO dá diagnóstico definitivo: liste hipóteses em ordem de probabilidade, com o que sustenta cada uma e o que falta para confirmar; (3) se a imagem for texto (exame, laudo, receita, caixa de remédio), transcreva fielmente os dados, com unidade, e aponte o que foge do esperado; (4) em ECG ou radiografia, descreva de forma sistemática e destaque achados críticos; (5) se a imagem estiver ruim, cortada ou não for clínica, diga isso em qualidade e limitações; (6) destaque sinais de alarme e urgência; (7) não identifique pessoas; (8) responda sempre em português do Brasil.';
const imgOk=()=>LSg2('imc16')==='1';
async function visionOK(){try{const m=aiMode();if(!m)return false;if(m==='sample'){if(!SAMPLE||!SAMPLE.limits)return false;const l=await SAMPLE.limits();return!!(l&&l.images)}return true}catch(e){return false}}
const b64=blob=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(String(r.result).split(',')[1]||'');r.onerror=()=>no(r.error);r.readAsDataURL(blob)});
async function shrink(file){const MAX=1568;let bmp;
 try{bmp=await createImageBitmap(file,{imageOrientation:'from-image'})}catch(e){
  bmp=await new Promise((ok,no)=>{const u=URL.createObjectURL(file),im=new Image();im.onload=()=>{URL.revokeObjectURL(u);ok(im)};im.onerror=()=>{URL.revokeObjectURL(u);no(new Error('Não consegui abrir esta imagem.'))};im.src=u})}
 const W=bmp.width||bmp.naturalWidth,Hh=bmp.height||bmp.naturalHeight;if(!W||!Hh)throw new Error('Imagem vazia.');
 const sc=Math.min(1,MAX/Math.max(W,Hh)),w=Math.max(1,Math.round(W*sc)),h=Math.max(1,Math.round(Hh*sc));
 const cv=document.createElement('canvas');cv.width=w;cv.height=h;const cx=cv.getContext('2d');cx.fillStyle='#fff';cx.fillRect(0,0,w,h);cx.drawImage(bmp,0,0,w,h);
 if(bmp.close)try{bmp.close()}catch(e){}
 const blob=await new Promise(r=>cv.toBlob(r,'image/jpeg',0.85));if(!blob)throw new Error('Não consegui preparar a imagem.');
 return{blob,url:URL.createObjectURL(blob),w,h,b64:await b64(blob),name:(file.name||'foto').slice(0,40)}}
async function addFiles(files){const arr=[...files].filter(f=>/^image\//.test(f.type)||/\.(jpe?g|png|webp|gif|heic|heif)$/i.test(f.name||''));
 if(!arr.length){IM.err='Escolha um arquivo de imagem (foto).';renderImg();return}
 const room=4-IM.list.length;if(room<=0){IM.err='Máximo de 4 imagens por análise. Remova alguma antes.';renderImg();return}
 IM.err='';IM.ocr='Preparando '+Math.min(arr.length,room)+' imagem(ns)…';renderImg();
 for(const f of arr.slice(0,room)){try{IM.list.push(await shrink(f))}catch(e){IM.err=(e&&e.message)||'Falha ao preparar a imagem.'}}
 if(arr.length>room)IM.err='Usei só as primeiras '+room+' imagens (máximo de 4).';
 IM.ocr='';IM.res=null;IM.ai=await visionOK();renderImg()}
function tipoSel(){const e=g('imt');return e?e.value:''}
function buildPrompt(){const tipo=tipoSel(),qq=(g('imq')&&g('imq').value||'').trim(),hist=(g('chs')&&g('chs').value||'').trim().slice(0,600);
 const tn=(ITYPES.find(x=>x[0]===tipo)||[])[1]||'';
 return 'Tipo informado pelo médico: '+(tipo?tn:'não informado (detecte pela imagem)')+'.\nPaciente: '+patLine()+'.\nHistória digitada: '+(hist||'(nenhuma)')+'\nPergunta do médico: '+(qq||'(nenhuma)')+
 '\n\nIDs de sintomas do app (use no campo "sintomas" só os que a imagem sustenta): '+CA.S.map(x=>x[0]+'='+x[1]).join('; ')+
 '\n\nResponda SOMENTE com JSON válido, sem texto fora dele, neste formato: {"tipo":"lesao_pele|ferida|ecg|radiografia|tomografia|ultrassom|exame_laboratorial|laudo|receita|embalagem|orofaringe|olho|ouvido|outro","qualidade":"boa|regular|ruim","descricao":"2 a 4 frases objetivas do que se vê","achados":["..."],"texto":"transcrição fiel do texto legível, se houver","valores":[{"nome":"","valor":"","unidade":"","ref":"","alterado":true}],"hipoteses":[{"dx":"nome do diagnóstico","prob":"alta|media|baixa","porque":"...","confirmar":"o que falta para confirmar"}],"sintomas":["ids"],"alarme":["..."],"conduta_imediata":["..."],"limitacoes":"..."}. Se não houver texto ou valores, devolva listas vazias.'}
async function askVision(prompt,imgs,signal){const mode=aiMode();if(!mode)throw{code:'sem_ia'};
 if(mode==='sample'){if(!SAMPLE||!SAMPLE.limits)throw{code:'images_unavailable'};
  const r=await SAMPLE(VSYS+'\n\n'+prompt,{images:imgs.map(i=>i.blob),cache:false,signal});return r.text}
 if(mode==='proxy'){let r;try{r=await fetch(AC.p,{method:'POST',headers:{'content-type':'application/json'},signal,body:JSON.stringify({system:VSYS,messages:[{role:'user',content:prompt}],images:imgs.map(i=>({mime:'image/jpeg',data:i.b64})),web:false})})}catch(e){if(e.name==='AbortError')throw{code:'cancelled'};throw{code:'Falha de rede no servidor próprio.'}}
  if(!r.ok)throw{code:'Servidor próprio respondeu '+r.status};const j=await r.json();return j.text||''}
 const content=[...imgs.map(i=>({type:'image',source:{type:'base64',media_type:'image/jpeg',data:i.b64}})),{type:'text',text:prompt}];
 const r=mode==='gemini'?await gem([{role:'user',content}],{system:VSYS,max:4000,signal}):await anth([{role:'user',content}],{system:VSYS,max:4000,signal});
 return r.text}
function visErr(e){const c=e&&e.code;
 if(c==='sem_ia')return'IA não configurada. Abra a aba Config e cadastre uma chave do Gemini (gratuita) ou do Claude. A leitura de texto (OCR) funciona sem chave.';
 if(c==='images_unavailable')return'Este modo de IA não envia imagens. Em Config, use uma chave do Gemini ou do Claude. A leitura de texto (OCR) continua disponível.';
 if(c==='not_granted')return'Permissão do Claude negada neste artefato.';
 if(c==='rate_limited')return'Limite de uso atingido. Tente de novo em instantes.';
 if(c==='image_rejected')return'A IA recusou a imagem (tipo ou tamanho). Tente outra foto.';
 if(c==='cancelled')return'Análise cancelada.';
 return errTxt(e)||'Falha na análise da imagem.'}
async function runAI(){if(IM.busy||!IM.list.length)return;
 if(!aiMode()){IM.err=visErr({code:'sem_ia'});renderImg();return}
 const c=g('imc');if(c&&c.checked)LSw2('imc16','1');
 if(!imgOk()){IM.err='Marque a ciência de que a imagem será enviada ao provedor de IA configurado.';renderImg();return}
 IM.busy=new AbortController();IM.res=null;IM.err='';renderImg();
 try{const txt=await askVision(buildPrompt(),IM.list,IM.busy.signal);let r;try{r=parseJ(txt)}catch(e){r={_raw:String(txt)}}IM.res=r}
 catch(e){IM.err=visErr(e)}
 IM.busy=null;renderImg()}
async function loadTess(){if(window.Tesseract)return window.Tesseract;
 await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';s.onload=ok;s.onerror=()=>no({code:'Não foi possível carregar o leitor de texto (sem internet ou bloqueio do navegador).'});document.head.appendChild(s)});
 if(!window.Tesseract)throw{code:'Leitor de texto indisponível.'};return window.Tesseract}
async function runOCR(){if(IM.busy||!IM.list.length)return;IM.busy=new AbortController();IM.err='';IM.ocr='Carregando o leitor de texto (1ª vez demora um pouco)…';renderImg();
 let w=null;
 try{const T=await loadTess();
  w=await T.createWorker('por',1,{logger:m=>{if(!m)return;if(m.status==='recognizing text'&&m.progress!=null)IM.ocr='Lendo o texto… '+Math.round(m.progress*100)+'%';else if(m.status)IM.ocr='Preparando… ('+m.status+')';const o=g('imo2');if(o)o.textContent=IM.ocr}});
  const outs=[];for(const im of IM.list){if(IM.busy&&IM.busy.signal.aborted)throw{code:'cancelled'};const r=await w.recognize(im.blob);outs.push((r&&r.data&&r.data.text)||'')}
  IM.txt=outs.join('\n\n').replace(/[ \t]+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  if(!IM.txt)IM.err='Não encontrei texto legível. Tente uma foto mais próxima, reta e bem iluminada.'}
 catch(e){IM.err=(e&&e.code==='cancelled')?'Leitura cancelada.':(errTxt(e)||'Falha ao ler o texto.')}
 finally{if(w)try{await w.terminate()}catch(e){}}
 IM.busy=null;IM.ocr='';renderImg()}
const arr=x=>Array.isArray(x)?x:(x==null||x===''?[]:[x]);
const S1=x=>typeof x==='string'?x:(x&&typeof x==='object'?Object.values(x).filter(v=>typeof v==='string'||typeof v==='number').join(' — '):String(x==null?'':x));
function resHtml(r){
 if(r._raw)return'<div class="alb"><div>A IA respondeu fora do formato esperado. Texto recebido:</div></div><pre style="white-space:pre-wrap;font:13px/1.45 system-ui,sans-serif;max-height:16em;overflow:auto">'+E(String(r._raw).slice(0,4000))+'</pre>';
 let h='<div class="alb"><div><b>⚠ Leitura de imagem por IA</b> — apoio ao raciocínio. Confirme no exame clínico e no exame original; não substitui laudo.</div></div>';
 const tn=TNOME[r.tipo]||(r.tipo?String(r.tipo).replace(/_/g,' '):'Imagem');
 h+='<div class="sec"><b>'+E(tn)+'</b> '+(r.qualidade?'<span class="pill '+(r.qualidade==='ruim'?'w':'ok')+'">qualidade '+E(r.qualidade)+'</span>':'')+'</div>';
 if(r.descricao)h+='<div>'+E(S1(r.descricao))+'</div>';
 const ach=arr(r.achados).map(S1).filter(Boolean);if(ach.length)h+='<div class="sec"><b>Achados</b>'+li(ach)+'</div>';
 const vals=arr(r.valores).filter(v=>v&&typeof v==='object'&&(v.nome||v.valor));
 if(vals.length)h+='<div class="sec"><b>Valores lidos</b><table><tr><th>Exame</th><th>Valor</th><th>Referência</th></tr>'+vals.map(v=>'<tr class="'+(v.alterado?'hi':'')+'"><td>'+E(v.nome)+'</td><td>'+E(v.valor)+' '+E(v.unidade||'')+(v.alterado?' ⚠':'')+'</td><td>'+E(v.ref||'')+'</td></tr>').join('')+'</table></div>';
 if(r.texto&&String(r.texto).trim())h+='<details class="sec"><summary><b>Texto lido na imagem</b></summary><pre style="white-space:pre-wrap;font:13px/1.45 system-ui,sans-serif;max-height:14em;overflow:auto">'+E(String(r.texto).slice(0,4000))+'</pre></details>';
 const hy=arr(r.hipoteses).filter(x=>x&&(x.dx||typeof x==='string')).slice(0,6);
 if(hy.length)h+='<div class="sec"><b>Hipóteses (da mais para a menos provável)</b>'+hy.map((x,i)=>{const dx=S1(typeof x==='string'?x:x.dx),k=window.condFind(dx);
  return'<div class="sec"><b>'+(i+1)+'. '+E(dx)+'</b> '+(x.prob?'<span class="pill '+(/alta/i.test(x.prob)?'ok':'')+'">'+E(x.prob)+'</span>':'')+(x.porque?'<div class="fm">Por quê: '+E(S1(x.porque))+'</div>':'')+(x.confirmar?'<div class="fm">Para confirmar: '+E(S1(x.confirmar))+'</div>':'')+
   (k?'<button class="chip cpb" type="button" data-im="cd" data-k="'+E(k)+'" style="margin-top:4px">Ver conduta: '+E(k)+'</button>':'<div class="fm">Sem protocolo cadastrado com esse nome.</div>')+'</div>'}).join('')+'</div>';
 const alm=arr(r.alarme).map(S1).filter(Boolean);if(alm.length)h+='<div class="alb">'+alm.map(x=>'<div>⚠ '+E(x)+'</div>').join('')+'</div>';
 const ci=arr(r.conduta_imediata).map(S1).filter(Boolean);if(ci.length)h+='<div class="sec"><b>Conduta imediata sugerida pela IA</b>'+li(ci)+'</div>';
 if(r.limitacoes)h+='<div class="fm">Limitações: '+E(S1(r.limitacoes))+'</div>';
 const ids=arr(r.sintomas).filter(s=>CA.SI[s]);
 h+='<div class="row"><button class="chip cpb" type="button" data-im="add">➕ Adicionar à história</button>'+(ids.length?'<button class="chip cpb" type="button" data-im="sx">Marcar '+ids.length+' sintoma(s) sugerido(s)</button>':'')+'<button class="chip cpb" type="button" data-im="cpr">Copiar leitura</button></div>';
 return h}
function histLine(r){const p=[],tn=TNOME[r.tipo]||'Imagem';p.push('['+tn+'] '+S1(r.descricao||''));
 const ach=arr(r.achados).map(S1).filter(Boolean);if(ach.length)p.push('Achados: '+ach.slice(0,6).join('; ')+'.');
 const alt=arr(r.valores).filter(v=>v&&v.alterado).map(v=>(v.nome||'')+' '+(v.valor||'')+(v.unidade?' '+v.unidade:''));if(alt.length)p.push('Alterados: '+alt.join(', ')+'.');
 const h0=arr(r.hipoteses)[0];if(h0)p.push('Hipótese da IA (confirmar): '+S1(typeof h0==='string'?h0:h0.dx)+'.');return p.join(' ').replace(/\s+/g,' ').trim()}
function resText(r){if(r._raw)return String(r._raw);const o=[(TNOME[r.tipo]||'Imagem')+(r.qualidade?' (qualidade '+r.qualidade+')':''),S1(r.descricao||'')];
 const ach=arr(r.achados).map(S1).filter(Boolean);if(ach.length)o.push('Achados:',bullets(ach));
 const vals=arr(r.valores).filter(v=>v&&(v.nome||v.valor));if(vals.length)o.push('Valores:',vals.map(v=>'- '+(v.nome||'')+': '+(v.valor||'')+' '+(v.unidade||'')+(v.ref?' (ref. '+v.ref+')':'')+(v.alterado?' ALTERADO':'')).join('\n'));
 const hy=arr(r.hipoteses);if(hy.length)o.push('Hipóteses (confirmar):',bullets(hy.map(x=>S1(typeof x==='string'?x:x.dx)+(x.prob?' ('+x.prob+')':''))));
 const alm=arr(r.alarme).map(S1);if(alm.length)o.push('Alarme:',bullets(alm));return o.filter(Boolean).join('\n')}
function appendHist(txt){const ta=g('chs');if(!ta||!txt)return;ta.value=(ta.value.trim()?ta.value.trim()+'\n':'')+txt;ta.dispatchEvent(new Event('input',{bubbles:true}))}
function renderImg(){const box=g('cimg');if(!box)return;
 if(!IM.list.length&&!IM.ocr&&!IM.err){box.innerHTML='';return}
 const prov=({proxy:'seu servidor',key:'Claude (sua chave)',gemini:'Gemini (sua chave)',sample:'Claude (sua conta)'})[aiMode()]||'';
 let h='<div class="sec"><b>\uD83D\uDCF7 Imagens do caso</b> <span class="fm">ficam só neste aparelho; só vão para a IA se você tocar em “Analisar com IA”</span>';
 h+='<div class="imt">'+IM.list.map((im,i)=>'<figure><img alt="" src="'+im.url+'"><button type="button" data-im="rm" data-i="'+i+'" aria-label="Remover imagem">✕</button></figure>').join('')+'</div>';
 if(IM.list.length){
  h+='<div class="grid"><div><label>Tipo de imagem</label><select id="imt">'+ITYPES.map(x=>'<option value="'+x[0]+'" '+(IM.tipo===x[0]?'selected':'')+'>'+E(x[1])+'</option>').join('')+'</select></div><div><label>O que quer saber? (opcional)</label><input id="imq" value="'+E(IM.q||'')+'" placeholder="ex.: parece herpes-zóster?" autocomplete="off"></div></div>';
  if(!imgOk())h+='<label class="ck" style="margin-top:8px"><input type="checkbox" id="imc"><span>Entendi: ao analisar, a imagem é enviada ao provedor de IA'+(prov?' ('+E(prov)+')':'')+'. Não incluo nome, CPF, rosto ou outros identificadores.</span></label>';
  else h+='<div class="fm" style="margin-top:6px">A imagem vai ao provedor de IA'+(prov?' ('+E(prov)+')':'')+' apenas ao analisar. Evite nome, CPF e rosto.'+(aiMode()==='gemini'?' No plano gratuito do Gemini o Google pode usar o conteúdo para melhorar seus produtos: prefira não enviar imagem identificável.':'')+'</div>';
  h+='<div class="row">'+(IM.busy?'<button class="chip cpb" type="button" data-im="stop">⏹ Cancelar</button>':'<button class="chip cpb" type="button" data-im="ai"'+(IM.ai===false?' title="Configure uma chave de IA em Config"':'')+'>\uD83D\uDD0D Analisar com IA</button><button class="chip cpb" type="button" data-im="ocr">\uD83D\uDD24 Ler texto da imagem (sem IA)</button><button class="chip cpb" type="button" data-im="clr">Limpar fotos</button>')+'</div>';
  if(IM.ai===false&&!IM.busy)h+='<div class="fm">IA de imagem indisponível agora (sem chave de Gemini/Claude em Config). A leitura de texto funciona sem chave.</div>'}
 if(IM.ocr)h+='<div class="fm" id="imo2" style="margin-top:6px">⏳ '+E(IM.ocr)+'</div>';
 if(IM.busy&&!IM.ocr)h+='<div class="fm" style="margin-top:6px">⏳ A IA está lendo a imagem… (pode levar de 10 a 60 s)</div>';
 if(IM.err)h+='<div class="alb"><div>'+E(IM.err)+'</div></div>';
 if(IM.txt&&!IM.busy)h+='<div class="sec"><b>Texto lido (confira e corrija)</b><textarea id="imx" rows="6" style="width:100%">'+E(IM.txt)+'</textarea><div class="row"><button class="chip cpb" type="button" data-im="tadd">➕ Adicionar à história</button><button class="chip cpb" type="button" data-im="tcp">Copiar texto</button></div><div class="fm">A leitura automática pode errar números e unidades: confira com a imagem antes de usar.</div></div>';
 if(IM.res&&!IM.busy)h+=resHtml(IM.res);
 h+='</div>';box.innerHTML=h}
function imgClick(e){const b=e.target.closest('[data-im]');if(!b)return;const a=b.dataset.im;
 if(a==='rm'){const im=IM.list.splice(+b.dataset.i,1)[0];if(im)URL.revokeObjectURL(im.url);if(!IM.list.length){IM.res=null;IM.txt=''}renderImg();return}
 if(a==='clr'){IM.list.forEach(im=>URL.revokeObjectURL(im.url));IM.list=[];IM.res=null;IM.txt='';IM.err='';renderImg();return}
 if(a==='ai'){const t=g('imt'),q=g('imq');if(t)IM.tipo=t.value;if(q)IM.q=q.value;runAI();return}
 if(a==='ocr'){const t=g('imt');if(t)IM.tipo=t.value;runOCR();return}
 if(a==='stop'){if(IM.busy)IM.busy.abort();return}
 if(a==='cd'){condOpen(b.dataset.k,'cond');return}
 if(a==='add'&&IM.res){appendHist(histLine(IM.res));b.textContent='Adicionado ✓';return}
 if(a==='sx'&&IM.res){arr(IM.res.sintomas).filter(s=>CA.SI[s]).forEach(s=>CA.setS(s,1));CA.refresh();b.textContent='Marcado ✓';return}
 if(a==='cpr'&&IM.res){copyText(resText(IM.res),b);return}
 if(a==='tadd'){const x=g('imx');appendHist('[Texto de imagem] '+(x?x.value:IM.txt).replace(/\s*\n\s*/g,' ').trim().slice(0,1500));b.textContent='Adicionado ✓';return}
 if(a==='tcp'){const x=g('imx');copyText(x?x.value:IM.txt,b);return}}
function imgChange(e){const t=e.target;if(t.id==='imc'&&t.checked){LSw2('imc16','1');renderImg();return}if(t.id==='imt')IM.tipo=t.value;if(t.id==='imq')IM.q=t.value}
function imgInput(e){if(e.target.id==='imx')IM.txt=e.target.value;else if(e.target.id==='imq')IM.q=e.target.value}
function imgReset(){IM.list.forEach(i=>{try{URL.revokeObjectURL(i.url)}catch(e){}});IM.list=[];IM.res=null;IM.txt='';IM.err='';IM.tipo='';IM.q='';IM.ocr='';if(IM.busy){try{IM.busy.abort()}catch(e){}IM.busy=null}}
/* ---------- ligação com a aba Caso ---------- */
let LASTQ=null;
const secOf=q=>{const both=/\b(prescri[a-z]*|receit[a-z]*)\b/.test(q.n);
 if(q.dest==='hosp')return{cond:0,int:0,hosp:1,casa:both?1:0};
 if(q.dest==='casa')return{cond:0,int:0,hosp:both?1:0,casa:1};
 if(both)return{cond:0,int:0,hosp:1,casa:1};
 return{cond:1,int:1,hosp:0,casa:0}};
function sugHtml(A){const R0=(A&&A.res)||[],r=R0.filter((x,i)=>i===0||x.s>=Math.max(1.5,0.45*R0[0].s)).slice(0,6);if(!r.length)return'';
 return'<div class="fm" style="margin-top:8px">'+(A.q.cmd?(A.full?'Conduta encontrada':'Conduta aproximada'):(A.full?'Protocolo encontrado':'Protocolo aproximado'))+(r.length>1?' — toque para trocar:':' — toque para abrir:')+'</div><div>'+
  r.map(x=>'<button type="button" class="chip'+(x.k===PAN.k?' on':'')+'" data-sg="'+E(x.k)+'" style="margin:4px 6px 0 0">'+E(x.k)+'</button>').join('')+'</div>'}
function noneHtml(){return'<div class="alb"><div>Não achei protocolo com esse nome. Tente a sigla (AVC, IAM, DPOC, ITU), o nome da doença ou um sinônimo.</div><div><button class="chip" type="button" data-sgai="1" style="margin:4px 0 0">\uD83E\uDD16 Pedir a conduta à IA</button></div></div>'}
function runText(force){const ta=g('chs'),box=g('csug');if(!ta||!box)return;
 const raw=ta.value;let A=null;
 if(raw.trim().length>=2){try{A=analyze(raw);if(force&&(A.mode==='narr'||A.mode==='none'))A=analyze('conduta '+raw)}catch(e){console.error(e)}}
 LASTQ=A;
 if(force&&(!A||A.mode==='cmd0'||A.mode==='none')&&(raw.trim().split(/\s+/).length>=4||/\d/.test(raw))){
  const c=g('cre');if(c)c.click();box.innerHTML='<div class="fm" style="margin-top:8px">Texto de história: reconheci os sintomas. Veja “Diagnósticos mais prováveis” logo abaixo e toque em <b>Conduta</b>, <b>Receita para casa</b> ou <b>Prescrição hospital</b> no diagnóstico escolhido.</div>';
  const r=g('cres');if(r&&r.scrollIntoView)setTimeout(()=>r.scrollIntoView({behavior:'smooth',block:'start'}),80);return}
 if(!A||A.mode==='narr'||A.mode==='none'){box.innerHTML='';return}
 if(A.mode==='cmd0'){box.innerHTML=noneHtml();return}
 if(A.q.cmd&&fillDemo(raw))renderSoon();
 box.innerHTML=sugHtml(A);
 const t=g('t-caso'),vis=!!t&&!t.hidden,top=A.full&&A.res[0]?A.res[0].k:null;
 if(top&&top!==PAN.k&&vis&&(force||PAN.closedFor!==z(raw))){condOpen(top,secOf(A.q),!force);box.innerHTML=sugHtml(A)}}
window.__sg16=()=>runText();
let TT16=0;const onText=()=>{clearTimeout(TT16);TT16=setTimeout(()=>runText(),500)};
function caseClick(e){const t=e.target;if(!t.closest)return;
 const sg=t.closest('[data-sg]');
 if(sg){condOpen(sg.dataset.sg,LASTQ?secOf(LASTQ.q):'cond');const b=g('csug');if(b)b.innerHTML=sugHtml(LASTQ);return}
 if(t.closest('[data-sgai]')){const raw=(g('chs')||{}).value||'';showTab('t-ia');csend('Paciente: '+patLine()+'. Alergias: '+algTxt()+'. Preciso da conduta completa para: '+raw.slice(0,300)+'. Inclua: confirmação diagnóstica, tratamento, critérios de internação x alta, prescrição para o momento no hospital e receita para casa com doses para este paciente, orientações e sinais de alarme.');return}
 if(t.closest('#cim')){const f=g('cimf');if(f)f.click();return}
 if(t.closest('#cbusca')){runText(true);return}
 if(t.closest('[data-pa]')){panelClick(e);return}
 if(t.closest('[data-im]')){imgClick(e);return}}
function caseChange(e){const t=e.target;if(!t||!t.closest)return;
 if(t.id==='cimf'){const fs=[...(t.files||[])];t.value='';addFiles(fs);return}
 if(t.closest('#cpan')){panelChange(e);return}
 if(t.closest('#cimg')){imgChange(e);return}}
function caseInput(e){const t=e.target;if(!t||!t.closest)return;
 if(t.id==='chs'){onText();return}
 if(t.closest('#cimg'))imgInput(e)}
function hook16(){const ta=g('chs');if(!ta)return;
 ta.addEventListener('paste',e=>{const fs=[...((e.clipboardData&&e.clipboardData.files)||[])].filter(f=>/^image\//.test(f.type));if(fs.length){e.preventDefault();addFiles(fs)}});
 const cc=g('ccl');if(cc){const o=cc.onclick;cc.onclick=function(ev){PAN.k=null;PAN.closedFor='';PAN.ovr={};imgReset();return o&&o.call(this,ev)}}
 renderImg();render();runText()}
const root=g('caso');
root.addEventListener('click',caseClick);
root.addEventListener('change',caseChange);
root.addEventListener('input',caseInput);
root.addEventListener('toggle',e=>{if(e.target.closest&&e.target.closest('#cpan'))panelToggle(e)},true);
if(!window.__d16){const d=window.drawCaso;window.drawCaso=function(){const r=d.apply(this,arguments);try{hook16()}catch(e){console.error(e)}return r};window.__d16=1}
window.__cu=()=>{if(PAN.k)renderSoon()};
const odb=window.dbDone;
window.dbDone=function(){const r=odb&&odb.apply(this,arguments);try{IDX=null;if(g('chs')){runText();if(PAN.k)renderSoon()}}catch(e){console.error(e)}return r};
window.__p16={PAN,IM,analyze,search,condOpen:window.condOpen,runText};
hook16();
})();
