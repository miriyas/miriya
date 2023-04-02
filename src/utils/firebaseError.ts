const commonErrors: Record<string, string> = {
  'auth/invalid-email': '이메일 형식이 올바르지 않습니다.',
  'auth/too-many-requests': '잠시 후에 다시 시도해주세요.',
};

export const LogInWithEmailAndPasswordErrors: Record<string, string> = {
  ...commonErrors,
  'auth/user-disabled': '비활성화된 사용자입니다.',
  'auth/user-not-found': '해당 이메일로 가입된 계정이 없습니다.',
  'auth/wrong-password': '비밀번호가 틀렸습니다.',
};

export const SignUpWithEmailAndPasswordErrors: Record<string, string> = {
  ...commonErrors,
  'auth/email-already-in-use': '이미 사용중인 이메일입니다.',
  'auth/operation-not-allowed': '이준혁이 실수한것 같습니다. 신고하세요.',
  'auth/weak-password': '비밀번호가 너무 약합니다.',
};
