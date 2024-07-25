import { Chapter } from "src/chapter/chapter.entity";
import { Manga } from "src/manga/manga.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMangaAndChapter } from "./interface/IMangaAndChapter";

@Entity()
export class Favorite{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToMany(()=>User,(user)=>user.favorite)
    user:User[]
    
    @Column('jsonb')
    MangaAndChapterObj: IMangaAndChapter
}