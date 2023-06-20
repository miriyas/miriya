import { useEffect, useState } from 'react';
import cx from 'clsx';

import styles from './Pannel.module.scss';

interface Props {
  postId: string;
}

const PannelYoutube = ({ postId }: Props) => {
  const [youtubeId, setYoutubeId] = useState<string | undefined>(undefined);

  const openYoutubePannel = (e: any) => {
    if (e.detail.postid !== postId) return;
    if (youtubeId) {
      setYoutubeId(undefined);
      return;
    }

    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = e.detail.link.match(regExp);
    const id = match && match[7].length === 11 ? match[7] : null;
    if (!id) return;
    setYoutubeId(id);
  };

  useEffect(() => {
    window.addEventListener('openYoutubePannel', openYoutubePannel);
    return () => {
      window.removeEventListener('openYoutubePannel', openYoutubePannel);
    };
  });

  if (!youtubeId) return null;

  return (
    <div className={cx(styles.pannel, styles.youtubePannel)}>
      <iframe
        title={`youtube-${youtubeId}`}
        width={560}
        height={315}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=0&amp;autoplay=1;modestbranding=1;playsinline=1`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      />
    </div>
  );
};

export default PannelYoutube;
