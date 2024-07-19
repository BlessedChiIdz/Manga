import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pages } from './pages.entity';
import { Chapter } from 'src/chapter/chapter.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pages,Chapter])],
  providers: [PagesService],
  controllers: [PagesController]
})
export class PagesModule {}
