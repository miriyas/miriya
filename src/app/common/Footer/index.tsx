'use client';

import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.appFooter}>
      <div className={styles.wrapper}>
        <a href='mailto:miriya.lee@gmail.com' rel='nofollow'>
          MIRIYA © 2012-2023
        </a>
      </div>
    </footer>
  );
};

export default Footer;
