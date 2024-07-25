import { Manga } from "src/manga/manga.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    Role:string
    
    @ManyToMany(type => Manga, manga => manga.user)
    @JoinTable()
    mangas: Manga[];

    @Column()
    mail:string

    @Column() 
    password:string 
} 