import * as cheerio from 'cheerio';
import { trim } from 'lodash';

export const getCameraDataFromURL = async (url: string) => {
  const fullUrl = `https://www.digicamdb.com/specs/${url}/`;
  const response = await fetch(fullUrl);
  const html = await response.text();
  const $ = cheerio.load(html);

  if (!response.ok) {
    return {
      error: 'No Data Found',
    };
  }

  const table: Record<string, string> = {};
  $('.table_specs tr').each((_tri, tr) => {
    const rows: string[] = [];
    $(tr)
      .find('td')
      .each((_tdi, td) => rows.push(trim($(td).text())));
    table[rows[0].replace(':', '')] = rows[1];
  });
  return table;
};
