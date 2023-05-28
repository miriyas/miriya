import { getBlogPostsAPI } from '@/services/blog';

export const GET = async () => {
  const posts = await getBlogPostsAPI().then((res) => res.data);

  return new Response(
    `<?xml version="1.0"?>
    <rss version="2.0">
       <channel>
          <title>√ MIRiyA's AstraLog</title>
          <link>https://miriya.net/blog</link>
          <description>미리야의 블로그</description>
          <language>ko-KR</language>
          <pubDate>${new Date().toString()}</pubDate>
          <lastBuildDate>${new Date().toString()}</lastBuildDate>
          <managingEditor>miriya.lee@gmail.com</managingEditor>
          <webMaster>miriya.lee@gmail.com</webMaster>
          ${posts
            .map(
              (post) =>
                `<item>
                <title>${post.title}</title>
                <link>${`https://miriya.net/blog/${post.id}`}</link>
                <description>${post.preview
                  .replaceAll('<', '&lt;')
                  .replaceAll('>', '&gt;')
                  .replaceAll('\n', '')
                  .replaceAll('', '')}</description>
                <pubDate>${new Date(post.createdAt.seconds)}</pubDate>
                <guid>${post.id}</guid>
              </item>`,
            )
            .join('')}
       </channel>
    </rss>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
};
