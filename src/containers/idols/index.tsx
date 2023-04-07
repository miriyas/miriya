import { YearDescType } from '@/types/idols';

import IdolsContent from './Content';

interface Props {
  idolYears: YearDescType[];
}

const IdolsPage = ({ idolYears }: Props) => <IdolsContent idolYears={idolYears} />;

export default IdolsPage;
