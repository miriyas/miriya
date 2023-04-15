'use client';

import cx from 'clsx';

import styles from './index.module.scss';

const CameraPlaceholder = () => <li className={cx(styles.camera, styles.placeholder)} />;

export default CameraPlaceholder;
