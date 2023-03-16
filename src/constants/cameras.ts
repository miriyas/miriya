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

export const CAMERAS: CameraType[] = [
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
    refs: ['http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E2NE2Ns/index.htm'],
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 98,
    },
    display: {
      inches: 1.8,
    },
    metering: '5분할측광',
    refs: [
      'https://imaging.nikon.com/lineup/dslr/e3_e3s/index.htm',
      'http://www.mir.com.my/rb/photography/companies/nikon/htmls/models/digitalSLRs/E3E3s/specE3E3s.htm',
      'https://www.digitalkameramuseum.de/en/cameras/item/nikon-e3s',
    ],
  },
  {
    year: 1998,
    maker: CAMERA_MAKER.CANON,
    name: 'D2000',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'DCS520',
    sensor: {
      name: 'Kodak M15',
      pixelsFamiliar: '2.0M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: 3.6,
      speed: 8000,
    },
    focus: {
      points: 5,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 1.8,
    },
    metering: '12분할측광',
  },
  {
    year: 1998,
    maker: CAMERA_MAKER.CANON,
    name: 'D6000',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'DCS560',
    sensor: {
      pixelsFamiliar: '6.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 80,
      isoMax: 200,
    },
    shutter: {
      fps: 1,
      speed: 8000,
    },
    focus: {
      points: 5,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: '12분할측광',
  },

  {
    year: 1998,
    maker: CAMERA_MAKER.KODAK,
    name: 'Kodak DCS315',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: '8분할측광',
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
    name: 'Kodak DCS330',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: '8분할측광',
    refs: [
      'https://www.kodak.com/global/plugins/acrobat/en/professional/manuals/dcs/DCS300/6b0935.pdf',
      'http://camera-wiki.org/wiki/Kodak_DCS_300_series',
      'https://en.wikipedia.org/wiki/Kodak_DCS_300_series',
    ],
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: '1005 RGB측광',
  },
  // 2000
  {
    year: 2000,
    maker: CAMERA_MAKER.CANON,
    name: 'D30',
    sensor: {
      pixelsFamiliar: '3.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 3,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 114_000,
    },
  },
  // 2001 =============================================
  {
    year: 2001,
    name: '1D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      pixelsFamiliar: '4.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: 8,
      speed: 16000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: '1005 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 96,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: '1005 RGB측광',
  },
  // 2002 =============================================
  {
    year: 2002,
    name: '1Ds',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      pixelsFamiliar: '11.4M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 1250,
    },
    shutter: {
      fps: 4,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: '21분할측광',
  },
  {
    year: 2002,
    maker: CAMERA_MAKER.CANON,
    name: 'D60',
    sensor: {
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1000,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 3,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 114_000,
    },
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: '10분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 211_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2003,
    maker: CAMERA_MAKER.CANON,
    name: '10D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 7,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: '35분할측광',
  },
  {
    year: 2003,
    maker: CAMERA_MAKER.CANON,
    name: '300D',
    otherNames: ['Digital Rebel', 'Kiss Digital'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 2.5,
      speed: 4000,
    },
    focus: {
      points: 7,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: '35분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: '16분할측광',
  },
  // 2004 =============================================
  {
    year: 2004,
    name: '1Ds markII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '16.6M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 4.5,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 230_000,
    },
    metering: '21분할측광',
  },
  {
    year: 2004,
    name: '1D markII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 8.5,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 230_000,
    },
    metering: '21분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.CANON,
    name: '20D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 130_000,
    },
    metering: '1005 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 2.0,
      pixels: 210_000,
    },
    metering: '16분할측광',
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.MINOLTA,
    name: 'Dynax 7D',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 207_000,
    },
    metering: '14분할측광',
  },
  // 2005 =============================================
  {
    year: 2005,
    name: '1D markII N',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 8.5,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '21분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2005,
    name: '5D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '12.8M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 8.5,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '21분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '1005 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 2.1,
      pixels: 130_000,
    },
    metering: '1005 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.75,
      coverage: 95,
    },
    display: {
      inches: 2.0,
      pixels: 130_000,
    },
    metering: '420 RGB측광',
  },
  {
    year: 2005,
    name: '350D',
    otherNames: ['Digital Rebel XT', 'Kiss Digital N'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 7,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 115_000,
    },
    metering: '35분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
  },
  {
    year: 2005,
    name: 'Dynax 5D',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 115_000,
    },
    metering: '14분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.86,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2006,
    name: '30D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '35분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '420 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '420 RGB측광',
  },
  {
    year: 2006,
    name: '400D',
    otherNames: ['Digital Rebel XTi', 'Kiss Digital X'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
  },
  // 2007 =============================================
  {
    year: 2007,
    name: '1Ds markIII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC2,
      pixelsFamiliar: '21.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: 5,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: '63분할측광',
  },
  {
    year: 2007,
    name: '1D markIII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC2,
      pixelsFamiliar: '10.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 6400,
    },
    shutter: {
      fps: 10,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: '63분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2007,
    name: '40D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: 6.5,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.94,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '1005 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '420 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.5,
      pixels: 210_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '1005 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '1005 RGB측광',
  },
  {
    year: 2008,
    name: '5D markII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '21.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
    shutter: {
      fps: 3.9,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.71,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 30,
        },
      ],
    },
    metering: '35분할측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '40분할측광',
  },
  {
    year: 2008,
    name: '50D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '15.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 6.3,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '35분할측광',
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
    optics: {
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
    metering: '420 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '40분할측광',
  },
  {
    year: 2008,
    name: '450D',
    otherNames: ['Digital Rebel XSi', 'Kiss Digital X2'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3.5,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '40분할측광',
  },
  {
    year: 2008,
    name: '1000D',
    otherNames: ['Digital Rebel XS', 'Kiss Digital F'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 7,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.81,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: '420 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '16분할측광',
  },
  // 2009 =============================================
  {
    year: 2009,
    name: '1D markIV',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC4,
      pixelsFamiliar: '16.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
    shutter: {
      fps: 10,
      speed: 8000,
    },
    focus: {
      points: 45,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
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
    metering: '63분할측광',
  },
  {
    year: 2009,
    name: 'D3s',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      size: SENSOR_SIZE.FF,
      engine: ENGINE_TYPE.EXPEED,
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
    optics: {
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
    metering: '1005 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.74,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '40분할측광',
  },
  {
    year: 2009,
    name: '7D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 8,
      speed: 8000,
    },
    focus: {
      points: 19,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 1.0,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
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
    metering: '63분할측광',
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
    optics: {
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
    metering: '1005 RGB측광',
  },
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: '77분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '40분할측광',
  },

  {
    year: 2009,
    name: '500D',
    otherNames: ['Digital Rebel T1i', 'Kiss Digital X3'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '15.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 3.4,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          fps: 20,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
        {
          resolution: 720,
          fps: 30,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: '35분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.78,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '420 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: '420 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.62,
      coverage: 98,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: '77분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.92,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: '77분할측광',
  },
  {
    year: 2010,
    name: '60D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 5.3,
      speed: 8000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
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
    metering: '63분할측광',
  },
  {
    year: 2010,
    name: '550D',
    otherNames: ['Digital Rebel T2i', 'Kiss Digital X4'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 3.7,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          fps: 30,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
        {
          resolution: 720,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: '63분할측광',
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
    optics: {
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
    metering: '420 RGB측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 96,
    },
    display: {
      inches: 3.0,
      pixels: 921_000,
    },
    metering: '16분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.83,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.74,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
      tilt: true,
    },
    metering: '40분할측광',
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
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    metering: '40분할측광',
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
    optics: {
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
    metering: '1200존측광',
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
    optics: {
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
    metering: '1200존측광',
  },
  {
    year: 2010,
    name: 'NEX5',
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
    optics: {
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
    metering: '40분할측광',
  },
  {
    year: 2010,
    name: 'NEX3',
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
    optics: {
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
    metering: '40분할측광',
  },

  // 2011 =============================================
  {
    year: 2011,
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
    optics: {
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
    metering: '40분할측광',
  },
  {
    year: 2011,
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
    optics: {
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
    metering: '40분할측광',
  },
  {
    year: 2011,
    name: '600D',
    otherNames: ['Digital Rebel T3i', 'Kiss Digital X5'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: 3.7,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          fps: 30,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
        {
          resolution: 720,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: '63분할측광',
  },
  {
    year: 2011,
    name: '1100D',
    otherNames: ['Digital Rebel T3', 'Kiss Digital X50'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: 3,
      speed: 4000,
    },
    focus: {
      points: 9,
    },
    optics: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 2.7,
      pixels: 230_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 720,
          fps: 30,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: '63분할측광',
  },

  // 2012 =============================================

  // 2013 =============================================

  // 2014 =============================================

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

export const YEAR_INFO = {
  start: 1995,
  end: 2011,
};
