import { CameraType } from '@/types/cameras.d';

import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
}

const DataEtc = (props: Props) => {
  const { camera } = props;
  const { rugged, dustproof } = camera;

  if (!rugged && !dustproof) return null;

  return (
    <tr className={styles.dataMulti}>
      <th>기타</th>
      <td>
        {rugged && <span className='green'>러기드</span>}
        {dustproof && <span className='red'>방진방습</span>}
      </td>
    </tr>
  );
};

export default DataEtc;
