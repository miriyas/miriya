import { InputFields } from '@/types/index.d';

export const yearStartField = {
  label: '생산시작',
  desc: '생산 시작 연도와 분기를 적는다.',
  example: '2008, 1',
};

export const yearEndField = {
  label: '생산종료',
  desc: '생산 종료 연도와 분기를 적는다.',
  example: '2008, 4',
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
  'data.body.material': {
    label: '재질',
    desc: '내외장 재질을 적음.',
    example: '강철 내장, 플라스틱 외장 / 강철 내장, 마그네슘 합금 외장',
  },
  'data.body.verticalGrip': {
    label: '세로그립',
    desc: '호환되는 세로그립을 기입',
    example: 'D-BG2',
  },
  'data.power': {
    label: '전원',
    desc: '호환되는 배터리를 기입',
    example: 'D-LI90P 리튬이온, AC전원 / AAx4(리튬, Ni-MH 포함), AC전원',
  },
  'data.bonus.wr': {
    type: 'checkbox',
    label: '방진방습',
    desc: '방진방습 지원하는 기종의 경우 체크',
  },
  'data.bonus.sr': {
    label: '손떨림보정',
    desc: '손떨림보정 지원 기종의 경우 적음',
    example: 'SR II, 4스탑 / 2.5-4스탑',
  },
  'data.bonus.dustRemove': {
    label: '먼지제거',
    desc: '먼지제거 지원 기종의 경우 적음',
    example: '일반진동, SP코팅, 먼지경고 / 초음파, 먼지경고',
  },
  'data.memory': {
    label: '메모리',
    desc: '호환되는 메모리 매체를 적음',
    example: 'CF Type I/II, 마이크로드라이브 / SD, SDHC',
  },
  'data.etc': {
    label: '기타',
    desc: '기타 기능들.. 주로 다중노출, 회전센서가 들어감',
    example: '다중노출, 회전센서',
  },
};

export const fields2: InputFields = {
  'data.sensor.pixels': {
    label: '센서화소',
    desc: '센서 화소와 타입을 기입',
    example: '2435만화소 CMOS / 610만화소 CCD',
  },
  'data.sensor.size': {
    label: '센서크기',
    desc: '센서의 구체적인 크기를 기입',
    example: '44 x 33mm, 1.27crop 645 / 23.7 x 15.7mm, 1.53crop',
  },
  'data.sensor.iso': {
    label: '지원감도',
    desc: '지원하는 감도를 기입, 확장 감도는 괄호 안에 기입',
    example: 'ISO100-1600 / ISO100-3200(6400) / ISO200-1000(100-1600)',
  },
  'data.sensor.engine': {
    label: '프로세서',
    desc: '이미지 프로세서가 밝혀진 기종의 경우 기입',
    example: 'PRIME II',
  },
};

export const fields3: InputFields = {
  'data.modes': {
    label: '촬영모드',
    desc: '지원하는 촬영 모드를 콤마로 구분하여 표시',
    example: 'Av, HyM, HyP, P, Green, Sv, TAv, Tv',
  },
  'data.meteringK': {
    label: 'K/M 측광',
    desc: 'K/M 렌즈 사용시 가능한 측광 방식을 적는다.',
    example: '중앙중점, 스팟',
  },
  'data.meteringA': {
    label: 'A/F/FA 측광',
    desc: 'A/F/FA 렌즈 사용시 가능한 측광 방식을 적는다.',
    example: '16분할, 중앙중점, 스팟',
  },
  'data.meteringRange': {
    label: '측광범위',
    desc: '지원하는 측광 범위를 문자열 그대로 적는다.',
    example: '1 ~ 19ev',
  },
  'data.exposureRange': {
    label: '노출보정',
    desc: '노출보정이 되는 범위를 ± 기호 사용하여 ev단위로 적는다.',
    example: '±3ev',
  },
  'data.shutter': {
    label: '셔터속도',
    desc: '지원하는 셔터속도를 자유롭게 적는다.',
    example: '30-1/8000sec, B',
  },
  'data.continuous': {
    label: '연사속도',
    desc: '연사속도를 자유롭게 기입',
    example: '2.8fps / 4.7fps에서 JPEG 17장, RAW 5장',
  },
  'data.continuousLength': {
    label: '연사매수',
    desc: '지원하는 연사 매수를 자유롭게 기입',
    example: '8장 / JPEG 5장, RAW 3장 / JPEG 38장, 이후로 2.3fps, RAW PEF 14장, DNG 16장까지',
  },
};

export const fields4: InputFields = {
  'data.viewFinder.type': {
    label: '뷰파인더',
    desc: '뷰파인더가 펜타프리즘인지, 전자식인지, 하이브리드인지 등을 아래 영어에 맞게 기입',
    example: 'PentaPrism, PentaMirror, Electric, Hybrid',
  },
  'data.viewFinder.coverage': {
    label: '시야율',
    desc: '뷰파인더 시야율을 % 문자 포함하여 기입.',
    example: '95%, 92%, 100%',
  },
  'data.viewFinder.magnification': {
    label: '배율',
    desc: '뷰파인더 배율을 x 문자 포함하여 기입.',
    example: '0.8x / 0.95x / 0.62x (DFA55), 0.85x (FA75)x',
  },
  'data.viewFinder.screenReplace': {
    type: 'checkbox',
    label: '스크린교환',
    desc: '스크린교환 가능할 경우 체크',
  },
};

export const fields5: InputFields = {
  'data.flash.interlock': {
    label: '플래시연동',
    desc: '지원하는 연동 방식을 나열',
    example: '디지털, X-Sync / 디지털 / 아날로그, 디지털',
  },
  'data.flash.modes': {
    label: '플래시모드',
    desc: '지원하는 플래시 모드를 나열',
    example: 'W, HS, P-TTL',
  },
  'data.flash.syncSpeed': {
    label: '동조속도',
    desc: '지원하는 동조 속도를 기입',
    example: '30 ~ 1/180sec, B',
  },
  'data.flash.internal': {
    label: '내장플래시',
    desc: '내장플래시의 가이드 넘버 등을 기입',
    example: 'Gn15.6, 28mm',
  },
  'data.flash.redEye': {
    type: 'checkbox',
    label: '적목감소',
    desc: '적목감소 사전 발광 기능이 있으면 체크',
  },
  'data.flash.release': {
    label: '유선릴리즈',
    desc: '지원하는 유선 릴리즈 모델명을 적는다.',
    example: '케이블릴리즈 CS205',
  },
  'data.flash.releaseW': {
    label: '무선릴리즈',
    desc: '지원하는 무선 릴리즈 모델명을 적는다.',
    example: '리모트릴리즈 F',
  },
};

export const fields6: InputFields = {
  'data.focus.name': {
    label: 'AF센서',
    desc: 'AF센서명이 밝혀져있을 경우 기입',
    example: 'SAFOX VII',
  },
  'data.focus.points': {
    label: '측거점',
    desc: '측거점에 대해 기입.',
    example: '27포인트 25크로스, 11포인트 9크로스',
  },
  'data.focus.sensitivity': {
    label: 'AF감도',
    desc: 'AF센서의 감도를 ev 단위로 표시',
    example: '-1 ~ 18ev',
  },
  'data.focus.superImpose': {
    type: 'checkbox',
    label: '슈퍼임포즈',
    desc: '슈퍼임포즈 기능이 있으면 체크',
  },
  'data.focus.supersonicMotor': {
    type: 'checkbox',
    label: '초음파모터',
    desc: '초음파모터 렌즈를 지원하면 체크',
  },
};

export const fields7: InputFields = {
  'data.display': {
    label: 'LCD',
    desc: '화면 화소와 크기, 타입에 대해 기입',
    example: '92만 1000화소, 3.0인치 TFT LCD',
  },
  'data.liveView': {
    type: 'checkbox',
    label: '라이브뷰',
    desc: '라이브뷰가 가능한 카메라에만 체크. 풀타임이 아니어도 오케이',
  },
  'data.liveViewAF': {
    label: '라이브뷰AF',
    desc: '라이브뷰시 지원하는 AF 모드를 나열',
    example: '컨트라스트, 얼굴인식, 위상차',
  },
  'data.movie': {
    label: '동영상',
    desc: '지원하는 동영상 크기와 fps 등을 기입',
    example: '1920x1080p, 25fps',
  },
  'data.movieType': {
    label: '동영상형식',
    desc: '지원하는 동영상 형식',
    example: 'M-JPEG / H.264',
  },
  'data.imageType': {
    label: '이미지형식',
    desc: '지원하는 이미지 파일 형식',
    example: 'RAW(12-bit PEF/DNG), JPEG',
  },
  'data.refs': {
    label: '근거자료',
    desc: '데이터를 참고한 링크 주소. 콤마로 구분하면 됨.\n예를 들어..',
    example: 'https://a.com/1, https://b.com/2',
  },
};
