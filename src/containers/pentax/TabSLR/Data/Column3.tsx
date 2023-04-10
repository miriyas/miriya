'use client';

import { PentaxSlr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const { focus, flash, comment } = data;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>플래시연동</th>
            <td>{valueOr(flash?.sync)}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{valueOr(flash?.modes)}</td>
          </tr>
          <tr>
            <th>동조속도</th>
            <td>{valueOr(flash?.syncSpeed)}</td>
          </tr>
          <tr>
            <th>내장플래시</th>
            <td>{valueOr(flash?.internal)}</td>
          </tr>
          <tr>
            <th>적목감소</th>
            <td>{valueOr(flash?.redEye, '-', '지원')}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>AF센서</th>
            <td>{valueOr(focus?.name)}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{valueOr(focus?.sensitivity)}</td>
          </tr>
          <tr>
            <th>AF보조광</th>
            <td>{focus?.support ? '지원' : '-'}</td>
          </tr>
        </tbody>
      </table>
      {comment && <p className={styles.comment}>{comment}</p>}
    </div>
  );
};

export default DataColumn3;
