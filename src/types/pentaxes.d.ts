import { ValueOf } from '@/types';
import { EngineTypes, FocusType, OpticsTypes } from '@/types/cameras';

export const PENTAX_DSLR_TYPE = {
  IST: 'IST',
  K: 'K',
  NEW_K: 'NEWK',
} as const;

export type PentaxDslrTypes = ValueOf<typeof PENTAX_DSLR_TYPE>;

export const PENTAX_DSLR_MATERIAL = {
  IronPla: '강철 내장, 플라스틱 외장',
  IronMag: '강철 내장, 마그네슘 합금 외장',
} as const;

export type PentaxDslrMaterialTypes = ValueOf<typeof PENTAX_DSLR_MATERIAL>;

export const PENTAX_DSLR_SENSOR_SIZE = {
  C645: '44 x 33mm, 1.27crop 645',
  C153: '23.5 x 15.7mm, 1.53crop',
  C1532: '23.4 x 15.6mm, 1.53crop',
  C1533: '23.6 x 15.8mm, 1.53crop',
} as const;

export type PentaxDslrSensorSizeTypes = ValueOf<typeof PENTAX_DSLR_SENSOR_SIZE>;

export interface PentaxDslr {
  type: PentaxDslrTypes;
  name: string;
  line: number;
  startYear: number;
  startQuarter: number;
  endYear?: number;
  endQuarter?: number;
  data?: {
    body: {
      material: PentaxDslrMaterialTypes;
      width: number;
      height: number;
      depth: number;
      weight: {
        base: number;
        extra: string;
      };
      verticalGrip?: string;
    };
    mount: string;
    power: string;
    memory: string;
    etc: string;
    comment: string;
    bonus?: {
      wr: boolean;
      dustRemove: string;
    };
    sensor: {
      pixels: string;
      size: PentaxDslrSensorSizeTypes;
      iso: string;
      engine: EngineTypes;
    };
    display: string;
    liveView?: boolean;
    liveViewAF?: string;
    movie?: string;
    movieType?: string;
    imageType: string;
    modes: string;
    meteringA: string;
    meteringRange: string;
    exposureRange: string;
    shutter: string;
    continuous: number;
    continuousExtra?: string;
    continuousLength?: string;
    viewFinder: {
      type: OpticsTypes;
      coverage: number;
      magnification: string;
      magnification2?: string;
      screenReplace?: string;
    };
    flash: {
      interlock: string;
      modes: string[];
      syncSpeed: string;
      redEye: boolean;
      internal?: string;
      release?: string;
      releaseW?: string;
    };
    focus: {
      name: FocusType;
      points: number;
      superImpose: boolean;
      supersonicMotor: boolean;
    };
  };
}
