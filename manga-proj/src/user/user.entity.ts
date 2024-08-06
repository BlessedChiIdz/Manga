import { Favorite } from "src/favorite/favorite.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { roleEnum } from "./enum/role.enum";
import { UserComment } from "src/post/entities/post.entity";
import { OpenedManga } from "src/opened/opened.manga.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    Role:roleEnum

    @Column()
    mail:string

    @Column()  
    password:string

    @OneToMany(()=>Favorite,favorite=>favorite.user) 
    favorite:Favorite[]

    @OneToMany(()=>OpenedManga,opened => opened.user)
    opened:OpenedManga[]

    @ManyToMany(()=>UserComment,comment=>comment.user)
    comments:UserComment[]
} 