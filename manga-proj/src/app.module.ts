import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { MangaModule } from './manga/manga.module';
import { ParserModule } from './parser/parser.module';
import { PagesModule } from './pages/pages.module';
import { ChapterModule } from './chapter/chapter.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { FavoriteModule } from './favorite/favorite.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
   }),
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
    UserModule,MangaModule, ParserModule, PagesModule, ChapterModule, AuthModule, FavoriteModule,
  ],
})

export class AppModule {

}
