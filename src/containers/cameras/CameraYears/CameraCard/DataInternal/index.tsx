import cx from 'clsx';

import { CameraType } from '@/types/cameras.d';

import Badges from './Badges';
import DataImage from './Image';
import Table from './Table';
import Siblings from './Siblings';
import commonStyles from '../index.module.scss';
import styles from './index.module.scss';

interface Props {
  camera: CameraType;
}

const DataInternal = (props: Props) => {
  const { camera } = props;
  const { desc, name, maker2, name2, otherNames } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameLine = [name, name2data, otherNames].filter((item) => !!item).join(' / ');

  return (
    <div className={cx(commonStyles.dataSet, commonStyles.dataInternal, styles.dataInternal)}>
      <Badges camera={camera} />
      <DataImage camera={camera} />
      <div className={styles.top}>
        <p className={styles.name}>{nameLine}</p>
        {desc && <p className={styles.desc}>{desc}</p>}
        <Siblings camera={camera} />
      </div>
      <Table camera={camera} />
    </div>
  );
};

export default DataInternal;
