# Especificação Formal: Gerador Inicial Guloso

Este documento define formalmente a modelação computacional do problema de geração de horários escolares e a especificação do **Gerador Inicial Guloso (Greedy Heurístico)** do sistema AURA (Automated User-controlled Roster Algorithm).

O Gerador Inicial é responsável por construir rapidamente uma solução inicial de horário a partir dos dados da escola. A sua execução é independente da interface gráfica e trabalha sobre dados carregados em memória.

A solução produzida será posteriormente utilizada como ponto de partida pelo **Simulated Annealing**, que será responsável pela otimização da qualidade do horário.

> **Objetivo principal:** construir uma solução inicial válida de forma rápida, previsível e escalável, sem recorrer a backtracking.

---

# 1. Objetivos do Gerador

O Gerador Inicial deve:

* Construir um horário a partir dos dados académicos da escola.
* Respeitar 100% das Hard Constraints.
* Utilizar heurísticas para tomar boas decisões locais.
* Priorizar as aulas mais difíceis de alocar.
* Evitar operações repetitivas sobre a base de dados durante a geração.
* Trabalhar predominantemente sobre estruturas em memória.
* Produzir métricas detalhadas da geração.
* Reportar claramente situações em que não seja possível construir uma solução.
* Produzir uma estrutura de horário compatível com o Simulated Annealing.
* Manter um crescimento de custo controlado e mensurável à medida que aumentam o número de professores, disciplinas, turmas, salas e aulas.

O gerador deverá ser capaz de trabalhar com, pelo menos, a seguinte escala de referência:

* **200 professores**
* **160 disciplinas**
* **50 turmas**
* **30 salas**

A escalabilidade deverá ser validada através de benchmarks, não assumida apenas teoricamente.

---

# 2. Modelo Computacional

O algoritmo não trabalha diretamente sobre os modelos do Prisma durante a geração.

O fluxo é:

```text
PostgreSQL
    ↓
Prisma
    ↓
Preparação dos dados
    ↓
Estruturas em memória
    ↓
Gerador Guloso
    ↓
Schedule
    ↓
Simulated Annealing
    ↓
Persistência
```

O objetivo desta separação é evitar consultas constantes à base de dados durante o processo de geração e permitir que o algoritmo trabalhe com estruturas otimizadas para consultas rápidas.

---

## 2.1 Aula

A `Aula` representa uma ocorrência individual de ensino que precisa de ser colocada num slot.

Uma disciplina com `N` aulas semanais para uma determinada turma origina `N` aulas independentes para o algoritmo.

Exemplo:

```text
Matemática
Turma: 10ª INF
Professor: João
Aulas por semana: 4
```

Produz:

```text
Aula 1
Aula 2
Aula 3
Aula 4
```

Cada aula deve manter, no mínimo:

```text
id
idProfessor
idDisciplina
idTurma
idAtribuicao
```

Também pode possuir metadados utilizados para depuração e análise.

---

## 2.2 Atribuição

A `Atribuicao` representa a relação entre:

```text
Professor
    +
Turma
    +
Disciplina
```

É a partir da atribuição que o algoritmo sabe:

> Qual professor ensina qual disciplina para qual turma?

A carga horária da atribuição determina quantas `Aula` devem ser criadas.

---

## 2.3 Sala

Uma `Sala` representa um espaço físico onde uma aula pode ocorrer.

Deve possuir informações suficientes para determinar a sua compatibilidade com uma disciplina e turma, incluindo:

* Identificador.
* Capacidade.
* Tipo de sala.
* Eventual sala preferencial.

Exemplos de tipos:

```text
Normal
Laboratório de Informática
Oficina
Campo
```

Uma sala incompatível com os requisitos da aula nunca poderá ser escolhida, independentemente da sua pontuação nas Soft Constraints.

---

## 2.4 Período

Um `Periodo` representa uma divisão temporal principal do dia escolar.

Exemplos:

```text
Manhã
Tarde
Noite
```

Os períodos contêm tempos letivos ordenados.

---

## 2.5 Slot

Um `Slot` representa uma posição temporal individual:

```text
Slot = (dia, periodo, ordem)
```

Exemplo:

```text
Segunda + Tarde + 3
```

O conjunto de slots disponíveis forma o domínio temporal onde as aulas podem ser alocadas.

---

## 2.6 Atribuição de Aula

Uma aula alocada associa:

```text
Aula
+
Slot
+
Sala
```

Conceitualmente:

```text
AulaAlocada = (Aula, Slot, Sala)
```

---

# 3. Estrutura do Horário

O horário completo será representado em memória por uma estrutura `Horario`.

Exemplo conceptual:

```typescript
interface Horario {
    turmasIds: number[];
    aulasAlocadas: AulaAlocada[];
    status: {
        viavel: boolean;
        custoSoft: number;
        metricas: MetricasGeracao;
    };
}
```

Cada aula alocada contém:

```typescript
interface AulaAlocada {
    idAtribuicao: number;
    idProfessor: number;
    idTurma: number;
    idDisciplina: number;
    idSala: number;
    dia: number;
    periodo: number;
    ordem: number;
}
```

Para ser entregue ao Simulated Annealing, o horário deve:

```text
1. Conter todas as aulas necessárias.
2. Não possuir violações de Hard Constraints.
3. Possuir uma pontuação de Soft Constraints calculável.
4. Possuir estrutura mutável para aplicação dos movimentos de vizinhança do SA.
```

---

# 4. Representação da Carga Horária

A carga horária de uma disciplina para uma turma é determinada por `aulasPorSemana`.

Se:

```text
Disciplina: Matemática
Turma: 10ª INF
Aulas por semana: 4
```

o gerador cria:

```text
Aula Matemática #1
Aula Matemática #2
Aula Matemática #3
Aula Matemática #4
```

Cada ocorrência será tratada como uma unidade independente durante a geração.

---

# 5. Restrições

As regras do problema são divididas em:

```text
Hard Constraints
        +
Soft Constraints
```

---

## 5.1 Hard Constraints

Hard Constraints são regras obrigatórias.

Uma solução que viole uma Hard Constraint é considerada **inviável**.

### RN01 — Sem conflito de professor

Um professor não pode lecionar duas aulas no mesmo slot.

```text
Professor + Slot = único
```

---

### RN02 — Sem conflito de sala

Uma sala não pode receber duas aulas no mesmo slot.

```text
Sala + Slot = único
```

---

### RN03 — Sem conflito de turma

Uma turma não pode possuir duas aulas diferentes no mesmo slot.

```text
Turma + Slot = único
```

---

### RN04 — Carga horária exata

O número de aulas alocadas para cada combinação de turma e disciplina deve corresponder exatamente ao valor configurado em `aulasPorSemana`.

---

### RN05 — Disponibilidade do professor

Um professor só pode receber aulas em slots nos quais esteja disponível.

---

### RN06 — Período letivo permitido

Os slots candidatos devem respeitar as regras de período aplicáveis à turma e à disciplina.

Exemplos definidos atualmente:

* Educação Física pode ocorrer de manhã ou à tarde.
* Determinadas turmas da 12ª Classe podem utilizar manhã ou tarde.
* As restantes situações devem respeitar o período letivo definido pelo modelo da escola.

Essa regra deve ser aplicada durante a preparação e filtragem dos candidatos.

---

### RN07 — Evitar geração duplicada

Não deve ser gerado um novo horário para turmas que já possuam tempos letivos persistidos para o ano letivo em questão, salvo quando o fluxo da aplicação explicitamente solicitar uma regeneração.

---

### RN08 — Capacidade semanal da turma

A soma das aulas semanais das disciplinas de uma turma deve ser compatível com a capacidade temporal disponível para essa turma.

Essa verificação deve ocorrer antes da execução principal do Greedy.

---

### RN09 — Capacidade de disponibilidade do professor

A quantidade de aulas atribuídas a um professor deve ser compatível com a quantidade de slots de disponibilidade existentes para esse professor.

Se a capacidade for matematicamente insuficiente, a geração deve ser interrompida antes do processamento principal.

---

### RN10 — Estrutura temporal obrigatória

O horário deve respeitar exatamente a estrutura temporal previamente definida pela escola.

No contexto inicial:

```text
Tempo letivo → 45 minutos
Intervalo → 15 minutos
```

Os intervalos são definidos antecipadamente e não podem ser utilizados como tempos letivos.

O algoritmo não pode:

 Mover um intervalo. 

 Eliminar um intervalo. 

 Criar um intervalo adicional. 

 Colocar uma aula durante um intervalo. 

 Criar espaços vazios entre aulas dentro da estrutura letiva. 

---

## 5.2 Soft Constraints

Soft Constraints representam preferências de qualidade.

Uma solução pode violá-las, mas cada violação gera uma penalização.

O objetivo é minimizar:

```text
CustoSoft = soma das penalizações
```

### SC01 — Distribuição equilibrada da carga semanal

As aulas de uma mesma disciplina para uma turma devem ser distribuídas de forma equilibrada ao longo da semana, sempre que possível.

A regra deve procurar combinações naturais de distribuição.

Exemplos:

```text
3 aulas:

    Segunda → 3

4 aulas:

    Segunda → 2
    Quarta → 2

5 aulas:

    Segunda → 2
    Quarta → 3
```

A distribuição deve procurar evitar concentrações desnecessárias em vários dias e, simultaneamente, evitar uma distribuição excessivamente fragmentada.

Sempre que possível, devem ser privilegiadas aulas consecutivas.

---

### SC02 — Minimização de janelas dos professores

Evitar períodos letivos vazios entre aulas do mesmo professor durante o dia.

```text
Exemplo preferível:

    Aula
    Aula
    Aula
    Aula

em vez de:

    Aula
    Vazio
    Aula
    Aula
```

Esta preferência deve ser aplicada apenas dentro dos limites permitidos pela estrutura temporal previamente definida.

---

### SC03 — Concentração de aulas consecutivas

Quando uma disciplina possuir várias aulas atribuídas ao mesmo dia, deve-se procurar colocá-las de forma consecutiva.

No entanto, não devem ser criados blocos superiores a 3 tempos letivos consecutivos, salvo quando uma configuração específica da disciplina permitir esse comportamento.

```text
Exemplos preferíveis:

3 aulas:

    Dia 1:
    - Aula
    - Aula
    - Aula

4 aulas no dia:

    Dia 1:
    - Aula
    - Aula

    Dia 2:
    - Aula

não sendo desejável:

    Dia 1:
    - Aula
    - Aula
    - Aula
    - Aula
```

como um único bloco de quatro tempos consecutivos.
 
---

### SC04 — Prioridade da sala preferencial

Quando existir uma sala preferencial, o algoritmo deve preferi-la.

Caso ela não esteja disponível, poderá utilizar outra sala compatível e aplicar uma penalização.

A sala preferencial nunca poderá violar uma Hard Constraint.

---

### SC05 — Limite diário de aulas da mesma disciplina

Evitar mais de duas ocorrências da mesma disciplina no mesmo dia para uma turma, salvo quando a carga horária ou configuração da disciplina justificar aulas duplas/blocos.

---

# 6. Estratégia Gulosa

O algoritmo utiliza uma estratégia construtiva.

A cada passo:

```text
1. Selecionar uma aula ainda não alocada.
2. Gerar posições candidatas.
3. Eliminar posições que violam Hard Constraints.
4. Avaliar as posições restantes.
5. Escolher a melhor posição disponível.
6. Atualizar o estado do horário.
7. Continuar para a próxima aula.
```

O algoritmo **não realiza backtracking**.

Se uma aula ficar sem posições válidas, o gerador não desfaz automaticamente as decisões anteriores para tentar outro caminho.

Nesse caso, a geração é interrompida e um relatório detalhado da falha é produzido.

---

# 7. Ordenação das Aulas — MRV

O gerador utiliza a heurística **MRV (Minimum Remaining Values)**.

A ideia é priorizar as aulas que possuem menos possibilidades de alocação.

Exemplo:

```text
Aula A → 30 possibilidades
Aula B → 12 possibilidades
Aula C → 4 possibilidades
```

A ordem preferencial será:

```text
C → B → A
```

A dificuldade de uma aula deve considerar o seu domínio de posições válidas.

A arquitetura deve permitir que essa informação seja atualizada durante a geração, pois a quantidade de posições disponíveis para uma aula diminui à medida que o horário é preenchido.

A implementação inicial pode utilizar a ordenação baseada no domínio inicial, mas deve ser estruturada de forma a permitir **MRV dinâmico** posteriormente.

---

# 8. Geração de Candidatos

Para cada aula selecionada, o algoritmo constrói possíveis combinações:

```text
Slot + Sala
```

O processo considera:

```text
Slots temporais disponíveis
        ×
Salas compatíveis
```

Antes de realizar verificações mais caras, devem ser aplicados filtros simples como:

* Disponibilidade do professor.
* Período permitido.
* Compatibilidade da sala.
* Outras restrições estáticas conhecidas.

O objetivo é reduzir o número de candidatos antes da avaliação completa.

---

# 9. Verificação de Hard Constraints

Cada candidato é submetido ao verificador de restrições.

Exemplo:

```text
Aula:
Matemática — 10ª INF — João

Candidato:
Terça + Tarde + 3 + Sala 4
```

O verificador pergunta:

```text
João está disponível?
        ↓
SIM

10ª INF está livre?
        ↓
SIM

Sala 4 está livre?
        ↓
SIM

Sala 4 é compatível?
        ↓
SIM
```

Resultado:

```text
Candidato válido
```

Se qualquer Hard Constraint falhar:

```text
Candidato inválido
```

O candidato inválido não deve chegar ao avaliador de Soft Constraints.

---

# 10. Estado em Memória

Para evitar percorrer todo o horário a cada verificação, o gerador deve manter índices de ocupação em memória.

Exemplos conceptuais:

```text
professoresOcupados
turmasOcupadas
salasOcupadas
```

Essas estruturas devem permitir verificar rapidamente:

```text
Professor X está ocupado no Slot Y?
Turma X está ocupada no Slot Y?
Sala X está ocupada no Slot Y?
```

O estado deve ser atualizado imediatamente após cada alocação.

## 10.1 Pré-carregamento com Dados Externos

Antes do ciclo principal, o estado deve ser inicializado com os tempos
lectivos já existentes na base de dados para turmas externas às que estão
a ser geradas agora.

Estes registos entram como ocupação permanente — não podem ser removidos
durante a geração.

A verificação de conflito de professor e sala deve consultar tanto a
ocupação permanente como a ocupação dinâmica construída durante a geração.

```text
Ocupação permanente → vem do Prisma antes de começar
Ocupação dinâmica   → construída aula a aula durante a geração
```

---

# 11. Avaliação das Soft Constraints

Depois de filtrar os candidatos inválidos, os restantes são avaliados.

Exemplo:

```text
Candidato A → penalização 15
Candidato B → penalização 8
Candidato C → penalização 21
```

O Greedy escolhe:

```text
Candidato B
```

porque possui a menor penalização.

A função de avaliação deve considerar as Soft Constraints:

```text
SC01
SC02
SC03
SC04
SC05
```

O resultado deve ser um valor numérico:

```text
custo menor = melhor posição
```

O cálculo deve ser suficientemente modular para permitir ajustes futuros dos pesos das penalizações.

---

## 11.1 Pesos das Penalizações

O avaliador utiliza pesos configuráveis para determinar a importância
relativa de cada Soft Constraint.

O custo total de um candidato é calculado por:

```text
custoTotal =
    pesoSC01 × penalidadeSC01
  + pesoSC02 × penalidadeSC02
  + pesoSC03 × penalidadeSC03
  + pesoSC04 × penalidadeSC04
  + pesoSC05 × penalidadeSC05
```

O candidato com menor custo total é escolhido.

Os pesos devem ser configuráveis e os valores iniciais serão definidos
durante a implementação e posteriormente calibrados através de
benchmarks com horários reais.

### 11.2 Critérios incrementais iniciais

Para que a avaliação seja rápida no ciclo guloso, cada custo é calculado a
partir do horário já alocado e da posição candidata, sem consultas à base de
dados. A primeira implementação utiliza as seguintes penalizações inteiras:

* **SC01:** número de aulas já alocadas para a turma no dia candidato.
  Privilegia dias com menor carga total da turma.
* **SC02:** número de tempos vazios entre as aulas do professor no mesmo dia
  e período, após adicionar o candidato.
* **SC03:** cada bloco adicional da disciplina no dia recebe penalização `1`.
  Ordens são contínuas apenas dentro do mesmo período. Blocos em períodos
  distintos só são comparados quando a estrutura de slots letivos da turma
  confirma que ambos os períodos são usados naquele dia. Ao custo é acrescido
  o número de tempos que excedem três no bloco consecutivo criado pelo
  candidato.
* **SC04:** penalização `1` quando existe sala preferencial e a sala candidata
  é diferente; caso contrário, `0`.
* **SC05:** `max(0, ocorrências_da_disciplina_no_dia + 1 - 2)`, limitando a
  terceira e as ocorrências seguintes da disciplina para a turma no mesmo dia.

Os candidatos devem chegar ao avaliador somente depois de aprovados nas Hard
Constraints. Se os custos empatarem, a escolha é determinística: menor dia,
menor período, menor ordem do tempo e menor identificador de sala.

---

# 12. Forward Checking

O Forward Checking não faz parte do conceito de backtracking.

Ele pode ser utilizado como mecanismo de **poda preventiva** dentro do Gerador Guloso.

Depois de uma aula ser alocada, o algoritmo pode remover a posição recém-ocupada dos domínios das aulas restantes que partilham recursos afetados, principalmente:

```text
Professor
Turma
```

Exemplo:

```text
João
Terça + Tarde + 3
```

Depois de João receber uma aula nesse slot, esse slot deixa de ser candidato para as restantes aulas de João.

Se uma aula futura ficar sem qualquer posição possível, o gerador pode detetar antecipadamente a impossibilidade.

### Importante

O Forward Checking **não deve introduzir retrocesso**.

Se for utilizado e uma aula ficar sem domínio:

```text
domínio vazio
      ↓
registar falha
      ↓
abortar geração
```

A utilização do Forward Checking deverá ser comparada através de benchmarks com uma implementação Greedy sem essa poda, para determinar se o custo adicional compensa na escala do AURA.

---

# 13. Tratamento de Falhas

Se uma aula não possuir posições válidas:

```text
Aula
 ↓
0 candidatos válidos
```

o algoritmo deve:

1. Identificar a aula.
2. Registar o seu contexto.
3. Identificar os principais motivos da eliminação dos candidatos.
4. Registar métricas.
5. Interromper a geração.
6. Retornar um resultado de falha estruturado.

Exemplo de motivos:

```text
ESGOTAMENTO_DISPONIBILIDADE
CONFLITO_SALAS
CONFLITO_TURMA
CONFLITO_PROFESSOR
SEM_SALA_COMPATIVEL
SEM_PERIODO_COMPATIVEL
```

O sistema não deve simplesmente retornar:

```text
"Não foi possível gerar."
```

Deve fornecer informação suficiente para diagnosticar a configuração da escola.

---

# 14. Validação Final

Mesmo que todas as alocações tenham passado pelas verificações durante a construção, o horário completo deve ser validado novamente no final.

O validador deve verificar pelo menos:

```text
✓ Todas as aulas foram alocadas.
✓ Não existem conflitos de professor.
✓ Não existem conflitos de turma.
✓ Não existem conflitos de sala.
✓ Todas as aulas respeitam a disponibilidade.
✓ Todas as cargas horárias foram cumpridas.
✓ Todas as regras obrigatórias foram respeitadas.
```

Somente após essa validação o horário poderá ser marcado como:

```text
viável = true
```

---

# 15. Pipeline Completa

O fluxo geral é:

```text
Dados da Escola
       ↓
Preparação dos Dados
       ↓
Validação de Capacidade
       ↓
Criação das Aulas
       ↓
Construção dos Domínios
       ↓
Ordenação MRV
       ↓
Selecionar Aula
       ↓
Gerar Candidatos
       ↓
Filtrar Hard Constraints
       ↓
Existem candidatos?
   ↙             ↘
 NÃO              SIM
 ↓                 ↓
Falha          Avaliar Soft Constraints
                   ↓
              Escolher Melhor
                   ↓
             Alocar no Horário
                   ↓
            Atualizar Estado
                   ↓
        Atualizar Domínios
                   ↓
         Existem aulas restantes?
             ↙          ↘
           SIM          NÃO
            ↓             ↓
      Próxima aula    Validação Final
                          ↓
                     Horário Inicial
                          ↓
                   Simulated Annealing
```

---

# 16. Estrutura do Resultado

O gerador deve retornar um resultado estruturado.

Exemplo:

```typescript
interface ResultadoGeracao {
    sucesso: boolean;
    horario?: Horario;
    erro?: ErroGeracao;
    metricas: MetricasGeracao;
}
```

Um resultado de sucesso contém:

```text
sucesso
    ↓
true

horario
    ↓
Horario válido

metricas
    ↓
informações da geração
```

Um resultado de falha contém:

```text
sucesso
    ↓
false

erro
    ↓
motivo detalhado

metricas
    ↓
informações sobre o ponto da falha
```

---

# 17. Métricas

Durante a execução devem ser recolhidas métricas que permitam analisar o comportamento do algoritmo.

Exemplo:

```typescript
interface MetricasGeracao {
    tempoExecucaoMs: number;
    totalAulasAAlocar: number;
    totalAulasAlocadas: number;
    candidatosGerados: number;
    candidatosRejeitados: number;
    candidatosAvaliados: number;
    custoSoftFinal: number;
    falhas: FalhaGeracao[];
}
```

Uma falha deve possuir contexto suficiente para diagnóstico:

```typescript
interface FalhaGeracao {
    aulaId: number;
    descricaoAula: string;
    motivo: string;
    detalhe: string;
}
```

Essas métricas serão utilizadas posteriormente para:

* Debug.
* Monitorização.
* Benchmark.
* Comparação de versões.
* Identificação de gargalos.
* Avaliação da escalabilidade.

---

# 18. Compatibilidade com Simulated Annealing

O Gerador Inicial e o Simulated Annealing devem ser componentes independentes.

O fluxo será:

```text
Gerador Guloso
      ↓
Horario Inicial Válido
      ↓
Simulated Annealing
      ↓
Horario Otimizado
```

O Greedy não deve conhecer os detalhes internos do Simulated Annealing.

Da mesma forma, o Simulated Annealing deve receber apenas uma estrutura de horário válida.

Essa separação permitirá futuramente utilizar:

```text
Gerador Guloso → SA
```

ou:

```text
Gerador Guloso → SA → Tabu Search
```

sem reescrever o gerador.

---

# 19. Persistência

A geração deve ocorrer em memória.

O algoritmo não deve persistir cada alocação individualmente durante a construção.

O fluxo de persistência será:

```text
Dados da BD
      ↓
Memória
      ↓
Gerador
      ↓
Simulated Annealing
      ↓
Horário final
      ↓
Validação
      ↓
Transação Prisma
      ↓
PostgreSQL
```

A persistência final deve ser realizada atomicamente.

Se ocorrer uma falha durante a persistência:

```text
ROLLBACK
```

para evitar que o banco fique com um horário parcialmente gravado.

---

# 20. Escalabilidade

O AURA deve ser projetado para a escala de referência:

```text
200 professores
160 disciplinas
50 turmas
30 salas
```

A escalabilidade não será considerada garantida apenas pela escolha do algoritmo.

Ela deverá ser validada empiricamente.

Os benchmarks deverão medir:

```text
Tempo de geração
Uso de memória
Número de aulas
Número de candidatos
Número de verificações
Número de avaliações
Número de falhas
Qualidade da solução inicial
```

Também devem ser utilizados conjuntos de dados progressivamente maiores para identificar como o custo do algoritmo cresce.

O objetivo é evitar o comportamento exponencial característico do backtracking utilizado anteriormente.

Não deve ser assumida complexidade linear sem medição e análise formal da implementação.

---

# 21. Princípios de Implementação

O Gerador Inicial deve respeitar os seguintes princípios:

### 21.1 Separação de responsabilidades

Cada componente deve possuir uma responsabilidade clara:

```text
prepararDados()
construirAulas()
gerarCandidatos()
verificarRestricoes()
avaliarPosicao()
atualizarEstado()
gerarHorario()
validarHorario()
```

---

### 21.2 Independência da UI

O algoritmo não deve depender de:

```text
React
Componentes
Hooks
Interface gráfica
Tauri
```

A camada de aplicação deve chamar o algoritmo, mas o algoritmo deve permanecer independente.

---

### 21.3 Independência da persistência

O núcleo do algoritmo deve trabalhar com dados em memória e não executar consultas Prisma durante as operações intensivas de geração.

---

### 21.4 Código em português

Como o domínio do AURA é definido em português, entidades, variáveis e funções relacionadas ao domínio devem utilizar nomenclatura em português.

Exemplos:

```typescript
Aula
Professor
Disciplina
Turma
Sala
Periodo
Atribuicao
Horario
AulaAlocada
gerarCandidatos()
verificarRestricoes()
avaliarPosicao()
construirHorario()
validarHorario()
```

Nomes próprios de tecnologias e bibliotecas permanecem no formato original:

```text
Next.js
TypeScript
Prisma
PostgreSQL
Tauri
Simulated Annealing
```

---

# 22. Resultado Esperado

Ao final da execução bem-sucedida:

```text
Dados da Escola
      ↓
Preparação
      ↓
Gerador Guloso
      ↓
Horario Inicial
      ↓
100% Hard Constraints
      ↓
Pontuação de Soft Constraints
      ↓
Simulated Annealing
      ↓
Horario Otimizado
```

O Gerador Inicial não tem como objetivo produzir necessariamente o melhor horário possível.

O seu objetivo é produzir **rapidamente uma solução inicial válida e suficientemente boa**, que possa ser melhorada pelo Simulated Annealing.

---

# 23. Estado Atual da Estratégia

A estratégia adotada para o AURA é:

```text
GERAÇÃO
    ↓
Gerador Guloso
    ↓
MRV
    ↓
Hard Constraints
    ↓
Soft Constraints
    ↓
Forward Checking opcional/avaliado por benchmark
    ↓
Horario Inicial Válido

OTIMIZAÇÃO
    ↓
Simulated Annealing

FUTURO
    ↓
Possível integração de Tabu Search
```

O Gerador Guloso deve ser implementado e validado isoladamente antes da integração com o Simulated Annealing.

O desempenho, a qualidade da solução e a taxa de sucesso devem ser medidos antes de qualquer otimização adicional.
