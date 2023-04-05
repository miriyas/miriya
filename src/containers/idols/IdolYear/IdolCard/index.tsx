import { useRef } from 'react';
import { useClickAway, useRafState } from 'react-use';
import cx from 'clsx';

import { useGA } from '@/hooks/useGA';
import { FBIdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';

import Upper from './Upper';
import Lower from './Lower';
import styles from './Idol.module.scss';

interface Props {
  idol: FBIdolType;
  sort: () => void;
  i: number;
  yearLength: number;
}

const Idol = (props: Props) => {
  const { idol, sort, i, yearLength } = props;
  const { category, name, debutYear } = idol;

  const { gaEvent } = useGA();
  const idolRef = useRef<HTMLLIElement>(null);
  const [opened, setOpened] = useRafState(false);

  useClickAway(idolRef, () => {
    if (!opened) return;
    setOpened(false);
    sort();
  });

  const onClickOpen = () => {
    setOpened(true);
    sort();
    gaEvent(IDOL.IDOL_OPEN, { name });
  };

  return (
    <li
      ref={idolRef}
      className={cx(styles.idol, `grid-item-${debutYear}`, `category-${category}`, { [styles.opened]: opened })}
    >
      <Upper onClickOpen={onClickOpen} i={i} yearLength={yearLength} idol={idol} opened={opened} />
      {opened && <Lower idol={idol} />}
    </li>
  );
};

export default Idol;
