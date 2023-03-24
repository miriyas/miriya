export function useIsClient() {
  return typeof window !== 'undefined';
}
