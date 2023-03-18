import {
  CameraType,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  VIDEO_SCAN_TYPE,
  ENGINE_TYPE,
  MOUNT,
  GRADE,
} from '@/types/cameras.d';

export const SIGMAS: CameraType[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  // 1999 =============================================
  // 2000 =============================================
  // 2001 =============================================
  // 2002 =============================================
  {
    year: 2002,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'SD9',
    predecessor: [],
    successor: ['SD10'],
    sensor: {
      name: 'Foveon X3',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '10.3M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 400,
    },
    shutter: {
      fps: 2.5,
      speed: 6000,
    },
    focus: {
      points: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.77,
      coverage: 98,
    },
    display: {
      inches: 1.8,
      pixels: 130_000,
    },
    metering: {
      desc: '8분할측광',
    },
    refs: ['https://www.dpreview.com/reviews/sigmasd9'],
  },

  // 2003 =============================================
  {
    year: 2003,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'SD10',
    predecessor: ['SD9'],
    successor: ['SD14'],
    sensor: {
      name: 'Foveon X3',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 2.5,
      speed: 6000,
    },
    focus: {
      points: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.77,
      coverage: 98,
    },
    display: {
      inches: 1.8,
      pixels: 150_000,
    },
    metering: {
      desc: '8분할측광',
    },
    refs: ['https://en.wikipedia.org/wiki/Sigma_SD10', 'https://www.dpreview.com/reviews/sigmasd10/'],
  },

  // 2004 =============================================
  // 2005 =============================================
  // 2006 =============================================
  // 2007 =============================================
  {
    year: 2007,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'SD14',
    predecessor: ['SD10'],
    successor: ['SD15'],
    sensor: {
      name: 'Foveon X3',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.1M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 98,
    },
    display: {
      inches: 2.5,
      pixels: 150_000,
    },
    metering: {
      desc: '8분할측광',
    },
    refs: ['https://www.bhphotovideo.com/lit_files/924.pdf'],
  },

  // 2008 =============================================
  // 2009 =============================================
  // 2010 =============================================
  {
    year: 2010,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'SD15',
    predecessor: ['SD14'],
    successor: ['SD1'],
    sensor: {
      name: 'Foveon X3',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.1M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 460_000,
    },
    metering: {
      desc: '77분할측광',
    },
    refs: ['https://www.bhphotovideo.com/lit_files/924.pdf'],
  },

  // 2011 =============================================
  {
    year: 2011,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'SD1',
    predecessor: ['SD15'],
    successor: [],
    otherNames: ['SD1 Merrill'],
    sensor: {
      name: 'Foveon X3',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '46M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 11,
      pointsCross: 11,
      pointsDouble: 11,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 460_000,
    },
    metering: {
      desc: '77분할측광',
    },
    refs: ['https://www.dpreview.com/reviews/sigmasd1/2'],
  },

  // 2012 =============================================
  // 2013 =============================================
  // 2014 =============================================
  // 2015 =============================================
  // 2016 =============================================
  {
    year: 2016,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'sd Quattro',
    predecessor: [],
    successor: [],
    sensor: {
      name: 'Foveon X3',
      engine: ENGINE_TYPE.DTRUE3,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '29M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 3.6,
      speed: 4000,
    },
    focus: {
      points: 9,
      contrast: true,
    },
    display: {
      inches: 3.0,
      pixels: 1620_000,
    },
    refs: ['https://www.dpreview.com/products/sigma/slrs/sigma_sdquattro/specifications'],
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.SigmaSA,
    grade: GRADE.ADVANCED,
    name: 'sd Quattro H',
    predecessor: [],
    successor: [],
    sensor: {
      name: 'Foveon X3',
      engine: ENGINE_TYPE.DTRUE3,
      size: SENSOR_SIZE.APSH,
      pixelsFamiliar: '45M',
      type: SENSOR_TYPE.FOVEON,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 3.8,
      speed: 4000,
    },
    focus: {
      points: 9,
      contrast: true,
    },
    display: {
      inches: 3.0,
      pixels: 1620_000,
    },
    refs: ['https://www.dpreview.com/reviews/sigma-sd-quattro-h/7'],
  },

  // 2017 =============================================
  // 2018 =============================================
  // 2019 =============================================
  {
    year: 2019,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.LeicaL,
    grade: GRADE.ADVANCED,
    name: 'fp',
    predecessor: [],
    successor: ['fp L'],
    sensor: {
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '24.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 6,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: 18,
      speed: 8000,
    },
    focus: {
      points: 49,
      contrast: true,
    },
    display: {
      inches: 3.15,
      pixels: 2_100_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: '4K',
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 24,
        },
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 60,
        },
      ],
    },
    refs: ['https://www.sigma-global.com/en/cameras/fp/'],
  },

  // 2020 =============================================
  // 2021 =============================================
  {
    year: 2019,
    maker: CAMERA_MAKER.SIGMA,
    mount: MOUNT.LeicaL,
    grade: GRADE.ADVANCED,
    name: 'fp L',
    predecessor: ['fp'],
    successor: [],
    sensor: {
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '62.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 6,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: 10,
      speed: 8000,
    },
    focus: {
      points: 49,
      contrast: true,
    },
    display: {
      inches: 3.15,
      pixels: 2_100_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: '4K',
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 24,
        },
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 60,
        },
      ],
    },
    refs: ['https://www.sigma-global.com/en/cameras/fpl/'],
  },

  // 2022 =============================================
  // 2023 =============================================
];
