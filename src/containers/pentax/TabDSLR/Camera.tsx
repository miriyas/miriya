import cx from 'clsx';
import { FocusEventHandler, MouseEventHandler, useMemo } from 'react';
import { useAtom } from 'jotai';

import { X_CELL_DSLR } from '@/constants/pentaxes';
import { PentaxDslr } from '@/types/pentaxes';
import { selectedCameraAtom } from './states';

import styles from './Camera.module.scss';

const H_QUARTERS = X_CELL_DSLR; // --x-pentax-dslr-cell
const H_LINE = X_CELL_DSLR; // --x-pentax-dslr-cell
const W_LINE = X_CELL_DSLR; // --x-pentax-dslr-cell
const W_YEAR = W_LINE * 4;

interface Props {
  camera: PentaxDslr;
  yearStart: number;
  yearEnd: number;
}

const Camera = ({ camera, yearStart, yearEnd }: Props) => {
  const { data, line, name, type, startYear, endYear, startQuarter, endQuarter } = camera;

  const position = useMemo(() => {
    return {
      top: `${H_QUARTERS + H_LINE * (line - 1) - 1}px`,
      left: `${(startYear - yearStart) * W_YEAR + (startQuarter - 1) * W_LINE - 1}px`,
      width: `${((endYear || yearEnd) - startYear) * W_YEAR + ((endQuarter || 4) - startQuarter + 1) * W_LINE + 1}px`,
      height: `${H_LINE + 1}px`,
    };
  }, [endQuarter, endYear, line, startQuarter, startYear, yearEnd, yearStart]);

  const [selectedCamera, setSelectedCamera] = useAtom(selectedCameraAtom);

  const className = useMemo(() => {
    return cx(styles.camera, styles[type.toLowerCase()], {
      [styles.current]: name === selectedCamera,
      [styles.inProduction]: !endYear,
      [styles.wr]: data?.bonus?.wr,
      [styles.sr]: data?.bonus?.sr,
    });
  }, [data?.bonus?.sr, data?.bonus?.wr, endYear, name, selectedCamera, type]);

  const onMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  const onFocus: FocusEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  return (
    <li key={name} className={className} style={position} onMouseOver={onMouseOver} onFocus={onFocus}>
      {name}
      <div className={styles.badge} />
    </li>
  );
};

export default Camera;
