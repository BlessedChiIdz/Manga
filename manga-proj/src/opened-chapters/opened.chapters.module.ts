import { Module } from '@nestjs/common';
import { OpenedChaptersService } from './opened.chapters.service';
import { OpenedChaptersController } from './opened.chapters.controller';

@Module({
  providers: [OpenedChaptersService],
  controllers: [OpenedChaptersController]
})
export class OpenedChaptersModule {}
