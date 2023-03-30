import cx from 'clsx';
import { FocusEventHandler, MouseEventHandler, useMemo } from 'react';
import { useSetAtom } from 'jotai';

import { PENTAX_DSLRS_YEAR_INFO, X_CELL_DSLR } from '@/constants/pentaxes';
import { PentaxDslr } from '@/types/pentaxes';
import { selectedCameraAtom } from './states';

import styles from './Camera.module.scss';

const { start: yearStart, end: yearEnd } = PENTAX_DSLRS_YEAR_INFO;

const H_QUARTERS = X_CELL_DSLR; // --x-pentax-dslr-cell
const H_LINE = X_CELL_DSLR; // --x-pentax-dslr-cell
const W_LINE = X_CELL_DSLR; // --x-pentax-dslr-cell
const W_YEAR = W_LINE * 4;

const getPosition = (dslr: PentaxDslr) => {
  const { line, startYear, startQuarter, endYear, endQuarter } = dslr;

  return {
    top: `${H_QUARTERS + H_LINE * (line - 1) - 1}px`,
    left: `${(startYear - yearStart) * W_YEAR + (startQuarter - 1) * W_LINE - 1}px`,
    width: `${((endYear || yearEnd) - startYear) * W_YEAR + ((endQuarter || 4) - startQuarter + 1) * W_LINE + 1}px`,
    height: `${H_LINE + 1}px`,
  };
};

interface Props {
  camera: PentaxDslr;
}

const Camera = ({ camera }: Props) => {
  const { data, name, type, endYear } = camera;
  const { bonus } = data;

  const setSelectedCamera = useSetAtom(selectedCameraAtom);

  const className = useMemo(() => {
    return cx(styles.camera, styles[type.toLowerCase()], {
      [styles.inProduction]: !endYear,
      [styles.wr]: bonus?.wr,
      [styles.sr]: bonus?.sr,
    });
  }, [bonus?.sr, bonus?.wr, endYear, type]);

  const onMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  const onFocus: FocusEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(name);
  };

  return (
    <li key={name} className={className} style={getPosition(camera)} onMouseOver={onMouseOver} onFocus={onFocus}>
      {name}
    </li>
  );
};

export default Camera;
