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

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>센서화소</th>
            <td>{data?.sensor.pixels}</td>
          </tr>
          <tr>
            <th>센서크기</th>
            <td>{data?.sensor.size}</td>
          </tr>
          <tr>
            <th>지원감도</th>
            <td>{data?.sensor.iso}</td>
          </tr>
          <tr>
            <th>프로세서</th>
            <td>{data?.sensor.engine ?? '-'}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>LCD</th>
            <td>{data?.display}</td>
          </tr>
          <tr>
            <th>라이브뷰</th>
            <td>{data?.liveView ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>라이브뷰AF</th>
            <td>{data?.liveViewAF ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상</th>
            <td>{data?.movie ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상형식</th>
            <td>{data?.movieType ?? '-'}</td>
          </tr>
          <tr>
            <th>이미지형식</th>
            <td>{data?.imageType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
