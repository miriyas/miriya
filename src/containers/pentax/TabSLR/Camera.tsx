import cx from 'clsx';
import { FocusEventHandler, MouseEventHandler, useMemo } from 'react';
import { useAtom } from 'jotai';

import { PENTAX_SLRS_YEAR_INFO } from '@/constants/pentaxes';
import { PentaxSlr } from '@/types/pentaxes';
import { selectedCameraAtom } from './states';

import styles from './Camera.module.scss';

const { start: yearStart } = PENTAX_SLRS_YEAR_INFO;

// NOTE: src/styles/_variable.scss 와 싱크 맞춰야함
const W_LINE = 27; // --w-pentax-slr-cell
const H_LINE = 17; // --h-pentax-slr-cell
const YEAR_PADDING = 21;

const getPosition = (dslr: PentaxSlr) => {
  const { line, startYear, endYear } = dslr;

  return {
    top: `${YEAR_PADDING + H_LINE * (line - 1)}px`,
    left: `${(startYear - yearStart) * W_LINE - 1}px`,
    width: `${(endYear - startYear + 1) * W_LINE + 1}px`,
    height: `${H_LINE + 1}px`,
  };
};

interface Props {
  camera: PentaxSlr;
}

const Camera = ({ camera }: Props) => {
  const { mount, name, af, crippled } = camera;

  const [selectedCamera, setSelectedCamera] = useAtom(selectedCameraAtom);

  const className = useMemo(() => {
    return cx(styles.camera, styles[mount.toLowerCase()], {
      [styles.current]: name === selectedCamera,
      [styles.af]: af,
      [styles.crippled]: crippled,
    });
  }, [af, crippled, mount, name, selectedCamera]);

  const onMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  const onFocus: FocusEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  return (
    <li key={name} className={className} style={getPosition(camera)} onMouseOver={onMouseOver} onFocus={onFocus}>
      {name.split(' ')[0]}
      <div className={styles.badge} />
    </li>
  );
};

export default Camera;
