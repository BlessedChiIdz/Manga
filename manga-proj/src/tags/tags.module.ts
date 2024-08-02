import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './tags.entity';
import { Manga } from 'src/manga/manga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tags,Manga])],
  controllers: [TagsController],
  providers: [TagsService]
})
export class TagsModule {}
