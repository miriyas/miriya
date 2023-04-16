'use client';

import cx from 'clsx';

import { PentaxDslr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import OpticsType from '@/components/OpticsType';
import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  const rows = [
    { label: '촬영모드', content: valueOr(data?.modes) },
    { label: 'K/M 측광', content: valueOr(data?.meteringK) },
    { label: 'A/F/FA 측광', content: valueOr(data?.meteringA) },
    { label: '측광범위', content: valueOr(data?.meteringRange) },
    { label: '노출보정', content: valueOr(data?.exposureRange) },
    { label: '셔터속도', content: valueOr(data?.shutter) },
    { label: '연사속도', content: valueOr(data?.continuous) },
    { label: '연사매수', content: valueOr(data?.continuousLength) },
    { label: 'blank', content: '' },
    { label: '뷰파인더', content: <OpticsType type={data?.viewFinder?.type} /> },
    { label: '시야율', content: valueOr(data?.viewFinder?.coverage) },
    { label: '배율', content: valueOr(data?.viewFinder?.magnification) },
    { label: '스크린교환', content: valueOr(data?.viewFinder?.screenReplace, '-', '가능') },
    { label: 'blank', content: '' },
    { label: '플래시동조', content: valueOr(data?.flash?.interlock) },
    { label: '플래시모드', content: valueOr(data?.flash?.modes) },
    { label: '동조속도', content: valueOr(data?.flash?.syncSpeed) },
    { label: '내장플래시', content: valueOr(data?.flash?.internal) },
    { label: '적목감소', content: valueOr(data?.flash?.redEye, '-', '지원') },
    { label: '유선릴리즈', content: valueOr(data?.flash?.release) },
    { label: '무선릴리즈', content: valueOr(data?.flash?.releaseW) },
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
