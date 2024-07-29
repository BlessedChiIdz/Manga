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
import { PostModule } from './post/post.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'constants/jwt.constants';
import { OpenedModule } from './opened/opened.module';
require('dotenv').config();

@Module({
  imports: [
  //   ConfigModule.forRoot({
  //     envFilePath: '.env',   //для env dotenv
  //     isGlobal:true 
  //  }),
   TypeOrmModule.forRoot(dbdatasource), 
   UserModule,MangaModule, ParserModule, PagesModule, ChapterModule, AuthModule, FavoriteModule, PostModule,
   JwtModule.register({
      global: true,
      secret:jwtConstants.secret || 'Secret', //-------------------------------debelizm, vsegda ne env beretsya
      signOptions:{
        expiresIn:'24h'
      }
    }),
   OpenedModule,

  ],
}) 

export class AppModule {
  
}
