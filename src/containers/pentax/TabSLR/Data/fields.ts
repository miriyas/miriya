import { InputFields } from '@/types/index.d';

export const yearsField = {
  label: '생산연도',
  desc: '생산 시작연도부터 종료 연도까지, 숫자로 1980, 2000 등을 적는다',
  example: '1980, 2000',
};

export const mountField = {
  label: '마운트',
  desc: '렌즈 마운트를 적는다.',
  example: 'K, KF, KA, KA2, KAF, KAF2',
};

export const dimensionField = {
  label: '규격',
  desc: '밀리미터 단위로 적는다. 가로, 세로, 두께 순',
  example: '144.5, 90.5, 50',
};

export const fields1: InputFields = {
  'data.body.weight': {
    type: 'number',
    label: '무게',
    desc: '본체 무게만 그램수로 기입',
    example: '650, 700',
  },
  'data.body.color': {
    label: '색상',
    desc: '출시 당시 색상을 콤마로 구분하여 기입',
    example: '블랙, 한정판 골드/브라운 가죽 / 실버/블랙, 블랙',
  },
  'data.body.verticalGrip': {
    label: '세로그립',
    desc: '호환되는 세로그립을 기입',
    example: 'BG-10, attery Grip SF (AAx4)',
  },
  'data.power': {
    label: '전원',
    desc: '호환되는 배터리를 기입',
    example: 'CR5x2, LR44x2',
  },
  'data.etc': {
    label: '기타',
    desc: '기타 등등 적을만한거 기입',
    example: '심도미리보기, 다중노출, 방진방습',
  },
  'data.refs': {
    label: '근거자료',
    desc: '데이터를 참고한 링크 주소. 콤마로 구분하면 됨.\n예를 들어..',
    example: 'https://a.com/1, https://b.com/2',
  },
};

export const fields2: InputFields = {
  'data.modes': {
    label: '촬영모드',
    desc: '지원하는 촬영 모드를 콤마로 구분하여 표시',
    example: 'HyM, HyP, M, P, Av, Tv',
  },
  'data.metering.k': {
    label: 'K/M 측광',
    desc: 'K/M 렌즈 사용시 가능한 측광 방식을 적는다.',
    example: '중앙중점, 스팟',
  },
  'data.metering.a': {
    label: 'A/F/FA 측광',
    desc: 'A/F/FA 렌즈 사용시 가능한 측광 방식을 적는다.',
    example: '6분할, 중앙중점, 스팟',
  },
  'data.metering.range': {
    label: '측광범위',
    desc: '지원하는 측광 범위를 문자열 그대로 적는다.',
    example: '1 ~ 19ev',
  },
  'data.exposure.range': {
    label: '노출보정',
    desc: '노출보정이 되는 범위를 ± 기호 사용하여 ev단위로 적는다.',
    example: '±3ev',
  },
  'data.asa.dx': {
    label: 'DX ASA',
    desc: 'DX일 때 설정 가능한 ASA 범위',
    example: '25-5000ASA',
  },
  'data.asa.manual': {
    label: '매뉴얼 ASA',
    desc: '매뉴얼로 설정 가능한 ASA 범위',
    example: '6-6400ASA',
  },
  'data.exposure.fix': {
    type: 'checkbox',
    label: '노출고정',
    desc: '노출 고정이 가능하면 체크',
  },
  'data.panorama': {
    type: 'checkbox',
    label: '파노라마포멧',
    desc: '파노라마 포멧으로 촬영 가능하면 체크',
  },
};

export const fields3: InputFields = {
  'data.shutter.build': {
    label: '셔터구조',
    desc: '셔터 재질과 구조를 적는다. LX를 제외하면 다 같다.',
    example: '전자식 종주행, 금속',
  },
  'data.shutter.speed': {
    label: '셔터속도',
    desc: '지원하는 셔터속도를 자유롭게 적는다.',
    example: '125 ~ 1/2000, B',
  },
  'data.shutter.emergency': {
    label: '비상셔터',
    desc: '배터리 없을 경우 사용 가능한 셔터속도를 자유롭게 적는다.',
    example: 'X ~ 1/2000',
  },
  'data.shutter.timer': {
    label: '셀프타이머',
    desc: '설정 가능한 셀프타이머 시간을 적는다.',
    example: '4 ~ 10초 / 12초',
  },
  'data.shutter.release': {
    label: '유선릴리즈',
    desc: '지원하는 유선 릴리즈 모델명을 적는다.',
    example: '표준 기계식 / 케이블릴리즈 CS205',
  },
  'data.shutter.releaseW': {
    label: '무선릴리즈',
    desc: '지원하는 무선 릴리즈 모델명을 적는다.',
    example: '리모트릴리즈 F',
  },
  'data.winder.internal': {
    label: '내장와인더',
    desc: '와인더 방식이나 연사속도를 적는다.',
    example: '수동 / 2fps',
  },
  'data.winder.external': {
    label: '외장와인더',
    desc: '지원하는 외장 와인더 모델명을 적는다.',
    example: 'ME, ME II',
  },
  'data.winder.motorDrive': {
    label: '모터드라이브',
    desc: '호환되는 모터드라이브를 적는다.',
    example: 'LX / MX / MD / A / KX MOT 버전에서 모터드라이브II 호환',
  },
};

export const fields4: InputFields = {
  'data.viewFinder.coverage': {
    type: 'number',
    label: '시야율',
    desc: '뷰파인더 시야율을 백분율 숫자로만 기입.',
    example: '95, 92, 100',
  },
  'data.viewFinder.magnification': {
    type: 'number',
    label: '배율',
    step: '0.01',
    desc: '뷰파인더 배율을 x 문자 없이 모두 숫자로 기입.',
    example: '0.8, 0.95',
  },
  'data.viewFinder.seeShutterSpeed': {
    label: '셔터속도보기',
    desc: '셔터속도 보는 방법',
    example: 'LED / 광학식 / 바늘식',
  },
  'data.viewFinder.seeAperture': {
    label: '조리개값보기',
    desc: '조리개값 보는 방법',
    example: 'LED / 광학식 / LCD(Tv, P)',
  },
  'data.viewFinder.screenReplace': {
    type: 'checkbox',
    label: '스크린교환',
    desc: '스크린교환 가능할 경우 체크',
  },
  'data.viewFinder.finderReplace': {
    type: 'checkbox',
    label: '파인더교환',
    desc: '파인더교환 가능할 경우 체크',
  },
  'data.focus.powerZoom': {
    label: '파워줌',
    desc: '지원하는 펜탁스 파워줌 기능 나열',
    example: 'Auto Lens Retract, Power Zoom, Image Size Tracking, Zoom Clip, Zoom Effect',
  },
};

export const fields5: InputFields = {
  'data.flash.sync': {
    label: '플래시동조',
    desc: '동조 가능한 플래시모드',
    example: '아날로그, 디지털 / 아날로그',
  },
  'data.flash.modes': {
    label: '플래시모드',
    desc: '지원하는 플래시 모드를 나열',
    example: 'TTL, P, S',
  },
  'data.flash.syncSpeed': {
    label: '동조속도',
    desc: '지원하는 동조 속도를 기입',
    example: '1/100sec',
  },
  'data.flash.internal': {
    label: '내장플래시',
    desc: '내장플래시의 가이드 넘버 등을 기입',
    example: 'Gn12, 35mm / Gn13, 28mm',
  },
  'data.flash.redEye': {
    type: 'checkbox',
    label: '적목감소',
    desc: '적목감소 사전 발광 기능이 있으면 체크',
  },
};

export const fields6: InputFields = {
  'data.focus.name': {
    label: 'AF센서',
    desc: 'AF센서명이 밝혀져있을 경우 기입',
    example: 'SAFOX II',
  },
  'data.focus.sensitivity': {
    label: 'AF감도',
    desc: 'AF센서의 감도를 ev 단위로 표시',
    example: '-1 ~ 18ev',
  },
  'data.focus.support': {
    type: 'checkbox',
    label: 'AF보조광',
    desc: 'AF 보조광이 달려있으면 체크',
  },
};
