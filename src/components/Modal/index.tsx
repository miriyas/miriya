import cx from 'clsx';
import { memo, ReactNode, useRef, useState } from 'react';
import { useMount, useUnmount } from 'react-use';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { IconClose } from 'public/svgs';
import styles from './Modal.module.scss';

interface Props {
  isShow: boolean;
  className?: string;
  header?: string;
  closeIcon?: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = memo(({ isShow, className, header, children, closeIcon, onClose }: Props) => {
  useUnmount(() => {
    onClose();
  });

  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useMount(() => {
    ref.current = document.getElementById('modal');
    setMounted(true);
  });

  if (!mounted || !ref.current) return null;

  return createPortal(
    <CSSTransition
      in={isShow}
      timeout={200}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.modalWrapper}>
        <button type='button' className={styles.bg} onClick={onClose} aria-label='close' />
        <div className={styles.wrapper}>
          <dialog className={cx(styles.modal, className)} translate='no'>
            {header && (
              <header className={styles.header}>
                <h2>{header}</h2>
                <button type='button' className={styles.closeButton} onClick={onClose} aria-label='close'>
                  <IconClose />
                </button>
              </header>
            )}
            {closeIcon && (
              <button
                type='button'
                className={cx(styles.closeButton, styles.only)}
                onClick={onClose}
                aria-label='close'
              >
                <IconClose />
              </button>
            )}
            <div className={styles.contents}>{children}</div>
          </dialog>
        </div>
      </div>
    </CSSTransition>,
    ref.current,
  );
});
