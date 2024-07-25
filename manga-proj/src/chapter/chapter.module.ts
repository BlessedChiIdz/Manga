import { Module } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { ChapterController } from './chapter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './chapter.entity';
import { Manga } from 'src/manga/manga.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Chapter,Manga])],
  providers: [ChapterService],
  controllers: [ChapterController],
  
})
export class ChapterModule {}
