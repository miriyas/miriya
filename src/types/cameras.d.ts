import { ValueOf } from '@/types';

export const CAMERA_MAKER = {
  CANON: 'Canon',
  FUJIFILM: 'Fujifilm',
  KODAK: 'Kodak',
  MINOLTA: 'Minolta',
  NIKON: 'Nikon',
  OLYMPUS: 'Olympus',
  PANASONIC: 'Panasonic',
  PENTAX: 'Pentax',
  SAMSUNG: 'Samsung',
  SIGMA: 'Sigma',
  SONY: 'Sony',
  ALL: 'ALL',
};

export type CameraMakerTypes = ValueOf<typeof CAMERA_MAKER>;

export const CAMERA_MAKERS = [
  'ALL',
  CAMERA_MAKER.CANON,
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
  I23: '2/3"',
  C26: '2.6crop',
  C19: '1.9crop',
  FF: 'Full Frame',
  F645C13: '645 1.3crop',
  APSH: 'APS-H',
  APSC: 'APS-C',
};

export type SensorSizeTypes = ValueOf<typeof SENSOR_SIZE>;

export const SENSOR_TYPE = {
  CCD: 'CCD',
  CMOS: 'CMOS',
  LBCAST: 'LBCAST',
};

export type SensorTypes = ValueOf<typeof SENSOR_TYPE>;

export const OPTICS_TYPE = {
  PENTA_PRISM: 'PentaPrism',
  PENTA_MIRROR: 'PentaMirror',
  ELECTRIC: 'Electric',
};

export type OpticsTypes = ValueOf<typeof OPTICS_TYPE>;

export interface ViewFinderType {
  type: OpticsTypes;
  magnification: number | '?';
  coverage?: number;
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
  SAFOX7: 'SAFOX VII',
  SAFOX7P: 'SAFOX VII+',
  SAFOX9: 'SAFOX IX',
  SAFOX9P: 'SAFOX IX+',
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
};

export interface FocusType {
  name?: FocusNameTypes;
  contrast?: boolean;
  points?: number;
  pointsCross?: number;
  pointsDouble?: number;
  phaseDetection?: boolean;
}

export type EngineTypes = ValueOf<typeof ENGINE_TYPE>;

export const VIDEO_SCAN_TYPE = {
  PROGRESSIVE: 'Progressive',
  INTERLACED: 'Interlaced',
};

export type VideoScanTypes = ValueOf<typeof VIDEO_SCAN_TYPE>;

export interface Sensor {
  name?: string;
  engine?: EngineTypes;
  pixelsFamiliar: string;
  size?: SensorSizeTypes;
  type: SensorTypes;
  isoMin: number;
  isoMax: number;
  vr?: boolean;
}

export interface DisplayType {
  inches: number | '?';
  pixels?: number | '?';
  liveview?: true;
  tilt?: boolean;
  swivel?: boolean;
  trueblack?: boolean;
  touch?: boolean;
}

export interface CameraType {
  year: number;
  name: string;
  otherNames?: string[];
  maker: CameraMakerTypes;
  name2?: string;
  maker2?: CameraMakerTypes;
  predecessor?: string[];
  successor?: string[];
  desc?: string;
  sensor?: Sensor;
  shutter?: {
    fps: number | '?';
    speed?: number;
  };
  focus?: FocusType;
  display?: DisplayType;
  viewfinder?: ViewFinderType;
  video?: {
    format: string;
    modes: {
      resolution: number | '4K';
      scan: VideoScanTypes;
      fps: number;
    }[];
  };
  metering?: {
    engine?: EngineTypes;
    desc: string;
  };
  refs?: string[];
}
