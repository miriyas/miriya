import { CameraType } from '@/types/cameras.d';

import styles from './Table.module.scss';

interface Props {
  camera: CameraType;
}

const DataDisplay = (props: Props) => {
  const { camera } = props;
  const { display } = camera;

  if (!display) return null;

  return (
    <tr className={styles.dataDisplay}>
      <th>화면</th>
      <td>
        {display.desc}
        {display.liveview && <span className='green'>LiveView</span>}
        {display.trueblack && <span className='red'>TB</span>}
        {display.tilt && <span className='indigo'>Tilt</span>}
        {display.swivel && <span className='orange'>Swivel</span>}
        {display.touch && <span className='pink'>Touch</span>}
      </td>
    </tr>
  );
};

export default DataDisplay;
