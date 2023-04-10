'use client';

import { PentaxDslr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import OpticsType from '@/components/OpticsType';
import styles from '../../_common/CommonData.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>촬영모드</th>
            <td>{valueOr(data?.modes)}</td>
          </tr>
          <tr>
            <th>K/M 측광</th>
            <td>{valueOr(data?.meteringK)}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{valueOr(data?.meteringA)}</td>
          </tr>
          <tr>
            <th>측광범위</th>
            <td>{valueOr(data?.meteringRange)}</td>
          </tr>
          <tr>
            <th>노출보정</th>
            <td>{valueOr(data?.exposureRange)}</td>
          </tr>
          <tr>
            <th>셔터속도</th>
            <td>{valueOr(data?.shutter)}</td>
          </tr>
          <tr>
            <th>연사속도</th>
            <td>{valueOr(data?.continuous)}</td>
          </tr>
          <tr>
            <th>연사매수</th>
            <td>{valueOr(data?.continuousLength)}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>뷰파인더</th>
            <td>
              <OpticsType type={data?.viewFinder?.type} />
            </td>
          </tr>
          <tr>
            <th>시야율</th>
            <td>{valueOr(data?.viewFinder?.coverage)}</td>
          </tr>
          <tr>
            <th>배율</th>
            <td>{valueOr(data?.viewFinder?.magnification)}</td>
          </tr>
          <tr>
            <th>스크린교환</th>
            <td>{valueOr(data?.viewFinder?.screenReplace, '-', '가능')}</td>
          </tr>

          <tr className={styles.blank}>
            <th />
            <td />
          </tr>

          <tr>
            <th>플래시연동</th>
            <td>{valueOr(data?.flash?.interlock)}</td>
          </tr>
          <tr>
            <th>플래시작동</th>
            <td>{valueOr(data?.flash?.modes)}</td>
          </tr>
          <tr>
            <th>동조속도</th>
            <td>{valueOr(data?.flash?.syncSpeed)}</td>
          </tr>
          <tr>
            <th>내장플래시</th>
            <td>{valueOr(data?.flash?.internal)}</td>
          </tr>
          <tr>
            <th>적목감소</th>
            <td>{valueOr(data?.flash?.redEye, '-', '지원')}</td>
          </tr>
          <tr>
            <th>유선릴리즈</th>
            <td>{valueOr(data?.flash?.release)}</td>
          </tr>
          <tr>
            <th>무선릴리즈</th>
            <td>{valueOr(data?.flash?.releaseW)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
