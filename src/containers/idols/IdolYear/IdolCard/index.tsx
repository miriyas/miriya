import { useRef } from 'react';
import { useClickAway, useRafState } from 'react-use';
import cx from 'clsx';
import { useAtomValue, useSetAtom } from 'jotai';

import { useGA } from '@/hooks/useGA';
import { Idol } from '@/types/idols';
import { IDOL } from '@/constants/ga';
import { coverIdolAtom, editIdolAtom } from '@/containers/idols/states';

import Editor from './Editor/Edit';
import Upper from './Upper';
import Lower from './Lower';
import styles from './index.module.scss';

interface Props {
  idol: Idol;
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
    // Back to the list: remove the background photo, but only if it is still this idol's
    // (a click on another card has already set that card's photo).
    setCoverUrl((current) => (current === idol.id ? undefined : current));
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
