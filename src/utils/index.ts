/** 숫자를 입력받아 갯수만큼 아이템을 가진 어레이 리턴 */
export const getNumberArr = (length: number): number[] => {
  return [...Array(length).keys()];
};

/** 숫자를 M, K 등으로 단위 묶음 리턴 */
export const shrinkNumber = (value: number) => {
  if (value >= 1_000_000) {
    return `${parseInt(String(value / 1_000_000), 10).toString()}M`;
  }
  if (value >= 1_000) {
    return `${parseInt(String(value / 1000), 10).toString()}K`;
  }
  return value;
};
