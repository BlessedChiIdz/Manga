import { Chapter } from "src/chapter/chapter.entity";
import { Favorite } from "src/favorite/favorite.entity";
import { OpenedManga } from "src/opened/opened.manga.entity";
import { Pages } from "src/pages/pages.entity";
import { UserComment } from "src/post/entities/post.entity";
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

    @OneToMany(()=>OpenedManga,opened=>opened.manga)
    opened:OpenedManga[]

    @OneToMany(()=>Favorite,favorite=>favorite.manga)
    favorite:Favorite[]

    @ManyToMany(()=>Tags,tags=>tags.manga)
    tags:Tags[]

    @ManyToMany(()=>UserComment,comment=>comment.manga)
    comment: UserComment[]
}