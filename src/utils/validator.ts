import { InferType, bool, mixed, number, object, ref, string } from 'yup';

import { CATEGORIES, Year } from '@/types/idols.d';

export const stringTest = string();

export const numberTest = number();

export const booleanTest = bool();

// 로그인 관련 ===================================

export const emailTest = string()
  .trim()
  .email('이메일 주소를 확인해주세요.')
  .required('아이디로 사용될 이메일 주소를 입력해주세요.');

export const passwordTest = string()
  .trim()
  .min(6, '비밀번호는 6글자 이상 입력해주세요.')
  .required('비밀번호를 입력해주세요.');

export const passwordConfirmTest = string()
  .trim()
  .oneOf([ref('password')], '비밀번호가 서로 다릅니다.');

export const logInValidator = object({
  email: emailTest,
  password: passwordTest,
}).required();

export type LogInSchema = InferType<typeof logInValidator>;

export const signUpValidator = object({
  email: emailTest,
  password: passwordTest,
  passwordConfirm: passwordConfirmTest,
}).required();

export type SignUpSchema = InferType<typeof signUpValidator>;

// 아이돌 관련 ===================================

export const idolCategoryTest = string()
  .trim()
  .oneOf(CATEGORIES, '카테고리를 확인해주세요.')
  .required('카테고리를 입력해주세요.');

export const idolEndYearTest = mixed<Year>().required();

export const idolValidator = object({
  category: idolCategoryTest,
  desc: object({
    melon: stringTest,
    namu: stringTest,
    naver: stringTest,
    title: stringTest,
  }),
  endYear: idolEndYearTest,
  youtube: object({
    startsAt: numberTest,
    url: stringTest,
  }).optional(),
}).required();

export type IdolSchema = InferType<typeof idolValidator>;

// 펜탁스 관련 ===================================

export const pentaxSlrValidator = object({
  startYear: numberTest.required(),
  endYear: numberTest.required(),
  mount: stringTest.required(),
  data: object({
    body: object({
      width: numberTest,
      height: numberTest,
      depth: numberTest,
      weight: numberTest,
      color: stringTest,
      verticalGrip: stringTest,
    }),
    power: stringTest,
    width: stringTest,
    etc: stringTest,
    refs: stringTest,
    modes: stringTest,
    metering: object({
      k: stringTest,
      a: stringTest,
      range: stringTest,
    }).optional(),
    exposure: object({
      range: stringTest,
      fix: booleanTest,
    }).optional(),
    asa: object({
      dx: stringTest,
      manual: stringTest,
    }).optional(),
    panorama: booleanTest,
    shutter: object({
      build: stringTest,
      speed: stringTest,
      emergency: stringTest,
      timer: stringTest,
      release: stringTest,
      releaseW: stringTest,
    }).optional(),
    winder: object({
      internal: stringTest,
      external: stringTest,
      motorDrive: stringTest,
    }).optional(),
    viewFinder: object({
      coverage: numberTest,
      magnification: numberTest,
      seeShutterSpeed: stringTest,
      seeAperture: stringTest,
      screenReplace: booleanTest,
      finderReplace: booleanTest,
    }).optional(),
    focus: object({
      name: stringTest,
      sensitivity: stringTest,
      support: booleanTest,
      powerZoom: stringTest,
    }).optional(),
    flash: object({
      sync: stringTest,
      modes: stringTest,
      syncSpeed: stringTest,
      internal: stringTest,
      redEye: booleanTest,
    }).optional(),
    comment: stringTest,
  }),
}).required();

export type PentaxSLRSchema = InferType<typeof pentaxSlrValidator>;

export interface FBPentaxSLRSchema extends PentaxSLRSchema {
  id: string;
  name: string;
}

export const pentaxDslrValidator = object({
  startYear: numberTest.required(),
  endYear: numberTest.required(),
  data: object({
    mount: stringTest.required(),
    body: object({
      width: numberTest,
      height: numberTest,
      depth: numberTest,
      weight: stringTest,
      material: stringTest,
      verticalGrip: stringTest,
    }),
    power: stringTest,
    bonus: object({
      wr: booleanTest,
      sr: stringTest,
      dustRemove: stringTest,
    }).optional(),
    memory: stringTest,
    etc: stringTest,
    sensor: object({
      pixels: stringTest,
      size: stringTest,
      iso: stringTest,
      engine: stringTest,
    }),
    modes: stringTest,
    meteringK: stringTest,
    meteringA: stringTest,
    meteringRange: stringTest,
    exposureRange: stringTest,
    shutter: stringTest,
    continuous: stringTest,
    continuousLength: stringTest,
    viewFinder: object({
      type: stringTest,
      coverage: stringTest,
      magnification: stringTest,
      screenReplace: booleanTest,
    }),
    flash: object({
      interlock: stringTest,
      modes: stringTest,
      syncSpeed: stringTest,
      redEye: booleanTest,
      internal: stringTest,
      release: stringTest,
      releaseW: stringTest,
    }),
    focus: object({
      name: stringTest,
      points: stringTest,
      sensitivity: stringTest,
      superImpose: booleanTest,
      supersonicMotor: booleanTest,
    }),
    display: stringTest,
    liveView: booleanTest,
    liveViewAF: stringTest,
    movie: stringTest,
    movieType: stringTest,
    imageType: stringTest,
    refs: stringTest,
    comment: stringTest,
  }),
}).required();

export type PentaxDSLRSchema = InferType<typeof pentaxDslrValidator>;

export interface FBPentaxDSLRSchema extends PentaxDSLRSchema {
  id: string;
  name: string;
}
