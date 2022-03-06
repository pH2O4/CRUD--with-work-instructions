-- CreateTable
CREATE TABLE "Linhas" (
    "id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "NomeT" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Linhas_Email_key" ON "Linhas"("Email");
