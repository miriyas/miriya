import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useUnmount } from 'react-use';

import { FullCommitData } from '@/types/github.d';
import { GUESTBOOK_TAB } from '@/types/guestbook.d';
import { tabAtom } from '../states';

import TabHome from './TabHome';
import TabIdol from './TabIdol';
import TabDSLR from './TabDSLR';
import TabPentax from './TabPentax';
import TabGuest from './TabGuest';
import styles from './RightWing.module.scss';

interface Props {
  commitsData: FullCommitData[];
}

const RightWing = ({ commitsData }: Props) => {
  const tab = useAtomValue(tabAtom);
  const resetTab = useResetAtom(tabAtom);

  useUnmount(resetTab);

  return (
    <section className={styles.rightWing}>
      {tab === GUESTBOOK_TAB.HOME && <TabHome commitsData={commitsData} />}
      {tab === GUESTBOOK_TAB.IDOLS && <TabIdol />}
      {tab === GUESTBOOK_TAB.DSLR && <TabDSLR />}
      {tab === GUESTBOOK_TAB.PENTAX && <TabPentax />}
      {tab === GUESTBOOK_TAB.GUEST && <TabGuest />}
    </section>
  );
};

export default RightWing;
