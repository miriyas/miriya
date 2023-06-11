'use client';

import cx from 'clsx';

import { PentaxDslrCore } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxDslrCore;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, startQuarter, endYear, endQuarter, data } = camera;

  const endYearData = endYear ? `${endYear}년 / ${endQuarter}분기` : '생산중';

  const rows = [
    { label: '생산시작', content: `${startYear}년 / ${startQuarter}분기` },
    { label: '생산종료', content: endYearData },
    { label: '마운트', content: valueOr(data?.mount) },
    { label: '규격', content: `${data?.body?.width} x ${data?.body?.height} x ${data?.body?.depth}mm` },
    { label: '무게', content: valueOr(data?.body?.weight) },
    { label: '재질', content: valueOr(data?.body?.material) },
    { label: '세로그립', content: valueOr(data?.body?.verticalGrip) },
    { label: '전원', content: valueOr(data?.power) },
    { label: '방진방습', content: valueOr(data?.bonus?.wr, '-', '지원') },
    { label: '손떨림보정', content: valueOr(data?.bonus?.sr) },
    { label: '먼지제거', content: valueOr(data?.bonus?.dustRemove) },
    { label: '메모리', content: valueOr(data?.memory) },
    { label: '기타', content: valueOr(data?.etc) },
    { label: 'blank', content: '' },
    { label: '센서화소', content: valueOr(data?.sensor?.pixels) },
    { label: '센서크기', content: valueOr(data?.sensor?.size) },
    { label: '지원감도', content: valueOr(data?.sensor?.iso) },
    { label: '프로세서', content: valueOr(data?.sensor?.engine) },
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

export default DataColumn1;
