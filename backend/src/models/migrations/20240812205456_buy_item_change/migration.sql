/*
  Warnings:

  - Changed the type of `unitaryPrice` on the `BuyItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "BuyItem" DROP COLUMN "unitaryPrice",
ADD COLUMN     "unitaryPrice" MONEY NOT NULL;
