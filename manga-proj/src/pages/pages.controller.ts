import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagesService } from './pages.service';
import { createPagesDto } from './dto/create-pages.dto';

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
    get(){
        return this.pagesService.get()
    }

    @Get('/test')
    test(){
        return this.pagesService.test()
    }
}
