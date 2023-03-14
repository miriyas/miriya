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
};

export type OpticsTypes = ValueOf<typeof OPTICS_TYPE>;

export const VIDEO_SCAN_TYPE = {
  PROGRESSIVE: 'Progressive',
  INTERLACED: 'Interlaced',
};

export type VideoScanTypes = ValueOf<typeof VIDEO_SCAN_TYPE>;

export interface Sensor {
  name?: string;
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
    name?: string;
    points: number;
    pointsCross?: number;
  };
  display?: {
    inches: number;
    pixels?: number;
    tilt?: boolean;
  };
  optics?: {
    type: OpticsTypes;
    magnification: number;
    coverage: number;
  };
  video?: {
    resolution: 720;
    scan: VideoScanTypes;
    format: 'M-JPEG';
  };
  metering?: string;
  refs?: string[];
}
