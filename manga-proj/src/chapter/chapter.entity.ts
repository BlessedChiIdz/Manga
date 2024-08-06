import { Manga } from "src/manga/manga.entity";
import { Pages } from "src/pages/pages.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Chapter{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    chapterNumber:number 

    @Column()
    chapterName:string 

    @ManyToOne(()=>Manga,manga=>manga.chapters)
    @JoinColumn()
    manga:Manga
 
    @OneToMany(()=>Pages,pages=>pages.chapter)
    @JoinColumn()
    pages:Pages[]
}