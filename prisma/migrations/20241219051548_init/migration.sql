/*
  Warnings:

  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_userId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "category" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
