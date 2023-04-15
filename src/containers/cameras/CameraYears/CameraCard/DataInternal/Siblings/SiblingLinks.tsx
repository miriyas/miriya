import { cameraId } from '@/utils/cameras';

import SiblingLink from './SiblingLink';
import styles from '../index.module.scss';

interface Props {
  maker: string;
  cameras: string;
  deco: string;
}

const SiblingLinks = (props: Props) => {
  const { maker, cameras, deco } = props;

  const cameraNames = cameras.split(',');

  if (cameraNames.length === 1) {
    const hash = cameraId(maker, cameraNames[0]);
    return (
      <SiblingLink key={hash} hash={hash}>
        <span className={styles.deco}>{deco}</span>
        <span className={styles.name}>{cameraNames[0]}</span>
      </SiblingLink>
    );
  }

  return (
    <>
      {cameraNames.map((name, i) => {
        const hash = cameraId(maker, name);
        return (
          <SiblingLink key={hash} hash={hash}>
            {i > 0 && <span className={styles.deco}>{deco}</span>}
            <span className={styles.name}>
              {name}
              {i === 0 && ', '}
            </span>
          </SiblingLink>
        );
      })}
    </>
  );
};

export default SiblingLinks;
