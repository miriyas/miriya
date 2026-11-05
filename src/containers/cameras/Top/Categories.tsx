'use client';

import { MouseEventHandler, useEffect } from 'react';
import { startCase } from 'lodash';
import cx from 'clsx';

import useRafAtom from '@/hooks/useRafAtom';
import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';
import { CAMERA_MAKERS } from '@/types/cameras';
import { selectedMakerAtom } from '../states';

import styles from './index.module.scss';

const Categories = () => {
  const { gaEvent } = useGA();

  const [selectedMaker, setSelectedMaker] = useRafAtom(selectedMakerAtom);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialMaker = params.get('maker') ?? 'ALL';
    setSelectedMaker(initialMaker);
    // Back / forward between makers: follow the URL.
    const onPopState = () => setSelectedMaker(new URLSearchParams(window.location.search).get('maker') ?? 'ALL');
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [setSelectedMaker]);

  const onClickMaker: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectedMaker(e.currentTarget.title);
    // Only the URL changes (shareable ?maker=). router.push started a Next navigation and re-rendered
    // the route on every click. Next 14.1+ keeps the router in sync with the history API.
    window.history.pushState(null, '', `?maker=${e.currentTarget.title}`);
    gaEvent(CAMERA.CAMERA_MAKER_CLICK, { maker: e.currentTarget.title });
  };

  return (
    <ul className={cx(styles.commonBox, styles.categories)}>
      {CAMERA_MAKERS.map((maker) => {
        return (
          <li key={maker} className={cx({ [styles.current]: maker === selectedMaker })}>
            <button type='button' onClick={onClickMaker} title={maker}>
              {startCase(maker)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
