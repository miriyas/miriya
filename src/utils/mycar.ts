export const getKmAndMiles = (metricKm: boolean, range?: number) => {
  let km;
  let miles;
  if (range) {
    if (metricKm) {
      km = range;
      miles = Number.parseInt(String(range / 1.609344), 10);
    } else {
      km = Number.parseInt(String(range * 1.609344), 10);
      miles = range;
    }
  }

  return {
    km,
    miles,
  };
};
