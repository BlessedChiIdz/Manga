import { Parser } from "./parser.entity";
import { Repository } from "typeorm";
import { gotScraping } from "got-scraping";
import { Injectable, Search } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import axios from "axios";
import { load } from "cheerio";
import puppeteer from "puppeteer";
@Injectable()
export class ParserService {
  constructor(
    @InjectRepository(Parser)
    private parserRepository: Repository<Parser>
  ) {}
  async scrapeSite() {
    const url = "https://remanga.org/manga/one_piece/21390?page=1";

    // Запуск браузера
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Переход на страницу
    await page.goto(url, {
      waitUntil: "networkidle2",
    });

    // Выполнение скрипта на странице для извлечения src атрибутов всех изображений
    const imageSrcs = await page.evaluate(() => {
      const images = document.querySelectorAll("img");
      return Array.from(images).map((img) => img.src); 
    });

    console.log(imageSrcs);

    // Закрытие браузера
    await browser.close();

    return 1;
  }
}
