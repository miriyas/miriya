import { InferType, object, ref, string } from 'yup';

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
