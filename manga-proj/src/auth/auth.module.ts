import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './logger.middleware';



@Module({
  imports: [UserModule,
    ConfigModule,
  ],
  controllers: [AuthController],  
  providers: [AuthService],
})
export class AuthModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('auth')
  }
 }
