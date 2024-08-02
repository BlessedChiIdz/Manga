import { Favorite } from "src/favorite/favorite.entity";
import { Opened } from "src/opened/opened.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { roleEnum } from "./enum/role.enum";
import { UserComment } from "src/post/entities/post.entity";


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

    @OneToMany(()=>Opened,opened => opened.user)
    opened:Opened[]

    @ManyToMany(()=>UserComment,comment=>comment.user)
    comments:UserComment[]
} 