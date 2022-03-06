/*
  Warnings:

  - You are about to drop the column `Nome` on the `Usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `Telefone` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `Senha` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Usuarios_Id_key";

-- DropIndex
DROP INDEX "Usuarios_Telefone_key";

-- AlterTable
CREATE SEQUENCE "usuarios_id_seq";
ALTER TABLE "Usuarios" DROP COLUMN "Nome",
DROP COLUMN "Telefone",
ADD COLUMN     "Senha" TEXT NOT NULL,
ALTER COLUMN "Id" SET DEFAULT nextval('usuarios_id_seq');
ALTER SEQUENCE "usuarios_id_seq" OWNED BY "Usuarios"."Id";
