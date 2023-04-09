'use client';

import { PentaxSlr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  const { focus, viewFinder, shutter, winder } = data;

  const magnificationData =
    typeof viewFinder.magnification === 'string' ? viewFinder.magnification : `${viewFinder.magnification}x`;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
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

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>시야율</th>
            <td>{viewFinder.coverage ? `${viewFinder.coverage}%` : '?'}</td>
          </tr>
          <tr>
            <th>배율</th>
            <td>{magnificationData ?? '-'}</td>
          </tr>
          <tr>
            <th>셔터속도보기</th>
            <td>{viewFinder.seeShutterSpeed ?? '-'}</td>
          </tr>
          <tr>
            <th>조리개값보기</th>
            <td>{viewFinder.seeAperture ?? '-'}</td>
          </tr>
          <tr>
            <th>스크린교환</th>
            <td>{viewFinder.screenReplace ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>파인더교환</th>
            <td>{viewFinder.finderReplace ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>파워줌</th>
            <td>{focus?.powerZoom ?? '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
