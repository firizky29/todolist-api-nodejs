/*
  Warnings:

  - You are about to drop the column `updated_at` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `todos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `activities` DROP COLUMN `updated_at`;

-- AlterTable
ALTER TABLE `todos` DROP COLUMN `updated_at`;
