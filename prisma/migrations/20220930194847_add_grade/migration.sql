/*
  Warnings:

  - Added the required column `grade` to the `Classroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Classroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Classroom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Classroom` ADD COLUMN `grade` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;
