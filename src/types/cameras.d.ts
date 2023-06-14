import { TimeStamp, ValueOf } from '@/types/index.d';

export const MOUNT = {
  CanonEF: 'Canon EF',
  CanonEFS: 'Canon EF-S',
  CanonEFM: 'Canon EF-M',
  CanonRF: 'Canon RF',
  CanonRFS: 'Canon RF-S',
  ContaxN: 'Contax N',
  FourThird: '4/3',
  FujiG: 'Fujifilm G',
  FujiX: 'Fujifilm X',
  MFourThird: 'Micro 4/3',
  LeicaL: 'Leica L',
  NikonF: 'Nikon F',
  NikonZ: 'Nikon Z',
  Nikon1: 'Nikon 1',
  PentaxK: 'Pentax K',
  PentaxQ: 'Pentax Q',
  SigmaSA: 'Sigma SA',
  SonyA: 'Sony A',
  SonyE: 'Sony E',
  M645: '645',
} as const;

export type MountTypes = ValueOf<typeof MOUNT>;

export const GRADE = {
  FLAGSHIP: 'FLAGSHIP',
  PROFESSIONAL: 'PROFESSIONAL',
  ADVANCED: 'ADVANCED',
  MIDRANGE: 'MIDRANGE',
  ENTRYMID: 'ENTRYMID',
  ENTRY: 'ENTRY',
  VALUE: 'VALUE',
} as const;

export type GradeTypes = ValueOf<typeof GRADE>;

export const CAMERA_MAKER = {
  CANON: 'canon',
  CONTAX: 'contax',
  FUJIFILM: 'fujifilm',
  KODAK: 'kodak',
  MINOLTA: 'minolta',
  NIKON: 'nikon',
  OLYMPUS: 'olympus',
  PANASONIC: 'panasonic',
  PENTAX: 'pentax',
  SAMSUNG: 'samsung',
  SIGMA: 'sigma',
  SONY: 'sony',
  ALL: 'ALL',
};

export type CameraMakerTypes = ValueOf<typeof CAMERA_MAKER>;

export const CAMERA_MAKERS = [
  'ALL',
  CAMERA_MAKER.CANON,
  CAMERA_MAKER.CONTAX,
  CAMERA_MAKER.FUJIFILM,
  CAMERA_MAKER.KODAK,
  CAMERA_MAKER.MINOLTA,
  CAMERA_MAKER.NIKON,
  CAMERA_MAKER.OLYMPUS,
  CAMERA_MAKER.PANASONIC,
  CAMERA_MAKER.PENTAX,
  CAMERA_MAKER.SAMSUNG,
  CAMERA_MAKER.SIGMA,
  CAMERA_MAKER.SONY,
];

export const SENSOR_SIZE = {
  Q1: '1"',
  Q17: '1/1.7"',
  Q23: '1/2.3"',
  I23: '2/3"',
  C26: '2.6crop',
  C19: '1.9crop',
  FF: 'Full Frame',
  F645C13: '645 1.3crop',
  APSH: 'APS-H',
  APSC: 'APS-C',
  FT: '4/3',
};

export type SensorSizeTypes = ValueOf<typeof SENSOR_SIZE>;

export const SENSOR_TYPE = {
  CCD: 'CCD',
  CMOS: 'CMOS',
  LBCAST: 'LBCAST',
  FOVEON: 'Foveon',
};

export type SensorTypes = ValueOf<typeof SENSOR_TYPE>;

export const OPTICS_TYPE = {
  PENTA_PRISM: 'PentaPrism',
  PENTA_MIRROR: 'PentaMirror',
  ELECTRIC: 'Electric',
  HYBRID: 'Hybrid',
};

export type OpticsTypes = ValueOf<typeof OPTICS_TYPE>;

export interface ViewFinderType {
  type: OpticsTypes;
  magnification?: number;
  coverage?: number;
  resolution?: number;
}

export const FOCUS_NAME = {
  AM200: 'Advanced AM200',
  CAM274: 'CAM274',
  CAM530: 'Multi-CAM530',
  CAM900: 'Multi-CAM900',
  CAM1000: 'Multi-CAM1000',
  CAM1300: 'Multi-CAM1300',
  CAM2000: 'Advanced CAM2000',
  CAM3500DX: 'Multi-CAM 3500DX',
  CAM3500FX: 'Multi-CAM 3500FX',
  SAFOX: 'SAFOX',
  SAFOX2: 'SAFOX II',
  SAFOX4: 'SAFOX IV',
  SAFOX5: 'SAFOX V',
  SAFOX6: 'SAFOX VI',
  SAFOX7: 'SAFOX VII',
  SAFOX7P: 'SAFOX VII+',
  SAFOX9: 'SAFOX IX',
  SAFOX9P: 'SAFOX IX+',
  SAFOX10: 'SAFOX X',
  SAFOX11: 'SAFOX XI',
};

export type FocusNameTypes = ValueOf<typeof FOCUS_NAME>;

export const ENGINE_TYPE = {
  DIGIC1: 'DIGIC I',
  DIGIC2: 'DIGIC II',
  DDIGIC2: 'Dual DIGIC II',
  DIGIC3: 'DIGIC III',
  DDIGIC3: 'Dual DIGIC III',
  DIGIC4: 'DIGIC IV',
  DDIGIC4: 'Dual DIGIC IV',
  DIGIC5: 'DIGIC V',
  DIGIC5P: 'DIGIC V+',
  DDIGIC5P: 'Dual DIGIC V+',
  DIGIC6: 'DIGIC VI',
  DDIGIC6: 'Dual DIGIC VI',
  DIGIC6P: 'DIGIC VI+',
  DDIGIC6P: 'Dual DIGIC VI+',
  DIGIC7: 'DIGIC VII',
  DIGIC8: 'DIGIC VIII',
  DIGIC10: 'DIGIC X',
  EXPEED: 'EXPEED',
  EXPEED2: 'EXPEED2',
  EXPEED3: 'EXPEED3',
  EXPEED3A: 'EXPEED3A', // 니콘 1시리즈 전용, 1V2
  EXPEED4: 'EXPEED4',
  EXPEED4A: 'EXPEED4A', // 니콘 1시리즈 전용, 1V3, 1J4, 1S2
  EXPEED5: 'EXPEED5',
  EXPEED5A: 'EXPEED5A', // 니콘 1시리즈 전용, 1J5
  EXPEED6: 'EXPEED6',
  DEXPEED6: 'Dual EXPEED6',
  EXPEED7: 'EXPEED7',
  EXRPRO: 'EXR Pro',
  EXRPRO2: 'EXR Pro II',
  BIONZ: 'Bionz',
  BIONZX: 'Bionz X',
  DTRUE3: 'Dual True III',
  PRIME: 'PRIME',
  PRIME2: 'PRIME II',
};

export type EngineTypes = ValueOf<typeof ENGINE_TYPE>;

export interface FocusType {
  name?: FocusNameTypes;
  desc?: string;
  contrast?: boolean;
  phaseDetection?: boolean;
}

// export const VIDEO_SCAN_TYPE = {
//   PROGRESSIVE: 'Progressive',
//   INTERLACED: 'Interlaced',
// };

// export type VideoScanTypes = ValueOf<typeof VIDEO_SCAN_TYPE>;

export interface Sensor {
  name?: string;
  engine?: EngineTypes;
  pixelsFamiliar: string;
  size?: SensorSizeTypes;
  type: SensorTypes;
  isoMin?: number;
  isoMax?: number;
  vr?: boolean;
  astro?: boolean;
  noLowPass?: boolean;
  ir?: boolean;
  cleaning?: boolean;
}

export interface DisplayType {
  desc: string;
  liveview?: boolean;
  tilt?: boolean;
  swivel?: boolean;
  trueblack?: boolean;
  touch?: boolean;
}

export interface CameraCore {
  year: number;
  grade: GradeTypes;
  mount: MountTypes;
  name: string;
  otherNames?: string;
  maker: CameraMakerTypes;
  name2?: string;
  maker2?: CameraMakerTypes;
  predecessor?: string;
  successor?: string;
  rugged?: boolean;
  dustproof?: boolean;
  desc?: string;
  sensor?: Sensor;
  shutter?: {
    fps?: string;
    speed?: number;
  };
  focus?: FocusType;
  display?: DisplayType;
  viewfinder?: ViewFinderType;
  video?: {
    format?: string;
    modes?: string;
  };
  metering?: {
    engine?: EngineTypes;
    desc?: string;
  };
  refs?: string;
}

export type DigicamDB = Record<string, string>;

export interface DpreviewNews {
  link: string;
  title: string;
}

export interface CameraType extends CameraCore, TimeStamp {
  id: string;
  comments: Comment[];
}
