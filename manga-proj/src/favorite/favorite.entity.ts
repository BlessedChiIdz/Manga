import { Chapter } from "src/chapter/chapter.entity";
import { Manga } from "src/manga/manga.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMangaAndChapter } from "./interface/IMangaAndChapter";

@Entity()
export class Favorite{
    @PrimaryGeneratedColumn()
    id?:number

    @ManyToOne(()=>User,(user)=>user.opened)
    user:User

    @ManyToOne(()=>Manga,(manga)=>manga.opened)
    manga:Manga

    @Column("int", { array: true })
    openedChapters:number[]
}