export const imageOptimize = (str: string) => {
  return str
    .replaceAll('miriya.sgp1.cdn.digitaloceanspaces.com', 'ik.imagekit.io/miriya/tr:w-1200,c-at_max')
    .replaceAll(/(?<=<img src=")(.*)(?=" )/g, '$1?width=1200&fit=max');
};
