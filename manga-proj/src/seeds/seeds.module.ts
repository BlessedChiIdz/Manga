import { Module } from '@nestjs/common';
import { SeedsController } from './seeds.controller';
import { SeedsService } from './seeds.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from 'src/manga/manga.entity';
import { Chapter } from 'src/chapter/chapter.entity';
import { Pages } from 'src/pages/pages.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga,Chapter,Pages,User])],
  controllers: [SeedsController],
  providers: [SeedsService]
})
export class SeedsModule {}
