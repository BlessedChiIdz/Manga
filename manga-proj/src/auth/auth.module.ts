import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../constants/jwt.constants';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [UserModule,
    ConfigModule,
    JwtModule.register({
      secret:process.env.PRIVATE_KEY || 'Secret', //-------------------------------debelizm, vsegda ne env beretsya
      signOptions:{
        expiresIn:'24h'
      }
    })
  ],
  controllers: [AuthController], 
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
