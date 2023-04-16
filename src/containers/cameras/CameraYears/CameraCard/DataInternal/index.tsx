import { Dispatch, SetStateAction } from 'react';
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
  setTab: Dispatch<SetStateAction<string>>;
}

const DataInternal = ({ camera, setTab }: Props) => {
  const { desc, name, maker2, name2, otherNames } = camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameLine = [name, name2data, otherNames].filter((item) => !!item).join(' / ');

  const onClickEdit = () => {
    setTab('editor');
  };

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
      <button type='button' onClick={onClickEdit} className={styles.editButton}>
        데이터 수정
      </button>
    </div>
  );
};

export default DataInternal;
