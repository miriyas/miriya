'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const { comment, focus, refs } = data;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>AF센서</th>
            <td>{focus.name ? String(focus.name) : '-'}</td>
          </tr>
          <tr>
            <th>측거점</th>
            <td>{focus.points}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{focus.sensitivity ?? '-'}</td>
          </tr>
          <tr>
            <th>슈퍼임포즈</th>
            <td>{focus.superImpose ? '있음' : '-'}</td>
          </tr>
          <tr>
            <th>초음파모터</th>
            <td>{focus.supersonicMotor ? '사용가능' : '-'}</td>
          </tr>
          <tr>
            <th>레퍼런스</th>
            <td>
              {refs
                ? refs?.map((ref, i) => {
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
      {comment && <p className={styles.comment}>{comment}</p>}
    </div>
  );
};

export default DataColumn3;
