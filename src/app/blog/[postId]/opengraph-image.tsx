/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

import { getPost } from './utils';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const runtime = 'edge';

interface Props {
  params: {
    postId: string;
  };
}

// https://og-playground.vercel.app/
// https://github.com/vercel/satori#documentation
// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#load-files-in-node.js-runtime
const og = async ({ params: { postId } }: Props) => {
  try {
    const postData = await getPost(postId);

    // woff2는 지원 안됨, ttf/otf가 컴파일이 빠르다.
    const font = await fetch(new URL(`${process.env.NEXT_PUBLIC_LOCAL_FETCH_URL}/fonts/SpoqaHanSansNeo-Bold.ttf`)).then(
      (res) => res.arrayBuffer(),
    );

    // zIndex 지원 안됨, 나중에 올라오는게 위에 올라간다.
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={postData.hero ?? 'https://miriya.sgp1.cdn.digitaloceanspaces.com/mycar/hL0XAW5GmEpx7Vn5czGs.jpg'}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: '100%',
              objectFit: 'cover',
            }}
            alt=''
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0 0 0, 0.3)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: '14px',
              bottom: 0,
              left: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                padding: '14px 32px',
                fontSize: 92,
                fontWeight: 500,
                fontFamily: 'Spoqa',
                color: 'white',
                textAlign: 'center',
                backgroundColor: 'rgba(0 0 0, 0.3)',
              }}
            >
              {postData.title}
            </p>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: 'Spoqa',
            data: font,
            weight: 700,
            style: 'normal',
          },
        ],
      },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
};

export default og;
