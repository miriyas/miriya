'use client';

import { PentaxSlr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  const { asa, modes, metering, exposure, panorama, shutter, winder } = data;

  let panoramaData = typeof panorama === 'string' ? panorama : '가능';
  if (!panorama) panoramaData = '-';

  return (
    <div className={styles.column}>
      <table>
        <tbody>
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

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>셔터구조</th>
            <td>{shutter.build}</td>
          </tr>
          <tr>
            <th>셔터속도</th>
            <td>{shutter.speed}</td>
          </tr>
          <tr>
            <th>비상셔터</th>
            <td>{shutter.emergency ?? '-'}</td>
          </tr>
          <tr>
            <th>셀프타이머</th>
            <td>{shutter.timer}</td>
          </tr>
          <tr>
            <th>유선릴리즈</th>
            <td>{shutter.release ?? '-'}</td>
          </tr>
          <tr>
            <th>무선릴리즈</th>
            <td>{shutter.releaseW ?? '-'}</td>
          </tr>
          <tr>
            <th>내장와인더</th>
            <td>{winder.internal ?? '-'}</td>
          </tr>
          <tr>
            <th>외장와인더</th>
            <td>{winder.external ?? '-'}</td>
          </tr>
          <tr>
            <th>모터드라이브</th>
            <td>{winder.motorDrive ?? '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
