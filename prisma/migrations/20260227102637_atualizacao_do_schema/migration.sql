/*
  Warnings:

  - You are about to drop the `Classe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiaSemana` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Disciplina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Disponibilidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Periodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfDisciplinas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfTurma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sala` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TempoLectivo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Turma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Disponibilidade" DROP CONSTRAINT "Disponibilidade_diaSemana_fkey";

-- DropForeignKey
ALTER TABLE "Disponibilidade" DROP CONSTRAINT "Disponibilidade_periodoId_fkey";

-- DropForeignKey
ALTER TABLE "Disponibilidade" DROP CONSTRAINT "Disponibilidade_professorId_fkey";

-- DropForeignKey
ALTER TABLE "ProfDisciplinas" DROP CONSTRAINT "ProfDisciplinas_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "ProfDisciplinas" DROP CONSTRAINT "ProfDisciplinas_professorId_fkey";

-- DropForeignKey
ALTER TABLE "ProfTurma" DROP CONSTRAINT "ProfTurma_professorId_fkey";

-- DropForeignKey
ALTER TABLE "ProfTurma" DROP CONSTRAINT "ProfTurma_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_diaSemana_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_periodoId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_professorId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_salaId_fkey";

-- DropForeignKey
ALTER TABLE "TempoLectivo" DROP CONSTRAINT "TempoLectivo_turmaId_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_classe_fkey";

-- DropForeignKey
ALTER TABLE "Turma" DROP CONSTRAINT "Turma_curso_fkey";

-- DropTable
DROP TABLE "Classe";

-- DropTable
DROP TABLE "Curso";

-- DropTable
DROP TABLE "DiaSemana";

-- DropTable
DROP TABLE "Disciplina";

-- DropTable
DROP TABLE "Disponibilidade";

-- DropTable
DROP TABLE "Periodo";

-- DropTable
DROP TABLE "ProfDisciplinas";

-- DropTable
DROP TABLE "ProfTurma";

-- DropTable
DROP TABLE "Professor";

-- DropTable
DROP TABLE "Sala";

-- DropTable
DROP TABLE "TempoLectivo";

-- DropTable
DROP TABLE "Turma";

-- CreateTable
CREATE TABLE "classes" (
    "nome_classe" VARCHAR(20) NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("nome_classe")
);

-- CreateTable
CREATE TABLE "cursos" (
    "nome_curso" VARCHAR(100) NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("nome_curso")
);

-- CreateTable
CREATE TABLE "dias_semana" (
    "nome_dia" VARCHAR(20) NOT NULL,

    CONSTRAINT "dias_semana_pkey" PRIMARY KEY ("nome_dia")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "nome_disciplina" VARCHAR(100) NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("nome_disciplina")
);

-- CreateTable
CREATE TABLE "disponibilidades" (
    "id_disponibilidade" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "nome_dia" VARCHAR(20) NOT NULL,
    "nome_periodo" VARCHAR(20) NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "disponibilidades_pkey" PRIMARY KEY ("id_disponibilidade")
);

-- CreateTable
CREATE TABLE "periodos" (
    "nome_periodo" VARCHAR(20) NOT NULL,

    CONSTRAINT "periodos_pkey" PRIMARY KEY ("nome_periodo")
);

-- CreateTable
CREATE TABLE "professores" (
    "id_professor" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id_professor")
);

-- CreateTable
CREATE TABLE "prof_disciplinas" (
    "professorId" INTEGER NOT NULL,
    "nome_disciplina" VARCHAR(100) NOT NULL,

    CONSTRAINT "prof_disciplinas_pkey" PRIMARY KEY ("professorId","nome_disciplina")
);

-- CreateTable
CREATE TABLE "salas" (
    "nome_sala" VARCHAR(20) NOT NULL,
    "capacidade" INTEGER NOT NULL,

    CONSTRAINT "salas_pkey" PRIMARY KEY ("nome_sala")
);

-- CreateTable
CREATE TABLE "tempo_lectivo" (
    "id" SERIAL NOT NULL,
    "professorId" INTEGER NOT NULL,
    "nome_turma" VARCHAR(100) NOT NULL,
    "nome_disciplina" VARCHAR(100) NOT NULL,
    "nome_sala" VARCHAR(100) NOT NULL,
    "nome_dia" VARCHAR(100) NOT NULL,
    "nome_periodo" VARCHAR(100) NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "tempo_lectivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turmas" (
    "nome_turma" VARCHAR(20) NOT NULL,
    "nome_curso" VARCHAR(20) NOT NULL,
    "nome_classe" VARCHAR(20) NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("nome_turma")
);

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_nome_dia_fkey" FOREIGN KEY ("nome_dia") REFERENCES "dias_semana"("nome_dia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_nome_periodo_fkey" FOREIGN KEY ("nome_periodo") REFERENCES "periodos"("nome_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_disciplinas" ADD CONSTRAINT "prof_disciplinas_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prof_disciplinas" ADD CONSTRAINT "prof_disciplinas_nome_disciplina_fkey" FOREIGN KEY ("nome_disciplina") REFERENCES "disciplinas"("nome_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professores"("id_professor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_turma_fkey" FOREIGN KEY ("nome_turma") REFERENCES "turmas"("nome_turma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_disciplina_fkey" FOREIGN KEY ("nome_disciplina") REFERENCES "disciplinas"("nome_disciplina") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_sala_fkey" FOREIGN KEY ("nome_sala") REFERENCES "salas"("nome_sala") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_dia_fkey" FOREIGN KEY ("nome_dia") REFERENCES "dias_semana"("nome_dia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tempo_lectivo" ADD CONSTRAINT "tempo_lectivo_nome_periodo_fkey" FOREIGN KEY ("nome_periodo") REFERENCES "periodos"("nome_periodo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_nome_curso_fkey" FOREIGN KEY ("nome_curso") REFERENCES "cursos"("nome_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turmas" ADD CONSTRAINT "turmas_nome_classe_fkey" FOREIGN KEY ("nome_classe") REFERENCES "classes"("nome_classe") ON DELETE RESTRICT ON UPDATE CASCADE;
