import { Manga } from "src/manga/manga.entity"
import { User } from "src/user/user.entity"

export interface addMangaToFavorite{
    user:User
    manga:Manga
}