import { Chapter } from "src/chapter/chapter.entity";
import { Pages } from "src/pages/pages.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Manga {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @ManyToMany(() => User, user => user.mangas)
    user: User
    
    @OneToMany(()=>Chapter,chapter=>chapter.manga) 
    @JoinColumn()
    chapter:Chapter[]
}