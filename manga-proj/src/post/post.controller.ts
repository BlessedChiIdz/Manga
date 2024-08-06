import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { createUserCommentDto, createUserCommentWithParentDto } from './dto/create-user-comment.dto';
import { RoleGuard } from 'src/guard/role.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { dot } from 'node:test/reporters';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  createUserComment(@Body() dto:createUserCommentDto){
    return this.postService.postDataNoParents(dto)
  }
  @Post('/createP')
  @Roles(['Admin'])
  @UseGuards(RoleGuard) 
  createuserCommentWithParent(@Body() dto:createUserCommentWithParentDto){
    return this.postService.postDataWithParents(dto)
  }

  @Post('/delete')
  @Roles(['Admin'])
  deleteCommentById(@Body() dto:{id:number}){
    return this.postService.DeleteCommentById(dto.id)
  }
  
}
