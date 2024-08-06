import { Body, Controller, Get, Post } from "@nestjs/common";
import { ChapterService } from "./chapter.service";
import { createChapterDto } from "./dto/create-chapter.dto";

@Controller("chapter")
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  @Post()
  createChapter(@Body() dto: createChapterDto) {
    return this.chapterService.createChapter(dto);
  }

  @Get('/id')
  getMangaChapters(@Body() dto: { id: number }) {
    return this.chapterService.getMangaChapters(dto.id);
  }

  @Get("/nigga")
  getChapter() {
    return this.chapterService.getChapters();
  }
}
