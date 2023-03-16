import { MouseEventHandler, MutableRefObject, useState } from 'react';
import cx from 'classnames';

import { YEAR_INFO } from '@/constants/cameras';
import { IsotopesType } from '@/types/index.d';
import { CameraMakerTypes, CAMERA_MAKERS } from '@/types/cameras.d';
import { getNumberArr } from '@/utils';
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
  const [currentMaker, setCurrentMaker] = useState<CameraMakerTypes>('ALL');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const onClickMaker: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newMaker = e.currentTarget.title;
    setCurrentMaker(newMaker as CameraMakerTypes);
    Object.keys(isotopes.current).forEach((key) => {
      isotopes.current[Number(key)].arrange({
        filter: (elem) => (newMaker === 'ALL' ? true : elem.classList.value.includes(`maker-${newMaker}`)),
      });
    });
    gaEvent(CAMERA.CAMERA_MAKER_CLICK, { maker: newMaker });
  };

  const onClickYear: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newYear = e.currentTarget.title;
    setCurrentYear(Number(newYear));

    const target = document.querySelector<HTMLLIElement>(`#camera-year-${newYear}`);

    window.scrollTo({
      top: target?.offsetTop,
      behavior: 'smooth',
    });
    gaEvent(CAMERA.CAMERA_YEAR_CLICK, { year: newYear });
  };

  return (
    <div className={styles.filterBar}>
      <Header />
      <ul className={styles.categories}>
        {CAMERA_MAKERS.map((maker) => {
          return (
            <li key={maker} className={cx({ [styles.current]: maker === currentMaker })}>
              <button type='button' onClick={onClickMaker} title={maker}>
                {maker}
              </button>
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
