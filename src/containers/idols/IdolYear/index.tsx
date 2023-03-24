import { MutableRefObject, useCallback, useEffect, useMemo } from 'react';
import cx from 'clsx';

import type { IsotopeOptions } from 'isotope-layout';
import { YEARS } from '@/constants/idols';
import { IsotopesType } from '@/types';
import { IdolType } from '@/types/idols.d';
import Isotope from '@/libs/isotope-layout';
import { useResponsive } from '@/hooks/useResponsive';
import Idol from '@/containers/idols/Idol';

import styles from './IdolYear.module.scss';

interface Props {
  idols: IdolType[];
  year: number;
  isotopes: MutableRefObject<IsotopesType>;
}

const IdolYear = (props: Props) => {
  const { idols, isotopes, year } = props;

  const { isMobile } = useResponsive();

  const OPTIONS: IsotopeOptions = useMemo(
    () => ({
      itemSelector: `.grid-item-${year}`,
      layoutMode: 'packery',
      transitionDuration: 200,
      percentPosition: true,
      packery: {
        gutter: 28,
        columnWidth: isMobile ? 132 : 140,
      },
    }),
    [year, isMobile],
  );

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>(`.grid-${year}`);
    if (!elem) return;

    isotopes.current[year] = new Isotope(elem, OPTIONS);
  }, [OPTIONS, isotopes, year]);

  const sort = useCallback(() => {
    setTimeout(() => {
      isotopes.current[year].arrange(OPTIONS);
    }, 100); // NOTE: covers transition duration
  }, [OPTIONS, isotopes, year]);

  const yearDesc = YEARS.find((yearData) => yearData.year === year);

  return (
    <li id={`idol-year-${year}`} className={styles.idolYear}>
      <div className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </div>
      {yearDesc && <div className={styles.desc}>{yearDesc.desc}</div>}

      <ul className={cx(styles.idols, `grid-${year}`)}>
        {idols.map((idol) => {
          return <Idol key={`${idol.name}-${idol.debutYear}`} idol={idol} sort={sort} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
