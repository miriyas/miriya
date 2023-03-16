import Image from 'next/image';

import { CameraType } from '@/types/cameras.d';
import { extractAFData, extractSensorData, prettyOpticsType } from './utils';
import { shrinkNumber } from '@/utils';

import MakerLogo from './MakerLogo';
import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { display, focus, maker, name, maker2, name2, otherNames, viewfinder, sensor, shutter, metering, refs } =
    camera;

  const name1data = `${maker} ${name}`;
  const name2data = maker2 ? `${maker2} ${name2}` : '';
  const nameOtherData = otherNames?.join(' / ');
  const nameLine = [name1data, name2data, nameOtherData].filter((item) => !!item).join(' / ');

  const sensorData = extractSensorData(sensor);

  const isoData = sensor?.isoMin ? `ISO${sensor?.isoMin}-${sensor?.isoMax}` : '';

  const meteringData = metering ? [metering.engine, metering.desc].filter((item) => !!item).join('/') : '?';

  const shutterCont = shutter?.fps ? `${shutter?.fps}fps` : '';
  const shutterSpeed = shutter?.speed ? `1/${shutter?.speed}sec` : '';
  const shutterData = [shutterCont, shutterSpeed].join(' ');

  const afData = extractAFData(focus);

  const opticsType = prettyOpticsType(viewfinder?.type);
  const magnification = viewfinder?.magnification ? `x${viewfinder?.magnification}` : '';
  const coverage = viewfinder?.coverage ? `${viewfinder?.coverage}%` : '';
  const opticsData = opticsType ? `${opticsType} ${[magnification, coverage].filter((item) => !!item).join('/')}` : '?';
  const displaySize = display?.inches ? `${display?.inches}"` : '';
  const displayRes = display?.pixels ? shrinkNumber(display?.pixels) : '';
  const displayData = displaySize ? [displaySize, displayRes, 'LCD'].filter((item) => !!item).join(' ') : 'No Display';

  const line5 = sensor?.vr ? '손떨림보정' : '';

  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${maker.toLowerCase()}-${name
    .replace(/ |\/|\*/gi, '') // '모든' 공백 제거, replaceAll은 아직은 호환성 때문에 사용 안함
    .toLowerCase()}.jpg`;

  return (
    <li className={styles.camera}>
      <MakerLogo maker={maker} />
      <div className={styles.cameraImg}>
        <Image src={imageUrl} alt={name} width={140} height={140} />
      </div>
      <p className={styles.name}>{nameLine}</p>
      <table>
        <tbody>
          <tr>
            <th>Sensor</th>
            <td>{sensorData}</td>
          </tr>
          <tr>
            <th>Engine</th>
            <td>{sensor?.engine ?? '-'}</td>
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

          <tr>
            <th>Viewfinder</th>
            <td>{opticsData}</td>
          </tr>
          <tr>
            <th>Display</th>
            <td>{displayData}</td>
          </tr>
          {refs && (
            <tr>
              <th>Ref.</th>
              <td className={styles.refs}>
                {refs.map((ref, i) => {
                  const key = `${nameLine}-${i}`;
                  return (
                    <a key={key} href={ref} target='_blank'>
                      Link {i + 1}
                    </a>
                  );
                })}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </li>
  );
};

export default Camera;
