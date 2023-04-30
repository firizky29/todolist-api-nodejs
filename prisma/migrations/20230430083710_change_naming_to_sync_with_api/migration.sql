/*
  Warnings:

  - The primary key for the `activities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `activity_id` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `activities` table. All the data in the column will be lost.
  - The primary key for the `todos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `todo_id` on the `todos` table. All the data in the column will be lost.
  - Added the required column `id` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `todos` DROP FOREIGN KEY `todos_activity_group_id_fkey`;

-- AlterTable
ALTER TABLE `activities` DROP PRIMARY KEY,
    DROP COLUMN `activity_id`,
    DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `todos` DROP PRIMARY KEY,
    DROP COLUMN `created_at`,
    DROP COLUMN `todo_id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `todos` ADD CONSTRAINT `todos_activity_group_id_fkey` FOREIGN KEY (`activity_group_id`) REFERENCES `activities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
