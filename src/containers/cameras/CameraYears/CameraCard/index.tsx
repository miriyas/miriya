'use client';

import cx from 'clsx';
import { MouseEventHandler, Suspense, memo, useEffect, useState } from 'react';

import { CameraType } from '@/types/cameras';
import { cameraId } from '@/utils/cameras';

import Loading from '@/components/Loading';
import Editor from './Editor';
import Comments from './Comments';
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
    label: 'DigicamDB',
  },
  {
    key: 'comments',
    label: 'Comment',
  },
];

interface Props {
  camera: CameraType;
  /** From the year list (selected maker). Before, each of the ~450 cards read the maker itself, so
   * every filter click re-rendered all of them, twice. Now only cards whose value changes re-render. */
  show: boolean;
}

const Camera = (props: Props) => {
  const { camera, show } = props;
  const { maker, name, year } = camera;
  const id = cameraId(maker, name);

  const [selected, setSelected] = useState(() => getIsSelected(id));
  const [tab, setTab] = useState('internal');

  const onClickTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.dataset.tab ?? 'internal');
  };

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
    // No CSSTransition: it forced a style recalculation per card to start its width animation
    // (~340 cards on "ALL"). A hidden card is display: none at once; a shown card fades in (CSS).
    <li
      id={id}
      className={cx(styles.camera, `grid-item-${year}`, `maker-${maker.toLowerCase()}`, {
        [styles.isHidden]: !show,
        [styles.selected]: selected,
        [styles.showExternalData]: tab === 'external',
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
        <DataInternal camera={camera} setTab={setTab} />
        {tab === 'comments' && <Comments targetId={camera.id} targetName={camera.name} />}
        {tab === 'editor' && <Editor camera={camera} setTab={setTab} />}
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
              {item.key === 'comments' && camera.comments.length > 0 && <span>{camera.comments.length}</span>}
            </button>
          ))}
        </div>
      </div>
    </li>
  );
};

export default memo(Camera);
