import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722491120986 implements MigrationInterface {
    name = 'Migration1722491120986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags_manga_manga" ("tagsId" integer NOT NULL, "mangaId" integer NOT NULL, CONSTRAINT "PK_622fe186741742d42cecd6c9745" PRIMARY KEY ("tagsId", "mangaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e0c0e8928178b05eacb48d0ef8" ON "tags_manga_manga" ("tagsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bbdc0a4b82f110a3ef3e425320" ON "tags_manga_manga" ("mangaId") `);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" ADD CONSTRAINT "FK_e0c0e8928178b05eacb48d0ef8f" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" ADD CONSTRAINT "FK_bbdc0a4b82f110a3ef3e4253200" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" DROP CONSTRAINT "FK_bbdc0a4b82f110a3ef3e4253200"`);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" DROP CONSTRAINT "FK_e0c0e8928178b05eacb48d0ef8f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bbdc0a4b82f110a3ef3e425320"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0c0e8928178b05eacb48d0ef8"`);
        await queryRunner.query(`DROP TABLE "tags_manga_manga"`);
    }

}
