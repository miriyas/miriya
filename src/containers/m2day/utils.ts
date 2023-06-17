export const calcContentLength = (value: string) => {
  let processed = value;
  const regex = /(?:__|[*#])|\[(.+?)]\((.+?)\)/g;
  const matchedArray = [...value.matchAll(regex)];
  matchedArray.forEach((arr) => {
    const original = arr[0];
    const label = arr[1];
    processed = processed.replace(original, label);
  });

  return processed.length;
};
