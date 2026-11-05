import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { remark } from 'remark';
import html from 'remark-html';

const getPrivacy = () => {
  const fullPath = join(process.cwd(), 'src/app/privacy/PRIVACY.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  return content;
};

// Build once (as in Next 13). The markdown file is in src/, which is not in the runtime image.
export const dynamic = 'force-static';

export const GET = async () => {
  const data = await getPrivacy();
  const result = await remark().use(html, { sanitize: false }).process(data);
  return NextResponse.json(result.toString());
};
