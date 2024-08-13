/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Message` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Message_id_key" ON "Message"("id");
