import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722939707109 implements MigrationInterface {
    name = 'Migration1722939707109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pages" ("id" SERIAL NOT NULL, "path" character varying NOT NULL, "chapterId" integer, CONSTRAINT "PK_8f21ed625aa34c8391d636b7d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "chapterNumber" integer NOT NULL, "chapterName" character varying NOT NULL, "mangaId" integer, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "opened" ("id" SERIAL NOT NULL, "openedChapters" integer array NOT NULL, "userId" integer, "mangaId" integer, CONSTRAINT "PK_0e148273ea49dab6bb29a874126" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_comment" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "parentIdId" integer, CONSTRAINT "PK_09bced71952353c5ae4e40f0f52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manga" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_86e5c2b6f8bede099e2906579b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite" ("id" SERIAL NOT NULL, "openedChapters" integer array NOT NULL, "userId" integer, "mangaId" integer, CONSTRAINT "PK_495675cec4fb09666704e4f610f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "Role" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parser" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_db153200e4f618dbe6ec135a988" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_comment_user_user" ("userCommentId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_4e45484854e9ebba382564f28a7" PRIMARY KEY ("userCommentId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_27e79d0ad9b216ff3870cdfe3c" ON "user_comment_user_user" ("userCommentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d8a2def37649d6d394d71bcff6" ON "user_comment_user_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "user_comment_manga_manga" ("userCommentId" integer NOT NULL, "mangaId" integer NOT NULL, CONSTRAINT "PK_f02f583d3dc94bb82ab7758c708" PRIMARY KEY ("userCommentId", "mangaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6c3ac9c1175fc898f448b3add9" ON "user_comment_manga_manga" ("userCommentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_801975e211dbc2f1d0c0bef810" ON "user_comment_manga_manga" ("mangaId") `);
        await queryRunner.query(`CREATE TABLE "tags_manga_manga" ("tagsId" integer NOT NULL, "mangaId" integer NOT NULL, CONSTRAINT "PK_622fe186741742d42cecd6c9745" PRIMARY KEY ("tagsId", "mangaId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e0c0e8928178b05eacb48d0ef8" ON "tags_manga_manga" ("tagsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_bbdc0a4b82f110a3ef3e425320" ON "tags_manga_manga" ("mangaId") `);
        await queryRunner.query(`ALTER TABLE "pages" ADD CONSTRAINT "FK_ff5d10b3ea5b3295cf2ac4f24e4" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opened" ADD CONSTRAINT "FK_c211bb7c26c22435bd73924d0fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opened" ADD CONSTRAINT "FK_c0f62cab83d317c16f6d5652040" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment" ADD CONSTRAINT "FK_dd66901f599456fe6ac34458582" FOREIGN KEY ("parentIdId") REFERENCES "user_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_83b775fdebbe24c29b2b5831f2d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_2f23a5790b93b9cb81d813a5c22" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" ADD CONSTRAINT "FK_27e79d0ad9b216ff3870cdfe3cb" FOREIGN KEY ("userCommentId") REFERENCES "user_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" ADD CONSTRAINT "FK_d8a2def37649d6d394d71bcff65" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" ADD CONSTRAINT "FK_6c3ac9c1175fc898f448b3add96" FOREIGN KEY ("userCommentId") REFERENCES "user_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" ADD CONSTRAINT "FK_801975e211dbc2f1d0c0bef810e" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" ADD CONSTRAINT "FK_e0c0e8928178b05eacb48d0ef8f" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" ADD CONSTRAINT "FK_bbdc0a4b82f110a3ef3e4253200" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" DROP CONSTRAINT "FK_bbdc0a4b82f110a3ef3e4253200"`);
        await queryRunner.query(`ALTER TABLE "tags_manga_manga" DROP CONSTRAINT "FK_e0c0e8928178b05eacb48d0ef8f"`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" DROP CONSTRAINT "FK_801975e211dbc2f1d0c0bef810e"`);
        await queryRunner.query(`ALTER TABLE "user_comment_manga_manga" DROP CONSTRAINT "FK_6c3ac9c1175fc898f448b3add96"`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" DROP CONSTRAINT "FK_d8a2def37649d6d394d71bcff65"`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" DROP CONSTRAINT "FK_27e79d0ad9b216ff3870cdfe3cb"`);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_2f23a5790b93b9cb81d813a5c22"`);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_83b775fdebbe24c29b2b5831f2d"`);
        await queryRunner.query(`ALTER TABLE "user_comment" DROP CONSTRAINT "FK_dd66901f599456fe6ac34458582"`);
        await queryRunner.query(`ALTER TABLE "opened" DROP CONSTRAINT "FK_c0f62cab83d317c16f6d5652040"`);
        await queryRunner.query(`ALTER TABLE "opened" DROP CONSTRAINT "FK_c211bb7c26c22435bd73924d0fd"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7"`);
        await queryRunner.query(`ALTER TABLE "pages" DROP CONSTRAINT "FK_ff5d10b3ea5b3295cf2ac4f24e4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bbdc0a4b82f110a3ef3e425320"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0c0e8928178b05eacb48d0ef8"`);
        await queryRunner.query(`DROP TABLE "tags_manga_manga"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_801975e211dbc2f1d0c0bef810"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6c3ac9c1175fc898f448b3add9"`);
        await queryRunner.query(`DROP TABLE "user_comment_manga_manga"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d8a2def37649d6d394d71bcff6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27e79d0ad9b216ff3870cdfe3c"`);
        await queryRunner.query(`DROP TABLE "user_comment_user_user"`);
        await queryRunner.query(`DROP TABLE "parser"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "favorite"`);
        await queryRunner.query(`DROP TABLE "manga"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "user_comment"`);
        await queryRunner.query(`DROP TABLE "opened"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
        await queryRunner.query(`DROP TABLE "pages"`);
    }

}
