'use client';

import { MouseEventHandler, useEffect } from 'react';
import { startCase } from 'lodash';
import cx from 'clsx';

import useRafAtom from '@/hooks/useRafAtom';
import { useGA } from '@/hooks/useGA';
import { CAMERA } from '@/constants/ga';
import { CAMERA_MAKERS } from '@/types/cameras.d';
import { selectedMakerAtom } from '../states';

import styles from './index.module.scss';

const Categories = () => {
  const { gaEvent } = useGA();

  const [selectedMaker, setSelectedMaker] = useRafAtom(selectedMakerAtom);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialMaker = params.get('maker') ?? 'ALL';
    setSelectedMaker(initialMaker);
  }, [setSelectedMaker]);

  const onClickMaker: MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectedMaker(e.currentTarget.title);
    // search params가 변경되었을 때 리랜더 되어 언마운트 애니메이션이 불가능해지므로, next/navigation 안쓰고 강제로 soft navigation 사용
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
