import { useHotkeys } from 'react-hotkeys-hook';

import useAlert from '@/hooks/useAlert';
import { Alert } from '@/states/alert';

import Button from '@/components/Button';
import styles from './index.module.scss';

interface Props {
  alert: Alert;
}

const View = ({ alert }: Props) => {
  const { removeAlert } = useAlert();
  const { title, message, onCancel, onConfirm, confirmLabel, cancelLabel } = alert;

  const handleCancel = () => {
    if (onCancel) onCancel();
    removeAlert();
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    removeAlert();
  };

  useHotkeys('escape', () => removeAlert());
  useHotkeys('enter', () => handleConfirm());

  return (
    <aside className={styles.alert}>
      {title && (
        <h1 className={styles.title} translate='yes'>
          {title}
        </h1>
      )}
      {message && (
        <div className={styles.message} translate='yes'>
          {message}
        </div>
      )}

      <div className={styles.buttonsWrapper}>
        {cancelLabel && <Button onClick={handleCancel}>{cancelLabel}</Button>}
        <Button onClick={handleConfirm} skin='primary'>
          {confirmLabel || '확인'}
        </Button>
      </div>
    </aside>
  );
};

export default View;
