import cx from 'clsx';
import { FocusEventHandler, MouseEventHandler, useMemo } from 'react';
import { useAtom } from 'jotai';

import { PentaxSlrCore } from '@/types/pentaxes';
import { selectedCameraAtom } from './states';

import styles from './Camera.module.scss';

// NOTE: src/styles/_variable.scss 와 싱크 맞춰야함
const W_LINE = 27; // --w-pentax-slr-cell
const H_LINE = 17; // --h-pentax-slr-cell
const YEAR_PADDING = 21;

interface Props {
  camera: PentaxSlrCore;
  yearStart: number;
}

const Camera = ({ camera, yearStart }: Props) => {
  const { mount, name, af, crippled, line, startYear, endYear } = camera;

  const postion = useMemo(() => {
    return {
      top: `${YEAR_PADDING + H_LINE * (line - 1)}px`,
      left: `${(startYear - yearStart) * W_LINE - 1}px`,
      width: `${(endYear - startYear + 1) * W_LINE + 1}px`,
      height: `${H_LINE + 1}px`,
    };
  }, [endYear, line, startYear, yearStart]);

  const [selectedCamera, setSelectedCamera] = useAtom(selectedCameraAtom);

  const className = useMemo(() => {
    return cx(styles.camera, styles[mount.toLowerCase()], {
      [styles.current]: name === selectedCamera,
      [styles.af]: af,
      [styles.crippled]: crippled,
    });
  }, [af, crippled, mount, name, selectedCamera]);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setSelectedCamera(name);
  };

  const onFocus: FocusEventHandler<HTMLButtonElement> = () => {
    setSelectedCamera(name);
  };

  return (
    <li key={name} className={className} style={postion}>
      <button type='button' onClick={onClick} onFocus={onFocus}>
        {name.split(' ')[1]?.startsWith('(') ? name.split(' ')[0] : name}
        <div className={styles.badge} />
      </button>
    </li>
  );
};

export default Camera;
