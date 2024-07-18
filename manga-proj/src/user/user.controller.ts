import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IlinkMangaToUser } from './dto/dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Get()
    findAll(){
        return this.userService.findAll()
    }
    @Get()
    findMangas(){
        
    }

    @Post()
    create(@Body() user:User){
        return this.userService.create(user)
    }
    @Post('/link')
    linkToManga(@Body() dto:IlinkMangaToUser){
        return this.userService.linkToManga(dto)
    }
}
