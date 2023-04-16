'use client';

import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { useRafState } from 'react-use';
import cx from 'clsx';

import { IconEyeBall, IconEyeClosed, IconEyeTemplate } from 'public/svgs';
import styles from './FancyEyeBall.module.scss';

interface Props {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

const FancyEyeBall = ({ showPassword, setShowPassword }: Props) => {
  const originRef = useRef<HTMLButtonElement>(null);
  const [cord, setCord] = useRafState({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  const onClick = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      if (!originRef.current) return;

      const { x: x1, y: y1 } = e;
      const { x: x2, y: y2 } = originRef.current.getBoundingClientRect();

      let rad = Math.atan2(y2 - y1, x2 - x1);
      if (rad < 0) rad += Math.PI * 2;
      rad = (rad * 180) / Math.PI;

      if (rad < 22.5) {
        // L
        setCord({
          top: false,
          right: false,
          bottom: false,
          left: true,
        });
      } else if (rad < 67.5) {
        // TL
        setCord({
          top: true,
          right: false,
          bottom: false,
          left: true,
        });
      } else if (rad < 112.5) {
        // T
        setCord({
          top: true,
          right: false,
          bottom: false,
          left: false,
        });
      } else if (rad < 157.5) {
        // TR
        setCord({
          top: true,
          right: true,
          bottom: false,
          left: false,
        });
      } else if (rad < 202.5) {
        // R
        setCord({
          top: false,
          right: true,
          bottom: false,
          left: false,
        });
      } else if (rad < 247.5) {
        // BR
        setCord({
          top: false,
          right: true,
          bottom: true,
          left: false,
        });
      } else if (rad < 292.5) {
        // B
        setCord({
          top: false,
          right: false,
          bottom: true,
          left: false,
        });
      } else if (rad < 337.5) {
        // BL
        setCord({
          top: false,
          right: false,
          bottom: true,
          left: true,
        });
      } else if (rad < 360) {
        // L
        setCord({
          top: false,
          right: false,
          bottom: false,
          left: true,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  });

  return (
    <button type='button' className={styles.fancyEyeBall} onClick={onClick} ref={originRef} aria-label='show password'>
      {showPassword ? (
        <>
          <IconEyeTemplate className={styles.eyeTemplate} />
          <IconEyeBall
            className={cx(styles.eyeBall, {
              [styles.top]: cord.top,
              [styles.bottom]: cord.bottom,
              [styles.left]: cord.left,
              [styles.right]: cord.right,
            })}
          />
        </>
      ) : (
        <IconEyeClosed className={styles.eyeClosed} />
      )}
    </button>
  );
};

export default FancyEyeBall;
