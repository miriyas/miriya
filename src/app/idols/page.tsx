import { groupBy } from 'lodash';

import Idols from '@/containers/idols';
import { getIdolsDataApi, getIdolYearsDataApi } from '@/services/idols';

import { getMetaData } from '@/app/sharedMetadata';

export const metadata = getMetaData({
  url: 'https://miriya.net/idols',
  title: 'History of Idols',
  description: '시대별로 정리된 한국의 아이돌들',
  imageUrl: 'https://miriya.net/images/idols/og.jpg',
  keywords: ['idols', 'korea', '한국', '아이돌'],
});

const IdolsPage = async () => {
  const idolsData = getIdolsDataApi()
    .then((res) => res.data)
    .catch(() => []);

  const yearsData = getIdolYearsDataApi()
    .then((res) => res.data)
    .catch(() => []);

  const [idols, years] = await Promise.all([idolsData, yearsData]);
  const debutYears = groupBy(idols, 'debutYear');
  const yearStart = Math.min(...Object.keys(debutYears).map((year) => Number(year)));
  const yearEnd = Math.max(...Object.keys(debutYears).map((year) => Number(year)));

  return <Idols idols={idols} years={years} debutYears={debutYears} yearStart={yearStart} yearEnd={yearEnd} />;
};

export default IdolsPage;
