import {
  CameraType,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  FOCUS_NAME,
  // VIDEO_SCAN_TYPE,
  // ENGINE_TYPE,
  MOUNT,
  GRADE,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Template:Pentax_digital_interchangeable_lens_cameras
// https://en.wikipedia.org/wiki/Template:Pentax_MILC_cameras

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
    mount: MOUNT.PentaxK,
    grade: GRADE.MIDRANGE,
    name: '*ist D',
    successor: 'K10D',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.7fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: '*ist DS',
    successor: '*ist DS2',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      desc: '2.0" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: '*ist DS2',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-1S',
    predecessor: '*ist DS',
    successor: 'K-r',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: '*ist DL',
    successor: '*ist DL2',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '3포인트 3크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.MIDRANGE,
    name: 'K10D',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-10',
    predecessor: '*ist D',
    successor: 'K20D',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: '*ist DL2',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-1L',
    predecessor: '*ist DL',
    successor: 'K110D',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '5포인트 5크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K100D',
    successor: 'K100D super',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K110D',
    predecessor: '*ist DL2',
    successor: 'K-m',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K100D super',
    predecessor: 'K100D',
    successor: 'K200D',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.5" 210K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.MIDRANGE,
    name: 'K20D',
    maker2: CAMERA_MAKER.SAMSUNG,
    name2: 'GX-20',
    predecessor: 'K10D',
    successor: 'KP',
    sensor: {
      pixelsFamiliar: '14.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K200D',
    predecessor: 'K100D super',
    successor: 'K-30',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.8fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '16분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-m',
    otherNames: 'K2000',
    predecessor: 'K110D',
    successor: 'K-x',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '3.5fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7,
      desc: '5포인트 5크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-7',
    predecessor: 'K20D',
    successor: 'K-5',
    sensor: {
      pixelsFamiliar: '14.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: '5.2fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7P,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      desc: '3.0" 921K',
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-x',
    predecessor: 'K-m',
    successor: 'K-S1',
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '4.7fps',
      speed: 6000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX7P,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    maker: CAMERA_MAKER.PENTAX,
    name: '645D',
    mount: MOUNT.M645,
    grade: GRADE.PROFESSIONAL,
    successor: '645Z',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '40M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
      vr: true,
    },
    shutter: {
      fps: '1.1fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9P,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.62,
      coverage: 98,
    },
    display: {
      desc: '3.0" 921K',
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-5',
    predecessor: 'K-7',
    successor: 'K-5 II',
    sensor: {
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9P,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      desc: '3.0" 921K',
    },
    metering: {
      desc: '77분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-r',
    predecessor: '*ist DS2',
    successor: 'K-500',
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: '5.6fps',
      speed: 6000,
    },
    focus: {
      name: FOCUS_NAME.SAFOX9,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      desc: '3.0" 921K',
    },
    metering: {
      desc: '16분할측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxQ,
    grade: GRADE.ENTRY,
    name: 'Q',
    successor: 'Q10',
    // sensor: {
    //   size: SENSOR_SIZE.Q23,
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-5 II',
    predecessor: 'K-5',
    successor: 'K-3',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-5 IIs',
    predecessor: 'K-5',
    successor: 'K-3',
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
    maker: CAMERA_MAKER.PENTAX,
    name: 'K-01',
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K-30',
    predecessor: 'K200D',
    successor: 'K-50',
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
    maker: CAMERA_MAKER.PENTAX,
    name: 'Q10',
    mount: MOUNT.PentaxQ,
    grade: GRADE.ENTRY,
    predecessor: 'Q',
    // sensor: {
    //   size: SENSOR_SIZE.Q23,
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-3',
    predecessor: 'K-5 II',
    successor: 'K-3 II',

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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K-50',
    predecessor: 'K-30',
    successor: 'K-70',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-500',
    predecessor: 'K-r',
    successor: 'K-S2',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxQ,
    grade: GRADE.ENTRY,
    name: 'Q7',
    successor: 'Q-S1',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.PROFESSIONAL,
    name: '645Z',
    predecessor: '645D',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-S1',
    predecessor: 'K-x',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxQ,
    grade: GRADE.ENTRY,
    name: 'Q-S1',
    predecessor: 'Q7',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.PROFESSIONAL,
    name: '645Z IR',
    predecessor: '645D',
    // sensor: {
    //   size: SENSOR_SIZE.FF,
    //   engine: ENGINE_TYPE.EXPEED4,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 409600,
    //   ir: true
    // },
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-3 II',
    predecessor: 'K-3',
    successor: 'K-3 III',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRY,
    name: 'K-S2',
    predecessor: 'K-500',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.FLAGSHIP,
    name: 'K-1',
    successor: 'K-1 II',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'K-70',
    predecessor: 'K-50',
    successor: 'KF',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.FLAGSHIP,
    name: 'KP',
    predecessor: 'K20D',

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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.FLAGSHIP,
    name: 'K-1 II',
    predecessor: 'K-1',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ADVANCED,
    name: 'K-3 III',
    predecessor: 'K-3 II',
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
    maker: CAMERA_MAKER.PENTAX,
    mount: MOUNT.PentaxK,
    grade: GRADE.ENTRYMID,
    name: 'KF',
    predecessor: 'K-70',
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
