import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IlinkMangaToUser } from './dto/dto';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Get()
    findAll(){
        return this.userService.findAll()
    }

    
    @Get('/id')
    @UseGuards(AuthGuard)

    getOneById(@Body() dto:{id:number}){
        SetMetadata('role','Admin')
        return this.userService.findOneById(dto.id)
    }

    

    @Post() 
    create(@Body() user:User){
        return this.userService.create(user)
    }
    
}
