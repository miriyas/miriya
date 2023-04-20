'use client';

import cx from 'clsx';

import { PentaxSlr } from '@/types/pentaxes.d';
import { valueOr } from '@/utils';

import styles from '../../_common/CommonData.module.scss';
import ExternalLink from '@/components/ExternalLink';

interface Props {
  camera: PentaxSlr;
}

const DataColumn1 = ({ camera }: Props) => {
  const { startYear, endYear, mount, data } = camera;
  const { asa, body, etc, exposure, metering, modes, panorama, power, refs } = data;

  const endYearData = endYear ? `${endYear}년` : '생산중';

  const rows = [
    { label: '생산연도', content: `${startYear}년 ~ ${endYearData}` },
    { label: '마운트', content: valueOr(mount) },
    { label: '규격', content: `${body.width} x ${body.height} x ${body.depth}mm` },
    { label: '무게', content: `${body.weight}g` },
    { label: '색상', content: valueOr(body.color) },
    { label: '세로그립', content: valueOr(body.verticalGrip) },
    { label: '전원', content: valueOr(power) },
    { label: '기타', content: valueOr(etc) },
    {
      label: '근거자료',
      content: refs
        ? refs.split(',').map((ref, i) => {
            const key = `${ref}-${i}`;
            return (
              <ExternalLink key={key} href={ref}>
                Link {i + 1}
              </ExternalLink>
            );
          })
        : '-',
    },
    { label: 'blank', content: '' },
    { label: '촬영모드', content: valueOr(modes) },
    { label: 'K/M 측광', content: valueOr(metering?.k) },
    { label: 'A/F/FA 측광', content: valueOr(metering?.a) },
    { label: '측광범위', content: valueOr(metering?.range) },
    { label: '노출보정', content: valueOr(exposure?.range) },
    { label: 'DX ASA', content: valueOr(asa?.dx) },
    { label: '매뉴얼 ASA', content: valueOr(asa?.manual) },
    { label: '노출고정', content: valueOr(exposure?.fix, '-', '가능') },
    { label: '파노라마포멧', content: valueOr(panorama, '-', '가능') },
  ];

  return (
    <div className={styles.column}>
      <table>
        <tbody>
          {rows.map((row, i) => {
            const key = `${i}-${row.label}`;
            return (
              <tr key={key} className={cx({ [styles.blank]: row.label === 'blank' })}>
                <th>{row.label === 'blank' ? '' : row.label}</th>
                <td>{row.content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataColumn1;
