import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

import { apiBe, fakeUserAgent } from '@/services';

const processData = (rawString: string, count: number) => {
  const $ = cheerio.load(rawString, {
    xmlMode: true,
  });

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

const getRecentNews = async (count: number) => {
  return apiBe('https://www.dpreview.com/feeds/news.xml', {
    headers: {
      'User-Agent': fakeUserAgent,
    },
  })
    .then((res) => processData(res.data, count))
    .catch(() => [
      {
        title: 'error',
        link: 'No Data Found',
      },
    ]);
};

export const GET = async (request: NextRequest) => {
  const count = request.nextUrl.searchParams.get('count');
  const data = await getRecentNews(Number(count));
  return NextResponse.json(data);
};
