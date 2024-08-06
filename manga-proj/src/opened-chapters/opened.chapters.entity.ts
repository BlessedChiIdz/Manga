import { Chapter } from "src/chapter/chapter.entity";
import { Column, Entity, ManyToOne } from "typeorm";



@Entity()
export class openedChapters{

    @Column()
    id:number

    @ManyToOne(()=>Chapter,chapter=>chapter.)
    chapter:Chapter

    @
}