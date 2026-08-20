/**
 * @file types.ts
 * @description Estruturas de dados em TypeScript utilizadas internamente pelo
 * Gerador Inicial (Greedy Heurístico) do sistema AURA.
 * 
 * Estas estruturas são independentes dos modelos do Prisma para permitir
 * operações em memória altamente otimizadas e livres de dependências da base de dados.
 */

/*
  Representa uma posição temporal individual na escala escolar.
  Exemplo: Segunda-feira, Tarde, 3º Tempo.
*/
export interface Slot {
    id_dia: number;      // Identificador do dia da semana (ex: 1 a 7 ou IDs da base de dados)
    id_periodo: number;  // Identificador do período letivo (ex: Manhã, Tarde)
    ordem: number;       // Ordem do tempo letivo dentro do período (ex: 1º tempo, 2º tempo)
}

export interface Professor {
    id_professor: number;
    nome_professor: string;
    disponibilidades: Slot[];
}

export interface Disciplina {
    id_disciplina: number;
    nome_disciplina: string;
    id_tipoSala: number;
}

export interface Periodo {
    id_periodo: number;
    descricao_periodo: string;
}

export interface Sala {
    id_sala: number;
    descricao_sala: string;
    capacidade: number;
    id_tipoSala: number;
}

export interface Curso {
    id_curso: number;
    descricao_curso: string;
}

export interface Classe {
    id_classe: number;
    descricao_classe: string;
}

export interface Turma {
    id_turma: number;
    descricao_turma: string;
    quantidade_alunos: number;
    id_SalaPreferencial?: number | null;
    id_curso?: number;                  
    id_classe?: number;                 
}

export interface Atribuicao {
    id_atribuicao: number;            // Identificador da atribuição
    id_professor: number;
    id_turma: number;
    id_disciplina: number;
    aulas_por_semana: number; // Quantidade de aulas (ocorrências) necessárias por semana
}

/*
 Representa uma ocupação que já existe antes de uma nova geração. Estas
 ocupações tornam-se permanentes no estado em memória do gerador.
*/
export interface TempoLectivoExistente {
    id_professor: number;
    id_turma: number;
    id_sala: number;
    slot: Slot;
}

/*
 Snapshot normalizado que o Gerador Inicial recebe antes de iniciar o ciclo
 guloso. Os índices evitam pesquisas lineares durante a geração.
*/
export interface DadosPreparadosGerador {
    professores: Professor[];
    disciplinas: Disciplina[];
    turmas: Turma[];
    salas: Sala[];
    periodos: Periodo[];
    atribuicoes: Atribuicao[];
    slots: Slot[];
    tempos_lectivos_externos: TempoLectivoExistente[];
    turmas_com_horario: Set<number>;
    professores_por_id: Map<number, Professor>;
    disciplinas_por_id: Map<number, Disciplina>;
    turmas_por_id: Map<number, Turma>;
    salas_por_id: Map<number, Sala>;
    slots_por_professor: Map<number, Slot[]>; // Lista de slots disponíveis para cada professor
    disponibilidade_por_professor: Map<number, Set<string>>; // Set de "dia-periodo-ordem" strings para cada professor, de forma a permitir pesquisas rápidas de disponibilidade
    salas_por_tipo: Map<number, Sala[]>;
    salas_compativeis_por_atribuicao: Map<number, Sala[]>;
    ocupacao_permanente_professores: Set<string>;
    ocupacao_permanente_turmas: Set<string>;
    ocupacao_permanente_salas: Set<string>;
    // Para consulta durante avaliação de soft constraints
    aulas_alocadas_por_turma_dia: Map<string, number>;  // chave: "turma_id_dia_id"
    aulas_alocadas_por_professor_dia: Map<string, number>; // chave: "prof_id_dia_id"
}

/*
 Representa uma aula "livre" (solta/não alocada) que precisa de ser posicionada num slot.
 Cada Atribuição com `N` aulas semanais gera `N` instâncias de `Aula_livre`.
*/
export interface Aula_livre {
    id_aula: number;                    // Identificador da aula (gerado automaticamente)
    id_atribuicao: number;
    id_professor: number;
    id_disciplina: number;
    id_turma: number;
    id_SalaPreferencial?: number | null;
    dominio: CandidatoAlocacao[];                    // Conjunto de slots candidatos onde a aula pode ser alocada

    // Metadados para facilidade de depuração e logs legíveis
    nome_professor?: string;
    descricao_disciplina?: string;
    descricao_turma?: string;
}

// Representa uma aula após ser alocada com sucesso num Slot e numa Sala específica.
export interface Aula_alocada {
    aula: Aula_livre;               // Aula que foi alocada
    id_sala: number;                // Sala onde a aula foi alocada
    slot: Slot;                     // Slot onde a aula foi alocada
}

// Representa um item individual no log de geração a ser exibido na interface.
export interface LogItem {
    tipo: "sucesso" | "aviso" | "erro";
    mensagem: string;
}

// Detalha um erro/falha de alocação de aula no processo guloso.
export interface FalhaGeracao {
    id_aula: number;
    descricao_aula: string;
    motivo: string;   // Ex: ESGOTAMENTO_DISPONIBILIDADE, CONFLITO_SALAS, etc.
    detalhe: string;  // Mensagem explicativa amigável
}

// Métricas consolidadas recolhidas ao longo da execução da geração do horário.
export interface MetricasGeracao {
    tempo_execucao_ms: number;
    total_aulas_a_alocar: number;
    total_aulas_alocadas: number;
    candidatos_gerados: number;
    candidatos_rejeitados: number;
    candidatos_avaliados: number;
    custo_soft_final: number;
    falhas: FalhaGeracao[];
}

// Representa os detalhes de um erro que causou a inviabilidade do horário.
export interface ErroGeracao {
    codigo: string;   // Código de erro estruturado
    mensagem: string; // Descrição geral do erro
    aula_id?: string;  // ID da aula que originou a falha, se aplicável
    detalhes?: string;
}

// Representa a estrutura completa do Horário em memória.
export interface Horario {
    aulas_alocadas: Aula_alocada[];
}

// Resultado retornado pelo Gerador Inicial após a execução.
export interface ResultadoGeracao {
    sucesso: boolean;
    horario?: Horario;
    erro?: ErroGeracao;
    metricas: MetricasGeracao;
    logs?: LogItem[]; // Logs acumulados úteis para feedback visual imediato
}

// Pesos customizáveis associados às restrições de qualidade (Soft Constraints).
export interface PesosSoftConstraints {
    pesoSC01: number; // Distribuição equilibrada da carga semanal
    pesoSC02: number; // Minimização de janelas dos professores
    pesoSC03: number; // Concentração de aulas consecutivas
    pesoSC04: number; // Prioridade da sala preferencial
    pesoSC05: number; // Limite diário de aulas da mesma disciplina
}

// Representa um candidato a alocação de aula avaliado pelo algoritmo.
export interface CandidatoAlocacao {
    slot: Slot;
    sala: Sala;
    custoTotal?: number;
    penalidades?: {
        sc01: number;
        sc02: number;
        sc03: number;
        sc04: number;
        sc05: number;
    };
}
