'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, data } = camera;

  const { body, bonus, display, etc, imageType, liveView, liveViewAF, memory, mount, movie, movieType, power, sensor } =
    data;

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

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>센서화소</th>
            <td>{sensor.pixels}</td>
          </tr>
          <tr>
            <th>센서크기</th>
            <td>{sensor.size}</td>
          </tr>
          <tr>
            <th>지원감도</th>
            <td>{sensor.iso}</td>
          </tr>
          <tr>
            <th>프로세서</th>
            <td>{sensor.engine ?? '-'}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>LCD</th>
            <td>{display}</td>
          </tr>
          <tr>
            <th>라이브뷰</th>
            <td>{liveView ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>라이브뷰AF</th>
            <td>{liveViewAF ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상</th>
            <td>{movie ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상형식</th>
            <td>{movieType ?? '-'}</td>
          </tr>
          <tr>
            <th>이미지형식</th>
            <td>{imageType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
