---
title: Conceitos de Hardware
discipline: Introdução à Computação
---
 
## Processador
 Tem como operações básicas: input, processing, output e storage.
  - UCP: Unidade Central de Processamento.
      - Manipula direta ou indiretamente os dados
      - Executa microinstruções
  Dentre as funções do processador está a de controle, e a de processamento.
      - Processamento:
          1. OLA - Operações Lógicas e Aritméticas.
          2. Memória -> CPU; registrador -> memória.
          3. Desvios e operações de Entrada e Saida
  - Barramentos(Bus):
       - Caminhos físicos que levam os dados. Existem 3 tipos de barramentos, são eles:
            1. Adress Bus: trafega posições de memória.
            2. Data Bus: trafega dados para memória, processador ou periféricos.
            3. Control Bus: trafega sinais de controle.
            - USB - Universal Serial Bus.
   - Relógio (Clock):
   Gerador de pulsos a intervalos regulares para indicar a frequência e a velocidade do processador, mas não é 
   confiável porque algumas micro-instruções gastam mais de um ciclo para serem realizadas.
   
   - Registradores:
   Memórias ultra rápidas que armazenam dados temporários. A quantidade de bits dos processadores determina o tamanho do registrador.
   
   - Estratégias de Implementação
    - CISC: Complex Instruction Set Computer
        - Um grande conjunto de funções que implica em processador mais complexo e lento.
    - RISC: Reduced Instruction Set Computer
        - Um conjunto menor de instruções que precisa de apenas um ciclo para ser processada.
    - Híbrida:
        - Essencialmente CISC e internamente RISC.

## Memória
 Armazena informações em binário e é constituída de uma quantidade de células(e endereços) finitaa.
  - Endereço: código de identificação da localização.
  - Célula: unidade de informação a ser armazenada (1 byte)
 - Operações:
    - Escrita: transferência de informações de outro componente do sistema para a memória.
    - Leitura: transferência de informações da memória para outro componente do sistema.
 - Hierarquia:
    - Custo Alto, Velocidade Alta e Baixa Capacidade -> baixo custo,baixa velocidade e alta capacidade.
        1. Registradores
        2. Cache
        3. Memória Principal
        4. Discos
        5. Memória Secundária
        6. CD-ROM
 - Registradores
  Armazena dados e resultados que serão usados na ULA.
    - Tempo de acesso: 1 a 5 ns
    - Capacidade: 8 a 64 bits
    - Volátil: Sim
    - Tecnologia: Semicondutores
<<<<<<< HEAD
    - Temporariedade: Armazenamento Temporário.
    - Custo: Altíssimo.
=======
    - Temporiedade: Armazenamento Temporário.
    - Custo: Altissimo.
>>>>>>> refs/remotes/origin/main
  
  - Cache
  Evita gargalo entre registradores e memória principal.
    - Tempo de acesso: 5 a 7 ns
    - Capacidade: Varia
    - Volátil: Sim
    - Tecnologia: Circuitos eletrônicos (SRAM)
<<<<<<< HEAD
    - Temporariedade: Armazenamento Temporário.
    - Custo: Alto
=======
    - Temporiedade: Armazenamento Temporário.
    - Custo: Alt.
>>>>>>> refs/remotes/origin/main
  
  - Memória Principal
  Memória básica do PC, onde programas e dados são executados.
    - Tempo de acesso: 7 a 15 ns
    - Capacidade: 4GB a 32GB
    - Volátil: Sim, com exceção da BIOS
    - Tecnologia: Dinâmica (DRAM)
    - Temporariedade: Varia
    - Custo: Acessível
    
    - Fatores limitantes do tamanho:
        - Endereçamento: depende do adress bus.
        - Chipset: controlador de memória
        - Físico: quantidade máxima de locais de encaixe para a memória.
     - Capacidade da MP:
          - T = N x M
          - T - capacidade em bits
          - N - nº de bits de cada célula
          - M - 2 elevado ao nº de linhas.
    
   - Memória Secundária
    Maior capacidade e permanência.
    - Tempo de acesso: 8 a 15 ns
    - Capacidade: Alta
    - Volátil: Não
    - Tecnologia: Varia
    - Temporariedade: Permanente
    - Custo: Baixo comparada as demais.
 ## Entrada e Saída
  Permitem a comunicação homem - máquina. Cada dispositivo se comunica com o núcleo de forma diferente, tal comunicação chamada de 
 protocolo é feita com a transferência de informações para interfaces (ao invés da UCP).
  - Interfaces: 
      - Compatibiliza com as diferentes características de um periférico e da UCP.
  - Comunicação Paralela:
      - bits transferidos simultaneamente.
      - taxa throughtput é alta.
      - Problema: **skew**, informação chegando fora de ordem.
  - Comunicação Serial:
      - bits transferidos de um a um (para longas distâncias)
  ### Transmissões
   - Síncrona de caractere: intervalo de tempo fixo.
   - Assíncrona de caractere: não fixo, para após 8 bits. Envia 1s até chegar em uma info(0)
   
   - Simplex:
   Transfere apenas do transmissor para o receptor em uma via única.
   - Half-Duplex: 
   O transmissor também pode assumir o papel de receptor, porém é feita uma transferência por vez.
   - Full-Duplex:
   O transmissor também pode assumir o papel de receptor, mas as transferências podem ser feitas simultaneamente
  
## Fontes 

1. <a href= "https://github.com/OpenDevUFCG/Tamburetei" target="_blank"> Tamburetei </a>

## Autor 

Post desenvolvido por Eduarda Farias