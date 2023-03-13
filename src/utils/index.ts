/** 숫자를 입력받아 갯수만큼 아이템을 가진 어레이 리턴 */
export const getNumberArr = (length: number): number[] => {
  return [...Array(length).keys()];
};
