# APRESENTAÇÃO DO SISTEMA

| Campo   | Detalhe                                                              |
| ------- | -------------------------------------------------------------------- |
| Produto | AURA — Sistema Inteligente de Gestão e Geração de Horários Escolares |
| Equipa  | Seveen Horizon                                                       |
| Data    | Julho 2026                                                           |
| Estado  | Em desenvolvimento                                                   |

---

# PROBLEMA

Actualmente, muitas instituições de ensino elaboram os seus horários manualmente ou com ferramentas pouco flexíveis, tornando o processo lento, complexo e altamente suscetível a erros. A criação de horários envolve inúmeras restrições, como disponibilidade de professores, carga horária das disciplinas, disponibilidade das salas e conflitos entre turmas.

Os principais problemas encontrados são:

**1. Processo Demorado:** A elaboração manual de horários pode levar dias ou semanas, especialmente em instituições com muitos professores e turmas.

**2. Conflitos de Horário:** É comum existirem professores, turmas ou salas atribuídos ao mesmo período, exigindo inúmeras correções manuais.

**3. Dificuldade de Alterações:** Pequenas mudanças, como a indisponibilidade de um professor, podem obrigar à reconstrução de grande parte do horário.

**4. Falta de Centralização:** A gestão de professores, disciplinas, salas e horários encontra-se frequentemente distribuída por folhas de cálculo ou documentos independentes.

---

# SOLUÇÃO

O AURA é um sistema comercial desenvolvido para automatizar a criação e gestão de horários escolares através de algoritmos inteligentes de otimização.

O sistema centraliza a gestão de professores, turmas, disciplinas e salas, gerando automaticamente horários consistentes, minimizando conflitos e reduzindo significativamente o tempo necessário para o processo.

A aplicação será distribuída como software desktop utilizando Tauri, permitindo funcionamento local, elevado desempenho e uma experiência moderna para os utilizadores.

---

# PÚBLICO-ALVO

Instituições de ensino públicas e privadas que necessitam de uma solução moderna para a gestão e geração automática de horários escolares.

---

# UTILIZADORES

O sistema possui diferentes níveis de acesso:

* **Administrador** — gestão completa do sistema.
* **Gestor Académico** — gestão de horários e recursos académicos.
* **Professor** *(futuro)* — consulta do próprio horário.

---

# USER STORY

Como **Gestor Académico**, quero registar professores, turmas, disciplinas e salas para que o sistema gere automaticamente horários sem conflitos, reduzindo o tempo gasto na elaboração manual e facilitando futuras alterações.

---

# REQUISITOS FUNCIONAIS

| ID   | Descrição                                                                       |
| ---- | ------------------------------------------------------------------------------- |
| RF01 | O sistema deve permitir gerir professores (criar, consultar, editar e remover). |
| RF02 | O sistema deve permitir gerir turmas.                                           |
| RF03 | O sistema deve permitir gerir disciplinas.                                      |
| RF04 | O sistema deve permitir gerir salas.                                            |
| RF05 | O sistema deve permitir definir a carga horária semanal de cada disciplina.     |
| RF06 | O sistema deve permitir associar professores às disciplinas que lecionam.       |
| RF07 | O sistema deve permitir definir a disponibilidade semanal dos professores.      |
| RF08 | O sistema deve gerar automaticamente os horários escolares.                     |
| RF09 | O sistema deve impedir conflitos entre professores, turmas e salas.             |
| RF10 | O sistema deve permitir visualizar horários por turma, professor e sala.        |
| RF11 | O sistema deve permitir regenerar horários sempre que necessário.               |
| RF12 | O sistema deve permitir exportar horários para impressão e PDF.                 |

---

# REQUISITOS NÃO FUNCIONAIS

| ID    | Descrição                                                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01 | O sistema deve suportar, no mínimo, 200 professores, 160 disciplinas, 50 turmas e 30 salas sem degradação significativa de desempenho. |
| RNF02 | O sistema deve funcionar como aplicação desktop utilizando Tauri.                                                                      |
| RNF03 | Os dados devem ser armazenados em PostgreSQL.                                                                                          |
| RNF04 | Todos os dados devem ser validados antes da persistência.                                                                              |
| RNF05 | As operações críticas devem utilizar transações atómicas.                                                                              |
| RNF06 | O sistema deve possuir arquitetura escalável para crescimento futuro.                                                                  |

---

# REGRAS DE NEGÓCIO

| ID   | Descrição                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------- |
| RN01 | Um professor não pode estar atribuído a mais de uma turma no mesmo período.                                   |
| RN02 | Uma sala não pode ser utilizada por mais de uma turma no mesmo horário.                                       |
| RN03 | Uma turma não pode possuir duas aulas simultaneamente.                                                        |
| RN04 | Cada disciplina deve cumprir exatamente a sua carga horária semanal.                                          |
| RN05 | Apenas professores habilitados podem lecionar determinada disciplina.                                         |
| RN06 | O sistema deve respeitar a disponibilidade definida para cada professor.                                      |
| RN07 | O horário gerado deve respeitar todas as restrições obrigatórias antes de considerar critérios de otimização. |

---

# FORA DO ESCOPO

* Gestão financeira.
* Portal do aluno.
* Portal dos encarregados de educação.
* Aplicação móvel.
* Gestão de avaliações.
* Gestão de propinas.
* Gestão de presenças.
* Integração com plataformas de ensino.

---

# CRITÉRIOS DE SUCESSO

| ID   | Critério                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| CS01 | O sistema gera automaticamente um horário válido para instituições com até 200 professores, 160 disciplinas, 50 turmas e 30 salas. |
| CS02 | Não existem conflitos entre professores, turmas ou salas após a geração do horário.                                                |
| CS03 | O tempo de geração é significativamente inferior ao processo manual.                                                               |
| CS04 | O utilizador consegue consultar rapidamente qualquer horário por professor, turma ou sala.                                         |
| CS05 | O sistema mantém um desempenho consistente mesmo com o aumento do número de recursos.                                              |
| CS06 | O horário pode ser regenerado após alterações nos dados sem necessidade de reconstrução manual.                                    |

---