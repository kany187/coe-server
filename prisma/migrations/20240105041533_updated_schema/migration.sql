/*
  Warnings:

  - Made the column `assignedToUserId` on table `AgentListing` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `AgentListing` MODIFY `assignedToUserId` VARCHAR(255) NOT NULL;
