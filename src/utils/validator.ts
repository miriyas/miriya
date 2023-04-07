import { InferType, mixed, number, object, ref, string } from 'yup';

import { CATEGORIES, Year } from '@/types/idols.d';

export const stringTest = string().trim();

export const numberTest = number();

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
