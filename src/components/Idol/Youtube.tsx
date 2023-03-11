import { IYoutube } from '@/types/idols.d';

interface Props {
  youtube: IYoutube;
}

const Youtube = (props: Props) => {
  const { youtube } = props;

  const youtubeUrl = `https://www.youtube.com/embed/${youtube.url}?controls=0&amp;start=${youtube.startsAt};autoplay=1;modestbranding=1;playsinline=1`;

  return <iframe title={`youtube-${youtube.url}`} width='308' height='236' src={youtubeUrl} allow='autoplay' />;
};

export default Youtube;
