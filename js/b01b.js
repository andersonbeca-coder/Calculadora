
NP("Hemorroidas","hemorroidas hemorroida dor anal sangramento fissura",{a:[T("Ibuprofeno","comprimido 600 mg",600,1,8,5,20,{aine:1,sos:"dor"}),X("Pomada anti-hemorroidária (Proctyl)","uso anal","Aplicar 2 vezes ao dia (1 bisnaga).",{hd:"1 bisnaga"}),...SA().slice(0,1)],nt:["O modelo UBS/PS inclui cefalexina; não há indicação de antibiótico sem infecção, por isso não foi incluída."]});
NP("Labirintite / vertigem","labirintite vertigem tontura náusea zumbido",{a:[T("Flunarizina","comprimido 10 mg",10,1,12,7,14),T("Flunarizina (continuação)","comprimido 10 mg",10,1,24,14,14),T("Ondansetrona","comprimido 4 mg",4,1,8,3,10,{sos:"náuseas ou vômitos"}),T("Betaistina","comprimido 24 mg",24,1,12,30,60,{off:1}),T("Cinarizina","comprimido 25 mg",25,1,8,14,42,{off:1})]});
NP("Micose superficial","micose tinha dermatofitose fungo pele coceira candidíase cutânea",{a:[X("Clotrimazol creme 1%","tópico","Aplicar na lesão 2 vezes ao dia por 2 a 4 semanas (1 bisnaga).",{hd:"1 bisnaga"}),X("Fluconazol 150 mg","cápsula","1 cápsula por semana, por 4 semanas.",{off:1,hd:"4 cápsulas"}),X("Cetoconazol + betametasona (Betrix)","creme","Aplicar 2 vezes ao dia (modelo UBS/PS).",{off:1,hd:"1 bisnaga",nt:"Evitar corticoide associado em micose"})]});
NP("Queimadura","queimadura queimado fogo escaldadura bolha pele",{c:[X("Sulfadiazina de prata 1%","creme","Aplicar nas lesões 2 vezes ao dia por 5 dias (1 bisnaga).",{hd:"1 bisnaga"}),...SC()],a:[X("Sulfadiazina de prata 1%","creme","Aplicar nas lesões 2 vezes ao dia por 5 dias (1 bisnaga).",{hd:"1 bisnaga"}),T("Ibuprofeno","comprimido 600 mg",600,1,8,5,20,{aine:1}),...SA().slice(0,1)],nt:["O modelo UBS/PS inclui cefalexina; antibiótico sistêmico não é indicado de rotina na queimadura superficial, por isso não foi incluído."]});
NP("Rinite alérgica","rinite alérgica espirros coriza coceira nariz entupido",{a:[T("Loratadina","comprimido 10 mg",10,1,24,30,30),X("Budesonida nasal 100 mcg/jato","spray nasal","1 a 2 jatos em cada narina de 12/12h (a partir de 4 anos).",{hd:"1 frasco"}),X("Soro nasal","spray/gotas","1 jato em cada narina várias vezes ao dia (1 frasco).")]});
const BZ=n=>X("Benzilpenicilina benzatina 1.200.000 UI","frasco-ampola",n,{hd:""});
NP("Sífilis recente (primária, secundária ou latente recente)","sífilis vdrl úlcera genital cancro duro ist",{a:[X("Benzilpenicilina benzatina 1.200.000 UI","frasco-ampola","1 ampola IM profunda em cada glúteo (2,4 milhões UI), dose única, na unidade.",{hd:"2 ampolas"}),...SA().slice(0,1)],nt:["Notificar; tratar as parcerias; VDRL de seguimento e teste de HIV. Reação de Jarisch-Herxheimer nas primeiras 24 h não é alergia."]});
NP("Sífilis tardia ou duração ignorada","sífilis latente tardia vdrl ist",{a:[X("Benzilpenicilina benzatina 1.200.000 UI","frasco-ampola","1 ampola IM profunda em cada glúteo (2,4 milhões UI) 1 vez por semana, por 3 semanas.",{hd:"6 ampolas"}),...SA().slice(0,1)],nt:["Notificar; tratar as parcerias; VDRL de seguimento e teste de HIV. Na neurossífilis o tratamento é hospitalar."]});
let BK={};try{BK=JSON.parse(localStorage.getItem('bk')||'{}')}catch(e){}
const saveBk=()=>{try{localStorage.setItem('bk',JSON.stringify(BK))}catch(e){}};
function mkItem(o){if(!o||!o.nome)return null;const n=String(o.nome).slice(0,60),f=String(o.apres||'').slice(0,60),H=[0,4,6,8,12,24],h=+o.h,d=Math.min(30,Math.max(1,Math.round(+o.dias||1))),x={};
 if(o.sos)x.sos=String(o.sos).slice(0,40);if(o.alt)x.off=1;
 if(o.tipo==='X')return o.texto?X(n,f,String(o.texto).slice(0,300),x):null;
 if(!H.includes(h))return null;
 if(o.tipo==='T'){if(!(+o.mg>0&&+o.comp>0))return null;return T(n,f,+o.mg,+o.comp,h,d,+o.caixa||10,x)}
 if(o.tipo==='L'){if(!(+o.conc>0&&+o.mgkg>0))return null;if(+o.gotas)x.g=20;if(+o.mx>0)x.mx=+o.mx;x.nt='Gerado por IA: confira a dose';return L(n,f,+o.conc,+o.mgkg,h,d,+o.cap||0,+o.vol||60,x)}
 return null}
function applyBk(k){const e=BK[k],c=(e.c||[]).map(mkItem).filter(Boolean),a=(e.a||[]).map(mkItem).filter(Boolean);
 P[k]={c:c.length?c:undefined,a:a.length?a:undefined,nt:['⚠ Modelo gerado por IA '+(e.rev?'(marcado como revisado).':'— AINDA NÃO REVISADO: confira doses, alergias e o protocolo local.')+(e.al?' Sinais de alarme: '+e.al:'')]};
 KW[k]=e.kw||k;e.cl={q:(e.q&&e.q.length)?e.q:['Sem perguntas geradas: faça a anamnese completa.'],or:(e.or&&e.or.length)?e.or:['Volte se piorar ou surgirem sinais de alarme.']};
 const s=document.getElementById('pat');if(s&&![...s.options].some(o=>o.value===k))s.add(new Option(k,k))}
Object.keys(BK).forEach(k=>{try{applyBk(k)}catch(e){}});
$("pat").innerHTML='<option value=""></option>'+Object.keys(P).map(k=>`<option>${k}</option>`).join("");
window.susOn=()=>{const e=document.getElementById('susv');if(e)return e.checked;try{return !!JSON.parse(localStorage.getItem('susv')||'false')}catch(x){return false}};
window.susF=l=>{if(!Array.isArray(l))return l;const on=susOn(),r=l.filter(m=>on?!m.ns:!m.su);return r.length?r:l};
window.susHas=l=>Array.isArray(l)&&l.some(m=>m.su||m.ns);
function list(){const p=P[$("pat").value];let l=p?p[$("tipo").value]||null:null;if(!l)return l;l=susF(l);const d=$("dest")?$("dest").value:"c",f=l.filter(m=>d==="h"?!m.ca:!m.ho);return f.length?f:l}
function build(){if(!KEEP)drawCl();
  const l=list(),box=$("meds");box.innerHTML="";
  if(!l&&!(KEEP&&cur.length)){cur=[];box.innerHTML='<div class="card fm">'+(!$("tipo").value?'Escolha primeiro: criança ou adulto.':!$("pat").value?'Escolha a doença (digite a 1ª letra acima).':'Não há modelo '+($("tipo").value==="a"?"de adulto":"pediátrico")+' para esta doença nas fontes carregadas.')+'</div>';upd();return}
  if(!KEEP)cur=l.map(m=>({...m,on:!m.off}));
  cur.forEach(m=>{
    const d=document.createElement("div");d.className="card med";
    d.innerHTML=`<input type="checkbox" ${m.on?"checked":""}><div class="b"><div class="nm">${m.n}</div><div class="fm">${m.f}${m.nt?" · "+m.nt:""}</div>`+
    (m.fx||m.t==="X"?"":`<div class="row">${m.t==="L"?'<span>mg/kg/dose</span><input class="k" type="number" step="0.1" value="'+(+m.k.toFixed(2))+'">':""}${m.h?'<span>dias</span><input class="dd" type="number" min="1" value="'+m.d+'">':""}</div>`)+`<div class="res"></div><div class="wn cx"></div></div>`;
    d.querySelector("input[type=checkbox]").onchange=e=>{m.on=e.target.checked;upd()};
    const k=d.querySelector(".k");if(k)k.oninput=e=>{m.k=parseFloat(e.target.value)||0;upd()};
    const dd=d.querySelector(".dd");if(dd)dd.oninput=e=>{m.d=parseInt(e.target.value)||1;upd()};
    m.el=d;box.appendChild(d);
  });
  upd();
}
function calc(m){
  const w=parseFloat($("peso").value)||0,a=parseFloat($("idade").value),chk=[];
  if(m.min!=null&&a<m.min)chk.push(`Idade abaixo de ${m.min} ano(s): uso não recomendado`);
  
  if(m.t==="X"){const xx=typeof m.x==="function"?(w?m.x(w):"[informe o peso]"):m.x;return{x:xx,chk,head:m.hd||"",hx:xx}}
  const n=m.h?24/m.h:1,doses=m.h?n*m.d:(m.rep||1);
  let dose,ml=0,g=0,tab=0,adm;
  if(m.t==="T"){tab=typeof m.tb==="function"?m.tb(a):m.tb;if(isNaN(tab))return{need:"Informe a idade",chk};dose=tab*m.mg;adm=`${tb(tab)} comprimido(s)`+(m.mg>1?` (${m.mg} mg)`:"")}
  else{
    if(m.t==="L"){if(!w)return{need:"Informe o peso",chk};dose=m.k*w;if(m.cap&&dose>m.cap){dose=m.cap;chk.push(`Dose limitada ao máximo de ${m.cap} mg/dose`)}ml=dose/m.c}
    else{ml=typeof m.ml==="function"?m.ml(a):m.ml;if(isNaN(ml))return{need:"Informe a idade",chk};if(!ml)return{need:"Fora da faixa etária",chk}}
    if(m.g){g=Math.round(ml*m.g);ml=g/m.g}else ml=Math.round(ml*10)/10;
    dose=ml*m.c;adm=m.g?`${g} gota${g>1?"s":""} (${fmt(ml)} mL; ${fmt(dose)} mg)`:`${fmt(ml)} mL (${fmt(dose)} mg)`;
    if(w&&m.mx&&dose*n/w>m.mx*1.001)chk.push(`${fmt(dose*n/w)} mg/kg/dia excede o máximo usual (${m.mx})`);
  }
  const fr=m.h?`de ${m.h}/${m.h} horas (${n}x ao dia)`:"em dose única"+(m.rp?`, ${m.rp}`:"");
  const du=m.h?`, ${m.sos?"por até":"por"} ${m.d} dias`:"";
  let body=`Tomar ${adm} por via oral ${fr}${m.sos?`, se ${m.sos}`:""}${du}.`,head,per="";
  if(m.t==="T"){const tot=tab*doses;head=`${tb(tot)} comprimido(s)`;if(m.h)per=` ${tb(tab*n)} comprimido(s)/dia.`;body+=`${per} Total: ${tb(tot)} comprimidos`+` (${Math.ceil(tot/m.box)} caixa(s) de ${m.box}).`}
  else{const tm=ml*doses,fr_=Math.ceil(tm/m.vol-1e-9);head=`${fr_} frasco(s)`;if(m.h)per=` ${fmt(ml*n)} mL/dia`+(g?` (${g*n} gotas/dia)`:"")+".";
    body+=`${per} Total${m.sos?" máx.":""}: ${fmt(tm)} mL`+(g?` (${g*doses} gotas)`:"")+` — ${fr_} frasco(s) de ${m.vol} mL.`}
  const via=/ampola|injet|\bev\b|\bim\b/i.test(m.n+' '+m.f)?'':' VO';
  const hx=`${adm}${via} ${m.h?`${m.h}/${m.h}h`:'dose única'}${m.sos?` se ${m.sos}`:''}`+(m.t==='T'?'':'')+'.';
  return{x:body,head,chk,hx};
}
function upd(){
  const al=[];
  cur.forEach(m=>{
    const r=calc(m);m.r=r;if(m.el){
      m.el.querySelector(".res").innerHTML=r.need?`<span class="wn">${r.need}</span>`:(m.t==="X"?r.x:`<b>${r.x}</b>`);
      m.el.querySelector('.cx').innerHTML=r.chk.map(c=>'⚠ '+c).join('<br>')}
    if(m.on)r.chk.forEach(c=>al.push(`${m.n}: ${c}`));
  });
  ((P[$("pat").value]||{}).nt||[]).forEach(t=>al.push("Nota: "+t));
  safety(al);
  $("al").hidden=!al.length;$("al").innerHTML=al.map(t=>"⚠ "+t).join("<br>");
  rx();
}
const NM={pen:'penicilinas',dip:'dipirona',aine:'AINEs',mac:'macrolídeos',qui:'quinolonas',cef:'cefalosporinas'};
function tg(m){const n=m.n.toLowerCase(),t=[];[['pen',/amoxicilina|ampicilina|benzetacil/],['cef',/cefalexina|cefuroxima/],['dip',/dipirona|buscopan composto/],['aine',/ibuprofeno|nimesulida|diclofenaco/],['mac',/azitromicina|claritromicina/],['qui',/ciprofloxacino|norfloxacino|levofloxacino/],['mtz',/metronidazol/],['ond',/ondansetrona/],['met',/metoclopramida/],['cort',/prednis/],['dexc',/dexclorfeniramina/],['cicl',/ciclobenzaprina/],['alb',/albendazol|mebendazol/]].forEach(([k,r])=>{if(r.test(n))t.push(k)});if(m.aine&&!t.includes('aine'))t.push('aine');return t}
const UT=[['anticoag',/varfarina|marevan|rivaroxabana|xarelto|apixabana|eliquis|clopidogrel|\baas\b|aspirina|acetilsal|enoxaparina/],['aine',/ibuprofeno|diclofenaco|naproxeno|cetoprofeno|nimesulida|meloxicam|\baas\b|aspirina|acetilsal/],['hipert',/enalapril|captopril|losartana|valsartana|candesartana|ramipril|furosemida|hidroclorotiazida|clortalidona|espironolactona/],['ant',/antiácido|alumínio|ferro|cálcio|magnésio|sucralfato|multivitam/],['qt',/amiodarona|sotalol|haloperidol|citalopram|escitalopram|clorpromazina|quetiapina|metadona|domperidona|ondansetrona|azitromicina|claritromicina|ciprofloxacino|levofloxacino|fluconazol|cetoconazol/],['sero',/tramadol|fluoxetina|sertralina|paroxetina|escitalopram|citalopram|venlafaxina|amitriptilina|nortriptilina|duloxetina|ciclobenzaprina/],['sed',/diazepam|clonazepam|alprazolam|lorazepam|zolpidem|fenobarbital|rivotril|álcool|alcool|morfina|codeína|gabapentina|prometazina/],['dm',/insulina|metformina|glibenclamida|glimepirida|gliclazida/],['li',/lítio|litio/],['mtx',/metotrexato/],['antipsic',/haloperidol|risperidona|olanzapina|clorpromazina/],['alc',/álcool|alcool|bebida/],['cort',/prednis|dexametasona|hidrocortisona/]];
const PU=[['aine','anticoag','AINE + anticoagulante/antiagregante: risco de sangramento'],['aine','hipert','AINE + IECA/BRA/diurético: risco de lesão renal e perda do efeito anti-hipertensivo'],['aine','li','AINE + lítio: aumenta o nível de lítio'],['aine','mtx','AINE + metotrexato: toxicidade do metotrexato'],['aine','cort','AINE + corticoide em uso: risco de úlcera e sangramento digestivo'],['aine','aine','AINE + outro AINE/AAS em uso: duplicidade'],['dip','mtx','Dipirona + metotrexato: risco hematológico'],['qui','ant','Quinolona + antiácido/ferro/cálcio/magnésio: separar por 2 h (quelação)'],['qui','qt','Quinolona + droga que prolonga QT: risco de arritmia'],['qui','dm','Quinolona + antidiabético: disglicemia'],['qui','anticoag','Quinolona + anticoagulante: aumenta INR/sangramento'],['qui','cort','Quinolona + corticoide: risco de tendinopatia'],['mac','qt','Macrolídeo + droga que prolonga QT: risco de arritmia'],['mac','anticoag','Macrolídeo + varfarina: aumenta o INR'],['mtz','anticoag','Metronidazol + varfarina: aumenta o INR'],['mtz','alc','Metronidazol + álcool: reação tipo dissulfiram'],['mtz','li','Metronidazol + lítio: aumenta o nível de lítio'],['ond','qt','Ondansetrona + droga que prolonga QT: risco de arritmia'],['ond','sero','Ondansetrona + serotoninérgico: risco de síndrome serotoninérgica'],['met','antipsic','Metoclopramida + antipsicótico: efeitos extrapiramidais'],['cort','dm','Corticoide + antidiabético: hiperglicemia'],['cort','hipert','Corticoide + diurético: hipocalemia'],['dexc','sed','Dexclorfeniramina + sedativo/álcool: sedação aditiva'],['cicl','sero','Ciclobenzaprina + serotoninérgico: síndrome serotoninérgica'],['cicl','sed','Ciclobenzaprina + sedativo: sedação aditiva'],['pen','mtx','Penicilina + metotrexato: aumenta a toxicidade do metotrexato'],['pen','anticoag','Penicilina + varfarina: pode alterar o INR']];
const PP=[['qui','mac','Quinolona + macrolídeo: ambos prolongam o QT'],['qui','ond','Quinolona + ondansetrona: ambos prolongam o QT'],['mac','ond','Macrolídeo + ondansetrona: ambos prolongam o QT'],['aine','cort','AINE + corticoide: risco de úlcera/sangramento digestivo'],['qui','cort','Quinolona + corticoide: risco de tendinopatia'],['dexc','cicl','Dexclorfeniramina + ciclobenzaprina: sedação aditiva'],['met','ond','Metoclopramida + ondansetrona: dois antieméticos']];
function algTxt(){const A=[...document.querySelectorAll('#alg input:checked')].map(i=>i.parentElement.textContent.trim()),o=$('alo').value.trim();return [...A.filter(x=>!/Nenhuma/.test(x)),o].filter(Boolean).join(', ')||(A.length?'nenhuma conhecida':'não informado')}
function safety(al){
  const sel=cur.filter(m=>m.on),A=[...document.querySelectorAll('#alg input:checked')].map(i=>i.value),AL=A.filter(x=>x!=='nao'),ao=$('alo').value.toLowerCase().trim(),uso=$('uso').value.toLowerCase(),a=parseFloat($('idade').value),gest=$('gest').checked;
  if(!A.length&&!ao)al.push('ALERGIAS NÃO INFORMADAS: marque as alergias ou “Nenhuma alergia conhecida” antes de prescrever');
  if(A.includes('nao')&&(AL.length||ao))al.push('Contradição: “nenhuma alergia” marcado junto com alergia informada');
  if(!uso.trim())al.push('Medicamentos em uso não informados: interações com uso contínuo não verificadas');
  if(!isNaN(a)&&$('tipo').value==='a'&&a<12)al.push('Contradição: modo Adulto com idade < 12 anos');
  sel.forEach(m=>{
    m.tg=tg(m);const why=[],n=m.n.toLowerCase();
    AL.forEach(k=>{if(m.tg.includes(k))why.push('ALERGIA a '+NM[k])});
    if(ao&&ao.split(/[,;]/).some(s=>s.trim().length>2&&n.includes(s.trim())))why.push('ALERGIA informada ('+ao+')');
    if(gest&&m.tg.includes('aine'))why.push('AINE contraindicado na gestação');
    if($('pat').value.startsWith('Dengue')&&m.tg.includes('aine'))why.push('evitar AINE na dengue');
    m.blk=why.join('; ');
    if(m.blk)al.push(`${m.n}: ${m.blk} — removido da receita`);
    if(AL.includes('pen')&&m.tg.includes('cef'))al.push(`${m.n}: cefalosporina em alérgico a penicilina (reatividade cruzada): cautela`);
    if(gest&&m.tg.includes('qui'))al.push(`${m.n}: quinolona, evitar na gestação`);
    if(gest&&m.tg.includes('alb'))al.push(`${m.n}: contraindicado no 1º trimestre`);
    if(m.el&&m.blk){const e=m.el.querySelector('.cx');e.innerHTML+=(e.innerHTML?'<br>':'')+'⛔ '+m.blk}
  });
  if(STK.length)sel.forEach(m=>{if(!inStk(m)){al.push(m.n+': não consta no estoque da unidade — veja alternativa');if(m.el){const e=m.el.querySelector('.cx');e.innerHTML+=(e.innerHTML?'<br>':'')+'\uD83D\uDCE6 Não consta no estoque da unidade'}}});
  const ok=sel.filter(m=>!m.blk);
  Object.keys(NM).forEach(k=>{if(ok.filter(m=>m.tg.includes(k)).length>1)al.push('Duplicidade: mais de um medicamento de '+NM[k])});
  if(['pen','cef','mac','qui'].filter(k=>ok.some(m=>m.tg.includes(k))).length>1)al.push('Mais de um antibiótico selecionado: confirme se é intencional');
  PP.forEach(([x,y,t])=>{if(ok.some(m=>m.tg.includes(x))&&ok.some(m=>m.tg.includes(y)))al.push('Interação: '+t)});
  const ut=UT.filter(([k,r])=>r.test(uso)).map(u=>u[0]);
  PU.forEach(([x,y,t])=>{if(ut.includes(y)&&ok.some(m=>m.tg.includes(x)))al.push('Interação: '+t)});
}
['peso','pac','med','crm','alo','uso'].forEach(id=>$(id).oninput=upd);$('alg').onchange=upd;
$("gest").onchange=upd;$("tipo").onchange=build;$("pat").onchange=build;
$("idade").oninput=()=>{const a=parseFloat($("idade").value);if(!isNaN(a)){const t=a>=12?"a":"c";if($("tipo").value!==t){$("tipo").value=t;build();return}}upd()};
let KEEP=false,STK=[];try{STK=JSON.parse(localStorage.getItem('stk')||'[]')}catch(e){}
const saveStk=()=>{try{localStorage.setItem('stk',JSON.stringify(STK))}catch(e){}};
const nz=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const SW=['de','da','do','no','na','ao','em','com','dos','das','e'];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const inStk=m=>STK.some(s=>nz(s)===nz(m.n+' — '+m.f)||nz(s)===nz(m.n));
function suggest(q){let tk=nz(q).split(/[^a-z0-9]+/).filter(Boolean);if(tk.length>1)tk=tk.filter(t=>!SW.includes(t));if(!tk.length)return[];
 return Object.keys(P).map(k=>{const nm=nz(k).split(/[^a-z0-9]+/),kw=nz(KW[k]||'').split(' '),all=nz(k+' '+(KW[k]||''));let s=0;
  tk.forEach(t=>{if(nm.some(w=>w.startsWith(t)))s+=3;else if(kw.some(w=>w.startsWith(t)))s+=2;else if(t.length>2&&all.includes(t))s+=1;else if(t.length>4&&nm.concat(kw).some(w=>w.length>3&&lev(w.slice(0,t.length+1),t)<=1))s+=1});return[k,s]}).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,8).map(x=>x[0])}
function showSug(){const q=$('q').value,r=suggest(q),sr=scSuggest(q),b=$('sug');
 b.innerHTML=(r.length||sr.length)?'<div class="fm">Possíveis diagnósticos/tratamentos e escalas — toque para escolher (confirme na avaliação clínica):</div>'+r.map((k,i)=>`<button class="chip" data-i="${i}">${esc(k)}${BK[k]?' ★':''}</button>`).join('')+sr.map(k=>`<button class="chip" data-s="${k}">\uD83D\uDCCA ${esc(SCALES[k].n)}</button>`).join(''):(q?'<div class="fm">Nada encontrado. Tente outra palavra ou use a IA.</div>':'');
 b.querySelectorAll('[data-i]').forEach(c=>c.onclick=()=>{const k=r[c.dataset.i];$('pat').value=k;$('q').value=k;b.innerHTML='';build()});
 b.querySelectorAll('[data-s]').forEach(c=>c.onclick=()=>{openScale(c.dataset.s);$('scr').scrollIntoView({behavior:'smooth'})})}
$('q').oninput=showSug;
function msearch(q,all){const tk=nz(q).split(/[^a-z0-9]+/).filter(Boolean);if(!tk.length)return[];const seen={},out=[];
 (all?['c','a']:[$('tipo').value]).forEach(t=>Object.keys(P).forEach(k=>(P[k][t]||[]).forEach(m=>{if(m.t==='X')return;const key=m.n+' — '+m.f;if(seen[key])return;seen[key]=1;const w=nz(key).split(/[^a-z0-9]+/);if(tk.every(x=>w.some(y=>y.startsWith(x))))out.push({key,m})})));if(all||$('tipo').value==='c')PEDCAT.forEach(p=>{const key=p[0]+' — '+p[1];if(seen[key])return;seen[key]=1;const w=nz(key).split(/[^a-z0-9]+/);if(tk.every(x=>w.some(y=>y.startsWith(x))))out.push({key,m:pedItem(p)})});return out.slice(0,10)}
$('mq').oninput=()=>{const q=$('mq').value,b=$('msug');
 if(!$('tipo').value||!$('pat').value){b.innerHTML=q?'<div class="fm">Escolha primeiro criança/adulto e a doença.</div>':'';return}
 const r=msearch(q,false);b.innerHTML=r.map((x,i)=>`<button class="chip" data-i="${i}">${esc(x.key)}${STK.length&&inStk(x.m)?' ✓':''}</button>`).join('');
 b.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{const m=r[c.dataset.i].m;if(!cur.some(y=>y.n===m.n&&y.f===m.f)){cur.push({...m,on:true});KEEP=true;build();KEEP=false}$('mq').value='';b.innerHTML=''})};
function drawStk(){$('sn').textContent=STK.length;$('sl').innerHTML=STK.map((s,i)=>`<button class="chip" data-i="${i}">${esc(s)} ✕</button>`).join('')||'<div class="fm">Vazio: o app não avisa sobre falta de estoque.</div>';
 $('sl').querySelectorAll('.chip').forEach(c=>c.onclick=()=>{STK.splice(c.dataset.i,1);saveStk();drawStk();upd()})}
$('sq').oninput=()=>{const r=msearch($('sq').value,true),b=$('ssug');b.innerHTML=r.map((x,i)=>`<button class="chip" data-i="${i}">+ ${esc(x.key)}</button>`).join('');
 b.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{const k=r[c.dataset.i].key;if(!STK.includes(k)){STK.push(k);saveStk()}$('sq').value='';b.innerHTML='';drawStk();upd()})};
$('sq').onkeydown=e=>{if(e.key==='Enter'&&$('sq').value.trim()){STK.push($('sq').value.trim());saveStk();$('sq').value='';$('ssug').innerHTML='';drawStk();upd()}};
drawStk();
let SAMPLE=null;
if(window.claude&&claude.use)claude.use('sample').then(s=>{SAMPLE=s}).catch(()=>{});
$('ia').onclick=async()=>{const q=$('q').value.trim(),o=$('iar');if(!q){o.textContent='Digite sintomas ou o nome da doença primeiro.';return}
 o.textContent='Consultando a IA…';
 const ctx=`Paciente: ${$('tipo').value==='a'?'adulto':$('tipo').value==='c'?'criança':'não informado'}; idade: ${$('idade').value||'?'} anos; peso: ${$('peso').value||'?'} kg; gestante: ${$('gest').checked?'sim':'não'}; alergias: ${algTxt()}; em uso: ${$('uso').value||'nada informado'}.`;
 try{const r=await askAI(`Você apoia um(a) médico(a) generalista recém-formado(a) no Brasil (UBS/PS). Entrada digitada: "${q}". ${ctx} Responda SOMENTE com JSON: lista de até 5 objetos {"dx":"diagnóstico provável","porque":"1 frase","conduta":"tratamento de 1ª linha com doses usuais no Brasil, 2 linhas no máximo","alarme":"sinais de gravidade que exigem encaminhar","app":"chave EXATA desta lista ou vazio: ${Object.keys(P).join(' | ')}"}, do mais ao menos provável. Respeite alergias, idade e gestação. Não invente doses.`);
  const a=Array.isArray(r)?r:(r&&r.items)||[];
  o.innerHTML=a.map((x,i)=>`<div class="card"><b>${esc(x.dx||'')}</b><div>${esc(x.porque||'')}</div><div><b>Conduta:</b> ${esc(x.conduta||'')}</div><div class="wn">⚠ ${esc(x.alarme||'')}</div>${P[x.app]?`<button class="chip" data-k="${i}">Usar receita: ${esc(x.app)}</button>`:`<button class="chip gen" data-g="${i}">Gerar receita com IA e salvar no banco</button>`}</div>`).join('')+'<div class="fm">Sugestão de IA: confirme com sua avaliação clínica.</div>';
  bindGen(o,a);o.querySelectorAll('.chip:not(.gen)').forEach(c=>c.onclick=()=>{const k=a[c.dataset.k].app;$('pat').value=k;$('q').value=k;build()})
 }catch(e){o.textContent=e&&e.code==='sem_ia'?'IA não configurada. Abra a aba Config e cadastre uma chave gratuita do Google Gemini ou da API do Claude (ou use este app dentro do Claude).':'IA indisponível agora ('+(e&&(e.code||e.message)||'erro')+').'}};
const AL8=["Dor abdominal intensa e contínua","Vômitos persistentes","Acúmulo de líquidos (ascite, derrame pleural/pericárdico)","Hipotensão postural ou lipotimia","Hepatomegalia > 2 cm","Sangramento de mucosa","Letargia ou irritabilidade","Aumento progressivo do hematócrito"].map(t=>[t,1]);
const LB9=["Idade < 20 ou > 50 anos","Sem melhora com repouso","Perda de peso","História de neoplasia","Imunodepressão ou uso de drogas EV","História de aneurisma de aorta","Déficit neurológico motor","Febre persistente e sudorese","Retenção urinária, incontinência fecal ou anestesia em sela"].map(t=>[t,1]);
