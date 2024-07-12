import { Body, Controller, Post } from '@nestjs/common';
import { MangaService } from './manga.service';
import { Manga } from './manga.entity';

@Controller('manga')
export class MangaController {
    constructor(private readonly userService : MangaService){}


    @Post()
    Create(@Body() manga:Manga){
        return this.userService.create(manga) 
    }
}
