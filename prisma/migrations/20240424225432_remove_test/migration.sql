/*
  Warnings:

  - You are about to drop the column `teste` on the `TipoContato` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TipoContato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_TipoContato" ("id", "nome") SELECT "id", "nome" FROM "TipoContato";
DROP TABLE "TipoContato";
ALTER TABLE "new_TipoContato" RENAME TO "TipoContato";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
