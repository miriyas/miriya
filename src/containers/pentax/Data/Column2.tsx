'use client';

import { PentaxDslr } from '@/types/pentaxes.d';

import styles from './Data.module.scss';

interface Props {
  camera: PentaxDslr;
}

const DataColumn2 = ({ camera }: Props) => {
  const { data } = camera;
  const {
    sensor,
    display,
    liveView,
    liveViewAF,
    movie,
    movieType,
    imageType,
    modes,
    meteringK,
    meteringA,
    meteringRange,
    exposureRange,
    shutter,
    continuous,
    continuousExtra,
    continuousLength,
  } = data;

  let continuousSpeedData = continuous ? `${continuous}fps` : '-';
  if (typeof continuous === 'string') continuousSpeedData = continuous;

  let continuousLengthData = continuousLength ? `${continuousLength}장` : '-';
  if (typeof continuousLength === 'string') continuousLengthData = continuousLength;

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          <tr>
            <th>센서화소</th>
            <td>{sensor.pixels}</td>
          </tr>
          <tr>
            <th>센서크기</th>
            <td>{sensor.size}</td>
          </tr>
          <tr>
            <th>지원감도</th>
            <td>{sensor.iso}</td>
          </tr>
          <tr>
            <th>프로세서</th>
            <td>{sensor.engine ?? '-'}</td>
          </tr>

          <tr />

          <tr>
            <th>LCD</th>
            <td>{display}</td>
          </tr>
          <tr>
            <th>라이브뷰</th>
            <td>{liveView ? '가능' : '-'}</td>
          </tr>
          <tr>
            <th>라이브뷰AF</th>
            <td>{liveViewAF ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상</th>
            <td>{movie ?? '-'}</td>
          </tr>
          <tr>
            <th>동영상형식</th>
            <td>{movieType ?? '-'}</td>
          </tr>
          <tr>
            <th>이미지형식</th>
            <td>{imageType}</td>
          </tr>

          <tr />

          <tr>
            <th>촬영모드</th>
            <td>{modes}</td>
          </tr>
          <tr>
            <th>K/M 측광</th>
            <td>{meteringK}</td>
          </tr>
          <tr>
            <th>A/F/FA 측광</th>
            <td>{meteringA}</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn2;
