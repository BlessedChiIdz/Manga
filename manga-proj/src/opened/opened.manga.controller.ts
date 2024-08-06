import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { OpenedService } from './opened.manga.service';
import { createOpenedDto } from './dto/create.dto';
import { retry } from 'rxjs';

@Controller('opened')
export class OpenedController {
    constructor(private openedService:OpenedService){}
    
    @Post()
    create(@Body() dto:createOpenedDto){
        return this.openedService.create(dto)
    }

    @Get()
    returnAll(){
        return this.openedService.get()
    }

    @Get('user/:id')
    returnByUser(@Param('id') id:number){
        return this.openedService.getByUserId(id) 
    }
}
