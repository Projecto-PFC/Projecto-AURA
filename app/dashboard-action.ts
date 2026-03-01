'use server'
import { prisma } from '@/lib/prisma'
import { listarTodos } from './professores/professores-action'
import { listarTodasTurmas } from './turmas/turma-action'
import { listarTodas } from './disciplinas/disciplinas-action'
import { salaService } from '@/lib/Service/Sala'

export async function getDashboardStats() {
  const [professores, turmas, disciplinas, salas] = await Promise.all([
    listarTodos(),
    listarTodasTurmas(),
    listarTodas(),
    salaService.listarTodasSalas(),
  ])
  return {
    professores: professores.length,
    turmas: turmas.length,
    disciplinas: disciplinas.length,
    salas: salas.length,
  }
}

function getDiaSemanaHoje(): string {
  const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const hoje = new Date().getDay()
  return dias[hoje]
}

export async function getAulasHoje() {
  const diaHoje = getDiaSemanaHoje()

  const diaSemana = await prisma.diaSemana.findUnique({
    where: { nome_dia: diaHoje },
  })

  if (!diaSemana) {
    return []
  }

  const aulas = await prisma.tempo_Lectivo.findMany({
    where: {
      nome_dia: diaSemana.nome_dia,
    },
    include: {
      disciplina: true,
      turma:      true,
      sala:       true,
      professor:  true,
      periodo:    true,
      dia:        true,
    },
    orderBy: [
      { ordem:        'asc' },
      { nome_periodo: 'asc' },
    ],
  })

  return aulas.map((aula) => ({
    id:        aula.id,
    periodo:   aula.periodo.nome_periodo,
    subject:   aula.disciplina.nome_disciplina,
    turma:     aula.turma.nome_turma,
    sala:      aula.sala.nome_sala,
    professor: aula.professor.nome,
    ordem:     aula.ordem,
  }))
}