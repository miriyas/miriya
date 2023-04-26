import 'server-only';

import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

import { apiClientRoot } from '@/services/apiClient';
import { CrawlGeneration, CrawlIdol, CrawlIdolData } from '@/types/idols.d';

const processData = (rawString: string) => {
  const $ = cheerio.load(rawString);
  const gen1 = $('table')[5];
  const gen15 = $('table')[9];
  const gen2 = $('table')[12];
  const gen25 = $('table')[16];
  const gen3 = $('table')[17];
  const gen35 = $('table')[18];
  const gen4 = $('table')[19];

  const generations = [gen1, gen15, gen2, gen25, gen3, gen35, gen4];

  const result: CrawlIdolData = {};
  generations.forEach((table) => {
    const trs = $(table).find('tr');
    const generationName = $(trs[0]).text();
    const generation: CrawlGeneration = {};

    trs.slice(2, 7).each((_i, category) => {
      const idols: CrawlIdol[] = [];
      const td = $(category).find('td');
      const categoryName = $(td[0]).text();

      td.find('a').each((_j, idol) => {
        if ($(idol).attr('href')?.startsWith('#')) return;

        const title = $(idol).attr('title');
        const name = title === 'f(x)' ? title : title?.replace(/\((.*?)\)/, '') ?? '';
        idols.push({
          name,
          url: $(idol).attr('href') ?? '',
        });
      });
      generation[categoryName] = idols;
    });
    result[generationName] = generation;
  });

  return result;
};

const getIdolData = async () => {
  return apiClientRoot('/idolCrawl.html')
    .then((res) => processData(res.data))
    .catch(() => ({
      error: 'No Data Found',
    }));
};

export const GET = async () => {
  const data = await getIdolData();
  return NextResponse.json(data);
};
