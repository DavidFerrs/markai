---
title: Algoritmos de Ordenação em Python
discipline: Laboratório de Programação 1
---
Ao utilizar estruturas de dados (como listas e dicionários), é comum
a necessidade de ordenar os valores ali contidos. As funções abaixo
implementam os algoritmos de ordenação mais comuns, sendo o Bubble
Sort o único a ser cobrado durante a disciplina de Programação 1.
Entretanto, na disciplina de Estrutura de Dados os outros algoritmos serão usados,
mas geralmente feitos na linguagem Java

## Bubble Sort:
Ordena uma lista, em ordem crescente, usando o Bubble Sort.
O Bubble Sort é, dentre os algoritmos de ordenação tradicionais, o 
mais simples e o menos eficiente. Ele compara cada elemento ao seu
vizinho, trocando suas posições sempre que o elemento à direita for
menor que o elemento à esquerda. Desse modo, a cada iteração do
loop externo, o N-ésimo maior elemento será movido para a posição 
correta.

Como parâmetro a função recebe a lista que deve ser ordenada

<br>

```python
import random 

def bubble_sort(values):
    for i in range(len(values)):
        for j in range(len(values) -1):
            if (values[j] > values[j + 1]):
                values[j], values[j + 1] = values[j + 1], values[j]
```

## Selection Sort:
Ordena uma lista, em ordem crescente, usando o Selection Sort.
O Selection Sort é, consideravelmente mais intuitivo que o Bubble
Sort, possuindo eficiência muito semelhante. A estratégia utilizada
para a ordenação consiste em selecionar, a cada iteração, o N-ésimo
menor valor e inserí-lo na posição correta da lista. Desse modo, a
lista de tamanho N estará completamente ordenada após N iterações.
Como parâmetro a função recebe a lista que deve ser ordenada

<br>

```python
import random

def selection_sort(values):
for i in range(len(values)):
        n = i
        for j in range(i,len(values)):
            if values[j] < values[n]:
                n = j
        values[i], values[n] = values[n], values[i]
```

## Insertion Sort:
Ordena uma lista, em ordem crescente, usando o Insertion Sort.
O Insertion Sort é, consideravelmente mais eficiente que o Bubble
Sort e o Selection Sort. Sua estratégia consiste em "particionar" a
lista em duas, de modo que a lista à esquerda esteja ordenada, mas
a lista à direita não. Com essa abordagem, a cada iteração, o pri-
meiro valor da lista à direita é movido para a lista à esquerda e
inserido na posição adequada. Para que não seja necessário criar 
novas listas, um valor-chave (key) é usado como delimitador entre
as partições, sendo movido a cada iteração.
Como parâmetro a função recebe uma lista a ser ordenada

<br>

```python
import random

def insertion_sort(values):
    for i in range(1,len(values)):
        key = values[i]
        j = i - 1
        while (j >= 0) and (values[j] > key):
            values[j], values[j+1] = values[j+1], values[j]
            j -= 1
```

## Quick Sort:
Ordena uma lista, em ordem crescente, usando o Quick Sort.
O Quick Sort possui uma boa eficiência, no entanto, em
seu pior caso tem complexidade O(n^2).Ele funciona fazendo      
sucessivos particionamentos com uso de recursão. O               
particionamento basicamente pega um valor pivô e move todos      
valores menores para trás dele e todos os maiores para depois,   
dessa forma o pivô ficará posicionado corretamente. Já a recursão 
atua fazendo sucessivos particionamentos nas sublistas antes e   
depois de cada pivô particionado até chegar em sublistas com     
menos que 2 elementos. 
Como parâmetros a função recebe uma lista que deve ser ordenada

<br>

```python
import random

def quick_sort(values):                     
    quick_sort_recursion(values,0,len(values)-1) 

def quick_sort_recursion(values, low, high):
    if (low < high):
        p = partition(values, low, high)
        quick_sort_recursion(values, low, p - 1)
        quick_sort_recursion(values, p + 1, high)

def partition(values, low, high):
    pivot = values[high]
    i = (low - 1) 
    for j in range(low,high):
        if (values[j] <= pivot):
            i+= 1
            values[i],values[j] = values[j],values[i]
    values[i+1],values[high] = values[high],values[i+1]
    return i + 1

```

## Merge-Sort:
Ordena uma lista, em ordem crescente, utilizando
o algoritmo Merge Sort.
Baseado na estratégia de dividir-conquistar, o Merge Sort
ordena uma lista de valores recursivamente. Durante
cada chamada da funcao merge_sort(values, low, high), 
a lista é dividida pela metade até que possua um único elemento 
(este é caso base - trivialmente, se len(lista) == 1, a lista está ordenada). 
Quando len(lista) == 1, a função merge(values, low, mid, high) começa a 
ser chamada e fica responsável por unificar as metades produzindo uma 
única lista de valores ordenada. No pior dos casos, a complexidade 
do algoritmo é O(nlogn).
A função recebe como parâmetros:
- values: Uma lista, justamente a lista que deve ser ordenada
- low: Um inteiro que representa o índice que indica a partir de qual posição a ordenação começa
- high: Um inteiro que indica o índice da lista que indica em qual posição a ordenação deve encerrar

<br>

```python
import random

def merge_sort(values, low, high):
    if low < high:
        mid = (low + high) // 2
        merge_sort(values, low, mid)
        merge_sort(values, mid + 1, high)
        merge(values, low, mid, high)


def merge(values, low, mid, high):
    # Calcula o tamanho de cada metade. 
    n = mid - low + 1
    m = high - mid
    # Copia os valores da subsequência values[low..mid]
    # e values[mid + 1..high] para a metade da esquerda
    # e para a metade da direita, respectivamente.
    left = []
    right = []
    for i in range(n):
        left.append(values[low + i])
    for j in range(m):
        right.append(values[mid + j + 1])
    # Adiciona sentinelas para evitar com que
    # fiquemos checando se todos elementos de uma
    # metade ja foram adicionados.
    left.append(float("inf"))
    right.append(float("inf"))
    # Junta a metade da esquerda com a metade da direita
    # produzindo uma unica subsequência  ordenada values[low..high].
    i = 0
    j = 0
    for k in range(low, high + 1):
        if left[i] <= right[j]:
            values[k] = left[i]
            i += 1
        else:
            values[k] = right[j]
            j += 1
```

``` python
# DEMONSTRAÇÃO
#
# O código abaixo pode ser executado para observação do funcionamento
# dos algoritmos de ordenação implementados anteriormente.

# Retorna uma lista de valores aleatórios.

# Cria e retorna uma lista de valores gerados aleatoriamente. A lista
# possui o tamanho passado como parâmetro. Sendo MAX o valor do parâ-
# metro valor_maximo, os valores gerados estarão contidos em [0, MAX].
# O método possui os seguintes parâmetros:
# size: Do tipo inteiro, representando o tamanho da lista a ser criada 
# max_value : Do tipo inteiro, o maior valor a ser possivelmente gerado
# Returno: A lista de tamanho especificado, contendo os valores aleatórios 
import random
def random_list(size, max_value):
    values = []
    for i in range(size):
        values.append(random.randint(0, max_value))
    return values


print ("Bubble Sort")
values = random_list(10, 1000)
print (values)                      # Imprime lista não-ordenada.
bubble_sort(values)                
print (values)                      # Imprime lista ordenada.

print ("\nSelection Sort")
values = random_list(10, 1000)
print (values)                      # Imprime lista não-ordenada.
selection_sort(values)
print (values)                      # Imprime lista ordenada.

print ("\nInsertion Sort")
values = random_list(10, 1000)     
print (values)                      # Imprime lista não-ordenada.
insertion_sort(values)
print (values)                      # Imprime lista ordenada.

print("\nQuick Sort")
values = random_list(10, 1000)     
print (values)                      # Imprime lista não-ordenada.
quick_sort(values)                 
print (values)                      # Imprime lista ordenada.

print("\nMerge Sort")
values = random_list(10, 1000) 
print(values)                       # Imprime lista não-ordenada.
merge_sort(values, 0, len(values) - 1)
print(values)                       # Imprime lista ordenada.

```

## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Eduarda Farias