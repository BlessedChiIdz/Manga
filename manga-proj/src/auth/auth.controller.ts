import { Body, Controller, Get, HttpCode, HttpStatus, Post, SetMetadata, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { getProfileByIdDto, signInDto } from './dto/auth.dto';
import { jwtConstants } from '../../constants/jwt.constants';
import { AuthGuard } from '../guard/auth.guard';
import { LoggingInterceptor } from '../interceptor/Interceptor.login';
import { Roles } from 'src/decorator/roles.decorator';
import { RoleGuard } from 'src/guard/role.guard';


@UseInterceptors(LoggingInterceptor)
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() signInDto: signInDto) {
      return this.authService.signIn(signInDto.userName, signInDto.password);
  }

    @Get('/profile') 
    @Roles(['Admin'])
    @UseGuards(AuthGuard)
    getProfile(@Body() dto:getProfileByIdDto){
      return this.authService.getProfile(dto);
    }
}
 