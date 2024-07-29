import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenedService } from './opened.service';
import { createOpenedDto } from './dto/create.dto';

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
}
