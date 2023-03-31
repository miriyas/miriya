'use client';

import { PentaxSlr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxSlr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const { viewFinder, focus, flash } = data;

  const magnificationData =
    typeof viewFinder.magnification === 'string' ? viewFinder.magnification : `${viewFinder.magnification}x`;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
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
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>플래시연동</th>
            <td>{flash.sync ?? '-'}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{flash.modes ? flash.modes.join(', ') : '-'}</td>
          </tr>
          <tr>
            <th>동조속도</th>
            <td>{flash.syncSpeed ?? '-'}</td>
          </tr>

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>내장플래시</th>
            <td>{flash.internal ?? '-'}</td>
          </tr>
          <tr>
            <th>적목감소</th>
            <td>{flash.redEye ? '지원' : '-'}</td>
          </tr>
          <tr>
            <th>AF보조광</th>
            <td>{focus?.support ? '지원' : '-'}</td>
          </tr>

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>AF센서</th>
            <td>{focus?.name ? String(focus.name) : '-'}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{focus?.sensitivity ?? '-'}</td>
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

export default DataColumn3;
