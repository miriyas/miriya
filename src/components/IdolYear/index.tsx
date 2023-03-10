import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import { IIdol } from '@/types';
import Isotope from '@/libs/isotope-layout';
import type { IsotopeOptions } from 'isotope-layout';

import Idol from '@/components/Idol';
import styles from './IdolYear.module.scss';
import { YEARS } from '@/constants';

interface Props {
  idols: IIdol[];
  year: number;
}

const IdolYear = (props: Props) => {
  const { idols, year } = props;
  const isotope = useRef<Isotope | null>();

  const yearDesc = YEARS.find((yearData) => yearData.year === year);

  const OPTIONS: IsotopeOptions = useMemo(
    () => ({
      itemSelector: `.grid-item-${year}`,
      layoutMode: 'packery',
      transitionDuration: 200,
      packery: {
        gutter: 28,
        columnWidth: 140,
        fitWidth: true,
      },
    }),
    [year],
  );

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    isotope.current = new Isotope(elem, OPTIONS);
  }, [OPTIONS, year]);

  const sort = useCallback(() => {
    setTimeout(() => {
      isotope.current?.arrange(OPTIONS);
    }, 200); // NOTE: covers transition duration
  }, [OPTIONS]);

  return (
    <li className={styles.idolYear}>
      <p className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </p>
      {yearDesc && <p className={styles.desc}>{yearDesc.desc}</p>}

      <ul className={cx(styles.idols, `grid-${year}`)}>
        {idols.map((idol) => {
          return <Idol key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
