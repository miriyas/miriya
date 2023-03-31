import { IdolType, YearDescType } from '@/types/idols';

import IdolsContent from './Content';

interface Props {
  idols: IdolType[];
  idolYears: YearDescType[];
}

const IdolsPage = ({ idols, idolYears }: Props) => <IdolsContent idols={idols} idolYears={idolYears} />;

export default IdolsPage;
