import { Chapter } from "src/chapter/chapter.entity"
import { Manga } from "src/manga/manga.entity"

export interface IMangaAndChapter{
    manga:Manga,
    chapter:Chapter
}[]