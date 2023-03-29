'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import { prettyOpticsType } from '@/components/Camera/Table/utils';
import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn3 = ({ camera }: Props) => {
  const { data } = camera;

  const { viewFinder, focus, flash, refs } = data;

  let screenData = viewFinder.magnification2;
  if (viewFinder.screenReplace) screenData = viewFinder.screenReplace ? '가능' : '-';

  const magnificationData =
    typeof viewFinder.magnification === 'string' ? viewFinder.magnification : `${viewFinder.magnification}x`;

  const focusPointsData = typeof focus.points === 'string' ? focus.points : `${focus.points}측거점`;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>뷰파인더</th>
            <td>{prettyOpticsType(viewFinder.type)}</td>
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
          <tr>
            <th className={styles.blank} />
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

          <tr>
            <th className={styles.blank} />
            <td />
          </tr>

          <tr>
            <th>AF센서</th>
            <td>{focus.name ? String(focus.name) : '-'}</td>
          </tr>
          <tr>
            <th>측거점</th>
            <td>{focusPointsData}</td>
          </tr>
          <tr>
            <th>AF감도</th>
            <td>{focus.sensitivity ?? '-'}</td>
          </tr>
          <tr>
            <th>슈퍼임포즈</th>
            <td>{focus.superImpose ? '있음' : '-'}</td>
          </tr>
          <tr>
            <th>초음파모터</th>
            <td>{focus.supersonicMotor ? '사용가능' : '-'}</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn3;
