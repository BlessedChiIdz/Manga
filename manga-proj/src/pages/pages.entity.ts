import { Chapter } from "src/chapter/chapter.entity";
import { Manga } from "src/manga/manga.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Pages{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    path:string 

    @ManyToOne(()=>Chapter,chapter=>chapter.pages)
    @JoinColumn()
    chapter:Chapter
}