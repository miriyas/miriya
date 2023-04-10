'use client';

import { PentaxSlr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  const { focus, viewFinder, shutter, winder } = data;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>셔터구조</th>
            <td>{valueOr(shutter?.build)}</td>
          </tr>
          <tr>
            <th>셔터속도</th>
            <td>{valueOr(shutter?.speed)}</td>
          </tr>
          <tr>
            <th>비상셔터</th>
            <td>{valueOr(shutter?.emergency)}</td>
          </tr>
          <tr>
            <th>셀프타이머</th>
            <td>{valueOr(shutter?.timer)}</td>
          </tr>
          <tr>
            <th>유선릴리즈</th>
            <td>{valueOr(shutter?.release)}</td>
          </tr>
          <tr>
            <th>무선릴리즈</th>
            <td>{valueOr(shutter?.releaseW)}</td>
          </tr>
          <tr>
            <th>내장와인더</th>
            <td>{valueOr(winder?.internal)}</td>
          </tr>
          <tr>
            <th>외장와인더</th>
            <td>{valueOr(winder?.external)}</td>
          </tr>
          <tr>
            <th>모터드라이브</th>
            <td>{valueOr(winder?.motorDrive)}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>시야율</th>
            <td>{viewFinder?.coverage ? `${viewFinder?.coverage}%` : '?'}</td>
          </tr>
          <tr>
            <th>배율</th>
            <td>{viewFinder?.magnification ? `${viewFinder?.magnification}x` : '?'}</td>
          </tr>
          <tr>
            <th>셔터속도보기</th>
            <td>{valueOr(viewFinder?.seeShutterSpeed)}</td>
          </tr>
          <tr>
            <th>조리개값보기</th>
            <td>{valueOr(viewFinder?.seeAperture)}</td>
          </tr>
          <tr>
            <th>스크린교환</th>
            <td>{valueOr(viewFinder?.screenReplace, '-', '가능')}</td>
          </tr>
          <tr>
            <th>파인더교환</th>
            <td>{valueOr(viewFinder?.finderReplace, '-', '가능')}</td>
          </tr>
          <tr>
            <th>파워줌</th>
            <td>{valueOr(focus?.powerZoom)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
