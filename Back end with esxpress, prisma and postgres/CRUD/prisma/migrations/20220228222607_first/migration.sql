-- CreateTable
CREATE TABLE "Usuarios" (
    "Id" INTEGER NOT NULL,
    "Email" TEXT NOT NULL,
    "Telefone" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Id_key" ON "Usuarios"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Telefone_key" ON "Usuarios"("Telefone");
