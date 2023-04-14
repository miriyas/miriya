import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

const getRecentNews = async (count: number) => {
  const response = await fetch('https://www.dpreview.com/feeds/news.xml');
  const html = await response.text();
  const $ = cheerio.load(html, {
    xmlMode: true,
  });

  const noData = $('item').length === 0;

  if (!response.ok || noData) {
    return {
      error: 'No Data Found',
    };
  }

  const news: { title: string; link: string }[] = [];
  $('item')
    .slice(0, count)
    .each((_i, row) => {
      news.push({
        title: $(row).find('title').text(),
        link: $(row).find('link').text(),
      });
    });
  return news;
};

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get('count');
  const data = await getRecentNews(Number(count));
  return NextResponse.json(data);
};
