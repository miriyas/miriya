'use client';

import { PentaxDslr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

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
            <th>마운트</th>
            <td>{valueOr(data?.mount)}</td>
          </tr>
          <tr>
            <th>규격</th>
            <td>
              {data?.body?.width} x {data?.body?.height} x {data?.body?.depth}mm
            </td>
          </tr>
          <tr>
            <th>무게</th>
            <td>{valueOr(data?.body?.weight)}</td>
          </tr>
          <tr>
            <th>재질</th>
            <td>{valueOr(data?.body?.material)}</td>
          </tr>
          <tr>
            <th>세로그립</th>
            <td>{valueOr(data?.body?.verticalGrip)}</td>
          </tr>
          <tr>
            <th>전원</th>
            <td>{valueOr(data?.power)}</td>
          </tr>
          <tr>
            <th>방진방습</th>
            <td>{valueOr(data?.bonus?.wr, '-', '지원')}</td>
          </tr>
          <tr>
            <th>손떨림보정</th>
            <td>{valueOr(data?.bonus?.sr)}</td>
          </tr>
          <tr>
            <th>먼지제거</th>
            <td>{valueOr(data?.bonus?.dustRemove)}</td>
          </tr>
          <tr>
            <th>메모리</th>
            <td>{valueOr(data?.memory)}</td>
          </tr>
          <tr>
            <th>기타</th>
            <td>{valueOr(data?.etc)}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>센서화소</th>
            <td>{valueOr(data?.sensor?.pixels)}</td>
          </tr>
          <tr>
            <th>센서크기</th>
            <td>{valueOr(data?.sensor?.size)}</td>
          </tr>
          <tr>
            <th>지원감도</th>
            <td>{valueOr(data?.sensor?.iso)}</td>
          </tr>
          <tr>
            <th>프로세서</th>
            <td>{valueOr(data?.sensor?.engine)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
