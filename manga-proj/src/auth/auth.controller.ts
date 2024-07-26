import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { getProfileByIdDto, signInDto } from './dto/auth.dto';
import { jwtConstants } from '../constants/jwt.constants';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() signInDto: signInDto) {
      return this.authService.signIn(signInDto.userName, signInDto.password);
  }

    @Get('/profile')
    getProfile(@Body() dto:getProfileByIdDto){
      return this.authService.getProfile(dto);
    }
}
 