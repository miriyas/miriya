'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, data } = camera;

  const { body, bonus, mount, power, memory, etc, comment } = data;

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
            <th>규격</th>
            <td>
              {body.width} x {body.height} x {body.depth}mm
            </td>
          </tr>
          <tr>
            <th>재질</th>
            <td>{body.material ?? '-'}</td>
          </tr>
          <tr>
            <th>방진방습</th>
            <td>{bonus?.wr ? '지원' : '-'}</td>
          </tr>
          <tr>
            <th>손떨림보정</th>
            <td>{bonus?.sr ? bonus.sr : '-'}</td>
          </tr>

          <tr>
            <th>먼지제거</th>
            <td>{bonus?.dustRemove ? bonus.dustRemove : '-'}</td>
          </tr>

          <tr>
            <th>마운트</th>
            <td>{mount ?? '-'}</td>
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
            <th>메모리</th>
            <td>{memory ?? '-'}</td>
          </tr>
          <tr>
            <th>기타</th>
            <td>{etc ?? '-'}</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default DataColumn1;
