'use client';

import cx from 'clsx';

import { PentaxSlr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  const { focus, viewFinder, shutter, winder } = data;

  const rows = [
    { label: '셔터구조', content: valueOr(shutter?.build) },
    { label: '셔터속도', content: valueOr(shutter?.speed) },
    { label: '비상셔터', content: valueOr(shutter?.emergency) },
    { label: '셀프타이머', content: valueOr(shutter?.timer) },
    { label: '유선릴리즈', content: valueOr(shutter?.release) },
    { label: '무선릴리즈', content: valueOr(shutter?.releaseW) },
    { label: '내장와인더', content: valueOr(winder?.internal) },
    { label: '외장와인더', content: valueOr(winder?.external) },
    { label: '모터드라이브', content: valueOr(winder?.motorDrive) },
    { label: 'blank', content: '' },
    { label: '시야율', content: viewFinder?.coverage ? `${viewFinder?.coverage}%` : '?' },
    { label: '배율', content: viewFinder?.magnification ? `${viewFinder?.magnification}x` : '?' },
    { label: '셔터속도보기', content: valueOr(viewFinder?.seeShutterSpeed) },
    { label: '조리개값보기', content: valueOr(viewFinder?.seeAperture) },
    { label: '스크린교환', content: valueOr(viewFinder?.screenReplace, '-', '가능') },
    { label: '파인더교환', content: valueOr(viewFinder?.finderReplace, '-', '가능') },
    { label: '파워줌', content: valueOr(focus?.powerZoom) },
  ];

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          {rows.map((row, i) => {
            const key = `${i}-${row.label}`;
            return (
              <tr key={key} className={cx({ [styles.blank]: row.label === 'blank' })}>
                <th>{row.label === 'blank' ? '' : row.label}</th>
                <td>{row.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
