import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { Manga } from 'src/manga/manga.entity';
import { Favorite } from 'src/favorite/favorite.entity';


@Module({
  imports: [TypeOrmModule.forFeature([User,Manga,Favorite])],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
