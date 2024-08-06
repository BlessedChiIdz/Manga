import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Parser } from "./parser.entity";
import { Repository } from "typeorm";
import { delay } from "rxjs";
import puppeteer from "puppeteer";

const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

@Injectable()
export class ParserService {
  constructor(
    @InjectRepository(Parser)
    private parserRepository: Repository<Parser>
  ) {}
  async scrapeSite() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://remanga.org/manga/one_piece/21391");
    await delay(2000);
    await page.waitForSelector('div[style*="padding-top: 147.059%;"]');

    const elements = await page.$$('img[id*="chapter-image"]');

    const dir = "./screenshots";
    if (!fs.existsSync(dir)) { 
      fs.mkdirSync(dir);
    }

    for (let i = 0; i < elements.length; i++) {
      const filepath = path.join(dir, `element${i}.png`);
      await elements[i].screenshot({ path: filepath });
      console.log(`Saved screenshot of element ${i} to ${filepath}`);
    }

    await browser.close();
    return 1;
  }
}
