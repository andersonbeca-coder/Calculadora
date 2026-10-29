# Calculadora de doses e receita

App web (HTML + JavaScript puro, sem instalação) de apoio à prescrição: dose por peso (criança) e dose fixa (adulto), receita para casa, prescrição hospitalar, orientações, sinais de alarme, conduta e a aba "Caso" com diagnósticos prováveis.

Site: https://andersonbeca-coder.github.io/Calculadora/calculadora-receita.html

## Estrutura

- `calculadora-receita.html` — página principal (estilos, telas e carregamento dos scripts).
- `js/` — código do app em partes numeradas (`b01a` … `b15`), carregadas em ordem pela página principal. O `?v=` em cada `<script>` faz o navegador baixar a versão nova quando o arquivo muda.
- Conteúdo clínico novo (protocolos, condutas, diagnósticos) vem do banco online (Supabase, tabela `receitas`) e não exige alterar estes arquivos.

## Aviso

Ferramenta de apoio. Confira sempre bula, alergias, função renal e protocolo local antes de prescrever.
