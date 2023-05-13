/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';

import { getPost } from './utils';

export const alt = 'About Acme';
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

const og = async ({ params: { postId } }: Props) => {
  const postData = await getPost(postId);

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
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              fontSize: 92,
              fontWeight: 600,
              color: 'white',
              textAlign: 'center',
            }}
          >
            {postData.title}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default og;
