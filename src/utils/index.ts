import { User } from 'firebase/auth';

/** 숫자를 입력받아 갯수만큼 아이템을 가진 어레이 리턴 */
export const getNumberArr = (length: number): number[] => {
  return [...Array(length).keys()];
};

/** 숫자를 M, K 등으로 단위 묶음 리턴 */
export const shrinkNumber = (value: number | string) => {
  if (typeof value === 'string') return value;
  if (value >= 1_000_000) {
    return `${parseInt(String(value / 1_000_000), 10).toString()}M`;
  }
  if (value >= 1_000) {
    return `${parseInt(String(value / 1000), 10).toString()}K`;
  }
  return value;
};

export const getUserName = (user: User) => {
  return user.displayName ?? `${user.email?.substring(0, 4)}**` ?? user.uid.substring(0, 8);
};

export const getAuthorData = (user: User) => {
  return {
    authorId: user.uid,
    author: {
      nickname: getUserName(user),
      nicknameIsFake: !user.displayName, // displayName이 없을 경우
      profileUrl: user.photoURL ?? '',
    },
  };
};

export const getSystemAuthor = () => {
  return {
    authorId: 'fXruvSpnIcMp20gi6a6HhOdihli1',
    author: {
      nickname: 'SYSTEM',
      nicknameIsFake: true,
      profileUrl: 'https://miriya.vercel.app/android-chrome-192x192.png',
    },
  };
};
