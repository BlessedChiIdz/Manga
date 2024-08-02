import { Chapter } from "src/chapter/chapter.entity";
import { Favorite } from "src/favorite/favorite.entity";
import { Opened } from "src/opened/opened.entity";
import { Pages } from "src/pages/pages.entity";
import { Tags } from "src/tags/tags.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Manga {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @OneToMany(()=>Chapter,chapter=>chapter.manga)  
    @JoinColumn()
    chapters:Chapter[]

    @OneToMany(()=>Opened,opened=>opened.manga)
    opened:Opened[]

    @OneToMany(()=>Favorite,favorite=>favorite.manga)
    favorite:Favorite[]

    @ManyToMany(()=>Tags,tags=>tags.manga)
    tags:Tags[]
}