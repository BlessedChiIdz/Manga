import { Pages } from "src/pages/pages.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Parser{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    data:string 

}