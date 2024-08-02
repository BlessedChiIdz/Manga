import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from './manga.entity';
import { MangaService } from './manga.service';
import { Chapter } from 'src/chapter/chapter.entity';
import { UserComment } from 'src/post/entities/post.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Manga,Chapter,UserComment])],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
