import { useRef } from 'react';
import { useClickAway, useRafState } from 'react-use';
import cx from 'clsx';
import { useAtomValue } from 'jotai';

import { useGA } from '@/hooks/useGA';
import { FBIdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';
import { editIdolAtom } from '@/containers/idols/states';

import Editor from './Editor';
import Upper from './Upper';
import Lower from './Lower';
import styles from './Idol.module.scss';

interface Props {
  idol: FBIdolType;
  sort: () => void;
  i: number;
  yearLength: number;
}

const IdolCard = (props: Props) => {
  const { idol, sort, i, yearLength } = props;
  const { category, name, debutYear } = idol;

  const { gaEvent } = useGA();
  const idolRef = useRef<HTMLLIElement>(null);
  const [opened, setOpened] = useRafState(false);
  const editIdol = useAtomValue(editIdolAtom);

  useClickAway(idolRef, () => {
    if (!opened) return;
    if (opened && editIdol === name) return;
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
      className={cx(styles.idolCard, `grid-item-${debutYear}`, `category-${category}`, { [styles.opened]: opened })}
    >
      {editIdol === idol.name ? (
        <Editor idol={idol} />
      ) : (
        <>
          <Upper onClickOpen={onClickOpen} i={i} yearLength={yearLength} idol={idol} opened={opened} />
          {opened && <Lower idol={idol} />}
        </>
      )}
    </li>
  );
};

export default IdolCard;
