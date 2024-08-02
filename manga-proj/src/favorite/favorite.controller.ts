import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { createOpenedDto } from 'src/opened/dto/create.dto';
import { createFavoriteDto } from './dto/createFavoriteDto';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService:FavoriteService){}

    @Post()
    create(@Body() dto:createFavoriteDto){
        return this.favoriteService.create(dto) 
    }

    @Get()
    returnAll(){
        return this.favoriteService.get()
    }

    @Get('user/:id')
    returnByUser(@Param('id') id:number){
        return this.favoriteService.getByUserId(id) 
    }
}
