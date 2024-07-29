import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Opened } from './opened.entity';
import { Repository } from 'typeorm';
import { createOpenedDto } from './dto/create.dto';
import { Manga } from 'src/manga/manga.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class OpenedService {
    constructor(
        @InjectRepository(Opened)
        private openedRepository:Repository<Opened>,
        @InjectRepository(Manga)
        private mangaRepository:Repository<Manga>,
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}


    async create(dto:createOpenedDto){
        const manga = await this.mangaRepository.findOne({where:{id:dto.mangaId}})
        const user = await this.userRepository.findOne({where:{id:dto.userId}})
        let data:Opened = {
            manga: manga,
            user: user,
            openedChapters: dto.chapters
        };
        console.log(data)
        return this.openedRepository.save(data)
    }

    async get(){
        return this.openedRepository.find({where:{id:1}})
    }

    async getByUserId(userId:number){
        const user = await this.userRepository.findOne({where:{id:userId}})
        return this.openedRepository.find({where:{user:user}, relations:['manga','user']})
    }
}
