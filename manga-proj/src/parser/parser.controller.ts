import { Controller, Get } from '@nestjs/common';
import { ParserService } from './parser.service';

@Controller('parser')
export class ParserController {
    constructor(private readonly parserService:ParserService){}
    @Get()
    test(){
        return this.parserService.scrapeSite()
    }
}
