/*
  Warnings:

  - You are about to drop the column `name` on the `Seller` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Seller_name_key";

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "name";
