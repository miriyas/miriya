import cx from 'clsx';
import { FocusEventHandler, MouseEventHandler, useMemo } from 'react';
import { useSetAtom } from 'jotai';

import { YEAR_INFO } from '@/constants/pentaxes';
import { PentaxDslr } from '@/types/pentaxes';
import { selectedCameraAtom } from './states';

import styles from './Camera.module.scss';

// NOTE: src/styles/_variable.scss 와 싱크 맞춰야함
const H_QUARTERS = 22; // --x-pentax-cell
const H_LINE = 22; // --x-pentax-cell
const W_LINE = 22; // --x-pentax-cell
const W_YEAR = W_LINE * 4;

const getPosition = (dslr: PentaxDslr) => {
  const { line, startYear, startQuarter, endYear, endQuarter } = dslr;

  return {
    top: `${H_QUARTERS + H_LINE * (line - 1)}px`,
    left: `${(startYear - YEAR_INFO.start) * W_YEAR + (startQuarter - 1) * W_LINE - 1}px`,
    width: `${
      ((endYear || YEAR_INFO.end) - startYear) * W_YEAR + ((endQuarter || 4) - startQuarter + 1) * W_LINE + 1
    }px`,
    height: `${H_LINE + 1}px`,
  };
};

interface Props {
  data: PentaxDslr;
}

const Camera = ({ data }: Props) => {
  const setSelectedCamera = useSetAtom(selectedCameraAtom);
  const className = useMemo(() => {
    return cx(styles.camera, styles[data.type.toLowerCase()], {
      [styles.inProduction]: !data.endYear,
    });
  }, [data.endYear, data.type]);

  const onMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(data.name);
  };

  const onFocus: FocusEventHandler<HTMLLIElement> = () => {
    setSelectedCamera(data.name);
  };

  return (
    <li key={data.name} className={className} style={getPosition(data)} onMouseOver={onMouseOver} onFocus={onFocus}>
      {data.name}
    </li>
  );
};

export default Camera;
