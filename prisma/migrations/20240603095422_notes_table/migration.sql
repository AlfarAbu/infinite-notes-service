-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);