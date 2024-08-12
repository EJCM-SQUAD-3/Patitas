/*
  Warnings:

  - You are about to alter the column `cep` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(7)`.
  - Changed the type of `number` on the `Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL,
ALTER COLUMN "cep" SET DATA TYPE VARCHAR(7);
