import { FBCameraType } from '@/types/cameras.d';

import styles from './Table.module.scss';

interface Props {
  camera: FBCameraType;
}

const DataDisplay = (props: Props) => {
  const { camera } = props;
  const { display } = camera;

  if (!display) return null;
  if (!display.desc && !display.liveview && !display.trueblack && !display.tilt && !display.swivel && !display.touch)
    return null;

  return (
    <tr className={styles.dataMulti}>
      <th>화면</th>
      <td>
        <span>{display.desc}</span>
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
