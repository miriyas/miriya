'use client';

/* eslint-disable react/no-danger */

const processYoutubeTags = (postId: string, raw: string) => {
  let processed = raw;
  const regex = /(?:__|[*#])|\[(.+?)]\((.+?)\)/g;
  const matchedArray = [...processed.matchAll(regex)];
  matchedArray.forEach((arr) => {
    const original = arr[0];
    const label = arr[1];
    const link = arr[2];
    const isYoutube = link.includes('youtube.com');
    if (isYoutube) {
      processed = processed.replace(
        original,
        `<a href='${link}' target='_blank' rel='nofollow' onclick='onClickYoutube(event)' data-postid='${postId}'>${label}</a>`,
      );
    } else {
      processed = processed.replace(original, `<a href='${link}' target='_blank' rel='nofollow'>${label}</a>`);
    }
  });

  return processed;
};

interface Props {
  postId: string;
  content: string;
}

const M2PostContent = ({ postId, content }: Props) => {
  return <p dangerouslySetInnerHTML={{ __html: processYoutubeTags(postId, content) }} />;
};

export default M2PostContent;
