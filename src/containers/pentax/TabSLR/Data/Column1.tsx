'use client';

import { PentaxSlr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, mount, data } = camera;
  const { asa, body, etc, exposure, metering, modes, panorama, power, refs } = data;

  let panoramaData = typeof panorama === 'string' ? panorama : '가능';
  if (!panorama) panoramaData = '-';

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
            <td>{mount}</td>
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

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>촬영모드</th>
            <td>{modes}</td>
          </tr>
          <tr>
            <th>K/M 측광</th>
            <td>{metering.k ?? '-'}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{metering.a ?? '-'}</td>
          </tr>
          <tr>
            <th>측광범위</th>
            <td>{metering.range}</td>
          </tr>
          <tr>
            <th>노출보정</th>
            <td>{exposure?.range ?? '-'}</td>
          </tr>
          <tr>
            <th>DX ASA</th>
            <td>{asa.dx ?? '-'}</td>
          </tr>
          <tr>
            <th>매뉴얼 ASA</th>
            <td>{asa.manual ?? '-'}</td>
          </tr>
          <tr>
            <th>노출고정</th>
            <td>{exposure?.fix ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>파노라마포멧</th>
            <td>{panoramaData}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
