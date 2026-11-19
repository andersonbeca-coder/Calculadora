# Prescreva — dose, receita e conduta para UBS, UPA e plantão

App web (HTML + JavaScript puro, sem instalação) de apoio à prescrição: dose por peso (criança) e dose fixa (adulto), receita para casa, prescrição hospitalar, orientações, sinais de alarme, conduta e a aba "Caso" com diagnósticos prováveis.

Site: https://andersonbeca-coder.github.io/Calculadora/calculadora-receita.html

## Estrutura

- `calculadora-receita.html` — página principal (estilos, telas e carregamento dos scripts).
- `js/` — apenas a casca pública (login, marca, instalação). O conteúdo clínico não fica neste repositório: é entregue pelo servidor só a contas com acesso válido.
- Conteúdo clínico novo (protocolos, condutas, diagnósticos) vem do banco online (Supabase, tabela `receitas`) e não exige alterar estes arquivos.

## Aviso

Ferramenta de apoio. Confira sempre bula, alergias, função renal e protocolo local antes de prescrever.
