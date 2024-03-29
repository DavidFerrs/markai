---
title: Resumo sobre lógica proposicional
discipline: Lógica para Computação 
---

**Lógica proposicional** é um sistema lógico que busca formalizar a noção de proposição e conjunto de proposições, de forma que se possa verificar se o conjunto é verdadeiro ou falso. Conceito que é usado para construir uma linguagem de programação.

## Proposição

Uma afirmação qualquer, que pode assumir valor Verdadeiro(*V*) **ou** Falso(*F*).
<br><br>
Exemplos: 
<br><br>
- Tamburetei é massa
- Hoje está chovendo
- Python é bom

## Átomo

Podemos representar proposições por uma letra *minúscula*, facilitando o uso, exemplos:

`p="Python é bom"`

## Conectivos Lógicos

Usados para combinar duas ou mais proposições, e forma conjunto de proposições
<br><br>
Assumindo **p** e **q** como proposições:
<br><br>

**Símbolo** | **Palavra** | **Nome** | **Exemplo** 
--- | --- | --- | --- |
**∧** | And/E | Conjução | p **∧** q
**∨** | Ou | Disjunção | p **∨** q
**¬** | não | Negação | **¬**p 
**→** | se ... então | Condicional | p **→** q
**⇔** | se e somente se(*sss*) | Bicondicional | p ⇔ q

## Tabela da Verdade

Tabela lógica que determina os possíveis resultados(**V** ou **F**) da combinação de proposições lógicas.
<br><br>
Exemplo:
<br><br>

**p** | **q** | **p ∧ q**  | **p ∨ q** | **p → q** | **p ⇔ q** | **¬p** 
:---: | :---:| :---: | :---: | :---: | :---: |  :---: |
V | V | V | V | V | V | F
V | F | F | V | V | F | F
F | V | F | V | F | F | V
F | F | F | F | V | V | V

---
<br><br>
# Lógica Proposicional Semântica

## Vinculação semântica
Se, para todos os valores nos quais as proposições da **premissa** são **verdade**, a **conclusão** também é **verdade**. Para verificar isso, usamos a tabela verdade

premissa=V, conclucao=V
<br><br>
Exemplo:
`A → B ⊨ ¬B → ¬A`

## Equivalência

`p ≡ q`, se e somente se `p ⊨ q` e `q ⊨ p`.
<br>

## Lógica Proposicional Dedução 

É o processo para estabelecer de maneira rigorosa a validade dos argumentos, derivando a
conclusão do argumento a partir das premissas usando um sistema de regras.
<br><br>
Do que é formado:
<br><br>
1. Um conjunto de regras de inferências
2. Um formato para apresentar as provas e demonstrações
<br><br>

[Aqui](https://galdino.catalao.ufg.br/up/635/o/deducaonatural.pdf) tem explicando sobre isso de maneira resumida e mostrando as regras, com exemplos.

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>