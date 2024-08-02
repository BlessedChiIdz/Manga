import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();


export const dbdatasource: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5555,
    username: process.env.DB_LOGIN,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ['./dist/migrations/**/*{.ts,.js}'],
    migrationsTableName: "MigrationTable", 
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false, 
    
};
const dataSource = new DataSource(dbdatasource)
export default dataSource