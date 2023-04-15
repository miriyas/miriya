import {
  CameraType,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  // FOCUS_NAME,
  ENGINE_TYPE,
  MOUNT,
  GRADE,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Template:Konica_Minolta/Sony_DSLR_cameras
// https://en.wikipedia.org/wiki/Template:Sony_MILC_cameras

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
    mount: MOUNT.SonyA,
    grade: GRADE.ADVANCED,
    name: 'DG-7D',
    otherNames: 'Dynax 7D, Maxxum 7D, α-7 Digital',
    sensor: {
      pixelsFamiliar: '6.1M',
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      desc: '2.5" 207K',
    },
    metering: {
      desc: '14분할측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    maker: CAMERA_MAKER.MINOLTA,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'DG-5D',
    otherNames: 'Dynax 5D, Maxxum 5D, α-5 Digital, α Sweet Digital',
    sensor: {
      pixelsFamiliar: '6.1M',
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      desc: '2.5" 115K',
    },
    metering: {
      desc: '14분할측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A100',
    successor: 'A550',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 1600,
      vr: true,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ADVANCED,
    name: 'A700',
    successor: 'A77',
    sensor: {
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A900',
    successor: 'A99',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A350',
    successor: 'A380',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A300',
    successor: 'A330',
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A200',
    successor: 'A230',
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A850',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '24.6M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
      vr: true,
    },
    shutter: {
      fps: '3fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 98,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A550',
    predecessor: 'A100',
    successor: 'A580',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A500',
    successor: 'A560',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A380',
    predecessor: 'A350',
    successor: 'A390',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    name: 'A330',
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    predecessor: 'A300',
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A230',
    predecessor: 'A200',
    successor: 'A290',
    sensor: {
      size: SENSOR_SIZE.APSC,
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
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '40분할측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A580',
    predecessor: 'A550',
    successor: 'A58',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '15포인트 3크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
      tilt: true,
      swivel: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A560',
    predecessor: 'A500',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '15포인트 3크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
      tilt: true,
      swivel: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A450',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A390',
    predecessor: 'A380',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A290',
    predecessor: 'A230',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
      vr: true,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A55',
    successor: 'A57',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: '10fps',
      speed: 4000,
    },
    focus: {
      desc: '15포인트 3크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'AVCHD',
      modes: '1080@60i',
    },
    metering: {
      desc: '1200존측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A33',
    successor: 'A35',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      vr: true,
    },
    shutter: {
      fps: '7fps',
      speed: 4000,
    },
    focus: {
      desc: '15포인트 3크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      magnification: 1.1,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'AVCHD',
      modes: '1080@60i',
    },
    metering: {
      desc: '1200존측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'NEX-5',
    successor: 'NEX-5N',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '7fps',
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
      desc: '3.0" 920K',
      tilt: true,
      trueblack: true,
    },
    video: {
      format: 'AVCHD',
      modes: '1080@60i',
    },
    metering: {
      desc: '40분할측광',
    },
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'NEX-3',
    successor: 'NEX-C3',
    sensor: {
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 200,
      isoMax: 12800,
      vr: true,
    },
    shutter: {
      fps: '7fps',
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
      desc: '3.0" 920K',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ADVANCED,
    name: 'A77',
    predecessor: 'A700',
    successor: 'A77 II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ADVANCED,
    name: 'NEX-7',
    predecessor: 'A6500',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.MIDRANGE,
    name: 'A65',
    successor: 'A68',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'NEX-5N',
    predecessor: 'NEX-5',
    successor: 'NEX-5R',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'NEX-C3',
    predecessor: 'NEX-3',
    successor: 'NEX-F3',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRY,
    name: 'A35',
    predecessor: 'A33',
    successor: 'A37',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A99',
    predecessor: 'A900',
    successor: 'A99 II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'NEX-6',
    successor: 'A6300',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A57',
    predecessor: 'A55',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'NEX-5R',
    predecessor: 'NEX-5N',
    successor: 'NEX-5T',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A37',
    predecessor: 'A35',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'NEX-F3',
    predecessor: 'NEX-C3',
    successor: 'NEX-3N',
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
    maker: CAMERA_MAKER.SONY,
    name: 'A7',
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    successor: 'A7 II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7R',
    successor: 'A7R II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ENTRYMID,
    name: 'A58',
    predecessor: 'A580',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'NEX-5T',
    predecessor: 'NEX-5R',
    successor: 'A5100',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'A3000',
    successor: 'A3500',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'NEX-3N',
    predecessor: 'NEX-F3',
    successor: 'A5000',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7 II',
    predecessor: 'A7',
    successor: 'A7 III',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7S',
    successor: 'A7S II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.ADVANCED,
    name: 'A77 II',
    predecessor: 'A77',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'A6000',
    successor: 'A6100',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'A5100',
    predecessor: 'NEX-5T',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'A5000',
    predecessor: 'NEX-3N',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ENTRY,
    name: 'A3500',
    predecessor: 'A3000',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7R II',
    predecessor: 'A7R',
    successor: 'A7R III',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7S II',
    predecessor: 'A7S',
    successor: 'A7S III',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.MIDRANGE,
    name: 'A68',
    predecessor: 'A65',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyA,
    grade: GRADE.PROFESSIONAL,
    name: 'A99 II',
    predecessor: 'A99',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ADVANCED,
    name: 'A6500',
    predecessor: 'NEX-7',
    successor: 'A6600',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'A6300',
    predecessor: 'NEX-6',
    successor: 'A6400',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A9',
    successor: 'A9 II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7R III',
    predecessor: 'A7R II',
    successor: 'A7R IV',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7 III',
    predecessor: 'A7 II',
    successor: 'A7 IV',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A9 II',
    predecessor: 'A9',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7R IV',
    predecessor: 'A7R III',
    successor: 'A7R V',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.ADVANCED,
    name: 'A6600',
    predecessor: 'A6500',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'A6400',
    predecessor: 'A6300',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.MIDRANGE,
    name: 'A6100',
    predecessor: 'A6000',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7S III',
    predecessor: 'A7S II',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7C',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.FLAGSHIP,
    name: 'A1',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7 IV',
    predecessor: 'A7 III',
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
    maker: CAMERA_MAKER.SONY,
    mount: MOUNT.SonyE,
    grade: GRADE.PROFESSIONAL,
    name: 'A7R V',
    predecessor: 'A7R IV',
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