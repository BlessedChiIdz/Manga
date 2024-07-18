import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Manga } from 'src/manga/manga.entity';
import { IlinkMangaToUser } from './dto/dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Manga)
        private mangaRepository: Repository<Manga>,
      ) {}
    
      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
    
      create(user: User): Promise<User> {
        return this.usersRepository.save(user);
      }
    
      async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id); 
      }

      async linkToManga(dto:IlinkMangaToUser){
        const manga:Manga[] = await this.mangaRepository.find({where:{id:dto.mangaId}})
        const user = await this.usersRepository.findOne({
          where:{id:dto.userId},
        })
        user.mangas = manga
        return this.usersRepository.save(user)
      } 
      async getManga(id:number){
        const manga = await this.mangaRepository.find({where:{id:id}})
      }
      
}
