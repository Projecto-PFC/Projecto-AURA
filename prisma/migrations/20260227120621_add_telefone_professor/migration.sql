/*
  Warnings:

  - You are about to alter the column `email` on the `professores` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(20)`.
  - Added the required column `telefone` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professores" ADD COLUMN     "telefone" VARCHAR(15) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(20);
