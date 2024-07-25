import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from './favorite.entity';
import { Repository } from 'typeorm';
import { Manga } from 'src/manga/manga.entity';
import { Chapter } from 'src/chapter/chapter.entity';
import { addMangaToFavorite } from './dto/addMangaToFavorite';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private favoriteRepository: Repository<Favorite>,

        @InjectRepository(Manga)
        private mangaRepository: Repository<Manga>,

        @InjectRepository(Chapter)
        private chapterRepository: Repository<Chapter>
    ){}

    async addManga(dto:addMangaToFavorite){
        
    }

}
