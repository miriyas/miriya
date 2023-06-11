import { FOCUS_NAME } from '@/types/cameras.d';
import { PentaxSlrCore, PENTAX_SLR_MOUNT } from '@/types/pentaxes.d';

export const W_CELL_SLR = 22;
export const H_CELL_SLR = 22;

export const PENTAX_SLRS: PentaxSlrCore[] = [
  // Line 1 ==============================
  {
    name: 'PZ-1 (Z-1)',
    line: 1,
    startYear: 1991,
    endYear: 1993,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '파생 모델로 Z-1SE가 있는데, 1994년 펜탁스사 창립 75주년을 기념하여 제작된 기념모델이다. Z-1과 같은 기능을 가지고 있으나 일부 기능은 Z-1p와 같은 것으로 알려져 있다. Z-1SE는 티타늄 골드로 도장되어 발매.',
      body: {
        width: 152,
        height: 95.5,
        depth: 74,
        weight: 650,
        color: '실버/블랙, 블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, HyP, M, P, Av, Tv',
      metering: {
        k: '중앙중점, 스팟',
        a: '8분할, 중앙중점, 스팟',
        range: '0 ~ 20ev',
      },
      exposure: {
        fix: true,
        range: '±4ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/8000, B',
        timer: '2초, 12초',
        release: '케이블릴리즈 F',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '3fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/250sec',
        modes: 'TTL, P, S',
        internal: 'Gn14, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=22',
    },
  },
  {
    name: 'PZ-1p (Z-1p)',
    line: 1,
    startYear: 1994,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'Z-1의 후속 기종. Z-1p는 초당 4매의 내장 모터드라이브, 교환 가능한 포커싱스크린, 넓은 측광범위와 1/8000의 고속셔터, 간이 미러업, 다양한 노출모드와 뛰어난 사용자 환경, 현재까지 모든 렌즈와의 완벽한 호환, 방진방습 구조등 타 메이커에 빠지지 않는 기능을 가지고 있어 펜탁스 AF 최고급 기종 역할을 하였다. 안정적이고 우수한 성능, 가벼운 무게, 작은 몸체, 사용자 우선의 환경, 타 메이커에 비하여 저렴한 가격등 펜탁스만의 특징이 여실히 드러난 고급기종. PZ-1p는 Z-1p의 미주지역 모델명이다.',
      body: {
        width: 152,
        height: 95.5,
        depth: 74,
        weight: 650,
        color: '블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, HyP, P, Av, Tv',
      metering: {
        k: '중앙중점, 스팟',
        a: '8분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        fix: true,
        range: '±4ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/8000, B',
        timer: '2초, 12초',
        release: '케이블릴리즈 F',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '4fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/250sec',
        modes: 'TTL, P, S',
        internal: 'Gn14, 28mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=28',
    },
  },
  {
    name: 'MZ-S',
    line: 1,
    startYear: 2001,
    endYear: 2006,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '펜탁스의 플래그십 기종으로, 비록 연사속도와 셔터속도에서는 타 메이커의 최고급 기종에 많이 떨어지는 성능을 가지고 있으나, 펜탁스에서 새로이 시도한 많은 기능들과 전용 세로그립, 안정적인 성능 등이 특징이다.',
      body: {
        width: 136.5,
        height: 95,
        depth: 64,
        weight: 520,
        color: '블랙/실버, 블랙',
        verticalGrip: 'BG-10',
      },
      power: 'CR5x2',
      modes: 'HyM, M, Av, Tv',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        fix: true,
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/6000, B',
        timer: '2초, 12초',
        release: '케이블릴리즈 CS105/CS130',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '2.5fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.75,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
        screenReplace: true,
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/180sec',
        modes: 'W, HS, P-TTL, TTL, P, S',
        internal: 'Gn12, 24mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX7,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=37',
    },
  },
  // Line 2 ==============================
  {
    name: 'PZ-5 (Z-5)',
    line: 2,
    startYear: 1991,
    endYear: 1993,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '일본내에서만 발매된 기종이다. Z-1p의 기능 간략판으로, 대부분 큰 차이가 없고 중요한 기능들을 그대로 물려받아 Z-1p의 대용으로도 적합한 기종이다. Z-5p는 티타늄 골드로 도장한 모델도 발매되었다.',
      body: {
        weight: 650,
        color: '실버/블랙, 블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, HyP, P, Av',
      metering: {
        k: '중앙중점, 스팟',
        a: '8분할, 중앙중점, 스팟',
        range: '0 ~ 20ev',
      },
      exposure: {
        fix: true,
        range: '±4ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/8000, B',
        timer: '?',
        release: '케이블릴리즈 F',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '3fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/250sec',
        modes: 'TTL, P, S',
        internal: 'Gn14, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=25',
    },
  },
  {
    name: 'PZ-5p (Z-5p)',
    line: 2,
    startYear: 1994,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'Z-5는 Z-5p와 같이 일본내에서만 발매된 기종이다. 기본적으로 Z-1과 같은 성은을 지닌것으로 알려져 있으며, 발매당시 검은색과 티타늄골드의 두가지 색상으로 발매되었다.',
      body: {
        weight: 650,
        color: '실버/블랙, 블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, HyP, P, Av',
      metering: {
        k: '중앙중점, 스팟',
        a: '8분할, 중앙중점, 스팟',
        range: '0 ~ 20ev',
      },
      exposure: {
        fix: true,
        range: '±4ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/8000, B',
        timer: '?',
        release: '케이블릴리즈 F',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '4fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/250sec',
        modes: 'TTL, P, S',
        internal: 'Gn14, 28mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=26',
    },
  },
  // Line 3 ==============================
  {
    name: 'LX',
    line: 3,
    startYear: 1980,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment:
        'LX는 1980년 아사히 팬탁스의 창립 60주년을 기념하여 만든 기종이다. 거의 20년 동안을 거의 변화없이 생산되던 펜탁스 수동 카메라의 명작며 수많은 펜탁스 사용자들의 꿈의 기종이었다. 당시에 LX에 사용된 기술은 최고의 기술이며, 현재에도 사용상에 아무런 지장을 주지 않고 있다.',
      body: {
        width: 144.5,
        height: 90.5,
        depth: 50,
        weight: 570,
        color: '블랙, 한정판 골드/브라운 가죽',
      },
      power: 'LR44x2',
      modes: 'M, Av',
      metering: {
        k: '필름면측광',
        range: '-6.5 ~ 20ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '6-1600ASA (후기형에선 6-3200ASA)',
      },
      shutter: {
        build: '하이브리드 전자식 횡주행, 티타늄',
        speed: '125 ~ 1/2000, B',
        emergency: 'X ~ 1/2000',
        timer: '4 ~ 10초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        external: 'LX',
        motorDrive: 'LX',
      },
      etc: '심도미리보기, 다중노출, 방진방습',
      viewFinder: {
        coverage: 98,
        seeShutterSpeed: 'LED',
        seeAperture: '광학식',
        screenReplace: true,
        finderReplace: true,
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/75sec',
        modes: 'TTL, S',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=11',
    },
  },
  // // Line 4 ==============================
  {
    name: 'MX',
    line: 4,
    startYear: 1976,
    endYear: 1985,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 135.8,
        height: 82.5,
        depth: 49.3,
        weight: 495,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M',
      metering: {
        k: '중앙중점',
        range: '1 ~ 19ev',
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '기계식 횡주행, 실크',
        speed: '1 ~ 1/1000, B',
        emergency: '모두',
        timer: '4 ~ 12초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        external: 'MX',
        motorDrive: 'MX',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 95,
        magnification: 0.97,
        seeShutterSpeed: '광학식',
        seeAperture: '광학식',
        screenReplace: true,
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/60sec',
        modes: 'S',
      },
    },
  },
  // Line 5 ==============================
  {
    name: 'K2 DMD',
    line: 5,
    startYear: 1975,
    endYear: 1979,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 144,
        height: 92,
        depth: 57,
        weight: 685,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        range: '±2ev',
        fix: true,
      },
      asa: {
        manual: '8-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '8 ~ 1/1000, B',
        emergency: '1/1000, X, B',
        timer: '5 ~ 9초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        motorDrive: 'MD',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 95,
        magnification: 0.88,
        seeShutterSpeed: '바늘식',
        seeAperture: '광학식',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/125sec',
      },
    },
  },
  // Line 6 ==============================
  {
    name: 'K2',
    line: 6,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 144,
        height: 92,
        depth: 57,
        weight: 680,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '8-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '8 ~ 1/1000, B',
        emergency: '1/1000, X, B',
        timer: '5 ~ 9초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 95,
        magnification: 0.88,
        seeShutterSpeed: '바늘식',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/125sec',
      },
    },
  },
  // // Line 7 ==============================
  {
    name: 'SFX (SF-1)',
    line: 7,
    startYear: 1987,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KAF,
    af: true,
    data: {
      comment: '',
      body: {
        width: 157,
        height: 99,
        depth: 63.5,
        weight: 665,
        color: '암회색',
        verticalGrip: 'Battery Grip SF (AAx4)',
      },
      power: 'CR5x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 20ev',
      },
      exposure: {
        range: '±4ev',
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '1.8fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.81,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn14, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX,
        sensitivity: '2 ~ 18ev',
        support: true,
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=18',
    },
  },
  {
    name: 'SFXn (SF-1n)',
    line: 7,
    startYear: 1990,
    endYear: 1992,
    mount: PENTAX_SLR_MOUNT.KAF,
    af: true,
    data: {
      comment: '',
      body: {
        width: 154.5,
        height: 99,
        depth: 63.5,
        weight: 665,
        color: '암회색',
        verticalGrip: 'Battery Grip SF (AAx4)',
      },
      power: 'CR5x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '2분할, 스팟',
        range: '1 ~ 19ev',
      },
      exposure: {
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/4000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2.2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.81,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/125sec',
        modes: 'TTL, P, S',
        internal: 'Gn12, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX,
        sensitivity: '2 ~ 18ev',
        support: true,
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=18',
    },
  },
  {
    name: 'MZ-3 (ZX-3)',
    line: 7,
    startYear: 1997,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'MZ-3는 일본, 유럽등에서만 발매가 된 기종이다. 자체로 아주 우수한 성능을 지니고 있으며, 자체의 내구성과 성능만을 보면, 캐논의 EOS7, 니콘의 F80등에 비견이 가능한 우수한 기종이다.',
      body: {
        width: 135,
        height: 90,
        depth: 61.5,
        weight: 410,
        color: '실버/블랙, 블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        fix: true,
        range: '±3ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/4000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      etc: '심도미리보기',
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/125sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=33',
    },
  },
  {
    name: 'MZ-6 (ZX-6)',
    line: 7,
    startYear: 2001,
    endYear: 2004,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment: '',
      body: {
        width: 135,
        height: 90,
        depth: 61.5,
        weight: 400,
        color: '실버/블랙, 블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
    },
  },
  // Line 8 ==============================
  {
    name: 'P5 (P50)',
    line: 8,
    startYear: 1986,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment: '',
      body: {
        width: 137,
        height: 87.5,
        depth: 50.5,
        weight: 525,
        color: '블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        release: '표준 기계식',
        timer: '12초',
      },
      winder: {
        internal: '수동',
        external: 'ME II',
        motorDrive: 'A',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
    },
  },
  {
    name: 'MZ-5 (ZX-5)',
    line: 8,
    startYear: 1995,
    endYear: 1996,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '발매당시 우수한 성능과 작은 크기로 사용자의 많은 호평을 받았다. 하지만 심도 미리보기 기능과 노출고정 기능이 제거되어 사용자들이 불편함을 느꼈던 기종. MZ-5는 다음해에 심도 미리보기 기능과 노출고정 기능을 가지고 있는 MZ-5n으로 개량되어 발매가 되었다. 일본내에서는 MZ-5의 노출고정 기능을 추가하는 서비스를 펜탁스에서 제공한 적이 있으나 국내에서는 불가능하다.',
      body: {
        width: 135,
        height: 90,
        depth: 61.5,
        weight: 400,
        color: '실버/블랙, 블랙',
        verticalGrip: 'Battery Pack Fg (AAx4)',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        sensitivity: '-1 ~ 18ev',
        support: true,
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=30',
    },
  },
  {
    name: 'MZ-5n (ZX-5n)',
    line: 8,
    startYear: 1997,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '기존에 발매된 MZ-5에서 편의 기능을 개선한 제품이며, MZ-3에서 셔터속도와 동조속도만을 조금 낮춘 기종이다. 그외에는 성능상 다른점이 없으므로 가격대비 성능에서 상당히 우수한 기종이다.',
      body: {
        width: 135,
        height: 90,
        depth: 61.5,
        weight: 410,
        color: '실버/블랙, 블랙',
        verticalGrip: 'Battery Pack Fg (AAx4)',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        sensitivity: '-1 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=31',
    },
  },
  // Line 9 ==============================
  {
    name: 'Super-A (Super Program)',
    line: 9,
    startYear: 1983,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment: '',
      body: {
        width: 131,
        height: 86.5,
        depth: 47.5,
        weight: 490,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 19ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '6-3200ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '15 ~ 1/2000, B',
        release: '표준 기계식',
        timer: '12초',
      },
      winder: {
        internal: '수동',
        external: 'ME II',
        motorDrive: 'A',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LCD',
        seeAperture: 'LCD(Tv, P)',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/125sec',
        modes: 'TTL, P, S',
      },
    },
  },
  {
    name: 'PZ-20p (Z-20p)',
    line: 9,
    startYear: 1993,
    endYear: 1995,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment: '',
      body: {
        width: 146,
        height: 93,
        depth: 66,
        color: '블랙',
        weight: 500,
      },
      power: 'CR5x2',
      modes: 'HyP, HyM, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn13, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '1 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxforums.com/camerareviews/pentax-z-20p.html',
    },
  },
  {
    name: 'MZ-7 (ZX-7)',
    line: 9,
    startYear: 1999,
    endYear: 2001,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'MZ-7은 펜탁스의 간판격인 보급형 기종. 초보자들이 가정에서 쉽게 촬영이 가능하도록 그림으로 선택이 가능한 여러가지 프로그램 모드, 오토프로그램을 갖추고 있다. 또한 보다 고급 사용자를 위한 조리개우선, 셔터우선, 매뉴얼 우선기능을 갖추고 있다. 고급 기종에서 제외 되었던 다중노출기능이 추가되어 있다. 가정용 카메라를 지향하면서도 원가를 높이는 금속 렌즈마운트를 채택하여 내구성을 높이고 있다. 단점은 심도 미리보기 기능 제외. 미주지역에서는 ZX-7이라는 이름으로 발매가 되었다.',
      body: {
        width: 135.5,
        height: 92,
        depth: 63.5,
        weight: 380,
        color: '실버/블랙',
        verticalGrip: 'Battery Pack Fg (AAx4)',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P, Auto',
      metering: {
        k: '중앙중점',
        a: '6분할',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
        releaseW: '지원',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.7,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        support: true,
        sensitivity: '-1 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=35',
    },
  },
  // Line 10 =============================
  {
    name: 'Program-A (Program Plus)',
    line: 10,
    startYear: 1983,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment: '',
      body: {
        width: 131,
        height: 86.5,
        depth: 47.5,
        weight: 490,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '6-3200ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '15 ~ 1/1000, B',
        release: '표준 기계식',
        timer: '12초',
      },
      winder: {
        internal: '수동',
        external: 'ME II',
        motorDrive: 'A',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LCD',
        seeAperture: 'LCD(P)',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
    },
  },
  {
    name: 'Z-50p',
    line: 10,
    startYear: 1993,
    endYear: 1995,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment: 'Z-20과 큰차이를 보이지 않는 기종이다. 거의 같은 기능을 지원하나 하이퍼프로그램 모드가 탑재되어 있다.',
      body: {
        width: 146,
        height: 93,
        depth: 66,
        weight: 500,
        color: '블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, HyP, P, Av, Tv',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 스팟',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      panorama: true,
      asa: {
        dx: '25-5000ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn13, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '1 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=23, https://www.pentaxforums.com/camerareviews/pentax-z-50p.html',
    },
  },
  {
    name: 'MZ-50 (ZX-50)',
    line: 10,
    startYear: 1997,
    endYear: 1999,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
    data: {
      comment: 'Z-20과 큰차이를 보이지 않는 기종이다. 거의 같은 기능을 지원하나 하이퍼프로그램 모드가 탑재되어 있다.',
      body: {
        width: 135,
        height: 90.5,
        depth: 62.5,
        weight: 345,
        color: '블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점',
        a: '2분할',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX5,
        sensitivity: '-1 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=23, https://www.pentaxforums.com/camerareviews/pentax-z-50p.html',
    },
  },
  {
    name: 'MZ-30 (ZX-30)',
    line: 10,
    startYear: 2000,
    endYear: 2001,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
    data: {
      comment:
        '본격적인 가정용 카메라 이다. 하지만 MZ-5 급에나 있는 노출 고정 기능을 갖추고 있다. 특이하게도 조리개링 A셋팅이 없는 구형 K, M렌즈는 사용이 불가능하다. 그 이유는 카메라의 단가를 낯추기 위하여 기존의 MF렌즈를 인식하던 카메라마 운트의 기계식 레버를 제거하였기 때문이다. 따라서 MZ-30은 A표시가 없는 렌즈를 사용시 셔터가 잠긴다. 또한 A표식이 있는 렌즈라도 A위치에서만 사용이 가능하다.',
      body: {
        width: 135,
        height: 92,
        depth: 63.5,
        weight: 360,
        color: '실버/블랙',
        verticalGrip: 'Battery Pack Fg (AAx4)',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        a: '6분할',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      etc: '다중노출',
      viewFinder: {
        coverage: 92,
        magnification: 0.7,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX6,
        support: true,
        sensitivity: '-1 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=36',
    },
  },
  {
    name: 'MZ-60 (ZX-60)',
    line: 10,
    startYear: 2002,
    endYear: 2005,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
    data: {
      comment:
        'MZ 시리즈의 가정용 모델이다. 심도 미리보기, 다중노출등의 기능을 제거하고, 대신 가볍고 작은 바디로 다양한 픽쳐모드를 사용, 언제나 간편하게 촬영할수 있다. MZ-50 등의 모델과 마찬가지로, 조리개에 A 조리개가 없는 렌즈를 사용할수 없다.',
      body: {
        width: 136,
        height: 94.5,
        depth: 63,
        weight: 325,
        color: '실버/블랙',
        verticalGrip: 'Battery Pack Fg (AAx4)',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        a: '2분할',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '1fps',
      },
      viewFinder: {
        coverage: 90,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX5,
        sensitivity: '0 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=39',
    },
  },
  // Line 11 =============================
  {
    name: 'KX',
    line: 11,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 143,
        height: 91.4,
        depth: 52.5,
        weight: 631,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      asa: {
        manual: '8-6400ASA',
      },
      shutter: {
        build: '기계식 횡주행, 실크',
        speed: '1 ~ 1/1000, B',
        emergency: '모두',
        timer: '5 ~ 9초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        motorDrive: 'KX MOT 버전에서 모터드라이브II 호환',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 93,
        magnification: 0.88,
        seeShutterSpeed: '바늘식',
        seeAperture: '광학식',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/60sec',
      },
    },
  },
  {
    name: 'ME F',
    line: 11,
    startYear: 1981,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.KF,
    data: {
      comment: '',
      body: {
        width: 134.4,
        height: 89.1,
        depth: 52,
        weight: 480,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x4',
      modes: 'M, Av',
      metering: {
        k: '중앙중점',
        range: '1 ~ 19ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '12-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '4 ~ 1/2000, B',
        emergency: 'X, B',
        release: '표준 기계식',
        timer: '4 ~ 10초',
      },
      winder: {
        internal: '수동',
        external: 'ME, ME II',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.95,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/125sec',
        modes: 'S',
      },
      focus: {
        name: 'TTL-EFC',
        sensitivity: '4 ~ 16ev',
      },
    },
  },
  {
    name: 'PZ-70p (Z-70p)',
    line: 11,
    startYear: 1995,
    endYear: 1998,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'Z시리즈의 라인중에서 가장 낮은 성능을 지니는 기종. 셔터는 다른 보급형 기종과 동일하나, 다분할 측광을 2분할로 지원하고 있다. PZ-70은 Z-70의 미주지역 모델이다. 모델명에 p가 붙는 기종은 간이 파노라마를 지원하는 기종이다.',
      body: {
        width: 146,
        height: 93,
        depth: 66.5,
        weight: 450,
        color: '블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, Av, Tv, P',
      metering: {
        k: '중앙중점',
        a: '2분할',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      panorama: true,
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '1.5fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn13, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '0 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=27',
    },
  },
  // // Line 12 =============================
  {
    name: 'ME',
    line: 12,
    startYear: 1976,
    endYear: 1978,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 131,
        height: 82.5,
        depth: 49.5,
        weight: 460,
        color: '실버/블랙, 블랙, 실버/브라운',
      },
      power: 'LR44x2',
      modes: 'Av',
      metering: {
        k: '중앙중점',
        range: '1 ~ 19ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '12-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '8 ~ 1/1000, B',
        emergency: 'X, B',
        timer: '4 ~ 12초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        external: 'ME, ME II',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.95,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
      },
    },
  },
  {
    name: 'ME Super',
    line: 12,
    startYear: 1979,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 131.5,
        height: 83,
        depth: 49.5,
        weight: 445,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av',
      metering: {
        k: '중앙중점',
        range: '1 ~ 19ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '12-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '4 ~ 1/2000, B',
        emergency: 'X, B',
        timer: '4 ~ 10초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        external: 'ME, ME II',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.95,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/125sec',
        modes: 'S',
      },
    },
  },
  // // Line 13 =============================
  {
    name: 'SF7 (SF10)',
    line: 13,
    startYear: 1988,
    endYear: 1993,
    mount: PENTAX_SLR_MOUNT.KAF,
    data: {
      comment:
        'SF 시리즈 엔트리 기종이며, 노출보정과 필름감도설정을 수동으로 할 수 없는 전형적인 펜탁스의 보급형 기종.  후기 AF기종의 설계에 많은 지침이 된듯한 기종. 다이얼로 조정이 가능한 사용자 환경을 가지고 있고, 2분할측광, 스팟측광등이 있다.',
      body: {
        width: 152,
        height: 96,
        depth: 63.5,
        weight: 630,
        color: '암회색',
      },
      power: 'CR5x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '2분할, 스팟',
        range: '1 ~ 19ev',
      },
      exposure: {
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn12, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX,
        sensitivity: '2 ~ 18ev',
        support: true,
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=19',
    },
  },
  {
    name: 'MZ-10 (ZX-10)',
    line: 13,
    startYear: 1996,
    endYear: 1998,
    mount: PENTAX_SLR_MOUNT.KAF2,
    data: {
      comment:
        '본격적인 가정용 카메라를 목표로 제작된 기종. MZ-7과 기능상 큰 차이는 보이지 않으나, 노출고정, 다중노출등이 없다. 또한 렌즈마운트가 플라스틱으로 되어있다.',
      body: {
        width: 135,
        height: 90.5,
        depth: 62.5,
        weight: 365,
        color: '실버/블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, SmartP, P',
      metering: {
        k: '중앙중점',
        a: '6분할',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX4,
        sensitivity: '0 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=29',
    },
  },
  {
    name: '*ist',
    line: 13,
    startYear: 2003,
    endYear: 2005,
    mount: PENTAX_SLR_MOUNT.KAF2,
    data: {
      comment: "One of the world's smallest autofocus 35mm SLF cameras. 라는 카피와 함께 등장.",
      body: {
        width: 122,
        height: 84,
        depth: 63.5,
        weight: 335,
        color: '실버/블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P, Auto',
      metering: {
        k: '중앙중점, 스팟',
        a: '16분할',
        range: '0 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/4000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
        releaseW: '지원',
      },
      etc: '심도미리보기, 다중노출',
      winder: {
        internal: '2.5fps',
      },
      viewFinder: {
        coverage: 90,
        magnification: 0.7,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/125sec',
        modes: 'W, HS, P-TTL, TTL, P, S',
        internal: 'Gn11, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX7,
        support: true,
        sensitivity: '-1 ~ 18ev',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=29',
    },
  },
  // Line 14 =============================
  {
    name: 'PZ-20 (Z-20)',
    line: 14,
    startYear: 1992,
    endYear: 1994,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment: '',
      body: {
        width: 146,
        height: 93,
        depth: 66,
        color: '블랙',
        weight: 500,
      },
      power: 'CR5x2',
      modes: 'HyP, HyM, Av, Tv, P',
      metering: {
        k: '중앙중점, 스팟',
        a: '6분할, 중앙중점, 스팟',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.8,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn13, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '1 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
      },
      refs: 'https://www.pentaxforums.com/camerareviews/pentax-z-20-pz-20.html',
    },
  },
  {
    name: 'PZ-70 (Z-70)',
    line: 14,
    startYear: 1995,
    endYear: 1999,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        'Z시리즈의 라인중에서 가장 낮은 성능을 지니는 기종. 셔터는 다른 보급형 기종과 동일하나, 다분할 측광을 2분할로 지원하고 있다. PZ-70은 Z-70의 미주지역 모델이다. 모델명에 p가 붙는 기종은 간이 파노라마를 지원하는 기종이다.',
      body: {
        width: 146,
        height: 93,
        depth: 66.5,
        weight: 450,
        color: '블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, Av, Tv, P',
      metering: {
        k: '중앙중점',
        a: '2분할',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '1.5fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn13, 28mm',
        redEye: true,
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '0 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=27',
    },
  },
  // // Line 15 =============================
  {
    name: 'PZ-10 (Z-10)',
    line: 15,
    startYear: 1991,
    endYear: 1994,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
    data: {
      comment:
        '전형적인 보급형 기종. Z시리즈는 1, 5의 모델명을 가지는 기종을 제외한 기종은 모두 비슷한 성능을 지니는 정도의 보급형 기종이다. 기종별로 약간씩의 기능의 차이는 있으나, 모든기종이 1/2000의 셔터속도, 1/100의 동조속도, ±3EV(1/2EV 씩)의 노출보정 등 유사한 성능을 지니고 있다. PZ-10 은 미주지역에서 발매된 모델이다.',
      body: {
        width: 146,
        height: 92.5,
        depth: 66.5,
        weight: 490,
        color: '블랙',
      },
      power: 'CR5x2',
      modes: 'HyM, M, P',
      metering: {
        k: '스팟',
        a: '6분할, 스팟',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
      },
      asa: {
        dx: '25-5000ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '연사불가',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그, 디지털',
        syncSpeed: '1/100sec',
        modes: 'TTL, P, S',
        internal: 'Gn12, 35mm',
      },
      focus: {
        name: FOCUS_NAME.SAFOX2,
        sensitivity: '1 ~ 18ev',
        powerZoom: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=21',
    },
  },
  // Line 16 =============================
  {
    name: 'P3 (P30)',
    line: 16,
    startYear: 1985,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment: '',
      body: {
        width: 137,
        height: 87.5,
        depth: 50.5,
        weight: 510,
        color: '암회색, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        fix: true,
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        timer: '12초',
      },
      winder: {
        internal: '수동',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
    },
  },
  {
    name: 'P3n (P30n)',
    line: 16,
    startYear: 1988,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment:
        'P30의 후속기로, P30T/P30n은 동일 기종. P5에서 노출보정과 모터드라이브 장착기능, 외부 LCD등이 제거되었다. P30T는 포커싱 스크린의 스플릿이미지가 대각선, T는 필름백이 플라스틱이다.',
      body: {
        width: 137,
        height: 89,
        depth: 50.5,
        weight: 500,
        color: '암회색, 암회색/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        fix: true,
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        timer: '12초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=16',
    },
  },
  {
    name: 'P3t (P30t)',
    line: 16,
    startYear: 1990,
    endYear: 1996,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment:
        'P30의 후속기로, P30T/P30n은 동일 기종. P5에서 노출보정과 모터드라이브 장착기능, 외부 LCD등이 제거되었다. P30T는 포커싱 스크린의 스플릿이미지가 대각선, T는 필름백이 플라스틱이다.',
      body: {
        width: 137,
        height: 89,
        depth: 50.5,
        weight: 500,
        color: '암회색, 암회색/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'M, Av, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        fix: true,
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        timer: '12초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=16',
    },
  },
  // // Line 17 =============================
  {
    name: 'KM',
    line: 17,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 143,
        height: 91.4,
        depth: 52,
        weight: 622,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x1',
      modes: 'M',
      metering: {
        k: '풀프레임',
        range: '3 ~ 18ev',
      },
      asa: {
        manual: '20-3200ASA',
      },
      shutter: {
        build: '기계식 횡주행, 실크',
        speed: '1 ~ 1/1000, B',
        emergency: '모두',
        timer: '5 ~ 13초',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        external: 'KM MOT 버전에서 모터드라이브 II 호환',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 93,
        magnification: 0.87,
        seeShutterSpeed: '바늘식',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/60sec',
      },
    },
  },
  {
    name: 'MV',
    line: 17,
    startYear: 1979,
    endYear: 1979,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 132,
        height: 84,
        depth: 49.5,
        weight: 420,
        color: '블랙',
      },
      power: 'LR44x2',
      modes: 'Av',
      metering: {
        k: '중앙중점',
        range: '3 ~ 19ev',
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        emergency: 'X, B',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.85,
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'S',
      },
    },
  },
  {
    name: 'MV1',
    line: 17,
    startYear: 1980,
    endYear: 1981,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 132,
        height: 84,
        depth: 49.5,
        weight: 425,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'Av',
      metering: {
        k: '중앙중점',
        range: '3 ~ 19ev',
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        emergency: 'X, B',
        release: '표준 기계식',
        timer: '4 ~ 10초',
      },
      winder: {
        internal: '수동',
        external: 'ME, ME II',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.85,
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'S',
      },
    },
  },
  {
    name: 'MG',
    line: 17,
    startYear: 1982,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 132,
        height: 85,
        depth: 49.5,
        weight: 423,
        color: '실버/블랙, 블랙',
      },
      power: 'LR44x2',
      modes: 'Av',
      metering: {
        k: '중앙중점',
        range: '2 ~ 19ev',
      },
      exposure: {
        range: '±2ev',
      },
      asa: {
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '1 ~ 1/1000, B',
        emergency: 'X, B',
        release: '표준 기계식',
        timer: '4 ~ 10초',
      },
      winder: {
        internal: '수동',
        external: 'ME, ME II',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.87,
        seeShutterSpeed: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'S',
      },
    },
  },
  {
    name: 'A3 (A3000)',
    line: 17,
    startYear: 1985,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
    data: {
      comment: '',
      body: {
        width: 152.5,
        height: 87.5,
        depth: 50.5,
        weight: 530,
        color: '블랙',
      },
      power: 'LR44x2',
      modes: 'Av, P',
      metering: {
        k: '중앙중점',
        range: '1 ~ 18ev',
      },
      exposure: {
        range: '±1.5ev',
      },
      asa: {
        dx: '25-1600ASA',
        manual: '25-1600ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '2 ~ 1/1000, B',
        timer: '12초',
        release: '표준 기계식',
      },
      winder: {
        internal: '2fps',
      },
      etc: '심도미리보기',
      viewFinder: {
        coverage: 92,
        magnification: 0.82,
        seeShutterSpeed: 'LCD',
        seeAperture: 'LCD(P)',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/60sec',
        modes: 'P, S',
      },
    },
  },
  // Line 18 =============================
  {
    name: 'K1000',
    line: 18,
    startYear: 1976,
    endYear: 1997,
    mount: PENTAX_SLR_MOUNT.K,
    data: {
      comment: '',
      body: {
        width: 143,
        height: 91.5,
        depth: 49,
        weight: 620,
        color: '실버/블랙, 실버/브라운',
      },
      power: 'LR44x2',
      modes: 'M',
      metering: {
        k: '풀프레임',
        range: '3 ~ 18ev',
      },
      asa: {
        manual: '(SE는 20)32-3200ASA',
      },
      shutter: {
        build: '기계식 횡주행, 실크',
        speed: '1 ~ 1/1000, B',
        emergency: '모두',
        release: '표준 기계식',
      },
      winder: {
        internal: '수동',
        motorDrive: 'KX MOT 버전에서 모터드라이브II 호환',
      },
      etc: '심도미리보기',
      viewFinder: {
        magnification: 0.88,
        seeShutterSpeed: '바늘식',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/60sec',
      },
    },
  },
  {
    name: 'MZ-M (ZX-M)',
    line: 18,
    startYear: 1998,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KA2,
    data: {
      comment:
        '펜탁스의 스테디셀러인 K1000의 후속기로 발매된 기종이다. 사진을 배우기 위한 기종으로써, AF, TTL플래쉬, 미러업, 다중노출 등을 제거하였으나, 보급형바디로는 드물게 심도 미리보기 기능과 노출 고정 기능이 있다. 이는 수동카메라를 배우는 사람들에게는 매우 필요한 기능이기 때문이다. 미주지역에서는 ZX-M으로 발매가 되었다.',
      body: {
        width: 135,
        height: 90.5,
        depth: 55,
        weight: 320,
        color: '실버/블랙',
      },
      power: 'CR2x2',
      modes: 'M, Av, Tv, P',
      metering: {
        k: '중앙중점',
        a: '2분할',
        range: '1 ~ 21ev',
      },
      exposure: {
        range: '±3ev',
        fix: true,
      },
      asa: {
        dx: '25-5000ASA',
        manual: '6-6400ASA',
      },
      shutter: {
        build: '전자식 종주행, 금속',
        speed: '30 ~ 1/2000, B',
        timer: '12초',
        release: '케이블릴리즈 F',
      },
      winder: {
        internal: '2fps',
      },
      viewFinder: {
        coverage: 92,
        magnification: 0.77,
        seeShutterSpeed: 'LED',
        seeAperture: 'LED',
      },
      flash: {
        sync: '아날로그',
        syncSpeed: '1/100sec',
        modes: 'P, S',
      },
      refs: 'https://www.pentaxclub.com/product/view?productKey=34',
    },
  },
];
