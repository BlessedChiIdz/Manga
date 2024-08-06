import { Injectable, Logger } from '@nestjs/common';
import { createUserCommentDto, createUserCommentWithParentDto } from './dto/create-user-comment.dto';
import { UserComment } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { data } from 'cheerio/lib/api/attributes';
import { Manga } from 'src/manga/manga.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(UserComment)
    private postRepository: Repository<UserComment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Manga)
    private mangaRepository: Repository<Manga>
  ){}


  async postDataNoParents(dto:createUserCommentDto){
    const user = await this.userRepository.findOne({
      where:{
        id: dto.userId
      },
    })
    const manga = await this.mangaRepository.findOne({
      where:{
        id:dto.mangaId
      }
    })
    const dataToSave:UserComment = new UserComment()
    dataToSave.text = dto.text;
    dataToSave.title = dto.title;
    dataToSave.manga.push(manga)
    if(dataToSave.user == undefined){
      dataToSave.user = [user]
    }
    else{
      dataToSave.user.push(user)
    }
    return this.postRepository.save(dataToSave)
  }

  async postDataWithParents(dto:createUserCommentWithParentDto){
    const user = await this.userRepository.findOne({
      where:{
        id: dto.userId
      },
    })
    const manga = await this.mangaRepository.findOne({
      where:{
        id:dto.mangaId
      }
    })
    const parent = await this.userRepository.findOne({
      where:{
        id:dto.parentId
      }
    })
    const dataToSave:UserComment = new UserComment()
    dataToSave.text = dto.text;
    dataToSave.title = dto.title;
    dataToSave.parentId = dto.parentId
    dataToSave.user = [user]
    dataToSave.manga = [manga]
    return this.postRepository.save(dataToSave)
  }


  async DeleteCommentById(id:number){
    return this.postRepository.delete(id)
  }
}
