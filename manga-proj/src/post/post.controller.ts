import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { createUserCommentDto, createUserCommentWithParentDto } from './dto/create-user-comment.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  createUserComment(@Body() dto:createUserCommentDto){
    return this.postService.postDataNoParents(dto)
  }
  @Post('/createP')
  createuserCommentWithParent(@Body() dto:createUserCommentWithParentDto){
    return this.postService.postDataWithParents(dto)
  }
}
