'use client';

import cx from 'clsx';
import { MouseEventHandler, Suspense, useEffect, useState } from 'react';
import { useRafState } from 'react-use';
import { CSSTransition } from 'react-transition-group';
import { useAtomValue } from 'jotai';

import { CameraType } from '@/types/cameras.d';
import { cameraId } from '@/utils/cameras';
import { selectedMakerAtom } from '@/containers/cameras/states';

import Loading from '@/components/Loading';
import DataInternal from './DataInternal';
import DataExternal from './DataExternal';
import styles from './index.module.scss';
import externalStyles from './DataExternal/index.module.scss';

const getIsSelected = (id: string) => {
  return typeof window !== 'undefined' ? window.location.hash.replace('#', '') === id : false;
};

const TABS = [
  {
    key: 'internal',
    label: 'Original',
  },
  {
    key: 'external',
    label: 'CameraDB',
  },
  {
    key: 'comment',
    label: 'Comment',
  },
];

interface Props {
  camera: CameraType;
}

const Camera = (props: Props) => {
  const { camera } = props;
  const { maker, name, year } = camera;
  const id = cameraId(maker, name);

  const selectedMaker = useAtomValue(selectedMakerAtom);
  const [isShow, setIsShow] = useRafState(selectedMaker === 'ALL' ? true : maker === selectedMaker);

  const [selected, setSelected] = useState(getIsSelected(id));
  const [tab, setTab] = useState('internal');

  const onClickTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab ?? 'internal');
  };

  useEffect(() => {
    setIsShow(selectedMaker === 'ALL' ? true : maker === selectedMaker);
  }, [maker, selectedMaker, setIsShow]);

  useEffect(() => {
    // DataSiblings에서 형제 기종을 클릭했을때 해시 변경되는 이벤트를 탐지하여 하이라이트 해준다.

    const onHashChanged = () => {
      setSelected(getIsSelected(id));
    };

    window.addEventListener('hashchange', onHashChanged);
    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, [id]);

  return (
    <CSSTransition
      in={isShow}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exit: styles.exit,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone,
      }}
    >
      <li
        id={id}
        className={cx(styles.camera, `grid-item-${year}`, `maker-${maker.toLowerCase()}`, {
          [styles.isHidden]: !isShow,
          [styles.selected]: selected,
          [styles.showExternalData]: tab !== 'internal',
        })}
      >
        <div className={styles.wrapper}>
          <Suspense
            fallback={
              <div
                className={cx(styles.dataSet, styles.dataExternal, externalStyles.dataExternal, externalStyles.loading)}
              >
                <p className={externalStyles.id}>{id}</p>
                <Loading />
              </div>
            }
          >
            <DataExternal camera={camera} showExternalData={tab === 'external'} />
          </Suspense>
          <DataInternal camera={camera} />
          <div className={styles.tabs}>
            {TABS.map((item) => (
              <button
                key={item.key}
                type='button'
                onClick={onClickTab}
                className={cx(styles.tab, { [styles.current]: tab === item.key })}
                data-tab={item.key}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </li>
    </CSSTransition>
  );
};

export default Camera;
