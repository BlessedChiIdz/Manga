import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722594491467 implements MigrationInterface {
    name = 'Migration1722594491467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_comment_user_user" ("userCommentId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_4e45484854e9ebba382564f28a7" PRIMARY KEY ("userCommentId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_27e79d0ad9b216ff3870cdfe3c" ON "user_comment_user_user" ("userCommentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d8a2def37649d6d394d71bcff6" ON "user_comment_user_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" ADD CONSTRAINT "FK_27e79d0ad9b216ff3870cdfe3cb" FOREIGN KEY ("userCommentId") REFERENCES "user_comment"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" ADD CONSTRAINT "FK_d8a2def37649d6d394d71bcff65" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" DROP CONSTRAINT "FK_d8a2def37649d6d394d71bcff65"`);
        await queryRunner.query(`ALTER TABLE "user_comment_user_user" DROP CONSTRAINT "FK_27e79d0ad9b216ff3870cdfe3cb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d8a2def37649d6d394d71bcff6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27e79d0ad9b216ff3870cdfe3c"`);
        await queryRunner.query(`DROP TABLE "user_comment_user_user"`);
    }

}
