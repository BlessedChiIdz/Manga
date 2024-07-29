import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { jwtConstants } from '../constants/jwt.constants';

async function bootstrap() {
  require('dotenv').config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
