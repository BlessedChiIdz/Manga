import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserComment } from './entities/post.entity';
import { User } from 'src/user/user.entity';
import { Manga } from 'src/manga/manga.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserComment,User,Manga])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
