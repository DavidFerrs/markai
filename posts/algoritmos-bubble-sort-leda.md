---
title: Bubble Sort 
discipline: Laboratório de Estrutura de Dados
---

## Bubble Sort 

Bubble Sort é um algoritmo de classificação comumente usado em ciência da computação. O Bubble Sort baseia-se na ideia de comparar repetidamente pares de elementos adjacentes e, em seguida, trocar as suas posições se existirem na ordem errada.
<br><br>

## Algoritmo de classificação de bolhas: 

- Em uma matriz não classificada de 5 elementos, comece com os dois primeiros elementos e classifique-os em ordem crescente. (Compare o elemento para verificar qual é o maior).
- Compare o segundo e o terceiro elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Compare o terceiro e o quarto elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Compare o quarto e o quinto elemento para verificar qual é o maior e classifique-os em ordem crescente.
- Repita as etapas 1–5 até que não sejam necessárias mais trocas.

<br>

Abaixo está uma imagem de uma matriz que precisa ser classificada. Usaremos o algoritmo de classificação de bolhas para classificar esta matriz:
Exemplo de funcionamento do Bubble Sort

<img src="https://lh5.googleusercontent.com/_oLwPF5ZvaZZ4pGD-HvSUSw6nTwwHjUwcLpNigUvb24-PKNwjMUwXcWYWf2wp4HopzHkh9JVmZd_AFYP4HjSYelidbw4FRo1fHrWV3KxbFM13xlRLALb-y-EbLhEmln11lhwEZPV">


## Algoritmo do Bubble Sort em Java

```java
var bubble_sort_classic = function (array) {
var length = array.length;
for (var i = 0; i <comprimento; i ++) {
  for (var j = 0; j <comprimento - i - 1; j ++) {
    if (matriz [j]> matriz [j + 1]) {
      array.swap (j, j + 1);
    }
  }
}
array de retorno;
};
```
## Fontes

- Blog betrybe.com/tecnologia
- Post desenvolvido por Rayane Bezerra da Silva 