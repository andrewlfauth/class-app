/*
  Warnings:

  - You are about to drop the column `grade_level` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `grade_level`,
    DROP COLUMN `role`;
