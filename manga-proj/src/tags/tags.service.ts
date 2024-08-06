import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tags } from './tags.entity';
import { In, Repository } from 'typeorm';
import { Manga } from 'src/manga/manga.entity';
import { linkTagsDto } from './dto/link.tags.dto';
import { retry } from 'rxjs';

@Injectable()
export class TagsService {


    constructor(
        @InjectRepository(Tags)
        private tagsReposiroty: Repository<Tags>,
        @InjectRepository(Manga)
        private mangaRepository: Repository<Manga>
    ){}

    async createTag(dto:Tags){
        return this.tagsReposiroty.save(dto)
    }

    async getTagByIds(ids:number[]){
        return this.tagsReposiroty.find({where:{id:In(ids)}})
    }

    async LinkTag(dto:linkTagsDto){
        const tag = await this.tagsReposiroty.findOne({where:{id:dto.tagId}})
        const manga = await this.mangaRepository.findOne({where:{id:dto.mangaId}, relations:["tags"]})
        manga.tags.push(tag)
        return this.mangaRepository.save(manga)
    }
}
