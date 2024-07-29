import { Module } from '@nestjs/common';
import { OpenedController } from './opened.controller';
import { OpenedService } from './opened.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manga } from 'src/manga/manga.entity';
import { User } from 'src/user/user.entity';
import { Opened } from './opened.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manga,User,Opened])],
  controllers: [OpenedController],
  providers: [OpenedService]
})
export class OpenedModule {}
