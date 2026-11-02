
const PD=[
{c:'Dor e febre',n:'Dipirona gotas 500 mg/mL',min:'> 3 meses e > 5 kg',a:.25,r:'1 gota/kg, máx 40 gotas',f:w=>pdG(w,40)+' VO até de 6/6 h, se dor ou febre'},
{c:'Dor e febre',n:'Dipirona solução 50 mg/mL',min:'> 3 meses',a:.25,r:'peso ÷ 2 mL, máx 20 mL',f:w=>pdML(w/2,20)+' VO até de 6/6 h, se dor ou febre'},
{c:'Dor e febre',n:'Paracetamol gotas 200 mg/mL',min:'',a:0,r:'1 gota/kg, máx 35 gotas',f:w=>pdG(w,35)+' VO até de 6/6 h, se dor ou febre'},
{c:'Dor e febre',n:'Ibuprofeno gotas 100 mg/mL',min:'> 6 meses',a:.5,r:'1 gota/kg, máx 40 gotas',f:w=>pdG(w,40)+' VO de 6/6 h ou 8/8 h, por até 5 dias'},
{c:'Antibióticos',n:'Amoxicilina 250 mg/5 mL',min:'',a:0,r:'peso ÷ 3 mL, máx 20 mL',f:w=>pdML(w/3,20)+' VO de 8/8 h, por 7 a 10 dias'},
{c:'Antibióticos',n:'Amoxicilina + clavulanato 250 + 62,5 mg/5 mL',min:'',a:0,r:'peso ÷ 3 mL',f:w=>pdML(w/3,20)+' VO de 8/8 h, por 7 a 10 dias'},
{c:'Antibióticos',n:'Azitromicina 200 mg/5 mL',min:'',a:0,r:'peso ÷ 4 mL, máx 12,5 mL',f:w=>pdML(w/4,12.5)+' VO 1x/dia, por 3 a 5 dias'},
{c:'Antibióticos',n:'Cefalexina 250 mg/5 mL',min:'',a:0,r:'peso ÷ 4 mL, máx 20 mL',f:w=>pdML(w/4,20)+' VO de 6/6 h, por 7 a 10 dias'},
{c:'Antibióticos',n:'Sulfametoxazol + trimetoprima 200 + 40 mg/5 mL',min:'',a:0,r:'peso ÷ 2 mL',f:w=>pdML(w/2,20)+' VO de 12/12 h, por 5 a 7 dias'},
{c:'Antibióticos',n:'Penicilina benzatina IM',min:'',a:0,r:'< 25 kg: 600.000 UI; ≥ 25 kg: 1.200.000 UI',f:w=>(w<25?'600.000 UI':'1.200.000 UI')+' IM, dose única'},
{c:'Antibióticos',n:'Ceftriaxona 1 g + 10 mL AD (100 mg/mL)',min:'',a:0,r:'50 mg/kg = peso × 0,5 mL; 80 mg/kg = peso × 0,8 mL',f:w=>pdN(w*.5)+' mL (50 mg/kg) ou '+pdN(w*.8)+' mL (80 mg/kg, grave) 1x/dia; máx 2 g/dia'},
{c:'Corticoides',n:'Prednisolona 3 mg/mL',min:'',a:0,r:'peso ÷ 3 mL, máx 20 mL',f:w=>pdML(w/3,20)+' VO de 12/12 h, por 5 dias'},
{c:'Corticoides',n:'Dexametasona 4 mg/mL (ampola)',min:'',a:0,r:'peso × 0,04 mL IM, máx 2,5 mL',f:w=>pdML(w*.04,2.5)+' IM (ou EV lento)'},
{c:'Corticoides',n:'Hidrocortisona EV',min:'',a:0,r:'5 mg/kg/dose, máx 200 mg',f:w=>pdMG(w*5,200)+' EV lento, de 6/6 h'},
{c:'Alergia',n:'Hidroxizina 2 mg/mL',min:'> 6 meses e > 6 kg',a:.5,r:'peso ÷ 4 mL',f:w=>pdML(w/4,12.5)+' VO de 8/8 h'},
{c:'Alergia',n:'Loratadina 1 mg/mL',min:'> 2 anos',a:2,r:'< 30 kg: 5 mL; ≥ 30 kg: 10 mL',f:w=>(w<30?'5 mL':'10 mL')+' VO 1x/dia'},
{c:'Alergia',n:'Prometazina 25 mg/mL (ampola)',min:'> 2 anos',a:2,r:'peso × 0,02 mL IM',f:w=>pdML(w*.02,1)+' IM'},
{c:'Vômitos e cólica',n:'Ondansetrona oral',min:'> 6 meses',a:.5,r:'6 m–2 a: 2 mg; 2–10 a: 4 mg; > 10 a: 8 mg',f:(w,a)=>(a==null?'6 m a 2 anos: 2 mg; 2 a 10 anos: 4 mg; > 10 anos: 8 mg':a<2?'2 mg':a<=10?'4 mg':'8 mg')+' VO de 12/12 h (cuidado se QT longo)'},
{c:'Vômitos e cólica',n:'Ondansetrona 4 mg/2 mL EV',min:'',a:.5,r:'peso × 0,05 mL (0,1 mg/kg), máx 2 mL',f:w=>pdML(w*.05,2)+' EV lento, em 30 a 50 mL de SF (cuidado se QT longo)'},
{c:'Vômitos e cólica',n:'Bromoprida gotas 4 mg/mL',min:'> 1 ano',a:1,r:'1 gota/kg, máx 40 gotas',f:w=>pdG(w,40)+' VO até de 8/8 h, se náuseas ou vômitos'},
{c:'Vômitos e cólica',n:'Simeticona 75 mg/mL',min:'',a:0,r:'lactente 6 gotas; até 12 a 12 gotas; > 12 a 16 gotas',f:(w,a)=>(a==null?'lactente: 6 gotas; até 12 anos: 12 gotas; > 12 anos: 16 gotas':a<1?'6 gotas':a<=12?'12 gotas':'16 gotas')+' VO de 8/8 h'},
{c:'Nebulização',n:'Fenoterol 5 mg/mL',min:'',a:0,r:'1 gota para cada 3 kg, máx 10 gotas',f:w=>pdG(w/3,10)+' + SF 0,9% até 5 mL, NBZ de 6/6 h'},
{c:'Nebulização',n:'Ipratrópio 0,25 mg/mL',min:'',a:0,r:'o dobro das gotas de fenoterol',f:w=>pdG(w/3*2,20)+' junto da nebulização'},
{c:'Nebulização',n:'Salbutamol 5 mg/mL',min:'',a:0,r:'até 2 a: 2 gotas a cada 5 kg; 2–5 a: 5–10 gotas; > 10 a: 10 gotas (até 20)',f:(w,a)=>(a!=null&&a<=2?pdG(w/5*2,10):a!=null&&a<=5?'5 a 10 gotas':a!=null?'10 gotas (até 20)':'até 2 anos: 2 gotas a cada 5 kg ('+pdG(w/5*2,10)+'); 2 a 5 anos: 5 a 10 gotas; > 10 anos: 10 gotas')+' + SF 0,9% até 5 mL, NBZ'},
{c:'Parasitas',n:'Nitazoxanida 20 mg/mL',min:'> 1 ano',a:1,r:'peso × 0,375 mL',f:w=>pdML(w*.375,15)+' VO de 12/12 h, por 3 dias'},
{c:'Parasitas',n:'Metronidazol 200 mg/5 mL',min:'',a:0,r:'peso ÷ 4 mL',f:w=>pdML(w/4,12.5)+' VO de 8/8 h, por 7 dias'},
{c:'Parasitas',n:'Mebendazol 100 mg/5 mL',min:'> 1 ano',a:1,r:'5 mL',f:()=>'5 mL VO de 12/12 h, por 3 dias; repetir após 15 dias'},
{c:'Parasitas',n:'Ivermectina 6 mg',min:'> 15 kg',a:0,r:'por faixa de peso',f:w=>w<15?'Não indicada abaixo de 15 kg':(w<=25?'½ comprimido':w<=44?'1 comprimido':w<=64?'1½ comprimido':'2 comprimidos')+' VO em dose única; repetir após 7 dias'},
{c:'Emergência',n:'Diazepam 10 mg/2 mL EV (crise convulsiva)',min:'',a:0,r:'peso × 0,06 mL (0,3 mg/kg), máx 2 mL',f:w=>pdML(w*.06,2)+' EV sem diluir; repetir até 2x a cada 5 a 10 min'},
{c:'Emergência',n:'Midazolam 5 mg/mL IM (crise convulsiva)',min:'',a:0,r:'peso × 0,04 mL (0,2 mg/kg), máx 2 mL. Se ampola 1 mg/mL: peso × 0,2 mL',f:w=>pdML(w*.04,2)+' IM (ampola 5 mg/mL); se ampola 1 mg/mL: '+pdML(w*.2,10)},
{c:'Emergência',n:'Fenitoína (ataque)',min:'',a:0,r:'20 mg/kg; 1 amp (250 mg) + 245 mL SF = 1 mg/mL',f:w=>pdN(w*20)+' mL da solução a 1 mg/mL EV (20 mg/kg), em 20 a 30 min'},
{c:'Emergência',n:'Glicose 25% (hipoglicemia)',min:'',a:0,r:'2 a 4 mL/kg EV em bolus',f:w=>pdN(w*2)+' a '+pdN(w*4)+' mL EV em bolus; sem acesso: glucagon '+(w<25?'0,5 mg':'1 mg')+' IM'},
{c:'Emergência',n:'Adrenalina 1 mg/mL IM (anafilaxia)',min:'',a:0,r:'0,01 mL/kg, máx 0,3 mL; repetir a cada 5 a 10 min',f:w=>pdML(w*.01,.3)+' IM na coxa (seringa de 1 mL); repetir a cada 5 a 10 min se não melhorar'},
{c:'Emergência',n:'Bolus de SF 0,9%',min:'',a:0,r:'20 mL/kg',f:w=>pdN(w*20)+' mL EV em bolus (reavaliar após cada bolus)'},
{c:'Emergência',n:'Sulfato de magnésio 10%',min:'',a:0,r:'peso × 0,5 mL (50 mg/kg), máx 20 mL',f:w=>pdML(w*.5,20)+' em 50 a 300 mL de SF 0,9% EV, em 30 min'},
{c:'Emergência',n:'PCR: adrenalina 0,1 mg/mL (1 mL + 9 mL SF)',min:'',a:0,r:'peso ÷ 10 mL, máx 10 mL',f:w=>pdML(w/10,10)+' EV/IO a cada 3 a 5 min'},
{c:'Emergência',n:'PCR: amiodarona e choque',min:'',a:0,r:'5 mg/kg, máx 300 mg',f:w=>'amiodarona '+pdMG(w*5,300)+' EV; choque: 1º '+pdN(w*2)+' J, 2º '+pdN(w*4)+' J, depois ≥ 4 J/kg (máx 10 J/kg)'},
{c:'Emergência',n:'Carvão ativado',min:'',a:0,r:'0,5 a 1 g/kg, máx 50 g',f:w=>pdN(Math.min(w*.5,50))+' a '+pdN(Math.min(w,50))+' g VO ou SOG, em '+pdN(Math.min(w*.5,50)*8)+' a '+pdN(Math.min(w,50)*8)+' mL de SF 0,9%'},
{c:'Hidratação',n:'Manutenção em 24 h (regra de Holliday)',min:'',a:0,r:'< 10 kg: 100 mL/kg; 10–20 kg: 1000 + 50/kg acima de 10; > 20 kg: 1500 + 20/kg acima de 20',f:w=>{const ch=w<=10?100*w:w<=20?1000+50*(w-10):1500+20*(w-20),pc=ch/100;return pdN(ch)+' mL em 24 h ('+pdN(ch/24)+' mL/h) em SG 5%; NaCl 20%: '+pdN(3*pc/3.4)+' mL/dia; KCl 10%: '+pdN(2*pc/1.34)+' mL/dia'}}
];
function pdDraw(){const el=document.getElementById('pdl');if(!el)return;
 const wi=document.getElementById('pdw'),ai=document.getElementById('pda'),qi=document.getElementById('pdq');
 const ex=document.getElementById('peso');if(wi&&!wi.value&&ex&&ex.value)wi.value=ex.value;
 const w=parseFloat(String(wi.value).replace(',','.')),a=ai.value===''?null:parseFloat(String(ai.value).replace(',','.')),q=(qi.value||'').toLowerCase().trim();
 if(!(w>0)){el.innerHTML='<div class="fm">Digite o peso para ver as doses.</div>';return}
 const L=PD.map((e,i)=>[e,i]).filter(x=>!q||(x[0].n+' '+x[0].c).toLowerCase().includes(q));
 const cats=[...new Set(L.map(x=>x[0].c))];
 el.innerHTML=cats.map(c=>'<details'+(q?' open':'')+' class="card" style="margin:8px 0"><summary><b>'+buH(c)+'</b></summary>'+L.filter(x=>x[0].c===c).map(x=>{const e=x[0],t=e.f(w,a),warn=(a!=null&&e.a&&a<e.a)?'<div class="alb"><div>⚠ Abaixo da idade indicada ('+buH(e.min)+').</div></div>':'';
  return '<div style="padding:6px 0;border-top:1px solid var(--bd)"><div><b>'+buH(e.n)+'</b>'+(e.min?' <span class="fm">'+buH(e.min)+'</span>':'')+'</div>'+warn+'<div>'+buH(t)+'</div><div class="row"><button class="chip" type="button" data-pd="'+x[1]+'">Copiar</button></div></div>'}).join('')+'</details>').join('')||'<div class="fm">Nada encontrado.</div>'}
const pdBox=document.getElementById('pdl');
if(pdBox)pdBox.onclick=e=>{const b=e.target.closest('[data-pd]');if(!b)return;const en=PD[+b.dataset.pd],wi=document.getElementById('pdw'),ai=document.getElementById('pda');
 const w=parseFloat(String(wi.value).replace(',','.')),a=ai.value===''?null:parseFloat(String(ai.value).replace(',','.'));
 copyText(en.n+': '+en.f(w,a),b)};
['pdw','pda','pdq'].forEach(i=>{const x=document.getElementById(i);if(x)x.oninput=pdDraw});
document.querySelectorAll('.tabbar [data-t="t-fe"]').forEach(b=>b.addEventListener('click',()=>setTimeout(pdDraw,60)));
pdDraw();


async function msLoad(force){const o=document.getElementById('msn');if(!o)return;const c=sbCfg();if(!c.u||!c.k){o.innerHTML='<div class="fm">Configure o banco online abaixo para receber as atualizações.</div>';return}
 o.innerHTML='<div class="fm">Consultando…</div>';
 try{if(force){try{await fetch(c.u+'/functions/v1/ms-atualizacao',{method:'POST',headers:{'content-type':'application/json'},body:'{}'})}catch(e){}}
  const h=sbH(c.k);
  const [rn,re]=await Promise.all([fetch(c.u+'/rest/v1/ms_novidades?select=titulo,url,detectado&inicial=eq.false&order=detectado.desc&limit=25',{headers:h}),fetch(c.u+'/rest/v1/ms_execucoes?select=quando,status,itens,erro&order=quando.desc&limit=8',{headers:h})]);
  if(!rn.ok)throw new Error('HTTP '+rn.status);
  const nov=await rn.json(),ex=re.ok?await re.json():[];
  const ult=ex[0]?new Date(ex[0].quando):null,okf=ex.filter(x=>x.status>=200&&x.status<300&&!x.erro).length;
  let seen=0;try{seen=+localStorage.getItem('msSeen')||0}catch(e){}
  const nn=nov.filter(x=>new Date(x.detectado).getTime()>seen).length;
  let h2='<div class="fm">'+(ult?'Última verificação: '+ult.toLocaleString('pt-BR')+(ex[0].status>=200&&ex[0].status<300&&!ex[0].erro?' · lista oficial de PCDT lida ('+(ex[0].itens||0)+' protocolos).':' · o site do Ministério não respondeu; nova tentativa amanhã.'):'Ainda não verificado.')+' A verificação é automática, todos os dias.</div>';
  if(!nov.length)h2+='<div class="fm" style="margin-top:6px">Nenhuma publicação nova desde a ativação. Quando o Ministério publicar ou atualizar um protocolo, ele aparece aqui.</div>';
  else h2+='<div style="margin-top:6px">'+nov.map((x,i)=>'<div style="border-top:1px solid var(--bd);padding:6px 0"><b>'+esc(x.titulo)+'</b>'+(new Date(x.detectado).getTime()>seen?' <span class="pill ok">novo</span>':'')+'<div class="fm">'+new Date(x.detectado).toLocaleDateString('pt-BR')+' · <a href="'+esc(x.url)+'" target="_blank" rel="noopener">abrir no gov.br</a></div><button class="chip" type="button" data-msia="'+i+'" style="margin:4px 0 0">\uD83E\uDD16 Criar/atualizar no app com IA</button><div class="fm" id="msx'+i+'"></div></div>').join('')+'</div>';
  o.innerHTML=h2;
  o.querySelectorAll('[data-msia]').forEach(b=>b.onclick=async()=>{const i=+b.dataset.msia,x=document.getElementById('msx'+i),t=String(nov[i].titulo).replace(/^(pcdt|protocolo cl[ií]nico e diretrizes terap[eê]uticas|protocolo cl[ií]nico|diretrizes? (brasileiras?|nacionais?|terap[eê]uticas)?)\s*(d[aeo]s?|para|em)?\s*/i,'').trim();
   try{const r=await aiAutoAdd(t,m=>{x.textContent=m});x.innerHTML=(r.existed?'Já existe no app: <b>'+esc(r.nome)+'</b>. Para revisar com a publicação nova, abra a conduta e use “Perguntar à IA”.':'✓ <b>'+esc(r.nome)+'</b> criado pela IA (rascunho, revise).')}catch(e){x.textContent='✗ '+errTxt(e)}});
  const tab=document.getElementById('msbadge');if(tab)tab.textContent=nn?String(nn):'';
  try{localStorage.setItem('msSeen',String(Date.now()))}catch(e){}
 }catch(e){o.innerHTML='<div class="fm">Não consegui consultar as atualizações agora ('+esc(String(e.message||e))+').</div>'}}
{const b=document.getElementById('msr');if(b)b.onclick=()=>msLoad(true);setTimeout(()=>msLoad(false),1500)}
if(sbCfg().u&&sbCfg().k)sbPull();
$("cp").onclick=async()=>{const t=$("rx").innerText;
  try{await navigator.clipboard.writeText(t)}catch(e){const r=document.createRange();r.selectNodeContents($("rx"));const s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand("copy")}
  $("cp").textContent="Copiado ✓";setTimeout(()=>$("cp").textContent="Copiar receita",1500)};
build();

