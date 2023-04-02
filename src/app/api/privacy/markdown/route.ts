import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { remark } from 'remark';
import html from 'remark-html';

export function getPrivacy() {
  const fullPath = join(process.cwd(), 'src/containers/privacy/PRIVACY.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  return content;
}

export async function GET() {
  const data = await getPrivacy();
  const result = await remark().use(html, { sanitize: false }).process(data);
  return NextResponse.json(result.toString());
}
