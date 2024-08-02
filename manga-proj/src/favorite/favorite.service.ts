import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from './favorite.entity';
import { Repository } from 'typeorm';
import { Manga } from 'src/manga/manga.entity';
import { Opened } from 'src/opened/opened.entity';
import { User } from 'src/user/user.entity';
import { createFavoriteDto } from './dto/createFavoriteDto';

@Injectable()
export class FavoriteService {
    constructor(
        @InjectRepository(Favorite)
        private favoriteRepository: Repository<Favorite>,

        @InjectRepository(Manga)
        private mangaRepository: Repository<Manga>,

        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}

    async create(dto:createFavoriteDto){
        const manga = await this.mangaRepository.findOne({where:{id:dto.mangaId}})
        const user = await this.userRepository.findOne({where:{id:dto.userId}})
        let data:Opened = {
            manga: manga,
            user: user,
            openedChapters: dto.chapters
        };
        console.log(data)
        return this.favoriteRepository.save(data)
    }

    async get(){
        return this.favoriteRepository.find({where:{id:1}})
    }

    async getByUserId(userId:number){
        const user = await this.userRepository.findOne({where:{id:userId}})
        return this.favoriteRepository.find({where:{user:user}, relations:['manga','user']})
    }

}
