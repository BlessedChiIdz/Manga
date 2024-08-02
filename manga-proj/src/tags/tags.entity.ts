import { Manga } from "src/manga/manga.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Tags{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    description:string

    @ManyToMany(()=>Manga,manga=>manga.tags)
    @JoinTable()
    manga:Manga[]

}