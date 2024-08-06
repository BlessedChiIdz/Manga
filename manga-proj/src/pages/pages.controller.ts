import { Body, Controller, Get, Post, StreamableFile } from '@nestjs/common';
import { PagesService } from './pages.service';
import { createPagesDto } from './dto/create-pages.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('pages')
export class PagesController {
    constructor(
        private readonly pagesService:PagesService
    ){}

    @Post()
    create(@Body() dto:createPagesDto){
     return this.pagesService.create(dto)  
    }

    @Get()
    getAll(){
        return this.pagesService.getAll()
    }

    @Get('/img')
    returnImg(){
        const img = createReadStream(join(process.cwd(),'./imgs/screenshot-1.png'));
        return new StreamableFile(img);
    }
}