import { FBIdolType, YearDescType } from '@/types/idols';

import IdolsContent from './Content';

interface Props {
  idols: FBIdolType[];
  idolYears: YearDescType[];
}

const IdolsPage = ({ idols, idolYears }: Props) => <IdolsContent idols={idols} idolYears={idolYears} />;

export default IdolsPage;
