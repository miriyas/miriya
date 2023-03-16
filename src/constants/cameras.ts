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
    maker: CAMERA_MAKER.CANON,
    name: 'DCS5',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'EOS-DSC5',
    desc: '센서별로 5c, 5m, 5IR로 출시, 각각 ISO상이',
    sensor: {
      pixelsFamiliar: '1.5M',
      size: SENSOR_SIZE.C26,
      type: SENSOR_TYPE.CCD,
      isoMin: 100,
      isoMax: 800,
    },
    shutter: {
      fps: 2.5,
      speed: 8000,
    },
    focus: {
      points: 5,
    },
    refs: ['https://en.wikipedia.org/wiki/Canon_EOS_DCS_5'],
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.CANON,
    name: 'DCS3',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'EOS-DSC3',
    desc: '센서별로 3c, 3m, 3IR로 출시, 각각 ISO상이',
    successor: ['D2000'],
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: 2.7,
      speed: 8000,
    },
    focus: {
      points: 5,
    },
    refs: ['https://en.wikipedia.org/wiki/Canon_EOS_DCS_3'],
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.CANON,
    name: 'DCS1',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'EOS-DSC1',
    desc: '센서별로 1c, 1m, 1IR로 출시, 각각 ISO상이',
    successor: ['D6000'],
    sensor: {
      pixelsFamiliar: '6.0M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 80,
      isoMax: 200,
    },
    shutter: {
      fps: 0.6,
      speed: 8000,
    },
    focus: {
      points: 5,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    metering: {
      desc: '16분할측광',
    },
    refs: [
      'https://en.wikipedia.org/wiki/Canon_EOS_DCS_1',
      'https://global.canon/en/c-museum/product/dslr776.html',
      'http://www.mir.com.my/rb/photography/companies/Kodak/index2.htm',
    ],
  },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '12분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      inches: 1.8,
    },
    metering: {
      desc: '12분할측광',
    },
  },

  {
    year: 1998,
    maker: CAMERA_MAKER.KODAK,
    name: 'DCS315',
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
    name: 'DCS330',
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
    viewfinder: {
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
      engine: ENGINE_TYPE.DIGIC1,
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
    viewfinder: {
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
    name: 'DCS Pro 14n',
    maker: CAMERA_MAKER.KODAK,
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
    display: {
      inches: '?',
    },
    refs: ['https://www.dpreview.com/reviews/kodakdcs14n/'],
  },
  {
    year: 2002,
    name: '1Ds',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 120_000,
    },
    metering: {
      desc: '21분할측광',
    },
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
    viewfinder: {
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2003,
    maker: CAMERA_MAKER.CANON,
    name: '300D',
    otherNames: ['Rebel', 'Kiss Digital'],
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: {
      desc: '35분할측광',
    },
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
    name: 'DCS Pro SLR/n',
    maker: CAMERA_MAKER.KODAK,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: '?',
      coverage: '?',
    },
    display: {
      inches: 2.0,
      pixels: 130_000,
    },
    refs: ['https://en.wikipedia.org/wiki/Kodak_DCS_Pro_SLR/n'],
  },
  {
    year: 2004,
    name: 'DCS Pro SLR/c',
    maker: CAMERA_MAKER.KODAK,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 230_000,
    },
    metering: {
      desc: '21분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.0,
      pixels: 230_000,
    },
    metering: {
      desc: '21분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
    },
    metering: {
      desc: '35분할측광',
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '21분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '21분할측광',
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
    maker: CAMERA_MAKER.CANON,
    name: '20Da',
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 118_000,
      liveview: true,
    },
    metering: {
      desc: '35분할측광',
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
  {
    year: 2005,
    name: '350D',
    otherNames: ['Rebel XT', 'Kiss Digital N'],
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 1.8,
      pixels: 115_000,
    },
    metering: {
      desc: '35분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '35분할측광',
    },
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
  {
    year: 2006,
    name: '400D',
    otherNames: ['Rebel XTi', 'Kiss Digital X'],
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
      desc: '35분할측광',
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
    name: '1Ds markIII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC3,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2007,
    name: '1D markIII',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DDIGIC3,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: {
      desc: '63분할측광',
    },
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
    name: '40D',
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: {
      desc: '35분할측광',
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
    viewfinder: {
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
    metering: {
      desc: '35분할측광',
    },
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 920_000,
    },
    metering: {
      desc: '35분할측광',
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
    name: '450D',
    otherNames: ['Rebel XSi', 'Kiss Digital X2'],
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 230_000,
    },
    metering: {
      desc: '35분할측광',
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
    name: '1000D',
    otherNames: ['Rebel XS', 'Kiss Digital F'],
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.81,
      coverage: 95,
    },
    display: {
      inches: 2.5,
      pixels: 230_000,
    },
    metering: {
      desc: '35분할측광',
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
    },
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
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
    name: '500D',
    otherNames: ['Rebel T1i', 'Kiss Digital X3'],
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
    viewfinder: {
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
    metering: {
      desc: '35분할측광',
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
    },
    refs: ['https://en.wikipedia.org/wiki/Canon_EOS_60D'],
  },
  {
    year: 2010,
    name: '550D',
    otherNames: ['Rebel T2i', 'Kiss Digital X4'],
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
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
    name: '1D X',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1D markIV', '1Ds markIII'],
    successor: ['1D X markII', '1D C'],
    // desc: '',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC5P,
      pixelsFamiliar: '18.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 204800,
    },
    shutter: {
      fps: 14,
      speed: 8000,
    },
    focus: {
      points: 61,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.2,
      pixels: 1040_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1920,
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
      desc: '10만 RGB측광',
      engine: ENGINE_TYPE.DIGIC4,
    },
  },
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
    year: 2011,
    name: '600D',
    otherNames: ['Rebel T3i', 'Kiss Digital X5'],
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2011,
    name: '1100D',
    otherNames: ['Rebel T3', 'Kiss Digital X50'],
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
    },
  },

  // 2012 =============================================
  {
    year: 2012,
    name: '1D C',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1D X'],
    desc: '세계 최초의 4K DSLR',
    sensor: {
      pixelsFamiliar: '18.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
    shutter: {
      fps: 14,
      speed: 8000,
    },
    focus: {
      points: 61,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.2,
      pixels: 1040_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: '4K',
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 25,
        },
      ],
    },
    metering: {
      desc: '10만 RGB측광',
    },
  },
  {
    year: 2012,
    name: '5D markIII',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC5P,
    // }
  },
  {
    year: 2012,
    name: '6D',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC5P,
    // }
  },
  {
    year: 2012,
    name: '60Da',
    maker: CAMERA_MAKER.CANON,
    successor: ['20Da'],
    desc: '60D 기반의 천체 촬영용 카메라',
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
    viewfinder: {
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
    metering: {
      desc: '63분할측광',
    },
    refs: ['https://en.wikipedia.org/wiki/Canon_EOS_60D'],
  },
  {
    year: 2012,
    name: '650D',
    otherNames: ['Rebel T4i', 'Kiss Digital X6i'],
    maker: CAMERA_MAKER.CANON,
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 9,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
      touch: true,
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
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2012,
    name: 'M',
    maker: CAMERA_MAKER.CANON,
    successor: ['M2'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 4.3,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 9,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
      touch: true,
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
  },

  // 2013 =============================================
  {
    year: 2013,
    name: '70D',
    maker: CAMERA_MAKER.CANON,
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    name: '700D',
    otherNames: ['Rebel T5i', 'Kiss Digital X7i'],
    predecessor: ['650D'],
    successor: ['750D'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 9,
      pointsDouble: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      touch: true,
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
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    name: '100D',
    otherNames: ['Rebel SL1', 'Kiss Digital X7'],
    successor: ['200D'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 4,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      touch: true,
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
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2013,
    name: 'M2',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M'],
    successor: ['M3'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: 3.4,
      speed: 4000,
    },
    focus: {
      phaseDetection: true,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      touch: true,
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
  },

  // 2014 =============================================
  {
    year: 2014,
    name: '7D markII',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // }
  },
  {
    year: 2014,
    name: '1200D',
    otherNames: ['Rebel T5', 'Kiss Digital X70', 'EOS Hi'],
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1100D'],
    successor: ['1300D'],
    desc: '캐논의 1080p 엔트리 기종',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '18.1M',
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
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 460_000,
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
    metering: {
      desc: '63분할측광',
    },
  },

  // 2015 =============================================
  {
    year: 2015,
    name: '5Ds',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // }
  },
  {
    year: 2015,
    name: '5Ds R',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    name: '750D',
    otherNames: ['Rebel T6i', 'Kiss Digital X8i'],
    predecessor: ['700D'],
    successor: ['800D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    name: '760D',
    otherNames: ['Rebel T6s', '8000D'],
    successor: ['77D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    name: 'M3',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M2'],
    successor: ['M6'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    name: 'M10',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M2'],
    successor: ['M100'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },

  // 2016 =============================================
  {
    year: 2016,
    name: '1D X markII',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1D X'],
    successor: ['1D X markIII'],
    // desc: '',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC6P,
      pixelsFamiliar: '20.2M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 409600,
    },
    shutter: {
      fps: 14,
      speed: 8000,
    },
    focus: {
      points: 61,
      pointsCross: 41,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      inches: 3.2,
      pixels: 1620_000,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: '4K',
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
          fps: 60,
        },
        {
          resolution: 1920,
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
      desc: '36만 RGB측광',
      engine: ENGINE_TYPE.DIGIC4,
    },
  },
  {
    year: 2016,
    name: '5D markIV',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6P,
    // }
  },
  {
    year: 2016,
    name: '80D',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2016,
    name: '1300D',
    otherNames: ['Rebel T6', 'Kiss Digital X80'],
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1200D'],
    successor: ['2000D', '4000D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // },
  },
  {
    year: 2016,
    name: 'M5',
    maker: CAMERA_MAKER.CANON,
    successor: ['R10'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },

  // 2017 =============================================
  {
    year: 2017,
    name: '6D markII',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    name: '800D',
    otherNames: ['Rebel T7i', 'Kiss Digital X9i'],
    predecessor: ['750D'],
    successor: ['850D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    name: '200D',
    otherNames: ['Rebel SL2', 'Kiss Digital X9'],
    predecessor: ['100D'],
    successor: ['250D'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC7,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
    shutter: {
      fps: 5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
        {
          resolution: 720,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    name: '77D',
    otherNames: ['770D', '9000D'],
    predecessor: ['760D'],
    successor: ['90D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    name: 'M6',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M3'],
    successor: ['M6 markII'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    name: 'M100',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M10'],
    successor: ['M200'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },

  // 2018 =============================================
  {
    year: 2018,
    name: '2000D',
    otherNames: ['Rebel T7', 'Kiss Digital X90', '1500D'],
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1300D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // }
  },
  {
    year: 2018,
    name: '4000D',
    otherNames: ['Rebel T100', '3000D'],
    maker: CAMERA_MAKER.CANON,
    predecessor: ['1300D'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // }
  },
  {
    year: 2018,
    name: 'R',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2018,
    name: 'M50',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M5'],
    successor: ['M50 markII'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2019 =============================================
  {
    year: 2019,
    name: '90D',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    name: '250D',
    otherNames: ['Rebel SL3', 'Kiss Digital X10', '200D markII'],
    predecessor: ['200D'],
    successor: ['R10'],
    sensor: {
      engine: ENGINE_TYPE.DIGIC8,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
    shutter: {
      fps: 5,
      speed: 4000,
    },
    focus: {
      points: 9,
      pointsCross: 1,
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      inches: 3.0,
      pixels: 1040_000,
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: [
        {
          resolution: 1080,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
        {
          resolution: 720,
          fps: 60,
          scan: VIDEO_SCAN_TYPE.PROGRESSIVE,
        },
      ],
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2019,
    name: 'Ra',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    name: 'RP',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    name: 'M6 markII',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M6'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    name: 'M200',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M100'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2020 =============================================
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    name: '1D X markIII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    name: '850D',
    otherNames: ['Rebel T8i', 'Kiss Digital X10i'],
    predecessor: ['800D'],
    successor: ['R10'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2020,
    name: 'R5',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2020,
    name: 'R6',
    maker: CAMERA_MAKER.CANON,
    successor: ['R6 markII'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },

  {
    year: 2020,
    name: 'M50 markII',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M50'],
    successor: ['R50'],
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2021 =============================================
  {
    year: 2021,
    name: 'R3',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },

  // 2022 =============================================
  {
    year: 2022,
    name: 'R5 C',
    maker: CAMERA_MAKER.CANON,
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2022,
    name: 'R6 markII',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['R6'],
  },
  {
    year: 2022,
    name: 'R7',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['7D markII', '90D'],
  },
  {
    year: 2022,
    name: 'R10',
    maker: CAMERA_MAKER.CANON,
    predecessor: ['M5'],
  },

  // 2023 =============================================
  {
    year: 2018,
    name: 'R8',
    maker: CAMERA_MAKER.CANON,
  },
];

export const YEAR_INFO = {
  start: 1995,
  end: 2011,
};
