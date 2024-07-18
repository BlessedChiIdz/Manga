import { User } from "src/user/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Manga {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @ManyToMany(type => User, user => user.mangas)
    user: User 
}