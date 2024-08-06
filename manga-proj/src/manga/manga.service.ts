import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manga } from './manga.entity';
import { Repository } from 'typeorm';
import { Chapter } from 'src/chapter/chapter.entity';

@Injectable()
export class MangaService {

    constructor(
        @InjectRepository(Manga)
        private mangaRepository:Repository<Manga>
      ) {}
  

      getMangaById(id:number){
        return this.mangaRepository.find({where:{id:id}, relations:["tags","chapters"]})
      }

      getAllMangaMainPage(){
        return this.mangaRepository.find({relations:["tags"]})
      }

}
