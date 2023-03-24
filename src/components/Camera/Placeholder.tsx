'use client';

import cx from 'clsx';

import styles from './Camera.module.scss';

const CameraPlaceholder = () => <li className={cx(styles.camera, styles.placeholder)} />;

export default CameraPlaceholder;
