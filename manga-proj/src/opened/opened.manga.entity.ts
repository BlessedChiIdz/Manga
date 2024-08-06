import { Manga } from "src/manga/manga.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class OpenedManga {
    @PrimaryGeneratedColumn()
    id?:number

    @ManyToOne(()=>User,(user)=>user.opened)
    user:User

    @ManyToOne(()=>Manga,(manga)=>manga.opened) 
    manga:Manga

    @Column("int", { array: true })
    openedChapters:number[] 
}