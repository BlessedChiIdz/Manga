import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { ParserModule } from './parser/parser.module';
import { PagesModule } from './pages/pages.module';
import { ChapterModule } from './chapter/chapter.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { FavoriteModule } from './favorite/favorite.module';
import { ConfigModule } from '@nestjs/config';
import { dbdatasource } from './config/data.source';
@Module({
  imports: [
  //   ConfigModule.forRoot({
  //     envFilePath: '.env',   //для env dotenv
  //     isGlobal:true 
  //  }),     
   TypeOrmModule.forRoot(dbdatasource), 
   UserModule,MangaModule, ParserModule, PagesModule, ChapterModule, AuthModule, FavoriteModule,
  ],
}) 

export class AppModule {
  
}
