/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `bs_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "bs_user_user_name_key" ON "bs_user"("user_name");
