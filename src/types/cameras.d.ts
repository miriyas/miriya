import { ValueOf } from '@/types';

export const CAMERA_MAKER = {
  CANON: 'Canon',
  NIKON: 'Nikon',
  PENTAX: 'Pentax',
  MINOLTA: 'Minolta',
  SONY: 'Sony',
  KODAK: 'Kodak',
};

export type CameraMakerTypes = ValueOf<typeof CAMERA_MAKER>;

export const SENSOR_SIZE = {
  I23: '2/3"',
  C26: '2.6crop',
  C19: '1.9crop',
  FF: 'Full Frame',
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
};

export type FocusNameTypes = ValueOf<typeof FOCUS_NAME>;

export const ENGINE_TYPE = {
  DIGIC1: 'DIGIC I',
  DIGIC2: 'DIGIC II',
  DIGIC3: 'DIGIC III',
  DIGIC4: 'DIGIC IV',
  EXPEED: 'EXPEED',
};

export type EngineTypes = ValueOf<typeof ENGINE_TYPE>;

export const VIDEO_SCAN_TYPE = {
  PROGRESSIVE: 'Progressive',
  INTERLACED: 'Interlaced',
};

export type VideoScanTypes = ValueOf<typeof VIDEO_SCAN_TYPE>;

export interface Sensor {
  name?: EngineTypes;
  engine?: string;
  pixelsFamiliar: string;
  size?: SensorSizeTypes;
  type: SensorTypes;
  isoMin: number;
  isoMax: number;
  vr?: boolean;
}

export interface CameraType {
  year: number;
  name: string;
  maker: CameraMakerTypes;
  sensor?: Sensor;
  shutter?: {
    fps: number;
    speed?: number;
  };
  focus?: {
    name?: FocusNameTypes;
    contrast?: boolean;
    points?: number;
    pointsCross?: number;
  };
  display?: {
    inches: number;
    pixels?: number;
    tilt?: boolean;
    swivel?: boolean;
    trueblack?: boolean;
  };
  optics?: {
    type: OpticsTypes;
    magnification: number;
    coverage: number;
  };
  video?: {
    format: string;
    modes: {
      resolution: number;
      scan: VideoScanTypes;
      fps: number;
    }[];
  };
  metering?: string;
  refs?: string[];
}
