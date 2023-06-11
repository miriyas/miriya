'use client';

import cx from 'clsx';

import { PentaxSlrCore } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxSlrCore;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const { focus, flash, comment } = data;

  const rows = [
    { label: '플래시동조', content: valueOr(flash?.sync) },
    { label: '플래시모드', content: valueOr(flash?.modes) },
    { label: '동조속도', content: valueOr(flash?.syncSpeed) },
    { label: '내장플래시', content: valueOr(flash?.internal) },
    { label: '적목감소', content: valueOr(flash?.redEye, '-', '지원') },
    { label: 'blank', content: '' },
    { label: 'AF센서', content: valueOr(focus?.name) },
    { label: 'AF감도', content: valueOr(focus?.sensitivity) },
    { label: 'AF보조광', content: focus?.support ? '지원' : '-' },
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
      {comment && <p className={styles.comment}>{comment}</p>}
    </div>
  );
};

export default DataColumn3;
