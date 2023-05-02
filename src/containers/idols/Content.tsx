'use client';

import useIdols from './useIdols';

import FilterBar from './FilterBar';
import IdolYear from './IdolYear';
import SideYear from './SideYear';
import Cover from './Cover';
import styles from './index.module.scss';

window.isotopes = {};

const IdolsPageContent = () => {
  const { idols, debutYears, yearStart, yearEnd, years } = useIdols();

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
    </main>
  );
};

export default IdolsPageContent;
