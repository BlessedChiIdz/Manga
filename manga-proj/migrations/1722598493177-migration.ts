import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722598493177 implements MigrationInterface {
    name = 'Migration1722598493177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_comment_manga_manga" ("userCommentId" integer NOT NULL, "mangaId" integer NOT NULL, CONSTRAINT "PK_f02f583d3dc94bb82ab7758c708" PRIMARY KEY ("userCommentId", "mangaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6c3ac9c1175fc898f448b3add9" ON "user_comment_manga_manga" ("userCommentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_801975e211dbc2f1d0c0bef810" ON "user_comment_manga_manga" ("mangaId") `);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" ADD CONSTRAINT "FK_6c3ac9c1175fc898f448b3add96" FOREIGN KEY ("userCommentId") REFERENCES "user_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" ADD CONSTRAINT "FK_801975e211dbc2f1d0c0bef810e" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" DROP CONSTRAINT "FK_801975e211dbc2f1d0c0bef810e"`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" DROP CONSTRAINT "FK_6c3ac9c1175fc898f448b3add96"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_801975e211dbc2f1d0c0bef810"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c3ac9c1175fc898f448b3add9"`);
        await queryRunner.query(`DROP TABLE "user_comment_manga_manga"`);
    }

}
