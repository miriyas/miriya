import { InputFields } from '@/types/index.d';

const basicFields: InputFields = {
  year: {
    label: '*출시 연도',
    desc: '2007, 2013 등 숫자로 입력',
    example: '2007, 2013',
  },
  maker: {
    label: '*메이커',
    desc: '모두 소문자 입력\n지원 항목 :',
    example: 'canon, contax, fujifilm, kodak, minolta, nikon, olympus, panasonic, pentax, samsung, sigma, sony',
  },
  maker2: {
    label: '메이커2',
    desc: 'Canon DCS1 / kodak EOS-DSC1 처럼 타사에서도 같은 바디로 출시된 경우. 이 경우엔 kodak 입력',
    example: 'canon, contax, fujifilm, kodak, minolta, nikon, olympus, panasonic, pentax, samsung, sigma, sony',
  },
  mount: {
    label: '*마운트',
    desc: '렌즈 마운트 기재.\n지원 항목은 아래와 같음. 혹시 더 있다면 방명록에 남겨주세요.',
    example:
      'Canon EF, Canon EF-S, Canon EF-M, Canon RF, Canon RF-S, Contax N, 4/3, Fujifilm G, Fujifilm X, Micro 4/3, Leica L, Nikon F, Nikon Z, Nikon 1, Pentax K, Pentax Q, Sigma SA, Sony A, Sony E, 645',
  },
  grade: {
    label: '*등급',
    desc: '카메라의 등급, 대문자 기재\n지원 항목 :',
    example: 'FLAGSHIP, PROFESSIONAL, ADVANCED, MIDRANGE, ENTRYMID, ENTRY, VALUE',
  },
  name2: {
    label: '이름2',
    desc: 'Canon DCS1 / kodak EOS-DSC1 처럼 타사에서도 같은 바디로 출시된 경우. 이 경우엔 EOS-DSC1 입력',
    example: 'EOS-DSC1, 40D',
  },
  desc: {
    label: '한줄평',
    desc: '이 카메라가 어떤 카메라인지 한줄로 설명\n예를 들어..',
    example: '세계 최초의 풀타임 라이브뷰 카메라',
  },
  predecessor: {
    label: '전작',
    desc: '같은 메이커에서 이 카메라의 바로 이전 기종이 있을 경우, 카메라 이름을 입력.\n예를 들어 캐논 50D의 경우 메이커 빼고 그냥 40D를 입력하면 됨.',
    example: '40D',
  },
  successor: {
    label: '후속작',
    desc: '같은 메이커에서 이 카메라의 직계 후속작이 있을 경우, 카메라 이름을 입력.\n예를 들어 캐논 50D의 경우 메이커 빼고 그냥 60D를 입력하면 됨.',
    example: '60D',
  },
  refs: {
    label: '근거자료',
    desc: '데이터를 참고한 링크 주소. 콤마로 구분하면 됨.\n예를 들어..',
    example: 'https://a.com/1, https://b.com/2',
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
    desc: '센서 명칭이 알려져 있을 경우\n예를 들어..',
    example: 'Super CCD, IMX021',
  },
  'sensor.engine': {
    label: '엔진명',
    desc: '이미지 프로세싱 엔진명이 있을 경우\n예를 들어..',
    example: 'DIGIC II, Bionz, EXPEED III',
  },
  'sensor.pixelsFamiliar': {
    label: '화소수',
    desc: '화소수를 백만화소 단위로 적음.\n예를 들어..',
    example: '7.5M, 10M, 0.6M',
  },
  'sensor.size': {
    label: '사이즈',
    desc: '센서의 사이즈.\n지원 항목 :',
    example: 'Full Frame, APS-H, APS-C, 4/3, 1", 1/1.7", 1/2.3", 2/3", 2.6crop, 1.9crop, 645 1.3crop',
  },
  'sensor.type': {
    label: '타입',
    desc: '센서 타입, 보통 CCD나 CMOS다.\n예를 들어..',
    example: 'CCD, CMOS, LBCAST, Foveon',
  },
  'sensor.isoMin': {
    label: 'ISO 저',
    desc: '지원 ISO가 200-3200인 카메라인데, 확장으로 100-6400을 지원하는 카메라의 경우엔',
    example: '100',
  },
  'sensor.isoMax': {
    label: 'ISO 고',
    desc: '지원 ISO가 200-3200인 카메라인데, 확장으로 100-6400을 지원하는 카메라의 경우엔',
    example: '6400',
  },
  'sensor.vr': {
    type: 'checkbox',
    label: '손떨림보정',
    desc: '센서 흔드는 방식의 손떨림 보정일 경우에만 체크. 렌즈 손떨림 보정은 체크하지 않음.',
  },
  'sensor.cleaning': {
    type: 'checkbox',
    label: '센서청소',
    desc: '초음파로 센서를 흔들거나 해서 먼지 제거가 가능한 경우 체크. 먼지 확인 기능은 제외.',
  },
  'sensor.astro': {
    type: 'checkbox',
    label: '천체촬영',
    desc: '캐논 20Da 등 천체촬영용으로 나온 카메라만 체크한다.',
  },
  'sensor.noLowPass': {
    type: 'checkbox',
    label: '로우패스X',
    desc: '로우패스 필터가 제거된 상태로 출시된 일부 기종만 체크한다.',
  },
  'sensor.ir': {
    type: 'checkbox',
    label: '적외선',
    desc: '적외선 촬영이 가능한 645Z IR 등에만 체크',
  },
};

const shutterAfMeteringFields: InputFields = {
  'shutter.fps': {
    label: '연사속도',
    desc: '연사속도를 fps 단위 포함하여 적음.',
    example: '1.1fps, 12fps',
  },
  'shutter.speed': {
    type: 'number',
    label: '셔터속도',
    desc: '셔터속도가 1/4000의 경우엔 4000표시, 1/8000의 경우엔 8000표시',
    example: '4000, 8000',
  },
  'focus.name': {
    label: '엔진명',
    desc: '포커스 엔진명이 공개된 기종의 경우 기입.',
    example: 'SAFOX VII, CAM3500FX',
  },
  'focus.desc': {
    label: '측거점',
    desc: '측거점에 대해 기입.',
    example: '9포인트 9크로스 1더블, 11포인트 9크로스',
  },
  'focus.contrast': {
    type: 'checkbox',
    label: '컨트라스트',
    desc: '컨트라스트 AF가 가능한 일부 라이브뷰 카메라에 체크',
  },
  'focus.phaseDetection': {
    type: 'checkbox',
    label: '위상차',
    desc: '보다 고급의 위상차 AF가 가능한 일부 라이브뷰 카메라에 체크',
  },
  'metering.engine': {
    label: '측광 엔진',
    desc: '측광 엔진명이 밝혀진 카메라일 경우 기입. 가령 캐논 1D X의 경우 DIGIC IV을 측광 엔진으로 따로 쓴다.',
    example: 'DIGIC IV',
  },
  'metering.desc': {
    label: '측광 설명',
    desc: '측광 관련된 내용.',
    example: '16분할측광, 35분할측광, 256존측광, 1005 RGB측광, 10만 RGB측광',
  },
};

const viewfinderFields: InputFields = {
  'viewfinder.type': {
    label: '타입',
    desc: '뷰파인더가 펜타프리즘인지, 전자식인지, 하이브리드인지 등을 아래 영어에 맞게 기입',
    example: 'PentaPrism, PentaMirror, Electric, Hybrid',
  },
  'viewfinder.magnification': {
    type: 'number',
    label: '배율',
    step: '0.01',
    desc: '뷰파인더 배율을 x 문자 없이 모두 숫자로 기입.',
    example: '0.8, 0.95',
  },
  'viewfinder.coverage': {
    type: 'number',
    label: '시야율',
    desc: '뷰파인더 시야율을 백분율 숫자로만 기입.',
    example: '95, 92, 100',
  },
  'viewfinder.resolution': {
    type: 'number',
    label: '해상도',
    desc: '전자식 뷰파인더일 경우 해상도를 숫자로 기입',
    example: '2360000, 3690000, 1440000',
  },
};

const displayFields: InputFields = {
  'display.desc': {
    label: '설명',
    desc: '후면 화면 크기와 화소에 대해 기입',
    example: '3.0" 230K, 3.0" 1040K',
  },
  'display.liveview': {
    type: 'checkbox',
    label: '라이브뷰',
    desc: '라이브뷰가 가능한 카메라에만 체크. 풀타임이 아니어도 오케이',
  },
  'display.touch': {
    type: 'checkbox',
    label: '터치',
    desc: '액정 터치를 지원하는 카메라에만 체크',
  },
  'display.tilt': {
    type: 'checkbox',
    label: '틸트',
    desc: '액정 화면을 기울일 수 있으면 체크',
  },
  'display.swivel': {
    type: 'checkbox',
    label: '스위블',
    desc: '액정 화면을 돌릴 수 있으면 체크',
  },
  'display.trueblack': {
    type: 'checkbox',
    label: '트루블랙',
    desc: '소니 등 일부 리얼 블랙을 지원하는 화면 탑재 카메라에만 체크. OLED가 아닐까..',
  },
};

const videoFields: InputFields = {
  'video.format': {
    label: '파일포멧',
    desc: '비디오 파일 포멧에 대해 기입. 콤마로 기재하여 복수 기입 가능.',
    example: 'H.264 / MPEG-4 / H.264, MPEG-4',
  },
  'video.modes': {
    label: '해상도',
    desc: '비디오 지원 해상도에 대해 표시, 너무 많을 경우 가장 높은것 두세개만 적는다.',
    example: '1080@60i, 720@60p / 720@60p / 4K@25p / 8K30p, 4K120p, 1080@120p',
  },
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
