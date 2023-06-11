import {
  CameraCore,
  CAMERA_MAKER,
  OPTICS_TYPE,
  SENSOR_TYPE,
  SENSOR_SIZE,
  // FOCUS_NAME,
  // VIDEO_SCAN_TYPE,
  // ENGINE_TYPE,
  GRADE,
  MOUNT,
} from '@/types/cameras.d';

// https://en.wikipedia.org/wiki/Contax_N_Digital

export const CONTAXES: CameraCore[] = [
  // 1995 =============================================
  // 1996 =============================================
  // 1997 =============================================
  // 1998 =============================================
  // 1999 =============================================
  // 2000 =============================================
  {
    year: 2000,
    maker: CAMERA_MAKER.CONTAX,
    mount: MOUNT.ContaxN,
    grade: GRADE.FLAGSHIP,
    name: 'N Digital',
    desc: '최초의 풀프레임 DSLR',
    sensor: {
      name: 'FTF3020-C',
      pixelsFamiliar: '6.13M',
      size: SENSOR_SIZE.FF,
      type: SENSOR_TYPE.CCD,
      isoMin: 50,
      isoMax: 1600,
    },
    shutter: {
      fps: '4fps',
      speed: 8000,
    },
    focus: {
      desc: '5포인트',
    },
    viewfinder: {
      type: OPTICS_TYPE.PENTA_PRISM,
      magnification: 0.73,
      coverage: 95,
    },
    display: {
      desc: '2.0" 200K',
    },
    metering: {
      desc: '5분할측광',
    },
    refs: 'https://www.dpreview.com/articles/3315211933/contaxn1digital, https://www.dpreview.com/products/contax/slrs/contax_ndigital/specifications, https://www.juzaphoto.com/recensione.php?l=en&t=contax_n_digital, https://cameramanuals.org/contax/contax_n_digital-02.pdf',
  },

  // 2001 =============================================
  // 2002 =============================================
  // 2003 =============================================
  // 2004 =============================================
  // 2005 =============================================
  // 2006 =============================================
  // 2007 =============================================
  // 2008 =============================================
  // 2009 =============================================
  // 2010 =============================================
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
