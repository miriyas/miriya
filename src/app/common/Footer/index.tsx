'use client';

import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <header className={styles.appFooter}>
      <div className={styles.wrapper}>
        <a href='mailto:miriya.lee@gmail.com'>MIRIYA © 2012-2023</a>
      </div>
    </header>
  );
};

export default Footer;
