import { Favorite } from "src/favorite/favorite.entity";
import { Manga } from "src/manga/manga.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    Role:string


    @Column()
    mail:string

    @Column() 
    password:string 

    @ManyToMany(()=>Favorite)
    @JoinTable()
    favorite:Favorite[]
} 