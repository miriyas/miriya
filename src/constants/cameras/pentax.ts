import {
  CameraType,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  FOCUS_NAME,
  VIDEO_SCAN_TYPE,
  ENGINE_TYPE,
} from '@/types/cameras.d';

export const PENTAXS: CameraType[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  // 1999 =============================================
  // 2000 =============================================
  // 2001 =============================================
  // 2002 =============================================
  // 2003 =============================================
  {
    year: 2003,
    maker: CAMERA_MAKER.PENTAX,
    name: '*ist D',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.7,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.PENTAX,
    name: '*ist DS',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 2.0,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    maker: CAMERA_MAKER.PENTAX,
    name: '*ist DS2',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-1S',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2005,
    name: '*ist DL',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 3,
      pointsCross: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    name: 'K10D',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-10',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    name: '*ist DL2',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-1L',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 5,
      pointsCross: 5,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    name: 'K100D',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    name: 'K110D',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    name: 'K100D super',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    maker: CAMERA_MAKER.PENTAX,
    name: 'K20D',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-20',
    sensor: {
      pixelsFamiliar: '14.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2008,
    name: 'K200D',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.8,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2008,
    name: 'K-m',
    otherNames: ['K2000'],
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 3.5,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      points: 5,
      pointsCross: 5,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    name: 'K-7',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '14.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: 5.2,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7P,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2009,
    name: 'K-x',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 4.7,
      speed: 6000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7P,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    name: '645D',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '40M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
      vr: true,
    },
    shutter: {
      fps: 1.1,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9P,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.62,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2010,
    name: 'K-5',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9P,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2010,
    name: 'K-r',
    maker: CAMERA_MAKER.PENTAX,
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: 5.6,
      speed: 6000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    name: 'Q',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2012 =============================================
  {
    year: 2012,
    name: 'K-5 II',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2012,
    name: 'K-5 IIs',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    //   noLowPass: true,
    // },
  },
  {
    year: 2012,
    name: 'K-01',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2012,
    name: 'K-30',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2012,
    name: 'Q10',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2013 =============================================
  {
    year: 2013,
    name: 'K-3',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2013,
    name: 'K-50',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2013,
    name: 'K-500',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2013,
    name: 'Q7',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2014 =============================================
  {
    year: 2014,
    name: '645Z',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2014,
    name: 'K-S1',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2014,
    name: 'Q-S1',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2015 =============================================
  {
    year: 2015,
    name: 'K-3 II',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2015,
    name: 'K-S2',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2016 =============================================
  {
    year: 2016,
    name: 'K-1',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  {
    year: 2016,
    name: 'K-70',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2017 =============================================
  {
    year: 2017,
    name: 'KP',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2018 =============================================
  {
    year: 2018,
    name: 'K-1 II',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2019 =============================================

  // 2020 =============================================
  // 2021 =============================================
  {
    year: 2021,
    name: 'K-3 III',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },

  // 2022 =============================================
  {
    year: 2022,
    name: 'KF',
    maker: CAMERA_MAKER.PENTAX,
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    // },
  },
  // 2023 =============================================
];
