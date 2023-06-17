export const imageOptimize = (str: string) => {
  return str.replaceAll('miriya.sgp1.cdn.digitaloceanspaces.com', 'ik.imagekit.io/miriya/tr:w-1200,c-at_max');
};

export const imageExpandable = (rawString: string) => {
  let processed = rawString;
  const regex = /(?:[*#])|<img src="(.+?)">/g;
  const matchedArray = [...processed.matchAll(regex)];
  matchedArray.forEach((arr) => {
    const original = arr[0];
    const content = arr[1];

    if (!content) return;
    const [src, alt] = content.split('" alt="');
    if (!src) return;
    const originalSrc = src.replace([...src.matchAll(/tr:(.*?)\//g)][0]?.[0], '');
    processed = processed.replace(
      original,
      `<details class='imageExpandable'><summary><img src='${src}' alt='${alt}' class='summaryImg' /></summary><img src='${originalSrc}' alt='${alt}' class='detailsImg' /></details>`,
    );
  });
  return processed;
};

export const bodyProcess = (rawString: string) => {
  const optimized = imageOptimize(rawString);
  const expandable = imageExpandable(optimized);
  return expandable;
};
