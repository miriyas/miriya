import { ValueOf } from '@/types';
import { EngineTypes, FocusNameTypes, OpticsTypes } from '@/types/cameras';
import { WithTS } from '@/types/firebase';

export const PENTAX_DSLR_TYPE = {
  IST: 'IST',
  K: 'K',
  NEW_K: 'NEWK',
  K645: 'K645',
  Q: 'Q',
  SHIT: 'SHIT',
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
      material?: PentaxDslrMaterialTypes;
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
    etc?: string;
    comment: string;
    bonus?: {
      wr?: boolean;
      sr?: string;
      dustRemove?: string;
    };
    sensor: {
      pixels: string;
      size: PentaxDslrSensorSizeTypes;
      iso: string;
      engine?: EngineTypes;
    };
    display: string;
    liveView?: boolean;
    liveViewAF?: string;
    movie?: string;
    movieType?: string;
    imageType: string;
    modes: string;
    meteringK?: string;
    meteringA: string;
    meteringRange: string;
    exposureRange: string;
    shutter: string;
    continuous: number | string;
    continuousLength?: number | string;
    viewFinder: {
      type: OpticsTypes;
      coverage: number;
      magnification: string;
      screenReplace?: boolean;
    };
    flash: {
      interlock: string;
      modes: string;
      syncSpeed: string;
      redEye: boolean;
      internal?: string;
      release?: string;
      releaseW?: string;
    };
    focus: {
      name: FocusNameTypes;
      points: string;
      sensitivity?: string;
      superImpose?: boolean;
      supersonicMotor?: boolean;
    };
    refs?: string[];
  };
}

export const PENTAX_SLR_MOUNT = {
  K: 'K',
  KF: 'KF',
  KA: 'KA',
  KA2: 'KA2',
  KAF: 'KAF',
  KAF2: 'KAF2',
} as const;

export type PentaxSlrMountTypes = ValueOf<typeof PENTAX_SLR_MOUNT>;

export interface PentaxSlr {
  name: string;
  line: number;
  startYear: number;
  endYear: number;
  mount: PentaxSlrMountTypes;
  crippled?: boolean;
  af?: boolean;
  data: {
    comment: string;
    body: {
      width?: number;
      height?: number;
      depth?: number;
      weight: number;
      verticalGrip?: string;
      color?: string;
    };
    power: string;
    etc?: string;
    modes: string;
    metering: {
      k?: string;
      a?: string;
      range?: string;
    };
    asa: {
      dx?: string;
      manual?: string;
    };
    exposure?: {
      range?: string;
      fix?: boolean;
    };
    panorama?: boolean | string;
    shutter: {
      build: string;
      speed: string;
      emergency?: string;
      timer?: string;
      release?: string;
      releaseW?: string;
    };
    winder: {
      internal: string;
      external?: string;
      motorDrive?: string;
    };
    etc: string;
    viewFinder: {
      coverage?: number;
      magnification: string | number;
      seeShutterSpeed?: string;
      seeAperture?: string;
      screenReplace?: boolean;
      finderReplace?: boolean;
    };
    flash: {
      sync: string;
      modes?: string;
      syncSpeed: string;
      internal?: string;
      redEye?: boolean;
    };
    focus?: {
      name: FocusNameTypes;
      sensitivity?: string;
      support?: boolean;
      powerZoom?: string;
    };
    refs?: string[];
  };
}

export interface FBPentaxSlr extends PentaxSlr, WithTS {
  id: string;
  commentsLength: number;
}

export interface FBPentaxDslr extends PentaxDslr, WithTS {
  id: string;
  commentsLength: number;
}
