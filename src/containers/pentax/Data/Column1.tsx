'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, data } = camera;

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
              {data?.body.width} x {data?.body.height} x {data?.body.depth}mm
            </td>
          </tr>
          <tr>
            <th>재질</th>
            <td>{data?.body.material ?? '-'}</td>
          </tr>
          <tr>
            <th>방진방습</th>
            <td>{data?.bonus?.wr ? '지원' : '-'}</td>
          </tr>
          <tr>
            <th>손떨림보정</th>
            <td>{data?.bonus?.sr ? data?.bonus.sr : '-'}</td>
          </tr>

          <tr>
            <th>먼지제거</th>
            <td>{data?.bonus?.dustRemove ? data?.bonus.dustRemove : '-'}</td>
          </tr>

          <tr>
            <th>마운트</th>
            <td>{data?.mount ?? '-'}</td>
          </tr>

          <tr>
            <th>세로그립</th>
            <td>{data?.body.verticalGrip ?? '-'}</td>
          </tr>

          <tr>
            <th>전원</th>
            <td>{data?.power ?? '-'}</td>
          </tr>

          <tr>
            <th>메모리</th>
            <td>{data?.memory ?? '-'}</td>
          </tr>
          <tr>
            <th>기타</th>
            <td>{data?.etc ?? '-'}</td>
          </tr>
        </tbody>
      </table>
      <p className={styles.comment}>{data?.comment}</p>
    </div>
  );
};

export default DataColumn1;
