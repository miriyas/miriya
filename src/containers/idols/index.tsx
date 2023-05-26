import { Dictionary } from 'lodash';
import dynamic from 'next/dynamic';

import { FBIdolType, YearDescType } from '@/types/idols.d';
import New from '@/containers/idols/IdolYear/IdolCard/Editor/New';

import FilterBar from './FilterBar';
import SideYear from './SideYear';
import Cover from './Cover';
import styles from './index.module.scss';
import Placeholder from './IdolYear/Placeholder';

const IdolYear = dynamic(() => import('./IdolYear'), { ssr: false, loading: () => <Placeholder /> });
const SupporterOnly = dynamic(() => import('@/components/AdminOnly'), { ssr: false });

interface Props {
  idols: FBIdolType[];
  years: YearDescType[];
  debutYears: Dictionary<FBIdolType[]>;
  yearStart: number;
  yearEnd: number;
}

const IdolsPageContent = ({ idols, years, debutYears, yearStart, yearEnd }: Props) => {
  return (
    <main className={styles.idols}>
      {idols.length > 0 && <FilterBar idolsLength={idols.length} yearStart={yearStart} yearEnd={yearEnd} />}
      <ul className={styles.idolYears}>
        {Object.keys(debutYears).map((year) => {
          const yearIdols = debutYears[year].sort((a, b) => a.name.localeCompare(b.name, 'ko'));
          const desc = years.find((yearDesc) => yearDesc.year === Number(year))?.desc ?? '';
          return <IdolYear key={year} idols={yearIdols} year={Number(year)} yearDesc={desc} />;
        })}
      </ul>
      <ul className={styles.sideYears}>
        {Object.keys(debutYears).map((year) => {
          return <SideYear key={`side-${year}`} year={year} />;
        })}
      </ul>
      <Cover />
      <SupporterOnly>
        <New />
      </SupporterOnly>
    </main>
  );
};

export default IdolsPageContent;
