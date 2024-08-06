import { Module } from '@nestjs/common';
import { OpenedController } from './opened.manga.controller';
import { OpenedService } from './opened.manga.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from 'src/manga/manga.entity';
import { User } from 'src/user/user.entity';
import { OpenedManga } from './opened.manga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga,User,OpenedManga])],
  controllers: [OpenedController],
  providers: [OpenedService]
})
export class OpenedModule {}
