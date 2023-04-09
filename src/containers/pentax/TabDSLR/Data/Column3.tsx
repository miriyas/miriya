'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

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
            <td>{data?.focus.name ? String(data?.focus.name) : '-'}</td>
          </tr>
          <tr>
            <th>측거점</th>
            <td>{data?.focus.points}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{data?.focus.sensitivity ?? '-'}</td>
          </tr>
          <tr>
            <th>슈퍼임포즈</th>
            <td>{data?.focus.superImpose ? '있음' : '-'}</td>
          </tr>
          <tr>
            <th>초음파모터</th>
            <td>{data?.focus.supersonicMotor ? '사용가능' : '-'}</td>
          </tr>
          <tr>
            <th>레퍼런스</th>
            <td>
              {data?.refs
                ? data?.refs?.map((ref, i) => {
                    const key = `${ref}-${i}`;
                    return (
                      <a key={key} href={ref} target='_blank' rel='nofollow'>
                        Link {i + 1}
                      </a>
                    );
                  })
                : '-'}
            </td>
          </tr>
        </tbody>
      </table>
      {data?.comment && <p className={styles.comment}>{data?.comment}</p>}
    </div>
  );
};

export default DataColumn3;
