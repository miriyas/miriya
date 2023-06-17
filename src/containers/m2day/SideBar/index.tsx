'use client';

import Profile from './Profile';
import Menu from './Menu';
import styles from './index.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <Menu />
    </div>
  );
};

export default SideBar;
