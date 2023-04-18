import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { trim } from 'lodash';

import { DigicamDB } from '@/types/cameras.d';
import apiClient from '@/services/apiClient';

const processData = (rawString: string) => {
  const $ = cheerio.load(rawString);

  const table: DigicamDB = {};
  $('.table_specs tr').each((_tri, tr) => {
    const rows: string[] = [];
    $(tr)
      .find('td')
      .each((_tdi, td) => rows.push(trim($(td).text())));
    table[rows[0].replace(':', '')] = rows[1];
  });
  return table;
};

const getCameraDataFromURL = async (url: string) => {
  return apiClient(`https://www.digicamdb.com/specs/${url}/`)
    .then((res) => processData(res.data))
    .catch(() => ({
      error: 'No Data Found',
    }));
};

interface Props {
  params: {
    id: string;
  };
}

export const GET = async (_: NextRequest, { params }: Props) => {
  const data = await getCameraDataFromURL(params.id);
  return NextResponse.json(data);
};
