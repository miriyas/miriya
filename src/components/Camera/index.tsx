import Image from 'next/image';
import cx from 'classnames';

import { CameraType } from '@/types/cameras.d';
import { extractAFData, extractDisplayData } from './utils';

import Refs from './Refs';
import MakerLogo from './MakerLogo';
import ShakeReduction from './ShakeReduction';
import styles from './Camera.module.scss';
import DataViewFinder from '@/components/Camera/DataViewFinder';
import DataSensor from '@/components/Camera/DataSensor';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { display, focus, maker, name, maker2, name2, otherNames, viewfinder, sensor, shutter, metering, refs, year } =
    camera;

  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const isoData = sensor?.isoMin ? `ISO${sensor?.isoMin}-${sensor?.isoMax}` : '';

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  const shutterCont = shutter?.fps ? `${shutter?.fps}fps` : '';
  const shutterSpeed = shutter?.speed ? `1/${shutter?.speed}sec` : '';
  const shutterData = [shutterCont, shutterSpeed].join(' ');

  const afData = extractAFData(focus);

  const displayData = extractDisplayData(display);

  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${maker.toLowerCase()}-${name
    .replace(/ |\/|\*/gi, '') // '모든' 공백 제거, replaceAll은 아직은 호환성 때문에 사용 안함
    .toLowerCase()}.jpg`;

  return (
    <li className={cx(styles.camera, `grid-item-${year}`, `maker-${maker}`)}>
      <MakerLogo maker={maker} />
      <ShakeReduction maker={maker} sensor={sensor} />
      <div className={styles.cameraImg}>
        <Image src={imageUrl} alt={name} width={140} height={140} />
      </div>
      <p className={styles.name}>{nameLine}</p>
      <table>
        <tbody>
          <DataSensor sensor={sensor} />
          <tr>
            <th>Engine</th>
            <td>{sensor?.engine ?? '?'}</td>
          </tr>
          <tr>
            <th>ISO</th>
            <td>{isoData}</td>
          </tr>
          <tr>
            <th>Shutter</th>
            <td>{shutterData}</td>
          </tr>
          <tr>
            <th>AF</th>
            <td>{afData}</td>
          </tr>
          <tr>
            <th>Metering</th>
            <td>{meteringData}</td>
          </tr>
          <DataViewFinder viewfinder={viewfinder} />
          <tr>
            <th>Display</th>
            <td>{displayData}</td>
          </tr>
          <Refs nameLine={nameLine} refs={refs} />
        </tbody>
      </table>
    </li>
  );
};

export default Camera;
