import {
  CameraCore,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  ENGINE_TYPE,
  GRADE,
  MOUNT,
} from '@/types/cameras.d';

// https://www.dpreview.com/products/timeline
// https://global.canon/en/c-museum/camera.html?s=dslr
// https://en.wikipedia.org/wiki/Template:Canon_EOS_digital_cameras
// http://www.ayton.id.au/wiki/doku.php?id=photo:canoneoshistory

export const CANONS: CameraCore[] = [
  // 1995 =============================================
  {
    year: 1995,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
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
      fps: '2.5fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트',
    },
    refs: 'https://en.wikipedia.org/wiki/Canon_EOS_DCS_5',
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: 'DCS3',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'EOS-DSC3',
    desc: '센서별로 3c, 3m, 3IR로 출시, 각각 ISO상이',
    successor: 'D2000',
    sensor: {
      pixelsFamiliar: '1.3M',
      size: SENSOR_SIZE.APSC,
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 6400,
    },
    shutter: {
      fps: '2.7fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트',
    },
    refs: 'https://en.wikipedia.org/wiki/Canon_EOS_DCS_3',
  },
  {
    year: 1995,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: 'DCS1',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'EOS-DSC1',
    desc: '센서별로 1c, 1m, 1IR로 출시, 각각 ISO상이',
    successor: 'D6000',
    sensor: {
      pixelsFamiliar: '6.0M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 80,
      isoMax: 200,
    },
    shutter: {
      fps: '0.6fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    metering: {
      desc: '16분할측광',
    },
    refs: 'https://en.wikipedia.org/wiki/Canon_EOS_DCS_1, https://global.canon/en/c-museum/product/dslr776.html, http://www.mir.com.my/rb/photography/companies/Kodak/index2.htm',
  },

  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  {
    year: 1998,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: 'D2000',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'DCS520',
    predecessor: 'DCS3',
    sensor: {
      name: 'Kodak M15',
      pixelsFamiliar: '2.0M',
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 1600,
    },
    shutter: {
      fps: '3.6fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '12분할측광',
    },
  },
  {
    year: 1998,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: 'D6000',
    maker2: CAMERA_MAKER.KODAK,
    name2: 'DCS560',
    predecessor: 'DCS1',
    sensor: {
      pixelsFamiliar: '6.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 80,
      isoMax: 200,
    },
    shutter: {
      fps: '1fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.83,
      coverage: 97,
    },
    display: {
      desc: '1.8"',
    },
    metering: {
      desc: '12분할측광',
    },
  },

  // 1999 =============================================
  // 2000 =============================================
  {
    year: 2000,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.MIDRANGE,
    name: 'D30',
    successor: 'D60',
    sensor: {
      pixelsFamiliar: '3.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '3포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      desc: '1.8" 114K',
    },
  },

  // 2001 =============================================
  {
    year: 2001,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D',
    successor: '1D markII, 1Ds',
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '4.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CCD,
      isoMin: 200,
      isoMax: 3200,
    },
    shutter: {
      fps: '8fps',
      speed: 16000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      desc: '2.0" 120K',
    },
  },

  // 2002 =============================================
  {
    year: 2002,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1Ds',
    predecessor: '1D',
    successor: '1Ds markII',
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '11.4M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 1250,
    },
    shutter: {
      fps: '4fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      desc: '2.0" 120K',
    },
    metering: {
      desc: '21분할측광',
    },
  },
  {
    year: 2002,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.MIDRANGE,
    name: 'D60',
    predecessor: 'D30',
    successor: '10D',
    sensor: {
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1000,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '3포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      desc: '1.8" 114K',
    },
  },

  // 2003 =============================================
  {
    year: 2003,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.MIDRANGE,
    name: '10D',
    predecessor: 'D60',
    successor: '20D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '7포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2003,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.ENTRY,
    name: '300D',
    otherNames: 'Rebel, Kiss Digital',
    successor: '350D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC1,
      pixelsFamiliar: '6.3M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '2.5fps',
      speed: 4000,
    },
    focus: {
      desc: '7포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.88,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2004 =============================================
  {
    year: 2004,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1Ds markII',
    predecessor: '1Ds',
    successor: '1Ds markIII',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '16.6M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: '4.5fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.7,
      coverage: 100,
    },
    display: {
      desc: '2.0" 230K',
    },
    metering: {
      desc: '21분할측광',
    },
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D markII',
    predecessor: '1D',
    successor: '1D markII N',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: '8.5fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      desc: '2.0" 230K',
    },
    metering: {
      desc: '21분할측광',
    },
  },
  {
    year: 2004,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '20D',
    predecessor: '10D',
    successor: '30D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2005 =============================================
  {
    year: 2005,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D markII N',
    predecessor: '1D markII',
    successor: '1D markIII',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: '8.5fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '21분할측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5D',
    successor: '5D markII',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '12.8M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: '8.5fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.72,
      coverage: 100,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '21분할측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '20Da',
    successor: '60Da',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
      astro: true,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      desc: '1.8" 118K',
      liveview: true,
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2005,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '350D',
    otherNames: 'Rebel XT, Kiss Digital N',
    predecessor: '300D',
    successor: '400D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '7포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '1.8" 115K',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2006 =============================================
  {
    year: 2006,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '30D',
    predecessor: '20D',
    successor: '40D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '8.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.9,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2006,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '400D',
    otherNames: 'Rebel XTi, Kiss Digital X',
    predecessor: '350D',
    successor: '450D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC2,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
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
      desc: '35분할측광',
    },
  },

  // 2007 =============================================
  {
    year: 2007,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1Ds markIII',
    predecessor: '1Ds markII',
    successor: '1D X',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC3,
      pixelsFamiliar: '21.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 3200,
    },
    shutter: {
      fps: '5fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.0" 230K',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2007,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D markIII',
    predecessor: '1D markII N',
    successor: '1D markIV',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC3,
      pixelsFamiliar: '10.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 6400,
    },
    shutter: {
      fps: '10fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.0" 230K',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2007,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '40D',
    predecessor: '30D',
    successor: '50D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 3200,
    },
    shutter: {
      fps: '6.5fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      desc: '3.0" 230K',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2008 =============================================
  {
    year: 2008,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5D markII',
    predecessor: '5D',
    successor: '5D markIII',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '21.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 25600,
    },
    shutter: {
      fps: '3.9fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.71,
      coverage: 98,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'H.264',
      modes: '1080@30p',
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '50D',
    predecessor: '40D',
    successor: '60D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '15.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '6.3fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '450D',
    otherNames: 'Rebel XSi, Kiss Digital X2',
    predecessor: '400D',
    successor: '500D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '3.5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 230K',
    },
    metering: {
      desc: '35분할측광',
    },
  },
  {
    year: 2008,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '1000D',
    otherNames: 'Rebel XS, Kiss Digital F',
    successor: '1100D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC3,
      pixelsFamiliar: '10.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 1600,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '7포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.81,
      coverage: 95,
    },
    display: {
      desc: '2.5" 230K',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2009 =============================================
  {
    year: 2009,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D markIV',
    predecessor: '1D markIII',
    successor: '1D X',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC4,
      pixelsFamiliar: '16.1M',
      size: SENSOR_SIZE.APSH,
      type: SENSOR_TYPE.CMOS,
      isoMin: 50,
      isoMax: 102400,
    },
    shutter: {
      fps: '10fps',
      speed: 8000,
    },
    focus: {
      desc: '45포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ADVANCED,
    name: '7D',
    successor: '7D markII',
    sensor: {
      engine: ENGINE_TYPE.DDIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '8fps',
      speed: 8000,
    },
    focus: {
      desc: '19포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 1.0,
      coverage: 100,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2009,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '500D',
    otherNames: 'Rebel T1i, Kiss Digital X3',
    predecessor: '450D',
    successor: '550D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '15.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '3.4fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 920K',
    },
    video: {
      format: 'H.264',
      modes: '1080@20p, 720@30p',
    },
    metering: {
      desc: '35분할측광',
    },
  },

  // 2010 =============================================
  {
    year: 2010,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '60D',
    predecessor: '50D',
    successor: '70D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '5.3fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
    refs: 'https://en.wikipedia.org/wiki/Canon_EOS_60D',
  },
  {
    year: 2010,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '550D',
    otherNames: 'Rebel T2i, Kiss Digital X4',
    predecessor: '500D',
    successor: '600D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '3.7fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },

  // 2011 =============================================
  {
    year: 2011,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D X',
    predecessor: '1D markIV, 1Ds markIII',
    successor: '1D X markII, 1D C',
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
      fps: '14fps',
      speed: 8000,
    },
    focus: {
      desc: '61포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.2" 1040K',
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '10만 RGB측광',
      engine: ENGINE_TYPE.DIGIC4,
    },
  },
  {
    year: 2011,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '600D',
    otherNames: 'Rebel T3i, Kiss Digital X5',
    predecessor: '550D',
    successor: '650D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.9M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
    },
    shutter: {
      fps: '3.7fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2011,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '1100D',
    otherNames: 'Rebel T3, Kiss Digital X50',
    predecessor: '1000D',
    successor: '1200D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '12.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '2.7" 230K',
    },
    video: {
      format: 'H.264',
      modes: '720@30p',
    },
    metering: {
      desc: '63분할측광',
    },
  },

  // 2012 =============================================
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D C',
    predecessor: '1D X',
    desc: '세계 최초의 4K DSLR',
    sensor: {
      pixelsFamiliar: '18.1M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 204800,
    },
    shutter: {
      fps: '14fps',
      speed: 8000,
    },
    focus: {
      desc: '61포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.2" 1040K',
    },
    video: {
      format: 'H.264',
      modes: '4K@25p',
    },
    metering: {
      desc: '10만 RGB측광',
    },
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5D markIII',
    predecessor: '5D markII',
    successor: '5D markIV, 5Ds',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC5P,
    // }
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.ADVANCED,
    name: '6D',
    successor: '6D markII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC5P,
    // }
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '60Da',
    predecessor: '20Da',
    successor: 'Ra',
    desc: '60D 기반의 천체 촬영용 카메라',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '17.8M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 12800,
      astro: true,
    },
    shutter: {
      fps: '5.3fps',
      speed: 8000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.95,
      coverage: 96,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
    refs: 'https://en.wikipedia.org/wiki/Canon_EOS_60D',
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '650D',
    otherNames: 'Rebel T4i, Kiss Digital X6i',
    predecessor: '600D',
    successor: '700D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 9크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2012,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M',
    successor: 'M2',
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '4.3fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 9크로스',
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
  },

  // 2013 =============================================
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '70D',
    predecessor: '60D',
    successor: '80D',
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '700D',
    otherNames: 'Rebel T5i, Kiss Digital X7i',
    predecessor: '650D',
    successor: '750D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 9크로스 1더블',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.85,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      touch: true,
      tilt: true,
      swivel: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '100D',
    otherNames: 'Rebel SL1, Kiss Digital X7',
    successor: '200D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '4fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2013,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M2',
    predecessor: 'M',
    successor: 'M3',
    sensor: {
      engine: ENGINE_TYPE.DIGIC5,
      size: SENSOR_SIZE.APSC,
      pixelsFamiliar: '18M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 25600,
    },
    shutter: {
      fps: '3.4fps',
      speed: 4000,
    },
    focus: {
      phaseDetection: true,
    },
    display: {
      desc: '3.0" 1040K',
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@30p, 720@60p',
    },
  },

  // 2014 =============================================
  {
    year: 2014,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ADVANCED,
    name: '7D markII',
    predecessor: '7D',
    successor: 'R7',
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // }
  },
  {
    year: 2014,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.ENTRY,
    name: '1200D',
    otherNames: 'Rebel T5, Kiss Digital X70, EOS Hi',
    predecessor: '1100D',
    successor: '1300D',
    desc: '캐논의 1080p 엔트리 기종',
    sensor: {
      engine: ENGINE_TYPE.DIGIC4,
      pixelsFamiliar: '18.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 6400,
    },
    shutter: {
      fps: '3fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.8,
      coverage: 95,
    },
    display: {
      desc: '3.0" 460K',
    },
    video: {
      format: 'H.264',
      modes: '720@30p',
    },
    metering: {
      desc: '63분할측광',
    },
  },

  // 2015 =============================================
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5Ds',
    predecessor: '5D markIII',
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5Ds R',
    predecessor: '5D markIII',
    // sensor: {
    //   engine: ENGINE_TYPE.DDIGIC6,
    // noLowPass: true,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '750D',
    otherNames: 'Rebel T6i, Kiss Digital X8i',
    predecessor: '700D',
    successor: '800D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '760D',
    otherNames: 'Rebel T6s, 8000D',
    predecessor: '700D',
    successor: '77D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M3',
    predecessor: 'M2',
    successor: 'M6',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2015,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRY,
    name: 'M10',
    predecessor: 'M2',
    successor: 'M100',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },

  // 2016 =============================================
  {
    year: 2016,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D X markII',
    predecessor: '1D X',
    successor: '1D X markIII',
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
      fps: '14fps',
      speed: 8000,
    },
    focus: {
      desc: '61포인트 41크로스',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.76,
      coverage: 100,
    },
    display: {
      desc: '3.2" 1620K',
    },
    video: {
      format: 'H.264',
      modes: '4K@60p, 1080@30p, 720@60p',
    },
    metering: {
      desc: '36만 RGB측광',
      engine: ENGINE_TYPE.DIGIC4,
    },
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.PROFESSIONAL,
    name: '5D markIV',
    predecessor: '5D markIII',
    successor: 'R5',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6P,
    // }
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '80D',
    predecessor: '70D',
    successor: '90D',

    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC6,
    // }
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '1300D',
    otherNames: 'Rebel T6, Kiss Digital X80',
    predecessor: '1200D',
    successor: '2000D, 4000D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // },
  },
  {
    year: 2016,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.MIDRANGE,
    name: 'M5',
    successor: 'R10',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },

  // 2017 =============================================
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.ADVANCED,
    name: '6D markII',
    predecessor: '6D',
    successor: 'R6',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '800D',
    otherNames: 'Rebel T7i, Kiss Digital X9i',
    predecessor: '750D',
    successor: '850D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '200D',
    otherNames: 'Rebel SL2, Kiss Digital X9',
    predecessor: '100D',
    successor: '250D',
    sensor: {
      engine: ENGINE_TYPE.DIGIC7,
      pixelsFamiliar: '24.2M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
    shutter: {
      fps: '5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@60p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '77D',
    otherNames: '770D, 9000D',
    predecessor: '760D',
    successor: '90D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M6',
    predecessor: 'M3',
    successor: 'M6 markII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },
  {
    year: 2017,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRY,
    name: 'M100',
    predecessor: 'M10',
    successor: 'M200',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC7,
    // }
  },

  // 2018 =============================================
  {
    year: 2018,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '2000D',
    otherNames: 'Rebel T7, Kiss Digital X90, 1500D',
    predecessor: '1300D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // }
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.VALUE,
    name: '4000D',
    otherNames: 'Rebel T100, 3000D',
    predecessor: '1300D',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC4P,
    // }
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.ADVANCED,
    name: 'R',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2018,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M50',
    predecessor: 'M5',
    successor: 'M50 markII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2019 =============================================
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.MIDRANGE,
    name: '90D',
    predecessor: '80D',
    successor: 'R10',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '250D',
    otherNames: 'Rebel SL3, Kiss Digital X10, 200D markII',
    predecessor: '200D',
    successor: 'R10',
    sensor: {
      engine: ENGINE_TYPE.DIGIC8,
      pixelsFamiliar: '24.1M',
      type: SENSOR_TYPE.CMOS,
      isoMin: 100,
      isoMax: 51200,
    },
    shutter: {
      fps: '5fps',
      speed: 4000,
    },
    focus: {
      desc: '9포인트 1크로스',
      contrast: true,
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_MIRROR,
      magnification: 0.87,
      coverage: 95,
    },
    display: {
      desc: '3.0" 1040K',
      tilt: true,
      swivel: true,
      touch: true,
    },
    video: {
      format: 'H.264',
      modes: '1080@60p, 720@60p',
    },
    metering: {
      desc: '63분할측광',
    },
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.ADVANCED,
    name: 'Ra',
    predecessor: '60Da',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // astro: true,
    // }
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.MIDRANGE,
    name: 'RP',
    successor: 'R8',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M6 markII',
    predecessor: 'M6',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2019,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRY,
    name: 'M200',
    predecessor: 'M100',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2020 =============================================
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEF,
    grade: GRADE.FLAGSHIP,
    name: '1D X markIII',
    predecessor: '1D X markII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFS,
    grade: GRADE.ENTRY,
    name: '850D',
    otherNames: 'Rebel T8i, Kiss Digital X10i',
    predecessor: '800D',
    successor: 'R10',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.PROFESSIONAL,
    name: 'R5',
    predecessor: '5D markIV',
    successor: 'R5C',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.ADVANCED,
    name: 'R6',
    predecessor: '6D markII',
    successor: 'R6 markII',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2020,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonEFM,
    grade: GRADE.ENTRYMID,
    name: 'M50 markII',
    predecessor: 'M50',
    successor: 'R50',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC8,
    // }
  },

  // 2021 =============================================
  {
    year: 2021,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.PROFESSIONAL,
    name: 'R3',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },

  // 2022 =============================================
  {
    year: 2022,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.PROFESSIONAL,
    name: 'R5 C',
    predecessor: 'R5',
    // sensor: {
    //   engine: ENGINE_TYPE.DIGIC10,
    // }
  },
  {
    year: 2022,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.ADVANCED,
    name: 'R6 markII',
    predecessor: 'R6',
  },
  {
    year: 2022,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRFS,
    grade: GRADE.ADVANCED,
    name: 'R7',
    predecessor: '7D markII, 90D',
  },
  {
    year: 2022,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRFS,
    grade: GRADE.MIDRANGE,
    name: 'R10',
    predecessor: 'M5',
  },

  // 2023 =============================================
  {
    year: 2023,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRF,
    grade: GRADE.MIDRANGE,
    name: 'R8',
    predecessor: 'RP',
  },
  {
    year: 2023,
    maker: CAMERA_MAKER.CANON,
    mount: MOUNT.CanonRFS,
    grade: GRADE.ENTRYMID,
    name: 'R50',
    predecessor: 'M50 markII',
  },
];
