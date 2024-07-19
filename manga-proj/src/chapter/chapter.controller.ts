import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { createChapterDto } from './dto/create-chapter.dto';

@Controller('chapter')
export class ChapterController {
    constructor(private readonly chapterService:ChapterService){}

    @Post()
    createChapter(@Body() dto:createChapterDto){
        return this.chapterService.createChapter(dto)
    }
    @Get()
    getChapter(){
        return this.chapterService.getChapters()
    }
}
