import { CameraType, CAMERA_MAKER, OPTICS_TYPE, SENSOR_TYPE, SENSOR_SIZE } from '@/types/cameras.d';

export const CAMERAS: CameraType[] = [
  // 1995 =============================================
  {
    year: 1995,
    maker: CAMERA_MAKER.NIKON,
    name: 'E2 / Fujifilm Fujix DS-505',
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
      name: 'Advanced AM200',
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
    name: 'E2s / Fujifilm Fujix DS-515',
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
      name: 'Advanced AM200',
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
    name: 'E2N / Fujifilm Fujix DS-505A',
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
      name: 'Advanced AM200',
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
    name: 'E2NS / Fujifilm Fujix DS-515A',
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
      name: 'Advanced AM200',
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
    name: 'E3 / Fujifilm Fujix DS-560',
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
      name: 'Advanced AM200',
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
    name: 'E3s / Fujifilm Fujix DS-565',
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
      name: 'Advanced AM200',
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
    name: 'D2000 / Kodak DCS520',
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
    name: 'D6000 / Kodak DCS560',
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
    name: 'Kodak DCS315', // DCS330
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
      name: 'CAM274',
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
      name: 'CAM274',
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
      name: 'Multi-CAM1300',
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
      name: 'Multi-CAM1300',
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
      name: 'Multi-CAM1300',
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
      name: 'Multi-CAM900',
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
      name: 'Advanced CAM2000',
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
      engine: 'DIGIC I',
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
    name: '300D / Digital Rebel / Kiss Digital',
    sensor: {
      engine: 'DIGIC I',
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
      name: 'SAFOX VII',
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
      engine: 'DIGIC II',
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
      engine: 'DIGIC II',
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
      name: 'Advanced CAM2000',
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
      engine: 'DIGIC II',
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
      name: 'Multi-CAM900',
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
      name: 'SAFOX VII',
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
      engine: 'DIGIC II',
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
      name: 'Advanced CAM2000',
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
      engine: 'DIGIC II',
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
      name: 'Multi-CAM900',
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
      name: 'Multi-CAM900',
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
    name: '350D / Digital Rebel XT / Kiss Digital N',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2005,
    name: '*ist DS2',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2005,
    name: '*ist DL',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2005,
    name: 'Dynax 5D',
    maker: CAMERA_MAKER.MINOLTA,
  },
  // 2006 =============================================
  {
    year: 2006,
    name: 'D2Xs',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2006,
    name: '30D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2006,
    name: 'K10D',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2006,
    name: 'A100',
    maker: CAMERA_MAKER.SONY,
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
      name: 'Multi-CAM1000',
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
      name: 'Multi-CAM530',
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
    name: '400D / Digital Rebel XTi / Kiss Digital X',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2006,
    name: '*ist DL2',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2006,
    name: 'K100D',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2006,
    name: 'K110D',
    maker: CAMERA_MAKER.PENTAX,
  },
  // 2007 =============================================
  {
    year: 2007,
    name: '1Ds markIII',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2007,
    name: '1D markIII',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2007,
    name: 'D3',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2007,
    name: '40D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2007,
    name: 'D300',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2007,
    name: 'A700',
    maker: CAMERA_MAKER.SONY,
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
      name: 'Multi-CAM530',
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
  },
  // 2008 =============================================
  {
    year: 2008,
    name: 'D3X',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2008,
    name: 'D700',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2008,
    name: '5D markII',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2008,
    name: 'A900',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2008,
    name: '50D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2008,
    name: 'D90',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2008,
    name: 'K20D',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2008,
    name: 'A350',
    maker: CAMERA_MAKER.SONY,
  },

  {
    year: 2008,
    name: '450D / Digital Rebel XSi / Kiss Digital X2',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2008,
    name: 'K200D',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2008,
    name: 'A300',
    maker: CAMERA_MAKER.SONY,
  },

  {
    year: 2008,
    name: '1000D / Digital Rebel XS / Kiss Digital F',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2008,
    name: 'D60',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: 'EXPEED',
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
      name: 'Multi-CAM530',
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
  },

  {
    year: 2008,
    name: 'K-m / K2000',
    maker: CAMERA_MAKER.PENTAX,
  },
  // 2009 =============================================
  {
    year: 2009,
    name: '1D markIV',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2009,
    name: 'D3s',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2009,
    name: 'A850',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2009,
    name: '7D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2009,
    name: 'D300s',
    maker: CAMERA_MAKER.NIKON,
  },
  {
    year: 2009,
    name: 'K-7',
    maker: CAMERA_MAKER.PENTAX,
  },

  {
    year: 2009,
    name: 'A550',
    maker: CAMERA_MAKER.SONY,
  },

  {
    year: 2009,
    name: '500D / Digital Rebel X1i / Kiss Digital X3',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2009,
    name: 'D5000',
    maker: CAMERA_MAKER.NIKON,
    sensor: {
      engine: 'EXPEED',
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
      name: 'Multi-CAM1000',
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
      engine: 'EXPEED',
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
      name: 'Multi-CAM1000',
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
  },
  {
    year: 2009,
    name: 'A380',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2009,
    name: 'A330',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2009,
    name: 'A230',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2009,
    name: 'K-x',
    maker: CAMERA_MAKER.PENTAX,
  },
  // 2010 =============================================
  {
    year: 2010,
    name: '645D',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2010,
    name: 'K-5',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2010,
    name: '60D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2010,
    name: '550D / Digital Rebel T2i / Kiss Digital X4',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2010,
    name: 'D3100',
    maker: CAMERA_MAKER.NIKON,
  },

  {
    year: 2010,
    name: 'K-r',
    maker: CAMERA_MAKER.PENTAX,
  },
  {
    year: 2010,
    name: 'A450',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'A390',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'A290',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'A55',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'A33',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'NEX5',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2010,
    name: 'NEX3',
    maker: CAMERA_MAKER.SONY,
  },

  // 2011 =============================================
  {
    year: 2011,
    name: 'A580',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2011,
    name: 'A560',
    maker: CAMERA_MAKER.SONY,
  },
  {
    year: 2011,
    name: '600D / Digital Rebel T3i / Kiss Digital X5',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2011,
    name: '1100D / Digital Rebel T3 / Kiss Digital X50',
    maker: CAMERA_MAKER.CANON,
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
