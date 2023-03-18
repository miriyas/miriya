import Image from 'next/image';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from './utils';

import Badges from './Badges';
import DataRefs from './DataRefs';
import DataSensor from './DataSensor';
import DataViewFinder from './DataViewFinder';
import DataSiblings from './DataSiblings';
import DataShutter from './DataShutter';
import DataDisplay from './DataDisplay';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { desc, maker, name, maker2, name2, otherNames, metering, year } = camera;

  const { asPath } = useRouter();
  const [selected, setSelected] = useState(false);

  const id = cameraId(maker, name);

  useEffect(() => {
    setSelected(asPath.split('#')[1] === id);
  }, [asPath, id]);

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${id}.jpg`;

  return (
    <li className={cx(styles.camera, `grid-item-${year}`, `maker-${maker}`, { [styles.selected]: selected })} id={id}>
      <Badges camera={camera} />
      <div className={styles.cameraImg}>
        <Image src={imageUrl} alt={name} width={140} height={140} />
      </div>
      <div className={styles.top}>
        <p className={styles.name}>{nameLine}</p>
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
      <table>
        <tbody>
          <DataSensor camera={camera} />
          <DataShutter camera={camera} />
          <tr>
            <th>Metering</th>
            <td>{meteringData}</td>
          </tr>
          <DataViewFinder camera={camera} />
          <DataDisplay camera={camera} />
          <DataRefs nameLine={nameLine} camera={camera} />
          <DataSiblings camera={camera} />
        </tbody>
      </table>
    </li>
  );
};

export default Camera;
