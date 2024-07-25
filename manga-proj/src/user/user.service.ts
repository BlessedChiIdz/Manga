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
    

      findOneById(id:number):Promise<User>{
        return this.usersRepository.findOne({where: {id: id}})
      }

      findOneByName(name:string):Promise<User>{
        return this.usersRepository.findOne({where:{name: name}})
      }

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
          relations: ['mangas']
        })
        user.mangas.concat(manga)
        return this.usersRepository.save(user)
      } 
      async getManga(dto:{id:number}){
        return await this.mangaRepository.find({where:{id:dto.id}})
      }

      async findMangas(dto:{id:number}){  
        const qwe:User[] = await this.usersRepository.find({relations: ['mangas'],where:{id:dto.id}},);
        qwe.map((user)=>{
          console.log(user.mangas)
        })

        return qwe;
      }
      
}
