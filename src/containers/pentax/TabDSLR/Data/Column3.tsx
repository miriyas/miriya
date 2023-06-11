'use client';

import cx from 'clsx';

import { PentaxDslrCore } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import ExternalLink from '@/components/ExternalLink';
import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxDslrCore;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const rows = [
    { label: 'AF센서', content: valueOr(data?.focus?.name) },
    { label: '측거점', content: valueOr(data?.focus?.points) },
    { label: 'AF감도', content: valueOr(data?.focus?.sensitivity) },
    { label: '슈퍼임포즈', content: valueOr(data?.focus?.superImpose, '-', '있음') },
    { label: '초음파모터', content: valueOr(data?.focus?.supersonicMotor, '-', '사용가능') },
    { label: 'LCD', content: valueOr(data?.display) },
    { label: '라이브뷰', content: valueOr(data?.liveView, '-', '가능') },
    { label: '라이브뷰AF', content: valueOr(data?.liveViewAF) },
    { label: '동영상', content: valueOr(data?.movie) },
    { label: '동영상형식', content: valueOr(data?.movieType) },
    { label: '이미지형식', content: valueOr(data?.imageType) },
    {
      label: '근거자료',
      content: data?.refs?.split(',').map((ref, i) => {
        const key = `${ref}-${i}`;
        return (
          <ExternalLink key={key} href={ref}>
            Link {i + 1}
          </ExternalLink>
        );
      }),
    },
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
      {data?.comment && <p className={styles.comment}>{data?.comment}</p>}
    </div>
  );
};

export default DataColumn3;
