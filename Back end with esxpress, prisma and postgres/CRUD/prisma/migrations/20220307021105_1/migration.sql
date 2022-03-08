-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "NomeC" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Linhas" (
    "Email" TEXT NOT NULL,
    "NomeL" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Linhas_Email_key" ON "Linhas"("Email");
