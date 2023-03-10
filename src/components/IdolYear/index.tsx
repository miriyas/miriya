import { useEffect, useRef, useState } from 'react';
import { IIdol } from '@/types';
import Isotope from '@/libs/isotope';

import Idol from '@/components/Idol';
import styles from './IdolYear.module.scss';
import { YEARS } from '@/constants';

interface Props {
  idols: IIdol[];
  year: number;
}

const IdolYear = (props: Props) => {
  const { idols, year } = props;
  // const isotope = useRef<Isotope | null>();

  const yearDesc = YEARS.find((yearData) => yearData.year === year);

  const [isotope, setIsotope] = useState<any | null>(null);

  useEffect(() => {
    const elem = document.querySelector<HTMLElement>('.grid');
    if (!elem) return;
    const iso = new Isotope(elem, {
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });
    // // element argument can be a selector string
    // //   for an individual element
    // var iso = new Isotope('.grid', {
    //   // options
    // });
  }, []);

  return (
    <li className={styles.idolYear}>
      <p className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </p>
      {yearDesc && <p className={styles.desc}>{yearDesc.desc}</p>}

      <ul className='grid'>
        {idols.map((idol) => {
          return <Idol key={`${idol.name}-${idol.debutYear}`} idol={idol} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
