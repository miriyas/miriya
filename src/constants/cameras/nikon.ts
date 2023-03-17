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

export const NIKONS: CameraType[] = [
  // 1995 =============================================
  {
    year: 1995,
    maker: CAMERA_MAKER.NIKON,
    name: 'E2',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-505',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 1600,
    },
    shutter: {
      fps: 1,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: ['http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2E2s/index.htm'],
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.NIKON,
    name: 'E2s',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-515',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: ['http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2E2s/index.htm'],
  },

  // 1996 =============================================
  {
    year: 1996,
    maker: CAMERA_MAKER.NIKON,
    name: 'E2N',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-505A',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 3200,
    },
    shutter: {
      fps: 1,
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: ['http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2NE2Ns/index.htm'],
  },
  {
    year: 1996,
    maker: CAMERA_MAKER.NIKON,
    name: 'E2NS',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-515A',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: ['http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2NE2Ns/index.htm'],
  },

  // 1997 =============================================

  // 1998 =============================================
  {
    year: 1998,
    maker: CAMERA_MAKER.NIKON,
    name: 'E3',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-560',
    sensor: {
      pixelsFamiliar: '1.4M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 800,
      isoMax: 3200,
    },
    shutter: {
      fps: 1,
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: [
      'https://imaging.nikon.com/lineup/dslr/e3_e3s/index.htm',
      'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E3E3s/specE3E3s.htm',
      'https://www.digitalkameramuseum.de/en/cameras/item/nikon-e3',
    ],
  },
  {
    year: 1998,
    maker: CAMERA_MAKER.NIKON,
    name: 'E3s',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-565',
    sensor: {
      pixelsFamiliar: '1.4M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 800,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      points: 1,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '5분할측광',
    },
    refs: [
      'https://imaging.nikon.com/lineup/dslr/e3_e3s/index.htm',
      'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E3E3s/specE3E3s.htm',
      'https://www.digitalkameramuseum.de/en/cameras/item/nikon-e3s',
    ],
  },

  // 1999 =============================================
  {
    year: 1999,
    name: 'D1',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '2.74M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: 4.5,
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2000 =============================================
  // 2001 =============================================
  {
    year: 2001,
    name: 'D1H',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '2.74M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: 5,
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2001,
    name: 'D1X',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '5.33M',
      type: SENSOR_TYPE.CCD,
      isoMin: 125,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2002 =============================================
  {
    year: 2002,
    name: 'D100',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: {
      desc: '10분할측광',
    },
  },

  // 2003 =============================================
  {
    year: 2003,
    name: 'D2H',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '4.1M',
      type: SENSOR_TYPE.LBCAST,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 211_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2004 =============================================
  {
    year: 2004,
    name: 'D2X',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 800,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2004,
    name: 'D70',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 130_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    name: 'D2Hs',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '4.1M',
      type: SENSOR_TYPE.LBCAST,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    name: 'D200',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    name: 'D70s',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 2.1,
      pixels: 130_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    name: 'D50',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 2.0,
      pixels: 130_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    name: 'D2Xs',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2006,
    name: 'D80',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2006,
    name: 'D40',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      points: 3,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    name: 'D3',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 9,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2007,
    name: 'D300',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500DX,
      points: 51,
      pointsCross: 15,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2007,
    name: 'D40x',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      points: 3,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    name: 'D3X',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '24.5M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 6400,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      points: 51,
      pointsCross: 15,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2008,
    name: 'D700',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      points: 51,
      pointsCross: 15,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2008,
    name: 'D90',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 4.5,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    video: {
      format: 'M-JPEG',
      modes: [
        {
          resolution: 720,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 24,
        },
      ],
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2008,
    name: 'D60',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      points: 3,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    name: 'D3s',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 102400,
    },
    shutter: {
      fps: 9,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      points: 11,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    video: {
      format: 'M-JPEG',
      modes: [
        {
          resolution: 720,
          fps: 24,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2009,
    name: 'D300s',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500DX,
      points: 51,
      pointsCross: 15,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    video: {
      format: 'M-JPEG',
      modes: [
        {
          resolution: 720,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 24,
        },
      ],
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2009,
    name: 'D5000',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 4,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.78,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2009,
    name: 'D3000',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    name: 'D7000',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.APSC,
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2010,
    name: 'D3100',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      points: 11,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 24,
        },
        {
          resolution: 720,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 30,
        },
      ],
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    name: 'D5100',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      name: 'IMX071',
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 102400,
    },
  },

  // 2012 =============================================
  {
    year: 2012,
    name: 'D4',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '16.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
  },
  {
    year: 2012,
    name: 'D800',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '36.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2012,
    name: 'D800E',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '36.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      noLowPass: true,
    },
  },
  {
    year: 2012,
    name: 'D600',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
  },
  {
    year: 2012,
    name: 'D5200',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      name: 'TOS-5105',
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2012,
    name: 'D3200',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
  },

  // 2013 =============================================
  {
    year: 2013,
    name: 'Df',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 204800,
    },
  },
  {
    year: 2013,
    name: 'D610',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
  },
  {
    year: 2013,
    name: 'D7100',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.APSC,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2014 =============================================
  {
    year: 2014,
    name: 'D4s',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 409600,
    },
  },
  {
    year: 2014,
    name: 'D810',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '36.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 64,
      isoMax: 51200,
    },
  },
  {
    year: 2014,
    name: 'D750',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 51200,
    },
  },
  {
    year: 2014,
    name: 'D3300',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2015 =============================================
  {
    year: 2015,
    name: 'D810A',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '36.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 64,
      isoMax: 51200,
      astro: true,
    },
  },
  {
    year: 2015,
    name: 'D7200',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.APSC,
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 102400,
    },
  },
  {
    year: 2015,
    name: 'D5500',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      name: 'TOS-5105',
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      noLowPass: true,
      // 니콘 첫 터치
    },
  },

  // 2016 =============================================
  {
    year: 2016,
    name: 'D5',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED5,
      pixelsFamiliar: '20.8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3280000,
    },
  },
  {
    year: 2016,
    name: 'D500',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED5,
      pixelsFamiliar: '20.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 1640000,
    },
  },
  {
    year: 2016,
    name: 'D5600',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      name: 'TOS-5105',
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
      noLowPass: true,
    },
  },
  {
    year: 2016,
    name: 'D3400',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2017 =============================================
  {
    year: 2017,
    name: 'D850',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED5,
      pixelsFamiliar: '45.7M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 64,
      isoMax: 102400,
    },
  },
  {
    year: 2017,
    name: 'D7500',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.APSC,
      engine: ENGINE_TYPE.EXPEED5,
      pixelsFamiliar: '20.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1640000,
    },
  },

  // 2018 =============================================
  {
    year: 2018,
    name: 'D3500',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },

  // 2019 =============================================
  // 2020 =============================================
  {
    year: 2020,
    name: 'D6',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED6,
      pixelsFamiliar: '20.8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3280000,
    },
  },
  {
    year: 2020,
    name: 'D780',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED6,
      pixelsFamiliar: '24.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 204800,
    },
  },

  // 2021 =============================================
  // 2022 =============================================
  // 2023 =============================================
];
