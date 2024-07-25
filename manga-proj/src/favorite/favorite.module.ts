import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Manga } from 'src/manga/manga.entity';
import { Chapter } from 'src/chapter/chapter.entity';
import { Favorite } from './favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Manga,Chapter,Favorite])],
  providers: [FavoriteService],
  controllers: [FavoriteController]
}) 
export class FavoriteModule {}
