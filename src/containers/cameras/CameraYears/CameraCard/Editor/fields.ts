import { InputFields } from '@/types/index.d';

const basicFields: InputFields = {
  year: {
    label: '*출시 연도',
    desc: '2007, 2013 등 숫자로 입력',
  },
  maker: {
    label: '*메이커',
    desc: '모두 소문자 입력\n지원 항목 : canon, contax, fujifilm, kodak, minolta, nikon, olympus, panasonic, pentax, samsung, sigma, sony',
  },
  maker2: {
    label: '메이커2',
    desc: 'Canon DCS1 / kodak EOS-DSC1 처럼 타사에서도 같은 바디로 출시된 경우. 이 경우엔 kodak 입력',
  },
  mount: {
    label: '*마운트',
    desc: '렌즈 마운트 기재.\n지원 항목 : Canon EF, Canon EF-S, Canon EF-M, Canon RF, Canon RF-S, Contax N, 4/3, Fujifilm G, Fujifilm X, Micro 4/3, Leica L, Nikon F, Nikon Z, Nikon 1, Pentax K, Pentax Q, Sigma SA, Sony A, Sony E, 645\n혹시 더 있다면 방명록에 남겨주세요.',
  },
  grade: {
    label: '*등급',
    desc: '카메라의 등급, 대문자 기재\n지원 항목 : FLAGSHIP, PROFESSIONAL, ADVANCED, MIDRANGE, ENTRYMID, ENTRY, VALUE',
  },
  name2: {
    label: '이름2',
    desc: 'Canon DCS1 / kodak EOS-DSC1 처럼 타사에서도 같은 바디로 출시된 경우. 이 경우엔 EOS-DSC1 입력',
  },
  desc: {
    label: '한줄평',
    desc: '이 카메라가 어떤 카메라인지 한줄로 설명',
  },
  predecessor: {
    label: '전작',
    desc: '같은 메이커에서 이 카메라의 바로 이전 기종이 있을 경우, 카메라 이름을 입력.\n예를 들어 캐논 50D의 경우 메이커 빼고 그냥 40D를 입력하면 됨.',
  },
  successor: {
    label: '후속작',
    desc: '같은 메이커에서 이 카메라의 직계 후속작이 있을 경우, 카메라 이름을 입력.\n예를 들어 캐논 50D의 경우 메이커 빼고 그냥 60D를 입력하면 됨.',
  },
  refs: {
    label: '근거자료',
    desc: '데이터를 참고한 링크 주소. 콤마로 구분하면 됨.\nhttps://www.dpreview.com/1, https://www.dpreview.com/2 이런식',
  },
  dustproof: {
    type: 'checkbox',
    label: '방진방습',
    desc: '마운트에 고무실링이 있거나 아무튼 방진방습 되는 카메라일 경우. 러기드와는 다름.',
  },
  rugged: {
    type: 'checkbox',
    label: '러기드',
    desc: '대놓고 튼튼한 컨셉으로 나온 러기드 카메라일 경우. 방진방습 카메라는 해당되지 않음.',
  },
};

const sensorFields: InputFields = {
  'sensor.name': {
    label: '센서명',
    desc: '센서 명칭이 알려져 있을 경우, 예를 들어 Super CCD, IMX021 등',
  },
  'sensor.engine': {
    label: '엔진명',
    desc: '이미지 프로세싱 엔진명이 있을 경우, 예를 들어 캐논은 DIGIC II, 소니는 Bionz 등',
  },
  'sensor.pixelsFamiliar': {
    label: '화소수',
    desc: '',
  },
  'sensor.size': {
    label: '크기',
    desc: '',
  },
  'sensor.type': {
    label: '타입',
    desc: '',
  },
  'sensor.isoMin': {
    label: 'ISO 저',
    desc: '',
  },
  'sensor.isoMax': {
    label: 'ISO 고',
    desc: '',
  },
  'sensor.vr': {
    type: 'checkbox',
    label: '손떨림보정',
  },
  'sensor.cleaning': {
    type: 'checkbox',
    label: '센서청소',
  },
  'sensor.astro': {
    type: 'checkbox',
    label: '천체촬영',
  },
  'sensor.noLowPass': {
    type: 'checkbox',
    label: '로우패스X',
  },
  'sensor.ir': {
    type: 'checkbox',
    label: '적외선',
  },
};

const shutterAfMeteringFields: InputFields = {
  'shutter.fps': '연사속도',
  'shutter.speed': {
    type: 'number',
    label: '셔터속도',
  },
  'focus.name': '엔진명',
  'focus.desc': '설명',
  'focus.contrast': {
    type: 'checkbox',
    label: '컨트라스트',
  },
  'focus.phaseDetection': {
    type: 'checkbox',
    label: '위상차',
  },
  'metering.engine': '측광 엔진',
  'metering.desc': '측광 설명',
};

const viewfinderFields: InputFields = {
  'viewfinder.type': '타입',
  'viewfinder.magnification': {
    type: 'number',
    label: '배율',
    step: '0.01',
  },
  'viewfinder.coverage': {
    type: 'number',
    label: '시야율',
  },
  'viewfinder.resolution': {
    type: 'number',
    label: '해상도',
  },
};

const displayFields: InputFields = {
  'display.desc': '설명',
  'display.liveview': {
    type: 'checkbox',
    label: '라이브뷰',
  },
  'display.touch': {
    type: 'checkbox',
    label: '터치',
  },
  'display.tilt': {
    type: 'checkbox',
    label: '틸트',
  },
  'display.swivel': {
    type: 'checkbox',
    label: '스위블',
  },
  'display.trueblack': {
    type: 'checkbox',
    label: '트루블랙',
  },
};

const videoFields: InputFields = {
  'video.format': '비디오포멧',
  'video.modes': '비디오해상도',
};

export const fields = [
  {
    subtitle: '기본 정보',
    fields: basicFields,
  },
  {
    subtitle: '센서 정보',
    fields: sensorFields,
  },
  {
    subtitle: '셔터/AF/측광 정보',
    fields: shutterAfMeteringFields,
  },
  {
    subtitle: '뷰파인더 정보',
    fields: viewfinderFields,
  },
  {
    subtitle: '디스플레이 정보',
    fields: displayFields,
  },
  {
    subtitle: '비디오 정보',
    fields: videoFields,
  },
];
