import { Module } from '@nestjs/common';
import { MangaController } from './manga.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from './manga.entity';
import { MangaService } from './manga.service';
import { Chapter } from 'src/chapter/chapter.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Manga,Chapter])],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
