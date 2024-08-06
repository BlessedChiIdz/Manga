import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Manga } from 'src/manga/manga.entity';
import { linkMangaToUserDto } from './dto/dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
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
}
