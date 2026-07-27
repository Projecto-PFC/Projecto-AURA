# AURA (Automated User-controlled Ruster Algorithm)

Sistema comercial de geração automática e gestão de horários escolares, desenvolvido para instituições de ensino de qualquer dimensão.

O AURA automatiza a criação de horários académicos, eliminando conflitos entre professores, turmas e salas, reduzindo drasticamente o tempo necessário para a elaboração manual e fornecendo uma plataforma moderna para a gestão de todos os recursos académicos.

O sistema está a ser desenvolvido como um produto comercial, com foco em desempenho, escalabilidade, fiabilidade e facilidade de utilização.

---

## Tecnologias

* Next.js
* TypeScript
* Prisma ORM
* PostgreSQL
* Tailwind CSS
* Tauri
* Zod

---

## Requisitos

Antes de executar o projeto, certifica-te de que tens instalado:

* Node.js (versão LTS recomendada)
* npm
* PostgreSQL
* Rust (necessário para o Tauri)

---

## Instalação

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Entrar na pasta do projeto

```bash
cd aura
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Cria um ficheiro `.env` na raiz do projeto.

Exemplo:

```env
DATABASE_URL="postgresql://..."
```

---

## Configurar a Base de Dados

Gerar o Prisma Client:

```bash
npx prisma generate
```

Aplicar as migrações:

```bash
npx prisma migrate dev
```

Caso existam dados iniciais:

```bash
npx prisma db seed
```

---

## Executar o projeto

### Desenvolvimento Web

```bash
npm run dev
```

### Desenvolvimento Desktop (Tauri)

```bash
npm run tauri dev
```

---

## Gerar Executável

Compilar a aplicação desktop:

```bash
npm run tauri build
```

O executável será gerado na pasta de distribuição do Tauri.

---

## Scripts úteis

### Desenvolvimento

```bash
npm run dev
```

### Desenvolvimento Desktop

```bash
npm run tauri dev
```

### Build Web

```bash
npm run build
```

### Build Desktop

```bash
npm run tauri build
```

### Produção

```bash
npm start
```

### Prisma Client

```bash
npx prisma generate
```

### Migrações

```bash
npx prisma migrate dev
```

### Linter

```bash
npm run lint
```

---

## Funcionalidades

### Dashboard

* Estatísticas gerais da instituição
* Indicadores dos recursos registados
* Acesso rápido à geração de horários

### Gestão de Professores

* Cadastro de professores
* Disponibilidade semanal
* Atribuição de disciplinas
* Associação de turmas

### Gestão de Turmas

* Cadastro de turmas
* Gestão de cursos
* Gestão de classes

### Gestão de Disciplinas

* Cadastro de disciplinas
* Definição da carga horária semanal
* Associação às turmas
* Definição do tipo de sala necessária

### Gestão de Salas

* Cadastro de salas
* Capacidade
* Tipo de sala

### Gestão de Horários

* Visualização por turma
* Visualização por professor
* Visualização por sala
* Atualização automática

### Geração Automática de Horários

* Geração automática baseada em restrições
* Eliminação de conflitos
* Otimização da distribuição das aulas
* Validação das regras institucionais

---

## Algoritmo

O núcleo do sistema será baseado numa arquitetura composta por:

* Gerador Inicial Heurístico (Greedy)
* Simulated Annealing
* Futuramente, integração com Tabu Search para otimização adicional

Esta abordagem permite produzir horários de elevada qualidade, mantendo tempos de processamento reduzidos e elevada escalabilidade.

---

## Escalabilidade

O sistema está a ser desenvolvido para suportar instituições de média e grande dimensão, incluindo cenários como:

* 200+ professores
* 160+ disciplinas
* 50+ turmas
* 30+ salas

A arquitetura foi concebida para continuar escalável à medida que o número de recursos aumenta.

---

## Estrutura do Projeto

```text
app/
components/
actions/
services/
repositories/
algorithms/
lib/
prisma/
public/
src-tauri/

docs/
 ├── PRD.md
 ├── ROADMAP.md
 └── ARCHITECTURE.md

AGENTS.md
README.md
```

---

## Documentação

### PRD

Contém os requisitos do produto, regras de negócio e funcionalidades do sistema.

```text
docs/PRD.md
```

### AGENTS

Define as regras e padrões utilizados pelos agentes de IA durante o desenvolvimento do projeto.

```text
AGENTS.md
```

---

## Objetivo

O AURA tem como objetivo tornar a geração e gestão de horários escolares um processo rápido, inteligente e confiável.

Mais do que um simples gerador de horários, o sistema pretende tornar-se uma plataforma completa de apoio à gestão académica, oferecendo uma solução escalável, moderna e preparada para responder às necessidades de instituições de ensino de diferentes dimensões.

---