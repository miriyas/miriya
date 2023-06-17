'use client';

import Image from 'next/image';

import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.major}>
        <li>
          <button type='button' className={styles.active}>
            <Image className={styles.logo} src='/images/m2day/me2gray.png' width={50} height={58} alt='' />
            나는
          </button>
          <ul className={styles.minor}>
            <li>
              <button type='button'>모든글</button>
            </li>
            <li>
              <button type='button'>돌아보는</button>
            </li>
            <li>
              <button type='button'>포토</button>
            </li>
          </ul>
        </li>
        <li>
          <button type='button'>
            <Image className={styles.logo} src='/images/m2day/me2gray2.png' width={50} height={58} alt='' />
            친구들과
          </button>
          <ul className={styles.minor}>
            <li>
              <button type='button'>받은 댓글</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
