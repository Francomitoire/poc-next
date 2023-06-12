/*
  Warnings:

  - You are about to drop the column `age` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "age";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "last_name" TEXT;
