import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1721983076234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into "user" values (1,'WANE','Admin','zxc@zxc','qweqwe');`)
        await queryRunner.query(`insert into "manga" values(1,'Innocent','Drama'),(2,'OnePiece','siedze')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user";`)
        await queryRunner.query(`DELETE FROM "manga";`)
    }

}
