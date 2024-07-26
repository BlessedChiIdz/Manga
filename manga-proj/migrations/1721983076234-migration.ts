import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migration1721983076234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "question",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
        await queryRunner.query(`insert into "user" values (1,'WANE','Admin','zxc@zxc','qweqwe');`) 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE question")
        await queryRunner.query(`DELETE FROM "user" WHERE id=1;`)
    }

}
