import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manga } from './manga.entity';
import { Repository } from 'typeorm';
import { Chapter } from 'src/chapter/chapter.entity';

@Injectable()
export class MangaService {

    constructor(
        @InjectRepository(Manga)
        private usersRepository: Repository<Manga>,
        @InjectRepository(Chapter)
        private chapterRepository: Repository<Chapter>
      ) {}
    
      create(manga:Manga){
       return this.usersRepository.save(manga)
      }

      addChapter(){
        
      }

}
