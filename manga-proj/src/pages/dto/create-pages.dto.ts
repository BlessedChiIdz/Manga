import { Chapter } from "src/chapter/chapter.entity"

export interface createPagesDto{
    path:string,
    chapterId:number,
    chapter:Chapter
}