import { PentaxSlr, PENTAX_SLR_MOUNT } from '@/types/pentaxes.d';

export const W_CELL_SLR = 22;
export const H_CELL_SLR = 22;

export const PENTAX_SLRS_YEAR_INFO = {
  start: 1975,
  end: 2004,
};

export const PENTAX_SLRS: PentaxSlr[] = [
  // Line 1 ==============================
  {
    name: 'PZ-1 (Z-1)',
    line: 1,
    startYear: 1991,
    endYear: 1993,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'PZ-1p (Z-1p)',
    line: 1,
    startYear: 1994,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'MZ-S',
    line: 1,
    startYear: 2001,
    endYear: 2006,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 2 ==============================
  {
    name: 'PZ-5p (Z-5p)',
    line: 2,
    startYear: 1994,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 3 ==============================
  {
    name: 'LX',
    line: 3,
    startYear: 1980,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.K,
  },
  // Line 4 ==============================
  {
    name: 'MX',
    line: 4,
    startYear: 1976,
    endYear: 1985,
    mount: PENTAX_SLR_MOUNT.K,
  },
  // Line 5 ==============================
  {
    name: 'K2 DMD',
    line: 5,
    startYear: 1975,
    endYear: 1979,
    mount: PENTAX_SLR_MOUNT.K,
  },
  // Line 6 ==============================
  {
    name: 'K2',
    line: 6,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
  },
  // Line 7 ==============================
  {
    name: 'SFX (SF-1)',
    line: 7,
    startYear: 1987,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KAF,
    af: true,
  },
  {
    name: 'SFXn (SF-1n)',
    line: 7,
    startYear: 1990,
    endYear: 1992,
    mount: PENTAX_SLR_MOUNT.KAF,
    af: true,
  },
  {
    name: 'MZ-3 (ZX-3)',
    line: 7,
    startYear: 1997,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'MZ-6 (ZX-6)',
    line: 7,
    startYear: 2001,
    endYear: 2004,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 8 ==============================
  {
    name: 'P5 (P50)',
    line: 8,
    startYear: 1986,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'MZ-5\n(ZX-5)',
    line: 8,
    startYear: 1995,
    endYear: 1996,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'MZ-5n (ZX-5n)',
    line: 8,
    startYear: 1997,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 9 ==============================
  {
    name: 'Super-A (Super Program)',
    line: 9,
    startYear: 1983,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'PZ-20p (Z-20p)',
    line: 9,
    startYear: 1993,
    endYear: 1995,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'MZ-7 (ZX-7)',
    line: 9,
    startYear: 1999,
    endYear: 2001,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 10 =============================
  {
    name: 'Program-A (Program Plus)',
    line: 10,
    startYear: 1983,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'Z-50p',
    line: 10,
    startYear: 1993,
    endYear: 1995,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'MZ-50 (ZX-50)',
    line: 10,
    startYear: 1997,
    endYear: 1999,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
  },
  {
    name: 'MZ-30\n(ZX-30)',
    line: 10,
    startYear: 2000,
    endYear: 2001,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
  },
  {
    name: 'MZ-60 (ZX-60)',
    line: 10,
    startYear: 2002,
    endYear: 2005,
    mount: PENTAX_SLR_MOUNT.KAF2,
    crippled: true,
    af: true,
  },
  // Line 11 =============================
  {
    name: 'KX',
    line: 11,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'ME F',
    line: 11,
    startYear: 1981,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.KF,
  },
  {
    name: 'PZ-70 (Z-70p)',
    line: 11,
    startYear: 1995,
    endYear: 1998,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 12 =============================
  {
    name: 'ME',
    line: 12,
    startYear: 1976,
    endYear: 1978,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'ME Super',
    line: 12,
    startYear: 1979,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.K,
  },
  // Line 13 =============================
  {
    name: 'SF7 (SF10)',
    line: 13,
    startYear: 1988,
    endYear: 1993,
    mount: PENTAX_SLR_MOUNT.KAF,
  },
  {
    name: 'MZ-10 (ZX-10)',
    line: 13,
    startYear: 1996,
    endYear: 1998,
    mount: PENTAX_SLR_MOUNT.KAF2,
  },
  {
    name: '*ist',
    line: 13,
    startYear: 2003,
    endYear: 2005,
    mount: PENTAX_SLR_MOUNT.KAF2,
  },
  // Line 14 =============================
  {
    name: 'PZ-20 (Z-20)',
    line: 14,
    startYear: 1992,
    endYear: 1994,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  {
    name: 'PZ-70 (Z-70)',
    line: 14,
    startYear: 1995,
    endYear: 1999,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 15 =============================
  {
    name: 'PZ-10 (Z-10)',
    line: 15,
    startYear: 1991,
    endYear: 1994,
    mount: PENTAX_SLR_MOUNT.KAF2,
    af: true,
  },
  // Line 16 =============================
  {
    name: 'P3 (P30)',
    line: 16,
    startYear: 1985,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'P3n (P30n)',
    line: 16,
    startYear: 1988,
    endYear: 1989,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'P3t (P30t)',
    line: 16,
    startYear: 1990,
    endYear: 1996,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  {
    name: 'MZ-M (ZX-M)',
    line: 16,
    startYear: 1998,
    endYear: 2000,
    mount: PENTAX_SLR_MOUNT.KA2,
  },
  // Line 17 =============================
  {
    name: 'KM',
    line: 17,
    startYear: 1975,
    endYear: 1977,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'MV',
    line: 17,
    startYear: 1979,
    endYear: 1979,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'MV1',
    line: 17,
    startYear: 1980,
    endYear: 1981,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'MG',
    line: 17,
    startYear: 1982,
    endYear: 1984,
    mount: PENTAX_SLR_MOUNT.K,
  },
  {
    name: 'A3 (A3000)',
    line: 17,
    startYear: 1985,
    endYear: 1987,
    mount: PENTAX_SLR_MOUNT.KA,
  },
  // Line 18 =============================
  {
    name: 'K1000',
    line: 18,
    startYear: 1976,
    endYear: 1997,
    mount: PENTAX_SLR_MOUNT.K,
  },
];
