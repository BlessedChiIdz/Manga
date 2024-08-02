import { Body, Controller, Get, Post } from '@nestjs/common';
import { MangaService } from './manga.service';


@Controller('manga')
export class MangaController {
    constructor(private readonly mangaService:MangaService){}


    @Get()
    getMangaById(@Body() dto:{id:number}){
        return this.mangaService.getMangaById(dto.id)
    }
}
