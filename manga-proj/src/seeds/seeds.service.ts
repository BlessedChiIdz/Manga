import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Chapter } from "src/chapter/chapter.entity";
import { Manga } from "src/manga/manga.entity";
import { OpenedManga } from "src/opened/opened.manga.entity";
import { Pages } from "src/pages/pages.entity";
import { roleEnum } from "src/user/enum/role.enum";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(Manga)
    private mangaRepository: Repository<Manga>,
    @InjectRepository(Chapter)
    private chapterRepository: Repository<Chapter>,
    @InjectRepository(Pages)
    private pagesRepository: Repository<Pages>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seeding() {
    const mangaData: Partial<Manga>[] = [
      { id: 1, name: "OnePiece" },
      { id: 2, name: "Naruto" },
      { id: 3, name: "Bleach" },
    ];
    const mangas = await this.mangaRepository.save(mangaData);

    const chaptersData: Partial<Chapter>[] = [
      { id: 1, chapterNumber: 1, chapterName: "freeWe", manga: mangas[0] },
      { id: 2, chapterNumber: 2, chapterName: "Nigga", manga: mangas[0] },
      { id: 3, chapterNumber: 3, chapterName: "WEWE", manga: mangas[0] },
      { id: 4, chapterNumber: 4, chapterName: "Saske", manga: mangas[1] },
      { id: 5, chapterNumber: 5, chapterName: "Loh", manga: mangas[1] },
    ];
    const chapters = await this.chapterRepository.save(chaptersData);

    const pagesData: Partial<Pages>[] = [
      { id: 1, chapter: chapters[0], path: "./imgs/piece1" },
      { id: 2, chapter: chapters[0], path: "./imgs/piece2" },
      { id: 3, chapter: chapters[0], path: "./imgs/piece3" },
      { id: 4, chapter: chapters[1], path: "./imgs/naruto1" },
      { id: 5, chapter: chapters[1], path: "./imgs/naruto2" },
    ];

    const pages = await this.pagesRepository.save(pagesData);


    const usersData:Partial<User>[] = [
        {id:1, name:'Kirill', Role:roleEnum.admin, mail:'qwe@mail.ru',password:'postgres'},
        {id:2, name:'WANE', Role:roleEnum.user, mail:'wane@mail.ru',password:'wane'}
    ]
    const users = await this.userRepository.save(usersData)

    const openedData: Partial<OpenedManga>[] = [
        {}
    ];
    return [mangas, chapters, pages, users];
  }
}
