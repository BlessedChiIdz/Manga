import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722488263574 implements MigrationInterface {
    name = 'Migration1722488263574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manga" DROP COLUMN "tag"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manga" ADD "tag" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
