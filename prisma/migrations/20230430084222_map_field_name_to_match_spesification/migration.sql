/*
  Warnings:

  - The primary key for the `activities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `activities` table. All the data in the column will be lost.
  - The primary key for the `todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `todos` table. All the data in the column will be lost.
  - Added the required column `activity_id` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todo_id` to the `todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `todos` DROP FOREIGN KEY `todos_activity_group_id_fkey`;

-- AlterTable
ALTER TABLE `activities` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `activity_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`activity_id`);

-- AlterTable
ALTER TABLE `todos` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `id`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `todo_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`todo_id`);

-- AddForeignKey
ALTER TABLE `todos` ADD CONSTRAINT `todos_activity_group_id_fkey` FOREIGN KEY (`activity_group_id`) REFERENCES `activities`(`activity_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
