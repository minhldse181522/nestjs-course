-- CreateTable
CREATE TABLE "category" (
    "id" BIGSERIAL NOT NULL,
    "categoryName" VARCHAR(50) NOT NULL,
    "description" VARCHAR(500),
    "voting_enabled" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(36),
    "modified_at" TIMESTAMPTZ(3),
    "modified_by" VARCHAR(36),

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(36),
    "modified_at" TIMESTAMPTZ(3),
    "modified_by" VARCHAR(36),

    CONSTRAINT "performance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance_category" (
    "performance_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL,
    "vote" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR(36),
    "modified_at" TIMESTAMPTZ(3),
    "modified_by" VARCHAR(36),

    CONSTRAINT "performance_category_pkey" PRIMARY KEY ("performance_id","category_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "performance_name_key" ON "performance"("name");

-- AddForeignKey
ALTER TABLE "performance_category" ADD CONSTRAINT "performance_category_performance_id_fkey" FOREIGN KEY ("performance_id") REFERENCES "performance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_category" ADD CONSTRAINT "performance_category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
