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

export const SONYS: CameraType[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  // 1999 =============================================
  // 2000 =============================================
  // 2001 =============================================
  // 2002 =============================================
  // 2003 =============================================
  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.MINOLTA,
    name: 'DG-7D',
    otherNames: ['Dynax 7D', 'Maxxum 7D', 'α-7 Digital'],
    sensor: {
      pixelsFamiliar: '6.1M',
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 207_000,
    },
    metering: {
      desc: '14분할측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    name: 'DG-5D',
    otherNames: ['Dynax 5D', 'Maxxum 5D', 'α-5 Digital', 'α Sweet Digital'],
    maker: CAMERA_MAKER.MINOLTA,
    sensor: {
      pixelsFamiliar: '6.1M',
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 115_000,
    },
    metering: {
      desc: '14분할측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    name: 'A100',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 1600,
      vr: true,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    name: 'A700',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    name: 'A900',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    name: 'A350',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    name: 'A300',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    name: 'A200',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    name: 'A850',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: 3,
      speed: 8000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    name: 'A550',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    name: 'A500',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    name: 'A380',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    name: 'A330',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    name: 'A230',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    name: 'A580',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      points: 15,
      pointsCross: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      swivel: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'A560',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      points: 15,
      pointsCross: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      swivel: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'A450',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'A390',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'A290',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'A55',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: 10,
      speed: 4000,
    },
    focus: {
      points: 15,
      pointsCross: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'AVCHD',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.INTERLACED,
          fps: 60,
        },
      ],
    },
    metering: {
      desc: '1200존측광',
    },
  },
  {
    year: 2010,
    name: 'A33',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      points: 15,
      pointsCross: 3,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'AVCHD',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.INTERLACED,
          fps: 60,
        },
      ],
    },
    metering: {
      desc: '1200존측광',
    },
  },
  {
    year: 2010,
    name: 'NEX-5',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      trueblack: true,
    },
    video: {
      format: 'AVCHD',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.INTERLACED,
          fps: 60,
        },
      ],
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    name: 'NEX-3',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: 7,
      speed: 4000,
    },
    focus: {
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
      tilt: true,
      trueblack: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    name: 'A77',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZ,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 16000,
    },
  },
  {
    year: 2011,
    name: 'NEX-7',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2011,
    name: 'A65',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZ,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
  },
  {
    year: 2011,
    name: 'NEX-5N',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '14.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },
  {
    year: 2011,
    name: 'NEX-C3',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '16.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },
  {
    year: 2011,
    name: 'A35',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   name: 'Exmor',
    //   engine: ENGINE_TYPE.BIONZ,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '16.1M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    // },
  },

  // 2012 =============================================
  {
    year: 2012,
    name: 'A99',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2012,
    name: 'NEX-6',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2012,
    name: 'A57',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZ,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2012,
    name: 'NEX-5R',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '14.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },
  {
    year: 2012,
    name: 'A37',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   name: 'Exmor',
    //   engine: ENGINE_TYPE.BIONZ,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '16.1M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    // },
  },
  {
    year: 2012,
    name: 'NEX-F3',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '14.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },

  // 2013 =============================================
  {
    year: 2013,
    name: 'A7',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2013,
    name: 'A7R',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2013,
    name: 'A58',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZ,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '20.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2013,
    name: 'NEX-5T',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '14.2M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },
  {
    year: 2013,
    name: 'A3000',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2013,
    name: 'NEX-3N',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '16M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 200,
    //   isoMax: 12800,
    //   vr: true,
    // },
  },

  // 2014 =============================================
  {
    year: 2014,
    name: 'A7 II',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2014,
    name: 'A7S',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2014,
    name: 'A77 II',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZX,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
  },
  {
    year: 2014,
    name: 'A6000',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2014,
    name: 'A5100',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      engine: ENGINE_TYPE.BIONZX,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
  },
  {
    year: 2014,
    name: 'A5000',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2014,
    name: 'A3500',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2015 =============================================
  {
    year: 2015,
    name: 'A7R II',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2015,
    name: 'A7S II',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2015,
    name: 'A68',
    maker: CAMERA_MAKER.SONY,
    sensor: {
      name: 'Exmor',
      engine: ENGINE_TYPE.BIONZX,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2016 =============================================
  {
    year: 2016,
    name: 'A99 II',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   name: 'Exmor R',
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.FF,
    //   pixelsFamiliar: '42.4M',
    //   type: SENSOR_TYPE.CMOS,
    //   // isoMin: 100,
    //   // isoMax: 25600,
    // },
  },
  {
    year: 2016,
    name: 'A6500',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2016,
    name: 'A6300',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2017 =============================================
  {
    year: 2017,
    name: 'A9',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2017,
    name: 'A7R III',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2018 =============================================
  {
    year: 2018,
    name: 'A7 III',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2019 =============================================
  {
    year: 2019,
    name: 'A9 II',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2019,
    name: 'A7R IV',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2019,
    name: 'A6600',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2019,
    name: 'A6400',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2019,
    name: 'A6100',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2020 =============================================
  {
    year: 2020,
    name: 'A7S III',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2020,
    name: 'A7C',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2021 =============================================
  {
    year: 2021,
    name: 'A1',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },
  {
    year: 2021,
    name: 'A7 IV',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2022 =============================================
  {
    year: 2022,
    name: 'A7R V',
    maker: CAMERA_MAKER.SONY,
    // sensor: {
    //   engine: ENGINE_TYPE.BIONZX,
    //   size: SENSOR_SIZE.APSC,
    //   pixelsFamiliar: '20M',
    //   type: SENSOR_TYPE.CMOS,
    //   isoMin: 100,
    //   isoMax: 25600,
    //   vr: true,
    // },
  },

  // 2023 =============================================
];
