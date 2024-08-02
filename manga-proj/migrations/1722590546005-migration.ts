import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1722590546005 implements MigrationInterface {
    name = 'Migration1722590546005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_comment" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, "parentIdId" integer, CONSTRAINT "PK_09bced71952353c5ae4e40f0f52" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_comment" ADD CONSTRAINT "FK_dd66901f599456fe6ac34458582" FOREIGN KEY ("parentIdId") REFERENCES "user_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query('DROP table Post')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_comment" DROP CONSTRAINT "FK_dd66901f599456fe6ac34458582"`);
        await queryRunner.query(`DROP TABLE "user_comment"`);
    }

}
