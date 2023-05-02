import { useRef } from 'react';
import { useClickAway, useRafState } from 'react-use';
import cx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';

import { useGA } from '@/hooks/useGA';
import { FBIdolType } from '@/types/idols.d';
import { IDOL } from '@/constants/ga';
import { coverIdolAtom, editIdolAtom } from '@/containers/idols/states';

import Editor from './Editor/Edit';
import Upper from './Upper';
import Lower from './Lower';
import styles from './index.module.scss';

interface Props {
  idol: FBIdolType;
  sort: () => void;
}

const IdolCard = (props: Props) => {
  const { idol, sort } = props;
  const { category, name, debutYear } = idol;

  const { gaEvent } = useGA();
  const idolRef = useRef<HTMLLIElement>(null);
  const [opened, setOpened] = useRafState(false);
  const editIdol = useAtomValue(editIdolAtom);
  const setCoverUrl = useSetAtom(coverIdolAtom);

  useClickAway(idolRef, () => {
    if (!opened) return;
    if (opened && editIdol === name) return;
    setOpened(false);
    sort();
  });

  const onClickOpen = () => {
    setCoverUrl(idol.id);
    setOpened(true);
    setTimeout(() => {
      sort();
    }, 50);
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
          <Upper onClickOpen={onClickOpen} idol={idol} opened={opened} />
          {opened && <Lower idol={idol} />}
        </>
      )}
    </li>
  );
};

export default IdolCard;
