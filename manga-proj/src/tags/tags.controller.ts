import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tags } from './tags.entity';
import { linkTagsDto } from './dto/link.tags.dto';

@Controller('tags')
export class TagsController {

    constructor(
        private readonly tagsService:TagsService
    ){}

    @Post()
    createTag(@Body() dto:Tags){
       return this.tagsService.createTag(dto)
    }

    @Get()
    getTagsByid(@Body() dto:{ids:number[]}){
        return this.tagsService.getTagById(dto.ids)
    }

    @Post('/link')
    linkTags(@Body() dto:linkTagsDto){
        return this.tagsService.LinkTag(dto)
    }
}
