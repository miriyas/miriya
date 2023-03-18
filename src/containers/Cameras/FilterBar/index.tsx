import { MouseEventHandler, MutableRefObject, useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { startCase } from 'lodash';

import { YEAR_INFO } from '@/constants/cameras';
import { IsotopesType } from '@/types/index.d';
import { CameraMakerTypes, CAMERA_MAKERS } from '@/types/cameras.d';
import { getNumberArr } from '@/utils';
import { smoothScrollToId } from '@/utils/visual';
import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';

import Header from './Header';
import styles from './FilterBar.module.scss';

interface Props {
  isotopes: MutableRefObject<IsotopesType>;
}

const FilterBar = (props: Props) => {
  const { isotopes } = props;
  const { gaEvent } = useGA();
  const { query, pathname } = useRouter();
  const [currentMaker, setCurrentMaker] = useState<string>(String(query.maker) ?? 'ALL');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickMaker: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const maker = e.currentTarget.title;
    Object.keys(isotopes.current).forEach((key) => {
      isotopes.current[Number(key)].arrange({
        filter: (elem) => (maker === 'ALL' ? true : elem.classList.value.includes(`maker-${maker}`)),
      });
    });
    setCurrentMaker(maker as CameraMakerTypes);
    gaEvent(CAMERA.CAMERA_MAKER_CLICK, { maker });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const year = e.currentTarget.title;
    smoothScrollToId(`camera-year-${year}`);
    setCurrentYear(Number(year));
    gaEvent(CAMERA.CAMERA_YEAR_CLICK, { year });
  };

  return (
    <div className={styles.filterBar}>
      <Header />
      <ul className={styles.categories}>
        {CAMERA_MAKERS.map((maker) => {
          return (
            <li key={maker} className={cx({ [styles.current]: maker === (currentMaker || query.maker) })}>
              <Link
                href={{
                  pathname,
                  query: {
                    ...query,
                    maker,
                  },
                }}
                onClick={onClickMaker}
                title={maker}
              >
                {startCase(maker)}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={styles.years}>
        {getNumberArr(YEAR_INFO.end - YEAR_INFO.start + 1).map((n) => {
          const year = YEAR_INFO.start + n;
          return (
            <li key={year} className={cx({ [styles.current]: year === currentYear })}>
              <button type='button' onClick={onClickYear} title={String(year)}>
                {year}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBar;
