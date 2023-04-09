'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import OpticsType from '@/components/OpticsType';
import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  let continuousSpeedData = data?.continuous ? `${data?.continuous}fps` : '-';
  if (typeof data?.continuous === 'string') continuousSpeedData = data?.continuous;

  let continuousLengthData = data?.continuousLength ? `${data?.continuousLength}장` : '-';
  if (typeof data?.continuousLength === 'string') continuousLengthData = data?.continuousLength;

  const screenData = data?.viewFinder.screenReplace ? '가능' : '-';

  const magnificationData =
    typeof data?.viewFinder.magnification === 'string'
      ? data?.viewFinder.magnification
      : `${data?.viewFinder.magnification}x`;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>촬영모드</th>
            <td>{data?.modes}</td>
          </tr>
          <tr>
            <th>K/M 측광</th>
            <td>{data?.meteringK ?? '-'}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{data?.meteringA ?? '-'}</td>
          </tr>
          <tr>
            <th>측광범위</th>
            <td>{data?.meteringRange}</td>
          </tr>
          <tr>
            <th>노출보정</th>
            <td>{data?.exposureRange}</td>
          </tr>
          <tr>
            <th>셔터속도</th>
            <td>{data?.shutter}</td>
          </tr>
          <tr>
            <th>연사속도</th>
            <td>{continuousSpeedData}</td>
          </tr>
          <tr>
            <th>연사매수</th>
            <td>{continuousLengthData}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>뷰파인더</th>
            <td>
              <OpticsType type={data?.viewFinder.type} />
            </td>
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
            <th>스크린교환</th>
            <td>{screenData}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>
          <tr>
            <th>플래시연동</th>
            <td>{data?.flash.interlock ?? '-'}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{data?.flash.modes ?? '-'}</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
