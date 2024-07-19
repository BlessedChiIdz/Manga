import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserController } from './parser/parser.controller';
import { ParserService } from './parser/parser.service';
import { ParserModule } from './parser/parser.module';
import { PagesModule } from './pages/pages.module';
import { ChapterModule } from './chapter/chapter.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: 'postgres',
      database: 'Test',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UserModule,MangaModule, ParserModule, PagesModule, ChapterModule, 
  ],
  controllers: [ParserController],
  providers: [ParserService],
})

export class AppModule {

}
