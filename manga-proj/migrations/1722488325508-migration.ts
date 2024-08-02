import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722488325508 implements MigrationInterface {
    name = 'Migration1722488325508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manga_tags_tags" ("mangaId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_bbad8f99f9519cb75fcead2707b" PRIMARY KEY ("mangaId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ea960599ff05c8fe7aba141765" ON "manga_tags_tags" ("mangaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bd854c700ee5bb37029d159cc9" ON "manga_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "manga_tags_tags" ADD CONSTRAINT "FK_ea960599ff05c8fe7aba1417650" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "manga_tags_tags" ADD CONSTRAINT "FK_bd854c700ee5bb37029d159cc9a" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manga_tags_tags" DROP CONSTRAINT "FK_bd854c700ee5bb37029d159cc9a"`);
        await queryRunner.query(`ALTER TABLE "manga_tags_tags" DROP CONSTRAINT "FK_ea960599ff05c8fe7aba1417650"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bd854c700ee5bb37029d159cc9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea960599ff05c8fe7aba141765"`);
        await queryRunner.query(`DROP TABLE "manga_tags_tags"`);
    }

}
