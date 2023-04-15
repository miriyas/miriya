import { CameraType } from '@/types/cameras.d';

import { CANONS } from './canon';
import { CONTAXES } from './contax';
import { FUJIFILM } from './fujifilm';
import { KODAKS } from './kodak';
import { NIKONS } from './nikon';
import { OLYMPUSES } from './olympus';
import { PANASONICS } from './panasonic';
import { PENTAXS } from './pentax';
import { SIGMAS } from './sigma';
import { SONYS } from './sony';

export const YEAR_INFO = {
  start: 1995,
  end: 2023,
};

export const CAMERAS: CameraType[] = [
  ...CANONS,
  ...CONTAXES,
  ...FUJIFILM,
  ...KODAKS,
  ...NIKONS,
  ...OLYMPUSES,
  ...PANASONICS,
  ...PENTAXS,
  ...SIGMAS,
  ...SONYS,
];
