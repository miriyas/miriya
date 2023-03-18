import {
  CameraType,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  FOCUS_NAME,
  MOUNT,
  GRADE,
  VIDEO_SCAN_TYPE,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Kodak_DCS

export const KODAKS: CameraType[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  {
    year: 1998,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS315',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '1.5M',
      size: SENSOR_SIZE.C26,
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 400,
    },
    shutter: {
      fps: 2,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM274,
      points: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '8분할측광',
    },
    refs: [
      'https://www.kodak.com/global/plugins/acrobat/en/professional/manuals/dcs/DCS300/6b0935.pdf',
      'http://camera-wiki.org/wiki/Kodak_DCS_300_series',
      'https://en.wikipedia.org/wiki/Kodak_DCS_300_series',
    ],
  },

  // 1999 =============================================
  {
    year: 1999,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS330',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '3M',
      size: SENSOR_SIZE.C19,
      type: SENSOR_TYPE.CCD,
      isoMin: 125,
      isoMax: 400,
    },
    shutter: {
      fps: 1,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM274,
      points: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '8분할측광',
    },
    refs: [
      'https://www.kodak.com/global/plugins/acrobat/en/professional/manuals/dcs/DCS300/6b0935.pdf',
      'http://camera-wiki.org/wiki/Kodak_DCS_300_series',
      'https://en.wikipedia.org/wiki/Kodak_DCS_300_series',
    ],
  },

  // 2000 =============================================
  // 2001 =============================================
  // 2002 =============================================
  {
    year: 2002,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS Pro 14n',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '13.9M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 80,
      isoMax: 800,
    },
    shutter: {
      fps: 1.7,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: '?',
      coverage: 95,
    },
    refs: ['https://www.dpreview.com/reviews/kodakdcs14n/'],
  },

  // 2003 =============================================
  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS Pro SLR/n',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '13.5M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 6,
      isoMax: 1600,
    },
    shutter: {
      fps: 1.7,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    display: {
      inches: 2.0,
      pixels: 130_000,
    },
    refs: ['https://en.wikipedia.org/wiki/Kodak_DCS_Pro_SLR/n'],
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS Pro SLR/c',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '14M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 160,
      isoMax: 1600,
    },
    shutter: {
      fps: '?',
      speed: 6000,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: '?',
      coverage: 92,
    },
    display: {
      inches: 1.8,
      pixels: '?',
    },
    refs: [
      'https://en.wikipedia.org/wiki/Kodak_DCS_Pro_SLR/c',
      'https://www.dpreview.com/products/kodak/slrs/kodak_dcsslrc/specifications',
    ],
  },

  // 2005 =============================================
  // 2006 =============================================
  // 2007 =============================================
  // 2008 =============================================
  // 2009 =============================================
  // 2010 =============================================
  // 2012 =============================================
  // 2013 =============================================
  // 2014 =============================================
  {
    year: 2014,
    maker: CAMERA_MAKER.KODAK,
    mount: MOUNT.MFourThird,
    grade: GRADE.ENTRY,
    name: 'Pixpro S-1',
    predecessor: [],
    successor: [],
    sensor: {
      pixelsFamiliar: '16.83M',
      size: SENSOR_SIZE.FT,
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 4,
      speed: 4000,
    },
    focus: {
      points: 25,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 30,
        },
        {
          resolution: 720,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 60,
        },
      ],
    },

    metering: {
      desc: '5분할측광',
    },
    refs: ['https://kodakpixpro.com/cameras/mirrorless/s-1/'],
  },

  // 2015 =============================================
  // 2016 =============================================
  // 2017 =============================================
  // 2018 =============================================
  // 2019 =============================================
  // 2020 =============================================
  // 2021 =============================================
  // 2022 =============================================
  // 2023 =============================================
];
