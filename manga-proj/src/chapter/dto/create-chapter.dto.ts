import { Manga } from "src/manga/manga.entity";


export interface createChapterDto{
    chapterName:string,
    chapterNumber:number,
    mangaId:number,
    manga:Manga
}