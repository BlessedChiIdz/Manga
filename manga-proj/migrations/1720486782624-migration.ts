import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722486782624 implements MigrationInterface {
    name = 'Migration1720486782624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pages" ("id" SERIAL NOT NULL, "path" character varying NOT NULL, "chapterId" integer, CONSTRAINT "PK_8f21ed625aa34c8391d636b7d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "chapterNumber" integer NOT NULL, "chapterName" character varying NOT NULL, "mangaId" integer, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "opened" ("id" SERIAL NOT NULL, "openedChapters" integer array NOT NULL, "userId" integer, "mangaId" integer, CONSTRAINT "PK_0e148273ea49dab6bb29a874126" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manga" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "tag" character varying NOT NULL, CONSTRAINT "PK_86e5c2b6f8bede099e2906579b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorite" ("id" SERIAL NOT NULL, "openedChapters" integer array NOT NULL, "userId" integer, "mangaId" integer, CONSTRAINT "PK_495675cec4fb09666704e4f610f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "Role" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parser" ("id" SERIAL NOT NULL, "data" character varying NOT NULL, CONSTRAINT "PK_db153200e4f618dbe6ec135a988" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pages" ADD CONSTRAINT "FK_ff5d10b3ea5b3295cf2ac4f24e4" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opened" ADD CONSTRAINT "FK_c211bb7c26c22435bd73924d0fd" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opened" ADD CONSTRAINT "FK_c0f62cab83d317c16f6d5652040" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_83b775fdebbe24c29b2b5831f2d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorite" ADD CONSTRAINT "FK_2f23a5790b93b9cb81d813a5c22" FOREIGN KEY ("mangaId") REFERENCES "manga"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_2f23a5790b93b9cb81d813a5c22"`);
        await queryRunner.query(`ALTER TABLE "favorite" DROP CONSTRAINT "FK_83b775fdebbe24c29b2b5831f2d"`);
        await queryRunner.query(`ALTER TABLE "opened" DROP CONSTRAINT "FK_c0f62cab83d317c16f6d5652040"`);
        await queryRunner.query(`ALTER TABLE "opened" DROP CONSTRAINT "FK_c211bb7c26c22435bd73924d0fd"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_4c5fd6f3063aaf78a2d13ff94f7"`);
        await queryRunner.query(`ALTER TABLE "pages" DROP CONSTRAINT "FK_ff5d10b3ea5b3295cf2ac4f24e4"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "parser"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "favorite"`);
        await queryRunner.query(`DROP TABLE "manga"`);
        await queryRunner.query(`DROP TABLE "opened"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
        await queryRunner.query(`DROP TABLE "pages"`);
    }

}
