import { ImageResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

const hexEncode = (str: string) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
};

const avatar = async (uid: string) => {
  try {
    const font = await fetch(new URL(`${process.env.NEXT_PUBLIC_FE_URL}/fonts/SpoqaHanSansNeo-Medium.ttf`)).then(
      (res) => res.arrayBuffer(),
    );

    const hex = hexEncode(uid);
    const longHex = hex + hex.split('').reverse().join('');
    const hexArr = longHex.match(/.{1,6}/g)?.slice(0, 16);

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          {hexArr?.map((h, i) => {
            const key = `hex-${i}`;
            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  top: `${parseInt(`${i / 4}`, 10) * 25}%`,
                  left: `${(i % 4) * 25}%`,
                  width: '25%',
                  height: '25%',
                  backgroundColor: `#${h}`,
                }}
              />
            );
          })}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              bottom: '10%',
              left: '10%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '6px solid white',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '13%',
              right: '13%',
              bottom: '13%',
              left: '13%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '50%',
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
                fontSize: 96,
                fontWeight: 400,
                fontFamily: 'Spoqa',
                color: 'black',
                textAlign: 'center',
              }}
            >
              {uid.slice(0, 1)}
            </p>
          </div>
        </div>
      ),
      {
        width: 192,
        height: 192,
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

interface Props {
  params: {
    uid: string;
  };
}

export const GET = async (_: NextRequest, { params: { uid } }: Props) => {
  return avatar(uid);
};
