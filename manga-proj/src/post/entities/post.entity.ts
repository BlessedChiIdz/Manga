import { Manga } from "src/manga/manga.entity";
import { User } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


  @Entity()
  export class UserComment {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(()=>User,user=>user.comments)
    @JoinTable()
    user?: User[]

    @ManyToMany(()=>Manga,manga=>manga.comment)
    @JoinTable()
    manga: Manga[]

    @OneToMany(()=>UserComment,comment=>comment.parentId)
    childIds?: number[]

    @ManyToOne(()=>UserComment,commend=>commend.childIds)
    @JoinColumn()
    parentId?: number

    @CreateDateColumn()
    created_at:Date;
  }