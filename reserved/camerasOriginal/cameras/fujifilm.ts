import {
  CameraCore,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  ENGINE_TYPE,
  CAMERA_MAKER,
  GRADE,
  MOUNT,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Template:Fujifilm_DSLR_cameras

export const FUJIFILM: CameraCore[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  // 1999 =============================================
  // 2000 =============================================
  {
    year: 2000,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'S1 Pro',
    successor: 'S2 Pro',
    sensor: {
      name: 'Super CCD',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 320,
      isoMax: 1600,
    },
  },

  // 2001 =============================================
  // 2002 =============================================
  {
    year: 2002,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'S2 Pro',
    predecessor: 'S1 Pro',
    successor: 'S3 Pro',
    sensor: {
      name: 'Super CCD',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 1600,
    },
  },

  // 2003 =============================================
  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'S3 Pro',
    predecessor: 'S1 Pro',
    successor: 'S5 Pro',
    sensor: {
      name: 'Super CCD SR-II',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 1600,
    },
  },

  // 2005 =============================================
  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'S5 Pro',
    predecessor: 'S3 Pro',
    sensor: {
      name: 'Super CCD SR Pro',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'S3 Pro UVIR',
    sensor: {
      name: 'Super CCD SR-II',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 1600,
    },
  },

  // 2007 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'IS Pro',
    predecessor: 'S3 Pro',
    sensor: {
      name: 'Super CCD SR Pro',
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
  },

  // 2008 =============================================
  // 2009 =============================================
  // 2010 =============================================
  // 2011 =============================================
  // 2012 =============================================
  {
    year: 2012,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.PROFESSIONAL,
    name: 'X-Pro1',
    successor: 'X-Pro2',
    sensor: {
      name: 'X-Trans',
      engine: ENGINE_TYPE.EXRPRO,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
      cleaning: true,
    },
    shutter: {
      fps: '6fps',
      speed: 4000,
    },
    focus: {
      desc: '49포인트',
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.HYBRID,
      resolution: 1440_000,
      magnification: 0.6,
    },
    display: {
      desc: '3.0" 1230K',
    },
    metering: {
      desc: '256존측광',
    },
    refs: 'https://www.dpreview.com/reviews/fujifilm-x-pro1/2',
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-E1',
    successor: 'X-E2',
    sensor: {
      name: 'X-Trans',
      engine: ENGINE_TYPE.EXRPRO,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      cleaning: true,
    },
    shutter: {
      fps: '6fps',
      speed: 4000,
    },
    focus: {
      desc: '49포인트',
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2360_000,
    },
    display: {
      desc: '2.8" 460K',
    },
    metering: {
      desc: '256존측광',
    },
    video: {
      format: 'H.264',
      modes: '1080@24p, 720@24p',
    },
    refs: 'https://www.dpreview.com/products/fujifilm/slrs/fujifilm_xe1/specifications',
  },

  // 2013 =============================================
  {
    year: 2013,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-E2',
    predecessor: 'X-E1',
    successor: 'X-E2S',
    sensor: {
      name: 'X-Trans II',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
      cleaning: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '77포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2360_000,
    },
    display: {
      desc: '3.0" 1230K',
    },
    metering: {
      desc: '256존측광',
    },
    video: {
      format: 'H.264, MPEG-4',
      modes: '1080@60p, 720@24p',
    },
    refs: 'https://www.dpreview.com/products/fujifilm/slrs/fujifilm_xe2/specifications',
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-M1',
    sensor: {
      name: 'X-Trans',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 6400,
      cleaning: true,
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A1',
    successor: 'X-A2',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 6400,
      cleaning: true,
    },
  },

  // 2014 =============================================
  {
    year: 2014,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T1',
    successor: 'X-T2',
    sensor: {
      name: 'X-Trans2',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },

  // 2015 =============================================
  {
    year: 2015,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-T10',
    successor: 'X-T20',
    sensor: {
      name: 'X-Trans 2',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A2',
    predecessor: 'X-A1',
    successor: 'X-A3',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
    },
  },

  // 2016 =============================================
  {
    year: 2016,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.PROFESSIONAL,
    name: 'X-Pro2',
    predecessor: 'X-Pro1',
    successor: 'X-Pro3',
    sensor: {
      name: 'X-Trans 3',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-E2S',
    predecessor: 'X-E2',
    successor: 'X-E23',
    sensor: {
      name: 'X-Trans II',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
      cleaning: true,
    },
    shutter: {
      fps: '7fps',
      speed: 32000,
    },
    focus: {
      desc: '77포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2360_000,
    },
    display: {
      desc: '3.0" 1040K',
    },
    metering: {
      desc: '256존측광',
    },
    video: {
      format: 'H.264, MPEG-4',
      modes: '1080@60p, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/fujifilm/slrs/fujifilm_xe2s/specifications',
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T2',
    predecessor: 'X-T1',
    successor: 'X-T3',
    sensor: {
      name: 'X-Trans III',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A3',
    predecessor: 'X-A2',
    successor: 'X-A5',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },

  // 2017 =============================================
  {
    year: 2017,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 50S',
    successor: 'GFX 50S II',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '51.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 60,
      isoMax: 102400,
    },
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-T20',
    predecessor: 'X-T10',
    successor: 'X-T30',
    sensor: {
      name: 'X-Trans 3',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-E3',
    predecessor: 'X-E2S',
    successor: 'X-E4',
    sensor: {
      name: 'X-Trans III',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
      cleaning: true,
    },
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A10',
    successor: 'X-A20',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2018 =============================================
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 50R',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '51.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-H1',
    successor: 'X-H2',
    sensor: {
      name: 'X-Trans 3',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T3',
    predecessor: 'X-T2',
    successor: 'X-T4',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T100',
    successor: 'X-T200',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A5',
    predecessor: 'X-A3',
    successor: 'X-A7',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A20',
    predecessor: 'X-A10',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
  },

  // 2019 =============================================
  {
    year: 2019,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 100',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '102M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.PROFESSIONAL,
    name: 'X-Pro3',
    predecessor: 'X-Pro2',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-T30',
    predecessor: 'X-T20',
    successor: 'X-T30 II',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ENTRY,
    name: 'X-A7',
    predecessor: 'X-A5',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },
  // 2020 =============================================
  {
    year: 2020,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 100 IR',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '102M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-S10',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T4',
    predecessor: 'X-T3',
    successor: 'X-T5',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T200',
    predecessor: 'X-T100',
    sensor: {
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
  },

  // 2021 =============================================
  {
    year: 2021,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 100S',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '102M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
  },
  {
    year: 2021,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiG,
    grade: GRADE.PROFESSIONAL,
    name: 'GFX 50S II',
    sensor: {
      size: SENSOR_SIZE.F645C13,
      pixelsFamiliar: '51.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
  },
  {
    year: 2021,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-T30 II',
    predecessor: 'X-T30',
    sensor: {
      name: 'X-Trans 4',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2021,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.MIDRANGE,
    name: 'X-E4',
    predecessor: 'X-E3',
    sensor: {
      name: 'X-Trans IV',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
      cleaning: true,
    },
  },
  // 2022 =============================================
  {
    year: 2022,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-H2',
    predecessor: 'X-H1',
    sensor: {
      name: 'X-Trans 5',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2022,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-H2S',
    sensor: {
      name: 'X-Trans 5',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '26.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 51200,
    },
  },
  {
    year: 2022,
    maker: CAMERA_MAKER.FUJIFILM,
    mount: MOUNT.FujiX,
    grade: GRADE.ADVANCED,
    name: 'X-T5',
    predecessor: 'X-T4',
    sensor: {
      name: 'X-Trans 5',
      engine: ENGINE_TYPE.EXRPRO2,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '40.21M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 64,
      isoMax: 51200,
    },
  },

  // 2023 =============================================
];
