'use client';

import { PentaxDslr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>AF센서</th>
            <td>{valueOr(data?.focus?.name)}</td>
          </tr>
          <tr>
            <th>측거점</th>
            <td>{valueOr(data?.focus?.points)}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{valueOr(data?.focus?.sensitivity)}</td>
          </tr>
          <tr>
            <th>슈퍼임포즈</th>
            <td>{valueOr(data?.focus?.superImpose, '-', '있음')}</td>
          </tr>
          <tr>
            <th>초음파모터</th>
            <td>{valueOr(data?.focus?.supersonicMotor, '-', '사용가능')}</td>
          </tr>
          <tr className={styles.blank}>
            <th />
            <td />
          </tr>
          <tr>
            <th>LCD</th>
            <td>{valueOr(data?.display)}</td>
          </tr>
          <tr>
            <th>라이브뷰</th>
            <td>{valueOr(data?.liveView, '-', '가능')}</td>
          </tr>
          <tr>
            <th>라이브뷰AF</th>
            <td>{valueOr(data?.liveViewAF)}</td>
          </tr>
          <tr>
            <th>동영상</th>
            <td>{valueOr(data?.movie)}</td>
          </tr>
          <tr>
            <th>동영상형식</th>
            <td>{valueOr(data?.movieType)}</td>
          </tr>
          <tr>
            <th>이미지형식</th>
            <td>{valueOr(data?.imageType)}</td>
          </tr>
          <tr>
            <th>근거자료</th>
            <td>
              {data?.refs?.split(',').map((ref, i) => {
                const key = `${ref}-${i}`;
                return (
                  <a key={key} href={ref} target='_blank' rel='nofollow'>
                    Link {i + 1}
                  </a>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
      {data?.comment && <p className={styles.comment}>{data?.comment}</p>}
    </div>
  );
};

export default DataColumn3;
