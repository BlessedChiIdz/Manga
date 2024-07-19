import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chapter } from './chapter.entity';
import { Repository } from 'typeorm';
import { createChapterDto } from './dto/create-chapter.dto';
import { Manga } from 'src/manga/manga.entity';

@Injectable()
export class ChapterService {
    constructor(
        @InjectRepository(Chapter)
        private chapterRepository: Repository<Chapter>,
        @InjectRepository(Manga)
        private mangaRepository:Repository<Manga>
    ){}

    async createChapter(dto:createChapterDto){
        const manga:Manga = await this.mangaRepository.findOne({where:{id:dto.mangaId}});
        dto.manga = manga;
        const createChapter = await this.chapterRepository.save(dto);
        return createChapter;
    }

    getChapters(){
        return this.chapterRepository.find({relations:['manga']})
    }
}
