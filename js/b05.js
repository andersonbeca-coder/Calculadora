
/* ===== Parte 5: tubo orotraqueal e sinais vitais pediátricos ===== */
(function(){
SCALES.tot={n:'Tubo orotraqueal pediátrico: tamanho e profundidade',kw:'tubo orotraqueal intubação iot cânula tamanho balonete profundidade criança pediátrico via aérea',in:[['Idade (anos; ex.: 0,5 = 6 meses)']],
 fn:v=>{const a=v[0];if(!(a>=0))return 'Informe a idade.';const f=x=>String(Math.round(x*10)/10).replace('.',',');
  if(a<1)return `<b>Menor de 1 ano:</b> tubo nº 3,0 a 3,5 (com balonete)<br>Profundidade na rima labial ≈ <b>${f(3*3)} a ${f(3.5*3)} cm</b> (tamanho do tubo × 3)<div class="fm">Neonatos: seguir o protocolo neonatal. Confirmar por ausculta, capnografia e radiografia.</div>`;
  const c=a/4+3.5,s=a/4+4;return `<b>Com balonete:</b> nº ${f(c)} (idade/4 + 3,5) — preferir tubo com balonete<br>Sem balonete: nº ${f(s)} (idade/4 + 4)<br>Profundidade na rima labial ≈ <b>${f(c*3)} cm</b> (tamanho do tubo × 3)<div class="fm">Ter também um tubo meio número acima e outro abaixo. Confirmar por ausculta, capnografia e radiografia.</div>`}};
SCALES.vitais={n:'Sinais vitais pediátricos de referência (FC, FR, PA)',kw:'sinais vitais pediátricos frequência cardíaca respiratória pressão arterial hipotensão normal criança idade taquicardia taquipneia',ref:[
 ['Frequência cardíaca (bpm) — acordado / dormindo','Neonato: 100–205 / 90–160 · 2 meses a 1 ano: 100–180 / 90–160 · 1 a 2 anos: 98–140 / 80–120 · 3 a 6 anos: 80–120 / 65–100 · 6 a 10 anos: 75–118 / 58–90 · acima de 10 anos: 60–100 / 50–90. A FC sobe com febre e estresse.'],
 ['Frequência respiratória (irpm)','Neonato: 30–60 · 2 meses a 1 ano: 30–53 · 1 a 2 anos: 22–37 · 3 a 6 anos: 20–28 · 6 a 10 anos: 18–25 · acima de 10 anos: 12–20.'],
 ['Pressão arterial sistólica (a partir de 1 ano)','Percentil 5 (limite de hipotensão): 70 + 2 × idade em anos · Percentil 50: 90 + 2 × idade. Hipotensão é sinal tardio de choque na criança.'],
 ['Tempo de enchimento capilar','Normal ≤ 2 segundos; prolongado (> 2 s) ou em flush sugere choque.'],
 ['Diurese','Meta em paciente grave: > 1 mL/kg/h.']]};
})();
