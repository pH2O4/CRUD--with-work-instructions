/*
  Warnings:

  - You are about to drop the column `NomeL` on the `Linhas` table. All the data in the column will be lost.
  - Added the required column `NomeL1` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL2` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL3` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL4` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL5` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL6` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL7` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL8` to the `Linhas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NomeL9` to the `Linhas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Linhas" DROP COLUMN "NomeL",
ADD COLUMN     "NomeL1" TEXT NOT NULL,
ADD COLUMN     "NomeL2" TEXT NOT NULL,
ADD COLUMN     "NomeL3" TEXT NOT NULL,
ADD COLUMN     "NomeL4" TEXT NOT NULL,
ADD COLUMN     "NomeL5" TEXT NOT NULL,
ADD COLUMN     "NomeL6" TEXT NOT NULL,
ADD COLUMN     "NomeL7" TEXT NOT NULL,
ADD COLUMN     "NomeL8" TEXT NOT NULL,
ADD COLUMN     "NomeL9" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "usuariosEmail" TEXT;

-- AddForeignKey
ALTER TABLE "Linhas" ADD CONSTRAINT "Linhas_usuariosEmail_fkey" FOREIGN KEY ("usuariosEmail") REFERENCES "Usuarios"("Email") ON DELETE SET NULL ON UPDATE CASCADE;
