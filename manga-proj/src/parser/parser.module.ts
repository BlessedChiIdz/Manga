import { Module } from '@nestjs/common';
import { Parser } from './parser.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';

@Module({
    imports: [TypeOrmModule.forFeature([Parser])],
    providers: [ParserService],
    controllers: [ParserController],
})
export class ParserModule {
}
