import {
  CameraCore,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  FOCUS_NAME,
  ENGINE_TYPE,
  MOUNT,
  GRADE,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Template:Nikon_DSLR_cameras
// https://en.wikipedia.org/wiki/Template:Nikon_1_cameras
// https://en.wikipedia.org/wiki/Template:Nikon_Z_cameras

export const NIKONS: CameraCore[] = [
  // 1995 =============================================
  {
    year: 1995,
    maker: CAMERA_MAKER.NIKON,
    grade: GRADE.PROFESSIONAL,
    mount: MOUNT.NikonF,
    name: 'E2',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-505',
    successor: 'E2N',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 1600,
    },
    shutter: {
      fps: '1fps',
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2E2s/index.htm',
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.NIKON,
    grade: GRADE.PROFESSIONAL,
    mount: MOUNT.NikonF,
    name: 'E2s',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-515',
    successor: 'E2Ns',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2E2s/index.htm',
  },

  // 1996 =============================================
  {
    year: 1996,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'E2N',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-505A',
    predecessor: 'E2',
    successor: 'E3',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 3200,
    },
    shutter: {
      fps: '1fps',
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2NE2Ns/index.htm',
  },
  {
    year: 1996,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'E2Ns',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-515A',
    predecessor: 'E2s',
    successor: 'E3s',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 880,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2NE2Ns/index.htm',
  },

  // 1997 =============================================

  // 1998 =============================================
  {
    year: 1998,
    maker: CAMERA_MAKER.NIKON,
    grade: GRADE.PROFESSIONAL,
    name: 'E3',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-560',
    mount: MOUNT.NikonF,
    predecessor: 'E2N',
    sensor: {
      pixelsFamiliar: '1.4M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 800,
      isoMax: 3200,
    },
    shutter: {
      fps: '1fps',
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'https://imaging.nikon.com/lineup/dslr/e3_e3s/index.htm, http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E3E3s/specE3E3s.htm, https://www.digitalkameramuseum.de/en/cameras/item/nikon-e3',
  },
  {
    year: 1998,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'E3s',
    maker2: CAMERA_MAKER.FUJIFILM,
    name2: 'Fujix DS-565',
    predecessor: 'E2Ns',
    sensor: {
      pixelsFamiliar: '1.4M',
      size: SENSOR_SIZE.I23,
      type: SENSOR_TYPE.CCD,
      isoMin: 800,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 2000,
    },
    focus: {
      name: FOCUS_NAME.AM200,
      desc: '1포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'https://imaging.nikon.com/lineup/dslr/e3_e3s/index.htm, http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E3E3s/specE3E3s.htm, https://www.digitalkameramuseum.de/en/cameras/item/nikon-e3s',
  },

  // 1999 =============================================
  {
    year: 1999,
    maker: CAMERA_MAKER.NIKON,
    name: 'D1',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    successor: 'D1H, D1X',
    sensor: {
      pixelsFamiliar: '2.74M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: '4.5fps',
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      desc: '2.0" 120K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2000 =============================================
  // 2001 =============================================
  {
    year: 2001,
    maker: CAMERA_MAKER.NIKON,
    name: 'D1H',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D1',
    successor: 'D2H',
    sensor: {
      pixelsFamiliar: '2.74M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: '5fps',
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      desc: '2.0" 120K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2001,
    maker: CAMERA_MAKER.NIKON,
    name: 'D1X',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D1',
    successor: 'D2X',
    sensor: {
      pixelsFamiliar: '5.33M',
      type: SENSOR_TYPE.CCD,
      isoMin: 125,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 16000,
    },
    focus: {
      name: FOCUS_NAME.CAM1300,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      desc: '2.0" 120K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2002 =============================================
  {
    year: 2002,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D100',
    successor: 'D200',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
    },
    metering: {
      desc: '10분할측광',
    },
  },

  // 2003 =============================================
  {
    year: 2003,
    maker: CAMERA_MAKER.NIKON,
    name: 'D2H',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D1H',
    successor: 'D2Hs',
    sensor: {
      pixelsFamiliar: '4.1M',
      type: SENSOR_TYPE.LBCAST,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      desc: '2.5" 211K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.NIKON,
    name: 'D2X',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D1X',
    successor: 'D2Xs',
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 800,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D70',
    successor: 'D70s',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      desc: '1.8" 130K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    maker: CAMERA_MAKER.NIKON,
    name: 'D2Hs',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D2H',
    successor: 'D3',
    sensor: {
      pixelsFamiliar: '4.1M',
      type: SENSOR_TYPE.LBCAST,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D200',
    predecessor: 'D100',
    successor: 'D300',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D70s',
    predecessor: 'D70',
    successor: 'D80',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      desc: '2.1" 130K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D50',
    successor: 'D40x',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM900,
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      desc: '2.0" 130K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.NIKON,
    name: 'D2Xs',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D2X',
    successor: 'D3',
    sensor: {
      pixelsFamiliar: '12.4M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM2000,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D80',
    predecessor: 'D70s',
    successor: 'D90',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D40',
    successor: 'D3000',
    sensor: {
      pixelsFamiliar: '6.1M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      desc: '3포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    maker: CAMERA_MAKER.NIKON,
    name: 'D3',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    predecessor: 'D2Xs, D2Hs',
    successor: 'D3s',
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '9fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2007,
    maker: CAMERA_MAKER.NIKON,
    name: 'D300',
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    predecessor: 'D200',
    successor: 'D300s',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500DX,
      desc: '51포인트 15크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2007,
    maker: CAMERA_MAKER.NIKON,
    name: 'D40x',
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    predecessor: 'D50',
    successor: 'D60',
    sensor: {
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      desc: '3포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    maker: CAMERA_MAKER.NIKON,
    name: 'D3X',
    grade: GRADE.FLAGSHIP,
    mount: MOUNT.NikonF,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '24.5M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 6400,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      desc: '51포인트 15크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ADVANCED,
    name: 'D700',
    successor: 'D750',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      desc: '51포인트 15크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D90',
    predecessor: 'D80',
    successor: 'D7000',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '4.5fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'M-JPEG',
      modes: '720@24p',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D60',
    predecessor: 'D40x',
    successor: 'D5000',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM530,
      desc: '3포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.FLAGSHIP,
    name: 'D3s',
    predecessor: 'D3',
    successor: 'D4',
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '12.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 102400,
    },
    shutter: {
      fps: '9fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500FX,
      desc: '11포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'M-JPEG',
      modes: '720@24p',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.NIKON,
    name: 'D300s',
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    predecessor: 'D300',
    successor: 'D500',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      name: FOCUS_NAME.CAM3500DX,
      desc: '51포인트 15크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'M-JPEG',
      modes: '720@24p',
    },
    metering: {
      desc: '1005 RGB측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.NIKON,
    name: 'D5000',
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    predecessor: 'D60',
    successor: 'D5100',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '12.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '4fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.78,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
      tilt: true,
    },
    metering: {
      desc: '420 RGB측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3000',
    predecessor: 'D40',
    successor: 'D3100',
    sensor: {
      engine: ENGINE_TYPE.EXPEED,
      pixelsFamiliar: '10.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 230K',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D7000',
    predecessor: 'D90',
    successor: 'D7100',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3100',
    predecessor: 'D3000',
    successor: 'D3200',
    sensor: {
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      name: FOCUS_NAME.CAM1000,
      desc: '11포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 230K',
    },
    video: {
      format: 'H.264',
      modes: '1080@24p, 720@30p',
    },
    metering: {
      desc: '420 RGB측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D5100',
    predecessor: 'D5000',
    successor: 'D5200',
    sensor: {
      name: 'IMX071',
      engine: ENGINE_TYPE.EXPEED2,
      pixelsFamiliar: '16.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 102400,
    },
  },
  {
    year: 2011,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ADVANCED,
    name: '1 V1',
    successor: '1 V2',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '19fps',
      speed: 16000,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 921K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_v1/specifications',
  },
  {
    year: 2011,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.MIDRANGE,
    name: '1 J1',
    successor: '1 J2',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '10M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '10fps',
      speed: 16000,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 460K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_j1/specifications, https://www.nikon-image.co.kr/product/mirrorless/nikon%201%20j1',
  },

  // 2012 =============================================
  {
    year: 2012,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.FLAGSHIP,
    name: 'D4',
    predecessor: 'D3s',
    successor: 'D4s',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D800',
    successor: 'D810',
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
    maker: CAMERA_MAKER.NIKON,
    name: 'D800E',
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    successor: 'D810',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ADVANCED,
    name: 'D600',
    successor: 'D610',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D5200',
    predecessor: 'D5100',
    successor: 'D5300',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3200',
    predecessor: 'D3100',
    successor: 'D3300',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ADVANCED,
    name: '1 V2',
    predecessor: '1 V1',
    successor: '1 V3',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '14M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '15fps',
      speed: 16000,
    },
    focus: {
      desc: '73포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 921K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_v2/specifications',
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.MIDRANGE,
    name: '1 J2',
    predecessor: '1 J1',
    successor: '1 J3',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '10M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '10fps',
      speed: 16000,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 921K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_j2/specifications, https://www.nikon-image.co.kr/product/mirrorless/nikon%201%20j2',
  },

  // 2013 =============================================
  {
    year: 2013,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'Df',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ADVANCED,
    name: 'D610',
    predecessor: 'D600',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D5300',
    predecessor: 'D5200',
    successor: 'D5500',
    sensor: {
      name: 'TOS-5105',
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D7100',
    predecessor: 'D7000',
    successor: 'D7200',
    sensor: {
      size: SENSOR_SIZE.APSC,
      engine: ENGINE_TYPE.EXPEED3,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.MIDRANGE,
    name: '1 J3',
    predecessor: '1 J2',
    successor: '1 J4',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '14M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 160,
      isoMax: 6400,
    },
    shutter: {
      fps: '15fps',
      speed: 16000,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 921K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_j3/specifications',
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ENTRY,
    name: '1 S1',
    successor: '1 S2',
    sensor: {
      engine: ENGINE_TYPE.EXPEED3A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '10M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '15fps',
      speed: 16000,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 460K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080p@60, 720p@60',
    },
    refs: 'https://en.wikipedia.org/wiki/Nikon_1_S1, https://www.dpreview.com/products/nikon/slrs/nikon_s1/specifications, https://www.photographyblog.com/reviews/nikon_1_s1_review',
  },

  // 2014 =============================================
  {
    year: 2014,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.FLAGSHIP,
    name: 'D4s',
    predecessor: 'D4',
    successor: 'D5',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D810',
    predecessor: 'D800',
    successor: 'D850',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ADVANCED,
    name: 'D750',
    predecessor: 'D700',
    successor: 'D780',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3300',
    predecessor: 'D3200',
    successor: 'D3400',
    sensor: {
      engine: ENGINE_TYPE.EXPEED4,
      pixelsFamiliar: '24.2M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
  },
  {
    year: 2014,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ADVANCED,
    name: '1 V3',
    predecessor: '1 V2',
    sensor: {
      engine: ENGINE_TYPE.EXPEED4A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '60fps',
      speed: 16000,
    },
    focus: {
      desc: '171포인트',
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2359000,
    },
    display: {
      desc: '3.0" 1037K',
      tilt: true,
      touch: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60p, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_v3/specifications',
  },
  {
    year: 2014,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.MIDRANGE,
    name: '1 J4',
    predecessor: '1 J3',
    successor: '1 J5',
    sensor: {
      engine: ENGINE_TYPE.EXPEED4A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 160,
      isoMax: 12800,
    },
    shutter: {
      fps: '60fps',
      speed: 16000,
    },
    focus: {
      desc: '171포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 1037K',
      touch: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60p, 984@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_j4/specifications',
  },
  {
    year: 2014,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ENTRY,
    name: '1 S2',
    predecessor: '1 S1',
    sensor: {
      engine: ENGINE_TYPE.EXPEED4A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '60fps',
      speed: 16000,
    },
    focus: {
      desc: '171포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 460K',
    },
    video: {
      format: 'MPEG-4',
      modes: '1080@60p, 720@60p',
    },
    refs: 'https://en.wikipedia.org/wiki/Nikon_1_S2, https://www.dpreview.com/products/nikon/slrs/nikon_s2/specifications, https://www.nikon-image.co.kr/product/mirrorless/nikon%201%20s2',
  },
  {
    year: 2014,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.ENTRY,
    name: '1 AW1',
    rugged: true,
    sensor: {
      engine: ENGINE_TYPE.EXPEED4A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '14.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 160,
      isoMax: 6400,
    },
    shutter: {
      fps: '60fps',
      speed: 16000,
    },
    focus: {
      desc: '135포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 921K',
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '1080@60i, 720@60p',
    },
    refs: 'https://en.wikipedia.org/wiki/Nikon_1_S2, https://www.dpreview.com/products/nikon/slrs/nikon_aw1/specifications, https://www.nikon-image.co.kr/product/mirrorless/nikon%201%20aw1',
  },

  // 2015 =============================================
  {
    year: 2015,
    maker: CAMERA_MAKER.NIKON,
    name: 'D810A',
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    predecessor: 'D800',
    successor: 'D850',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D7200',
    predecessor: 'D7100',
    successor: 'D7500',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D5500',
    predecessor: 'D5300',
    successor: 'D5600',
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
  {
    year: 2015,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.Nikon1,
    grade: GRADE.MIDRANGE,
    name: '1 J5',
    predecessor: '1 J4',
    sensor: {
      engine: ENGINE_TYPE.EXPEED5A,
      size: SENSOR_SIZE.Q1,
      pixelsFamiliar: '21M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 160,
      isoMax: 12800,
    },
    shutter: {
      fps: '60fps',
      speed: 16000,
    },
    focus: {
      desc: '171포인트',
      contrast: true,
    },
    display: {
      desc: '3.0" 1037K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@15p, 1080@60p, 720@60p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_j5/specifications',
  },

  // 2016 =============================================
  {
    year: 2016,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.FLAGSHIP,
    name: 'D5',
    predecessor: 'D4s',
    successor: 'D6',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D500',
    predecessor: 'D300s',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRYMID,
    name: 'D5600',
    predecessor: 'D5500',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3400',
    predecessor: 'D3300',
    successor: 'D3500',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.PROFESSIONAL,
    name: 'D850',
    predecessor: 'D810',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.MIDRANGE,
    name: 'D7500',
    predecessor: 'D7200',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.PROFESSIONAL,
    name: 'Z7',
    successor: 'Z7 II',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '46M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 32,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: '9fps',
      speed: 8000,
    },
    focus: {
      desc: '493포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 2100K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z7/13',
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.PROFESSIONAL,
    name: 'Z6',
    successor: 'Z6 II',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '25M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 204800,
      vr: true,
    },
    shutter: {
      fps: '12fps',
      speed: 8000,
    },
    focus: {
      desc: '273포인트',
      phaseDetection: true,
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 2100K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z6/11',
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ENTRY,
    name: 'D3500',
    predecessor: 'D3400',
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
  {
    year: 2019,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.ADVANCED,
    name: 'Z50',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '21M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
    shutter: {
      fps: '11fps',
      speed: 4000,
    },
    focus: {
      desc: '209포인트',
      phaseDetection: true,
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2360_000,
      magnification: 1.02,
    },
    display: {
      desc: '3.2" 1040K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z50-review/10',
  },

  // 2020 =============================================
  {
    year: 2020,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.FLAGSHIP,
    name: 'D6',
    predecessor: 'D5',
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
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.PROFESSIONAL,
    name: 'Z7 II',
    predecessor: 'Z7',
    sensor: {
      engine: ENGINE_TYPE.DEXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '46M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 32,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: '10fps',
      speed: 8000,
    },
    focus: {
      desc: '493포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 2100K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@60p, 1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z7-ii-review/2',
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.PROFESSIONAL,
    name: 'Z6 II',
    predecessor: 'Z6',
    sensor: {
      engine: ENGINE_TYPE.DEXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '25M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 204800,
      vr: true,
    },
    shutter: {
      fps: '14fps',
      speed: 8000,
    },
    focus: {
      desc: '273포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 2100K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z6-ii-review/2',
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.ADVANCED,
    name: 'Z5',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '24M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: '4.5fps',
      speed: 8000,
    },
    focus: {
      desc: '273포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 1040K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p, 1080@60p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z5-review/9',
  },

  {
    year: 2020,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonF,
    grade: GRADE.ADVANCED,
    name: 'D780',
    predecessor: 'D750',
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
  {
    year: 2020,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.PROFESSIONAL,
    name: 'Z9',
    sensor: {
      engine: ENGINE_TYPE.DEXPEED6,
      size: SENSOR_SIZE.FF,
      pixelsFamiliar: '46M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 32,
      isoMax: 102400,
      vr: true,
    },
    shutter: {
      fps: '30fps',
      speed: 32000,
    },
    focus: {
      desc: '493포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 3690_000,
      magnification: 0.8,
    },
    display: {
      desc: '3.2" 2100K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'H.265, H.264',
      modes: '8K@30p, 4K@120p, 1080@120p',
    },
    refs: 'https://www.dpreview.com/products/nikon/slrs/nikon_z9/specifications',
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.ADVANCED,
    name: 'Z fc',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '21M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
    shutter: {
      fps: '11fps',
      speed: 4000,
    },
    focus: {
      desc: '209포인트',
      contrast: true,
      phaseDetection: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.ELECTRIC,
      resolution: 2360_000,
      magnification: 1.02,
    },
    display: {
      desc: '3.0" 1040K',
      touch: true,
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z-fc-review/2',
  },

  // 2022 =============================================
  {
    year: 2022,
    maker: CAMERA_MAKER.NIKON,
    mount: MOUNT.NikonZ,
    grade: GRADE.ENTRY,
    name: 'Z30',
    sensor: {
      engine: ENGINE_TYPE.EXPEED6,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '21M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
    shutter: {
      fps: '11fps',
      speed: 4000,
    },
    focus: {
      desc: '209포인트',
      contrast: true,
      phaseDetection: true,
    },
    display: {
      desc: '3.0" 1040K',
      touch: true,
      tilt: true,
    },
    video: {
      format: 'MPEG-4, H.264',
      modes: '4K@30p ,1080@120p',
    },
    refs: 'https://www.dpreview.com/reviews/nikon-z50-review/10',
  },

  // 2023 =============================================
];
