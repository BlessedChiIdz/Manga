import { Controller, Post } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {

    constructor(private seedsService:SeedsService){}

    @Post()
    Seeding(){
        return this.seedsService.seeding()
    }
}
