import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manga } from './manga.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MangaService {

    constructor(
        @InjectRepository(Manga)
        private usersRepository: Repository<Manga>,
      ) {}
    
      create(manga:Manga){
        this.usersRepository.save(manga)
      }

}
