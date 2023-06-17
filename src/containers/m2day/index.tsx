'use client';

import SideBar from './SideBar';
import Contents from './Contents';
import styles from './index.module.scss';

if (typeof window !== 'undefined') {
  window.onClickYoutube = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('openYoutubePannel', {
        detail: {
          postid: e.currentTarget.dataset.postid,
          link: e.currentTarget.href,
        },
      }),
    );
  };
}

const M2dayPage = () => {
  return (
    <div className={styles.m2dayPageContent}>
      <div className={styles.centering}>
        <SideBar />
        <Contents />
      </div>
    </div>
  );
};

export default M2dayPage;
