import { YoutubeType } from '@/types/idols.d';

import styles from './index.module.scss';

interface Props {
  youtube: YoutubeType;
}

const RightDesc = (props: Props) => {
  const { youtube } = props;

  const youtubeUrl = `https://www.youtube.com/embed/${youtube.url}?controls=0&amp;start=${youtube.startsAt};autoplay=1;modestbranding=1;playsinline=1`;

  return (
    <div className={styles.youtube}>
      <iframe title={`youtube-${youtube.url}`} width='308' height='240' src={youtubeUrl} allow='autoplay' />
    </div>
  );
};

export default RightDesc;
