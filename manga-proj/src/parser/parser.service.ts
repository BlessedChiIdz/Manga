import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Parser } from "./parser.entity";
import { Repository } from "typeorm";
import { delay } from "rxjs";

const puppeteer = require("puppeteer");
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
    await page.goto("https://remanga.org/manga/one_piece/21390?page=1");
    await delay(1000);
    // Wait for images or elements to load
    await page.waitForSelector('img, div[style*="padding-top: 147.059%;"]'); // Adjust selector based on your needs
    // Select elements you want to screenshot
    const elements = await page.$$('img'); // Adjust selector based on your needs

    // Create a directory to save the screenshots
    const dir = "./screenshots";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // Take screenshots of all selected elements
    for (let i = 0; i < elements.length; i++) {
      const filepath = path.join(dir, `element${i}.png`);
      await elements[i].screenshot({ path: filepath });
      console.log(`Saved screenshot of element ${i} to ${filepath}`);
    }

    await browser.close();
    return 1;
  }
}
