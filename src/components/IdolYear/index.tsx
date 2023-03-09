import { IIdol } from '@/types';

import Idol from '@/components/Idol';
import styles from './IdolYear.module.scss';
import { YEARS } from '@/constants';

interface Props {
  idols: IIdol[];
  year: number;
}

const IdolYear = (props: Props) => {
  const { idols, year } = props;

  const yearDesc = YEARS.find((yearData) => yearData.year === year);

  return (
    <li className={styles.idolYear}>
      <p className={styles.title} title={`${year}년에 데뷔한 아이돌 수는 ${idols.length}개`}>
        {year}
      </p>
      {yearDesc && <p className={styles.desc}>{yearDesc.desc}</p>}

      <ul>
        {idols.map((idol) => {
          return <Idol key={`${idol.name}-${idol.debutYear}`} idol={idol} />;
        })}
      </ul>
    </li>
  );
};

export default IdolYear;
