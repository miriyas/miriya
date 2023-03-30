import { CameraType } from '@/types/cameras.d';

import Badges from './Badges';
import DataImage from './Image';
import Table from './Table';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Data = (props: Props) => {
  const { camera } = props;
  const { desc, name, maker2, name2, otherNames } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  return (
    <div className={styles.dataInternal}>
      <Badges camera={camera} />
      <DataImage camera={camera} />
      <div className={styles.top}>
        <p className={styles.name}>{nameLine}</p>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
      <Table camera={camera} />
    </div>
  );
};

export default Data;
