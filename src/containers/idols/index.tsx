'use client';

import { groupBy } from 'lodash';

import { YearDesc } from '@/types/idols.d';
import useIdols from './useIdols';

import Content from './Content';

interface Props {
  years: YearDesc[];
}

const IdolsPage = ({ years }: Props) => {
  const { idols } = useIdols();
  const debutYears = groupBy(idols, 'debutYear');
  const yearStart = Math.min(...Object.keys(debutYears).map((year) => Number(year)));
  const yearEnd = Math.max(...Object.keys(debutYears).map((year) => Number(year)));

  return <Content idols={idols} debutYears={debutYears} years={years} yearStart={yearStart} yearEnd={yearEnd} />;
};

export default IdolsPage;
