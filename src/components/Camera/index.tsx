import Image from 'next/image';

import { CameraType } from '@/types/cameras';
import { prettyOpticsType, prettySensorSize } from './utils';
import { shrinkNumber } from '@/utils';

import styles from './Camera.module.scss';

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { display, focus, maker, name, optics, sensor, shutter, metering } = camera;

  const sensorData = [
    sensor?.name,
    prettySensorSize(sensor?.size),
    sensor?.pixelsFamiliar,
    sensor?.type,
    sensor?.engine,
  ]
    .filter((item) => !!item)
    .join(' ');
  const shutterCont = shutter?.fps ? `${shutter?.fps}fps` : '';
  const shutterSpeed = shutter?.speed ? `1/${shutter?.speed}sec` : '';
  const shutterData = [shutterCont, shutterSpeed].join(' ');
  const line1 = [sensorData, shutterData].filter((item) => !!item).join(', ');

  const isoData = sensor?.isoMin ? `ISO${sensor?.isoMin}-${sensor?.isoMax}` : '';
  const line2 = [metering, isoData].filter((item) => !!item).join(', ');

  const focusData = focus?.name ? `${focus?.name}` : ''; // CAM1000, SAFOX VII
  const pointData = focus?.points ? `${focus?.points}p` : '';
  const pointCrossData = focus?.pointsCross ? `${focus?.pointsCross}cross` : '';
  const afData = [pointData, pointCrossData].filter((item) => !!item).join('/');
  const line3 = `${[focusData, afData].filter((item) => !!item).join(' ')} AF`;

  const opticsType = prettyOpticsType(optics?.type);
  const magnification = optics?.magnification ? `x${optics?.magnification}` : '';
  const coverage = optics?.coverage ? `${optics?.coverage}%` : '';
  const opticsData = `${opticsType} ${[magnification, coverage].filter((item) => !!item).join('/')}`;
  const displaySize = display?.inches ? `${display?.inches}"` : '';
  const displayRes = display?.pixels ? shrinkNumber(display?.pixels) : '';
  const displayData = [displaySize, displayRes, 'LCD'].filter((item) => !!item).join(' ');
  const line4 = [opticsData, displayData].filter((item) => !!item).join(', ');

  const line5 = sensor?.vr ? '손떨림보정' : '';

  const imageUrl = `${process.env.NEXT_PUBLIC_CDN_URL}/cameras/${maker.toLowerCase()}/${maker.toLowerCase()}-${name
    .replace(/ /gi, '') // '모든' 공백 제거, replaceAll은 아직은 호환성 때문에 사용 안함
    .toLowerCase()}.jpg`;

  return (
    <li className={styles.camera}>
      <div className={styles.cameraImg}>
        <Image src={imageUrl} alt={name} width={140} height={140} />
      </div>
      <p className={styles.name}>
        {maker} {name}
      </p>
      <p className={styles.line1}>{line1}</p>
      <p className={styles.line2}>{line2}</p>
      <p className={styles.line3}>{line3}</p>
      <p className={styles.line4}>{line4}</p>
      <p className={styles.line5}>{line5}</p>
    </li>
  );
};

export default Camera;
