import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { getProfileByIdDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService:JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<{ access_tocken:string }> {
        const user = await this.usersService.findOneByName(username)
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = {sub: user.id, userName:user.name}
        return {
            access_tocken: await this.jwtService.signAsync(payload)
        }; 
      }

    async getProfile(dto:getProfileByIdDto){
      const user = await this.usersService.findOneById(dto.id)
      return user
    }
}
