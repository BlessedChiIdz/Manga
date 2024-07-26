import { Injectable, Logger } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ){}
  async postData(): Promise<void>{
    const postData: Partial<Post>[] = [
      { title: 'Post 1', content: 'Content for Post 1', status: "zxc" },
      { title: 'Post 2', content: 'Content for Post 2', status: "zxc" },
      { title: 'Post 3', content: 'Content for Post 3', status: "zxc" },
      { title: 'Post 4', content: 'Content for Post 4', status: "zxc" },
    ];

    try {
      await this.postRepository.save(postData);
      Logger.log('Data seeded successfully');
    } catch (error) {
      Logger.error(`Error seeding data: ${error.message}`, error.stack);
    }
  }
}
