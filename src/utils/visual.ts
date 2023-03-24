import 'client-only';

/** id를 입력받으면 해당 요소로 스무스하게 이동 */
export const smoothScrollToId = (id: string) => {
  const target = document.querySelector<HTMLLIElement>(`#${id}`);
  if (!target) return;

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth',
  });
};
