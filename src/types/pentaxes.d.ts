import { ValueOf } from '@/types';
import { EngineTypes, FocusNameTypes, OpticsTypes } from '@/types/cameras';

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
  C1534: '23.5 x 15.6mm, 1.53crop',
  C1535: '23.7 x 15.7mm, 1.53crop',
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
      material: PentaxDslrMaterialTypes | undefined;
      width: number;
      height: number;
      depth: number;
      weight: {
        base: number;
        extra: string | undefined;
      };
      verticalGrip?: string | undefined;
    };
    mount: string | undefined;
    power: string | undefined;
    memory: string | undefined;
    etc?: string | undefined;
    comment: string | undefined;
    bonus?: {
      wr?: boolean | undefined;
      sr?: string | undefined;
      dustRemove?: string | undefined;
    };
    sensor: {
      pixels: string | undefined;
      size: PentaxDslrSensorSizeTypes | undefined;
      iso: string | undefined;
      engine?: EngineTypes | undefined;
    };
    display: string | undefined;
    liveView?: boolean | undefined;
    liveViewAF?: string | undefined;
    movie?: string | undefined;
    movieType?: string | undefined;
    imageType: string | undefined;
    modes: string | undefined;
    meteringK?: string | undefined;
    meteringA: string | undefined;
    meteringRange: string | undefined;
    exposureRange: string | undefined;
    shutter: string | undefined;
    continuous: number | string | undefined;
    continuousLength?: number | string | undefined;
    viewFinder: {
      type: OpticsTypes | undefined;
      coverage: number | undefined;
      magnification: string | undefined;
      magnification2?: string | undefined;
      screenReplace?: boolean | undefined;
    };
    flash: {
      interlock: string | undefined;
      modes: string[];
      syncSpeed: string | undefined;
      redEye: boolean | undefined;
      internal?: string | undefined;
      release?: string | undefined;
      releaseW?: string | undefined;
    };
    focus: {
      name: FocusNameTypes | undefined;
      points: number | string | undefined;
      sensitivity?: string | undefined;
      superImpose?: boolean | undefined;
      supersonicMotor?: boolean | undefined;
    };
    refs?: string[];
  };
}
