'use client';

import { PentaxSlr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, mount, data } = camera;

  const { body, power, comment, etc, refs } = data;

  const endYearData = endYear ? `${endYear}년` : '생산중';

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>생산연도</th>
            <td>
              {startYear}년 ~ {endYearData}
            </td>
          </tr>
          <tr>
            <th>마운트</th>
            <td>{mount ?? '-'}</td>
          </tr>
          <tr>
            <th>규격</th>
            <td>
              {body.width} x {body.height} x {body.depth}mm
            </td>
          </tr>
          <tr>
            <th>무게</th>
            <td>{body.weight}g</td>
          </tr>
          <tr>
            <th>색상</th>
            <td>{body.color ?? '-'}</td>
          </tr>
          <tr>
            <th>세로그립</th>
            <td>{body.verticalGrip ?? '-'}</td>
          </tr>
          <tr>
            <th>전원</th>
            <td>{power ?? '-'}</td>
          </tr>
          <tr>
            <th>기타</th>
            <td>{etc ?? '-'}</td>
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
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default DataColumn1;
