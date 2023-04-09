'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import OpticsType from '@/components/OpticsType';
import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  if (!data) return null;

  const {
    modes,
    meteringK,
    meteringA,
    meteringRange,
    exposureRange,
    shutter,
    continuous,
    continuousLength,
    viewFinder,
    flash,
  } = data;

  let continuousSpeedData = continuous ? `${continuous}fps` : '-';
  if (typeof continuous === 'string') continuousSpeedData = continuous;

  let continuousLengthData = continuousLength ? `${continuousLength}장` : '-';
  if (typeof continuousLength === 'string') continuousLengthData = continuousLength;

  let screenData = viewFinder.magnification2;
  if (viewFinder.screenReplace) screenData = viewFinder.screenReplace ? '가능' : '-';

  const magnificationData =
    typeof viewFinder.magnification === 'string' ? viewFinder.magnification : `${viewFinder.magnification}x`;

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
            <td>{meteringK ?? '-'}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{meteringA ?? '-'}</td>
          </tr>
          <tr>
            <th>측광범위</th>
            <td>{meteringRange}</td>
          </tr>
          <tr>
            <th>노출보정</th>
            <td>{exposureRange}</td>
          </tr>
          <tr>
            <th>셔터속도</th>
            <td>{shutter}</td>
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
              <OpticsType type={viewFinder.type} />
            </td>
          </tr>
          <tr>
            <th>시야율</th>
            <td>{`${viewFinder.coverage}%`}</td>
          </tr>
          <tr>
            <th>배율</th>
            <td>{magnificationData ?? '-'}</td>
          </tr>
          <tr>
            <th>{viewFinder.magnification2 ? '' : '스크린교환'}</th>
            <td>{screenData}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>
          <tr>
            <th>플래시연동</th>
            <td>{flash.interlock ?? '-'}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{flash.modes.join(', ')}</td>
          </tr>
          <tr>
            <th>동조속도</th>
            <td>{flash.syncSpeed ?? '-'}</td>
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
            <th>유선릴리즈</th>
            <td>{flash.release ?? '-'}</td>
          </tr>
          <tr>
            <th>무선릴리즈</th>
            <td>{flash.releaseW ?? '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
