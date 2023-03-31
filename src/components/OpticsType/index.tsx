import { OPTICS_TYPE, OpticsTypes } from '@/types/cameras.d';

interface Props {
  type: OpticsTypes | undefined;
}

const OpticsType = ({ type }: Props) => {
  if (!type) return null;
  return {
    [OPTICS_TYPE.PENTA_PRISM]: <span className='green'>펜타프리즘</span>,
    [OPTICS_TYPE.PENTA_MIRROR]: <span className='red'>펜타미러</span>,
  }[type];
};

export default OpticsType;
