'use client';

import { PentaxSlr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, mount, data } = camera;
  const { asa, body, etc, exposure, metering, modes, panorama, power, refs } = data;

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
            <td>{valueOr(mount)}</td>
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
            <td>{valueOr(body.color)}</td>
          </tr>
          <tr>
            <th>세로그립</th>
            <td>{valueOr(body.verticalGrip)}</td>
          </tr>
          <tr>
            <th>전원</th>
            <td>{valueOr(power)}</td>
          </tr>
          <tr>
            <th>기타</th>
            <td>{valueOr(etc)}</td>
          </tr>
          <tr>
            <th>근거자료</th>
            <td>
              {refs
                ? refs.split(',').map((ref, i) => {
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

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>촬영모드</th>
            <td>{valueOr(modes)}</td>
          </tr>
          <tr>
            <th>K/M 측광</th>
            <td>{valueOr(metering?.k)}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{valueOr(metering?.a)}</td>
          </tr>
          <tr>
            <th>측광범위</th>
            <td>{valueOr(metering?.range)}</td>
          </tr>
          <tr>
            <th>노출보정</th>
            <td>{valueOr(exposure?.range)}</td>
          </tr>
          <tr>
            <th>DX ASA</th>
            <td>{valueOr(asa?.dx)}</td>
          </tr>
          <tr>
            <th>매뉴얼 ASA</th>
            <td>{valueOr(asa?.manual)}</td>
          </tr>
          <tr>
            <th>노출고정</th>
            <td>{valueOr(exposure?.fix, '-', '가능')}</td>
          </tr>
          <tr>
            <th>파노라마포멧</th>
            <td>{valueOr(panorama, '-', '가능')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
