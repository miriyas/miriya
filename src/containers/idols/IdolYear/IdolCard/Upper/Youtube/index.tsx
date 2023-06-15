import styles from './index.module.scss';

interface Props {
  youtubeUrl?: string;
  youtubeStartsAt?: number;
}

const RightDesc = ({ youtubeUrl, youtubeStartsAt }: Props) => {
  const url = `https://www.youtube-nocookie.com/embed/${youtubeUrl}?controls=0&amp;start=${youtubeStartsAt};autoplay=1;modestbranding=1;playsinline=1`;

  return (
    <div className={styles.youtube}>
      <iframe title={`youtube-${youtubeUrl}`} width='308' height='220' src={url} allow='autoplay' />
    </div>
  );
};

export default RightDesc;
