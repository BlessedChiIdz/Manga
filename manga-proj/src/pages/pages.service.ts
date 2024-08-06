import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pages } from './pages.entity';
import { Repository } from 'typeorm';
import { Chapter } from 'src/chapter/chapter.entity';
import { createPagesDto } from './dto/create-pages.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class PagesService {
    constructor(
        @InjectRepository(Pages)
        private pagesRepository: Repository<Pages>,
        @InjectRepository(Chapter)
        private chapterRepository: Repository<Chapter>
    ){}

    async create(dto:createPagesDto){
        const chapter:Chapter = await this.chapterRepository.findOne({where:{id:dto.chapterId}})
        dto.chapter = chapter
        const pages = await this.pagesRepository.save(dto)
        return pages
    }

    async getAll(){
        return this.pagesRepository.find({relations:['chapter']})
    }


    
}
