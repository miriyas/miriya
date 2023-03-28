'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import { prettyOpticsType } from '@/components/Camera/Table/utils';
import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  let screenData = data?.viewFinder.magnification2;
  if (data?.viewFinder.screenReplace) screenData = data?.viewFinder.screenReplace ? '가능' : '-';

  const magnificationData =
    typeof data?.viewFinder.magnification === 'string'
      ? data?.viewFinder.magnification
      : `${data?.viewFinder.magnification}x`;

  const focusPointsData = typeof data?.focus.points === 'string' ? data?.focus.points : `${data?.focus.points}측거점`;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>뷰파인더</th>
            <td>{prettyOpticsType(data?.viewFinder.type)}</td>
          </tr>
          <tr>
            <th>시야율</th>
            <td>{`${data?.viewFinder.coverage}%`}</td>
          </tr>
          <tr>
            <th>배율</th>
            <td>{magnificationData ?? '-'}</td>
          </tr>
          <tr>
            <th>{data?.viewFinder.magnification2 ? '' : '스크린교환'}</th>
            <td>{screenData}</td>
          </tr>
          <tr>
            <th className={styles.blank} />
            <td />
          </tr>
          <tr>
            <th>플래시연동</th>
            <td>{data?.flash.interlock ?? '-'}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{data?.flash.modes.join(', ')}</td>
          </tr>
          <tr>
            <th>동조속도</th>
            <td>{data?.flash.syncSpeed ?? '-'}</td>
          </tr>
          <tr>
            <th>내장플래시</th>
            <td>{data?.flash.internal ?? '-'}</td>
          </tr>
          <tr>
            <th>적목감소</th>
            <td>{data?.flash.redEye ? '지원' : '-'}</td>
          </tr>
          <tr>
            <th>유선릴리즈</th>
            <td>{data?.flash.release ?? '-'}</td>
          </tr>
          <tr>
            <th>무선릴리즈</th>
            <td>{data?.flash.releaseW ?? '-'}</td>
          </tr>

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>AF센서</th>
            <td>{data?.focus.name ? String(data?.focus.name) : '-'}</td>
          </tr>
          <tr>
            <th>측거점</th>
            <td>{focusPointsData}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{data?.focus.sensitivity ?? '-'}</td>
          </tr>
          <tr>
            <th>슈퍼임포즈</th>
            <td>{data?.focus.superImpose ? '있음' : '-'}</td>
          </tr>
          <tr>
            <th>초음파모터</th>
            <td>{data?.focus.supersonicMotor ? '사용가능' : '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn3;
