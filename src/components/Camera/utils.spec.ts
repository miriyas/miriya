import { externalCameraId } from './utils';

it('externalCameraId', () => {
  // DCS5, DCS3, DCS1, M2, Ra, R5C, R8, R50
  expect(externalCameraId('canon', 'd2000')).toBe('kodak_dcs520');
  expect(externalCameraId('canon', 'd6000')).toBe('kodak_dcs560');
  expect(externalCameraId('canon', 'd30')).toBe('canon_eos-d30');
  expect(externalCameraId('canon', 'd60')).toBe('canon_eos-d60');
  expect(externalCameraId('canon', '1d')).toBe('canon_eos-1d');
  expect(externalCameraId('canon', '1d markii')).toBe('canon_eos-1d-mark-ii');
  expect(externalCameraId('canon', '1d markii n')).toBe('canon_eos-1d-mark-ii-n');
  expect(externalCameraId('canon', '1ds')).toBe('canon_eos-1ds');
  expect(externalCameraId('canon', '20da')).toBe('canon_eos-20da');
  expect(externalCameraId('canon', '1d x')).toBe('canon_eos-1d-x');
  expect(externalCameraId('canon', '1d x markii')).toBe('canon_eos-1d-x-mark-ii');
  expect(externalCameraId('canon', '1d c')).toBe('canon_eos-1d-c');
  expect(externalCameraId('canon', 'm')).toBe('canon_eos-m');
  expect(externalCameraId('canon', '5ds r')).toBe('canon_eos-5ds-r');
  expect(externalCameraId('canon', 'm50 markii')).toBe('canon_eos-m50-ii');
  expect(externalCameraId('canon', 'r6 markii')).toBe('canon_r6-mark-ii');
  expect(externalCameraId('canon', 'r7')).toBe('canon_r7');

  // S3Pro UVIR, GFX50S, GFX50S II, GFX 50R, X-A20, GFX100, GFX100IR, GFX100S
  expect(externalCameraId('fujifilm', 's1 pro')).toBe('fujifilm_finepix-s1-pro');
  expect(externalCameraId('fujifilm', 'x-pro1')).toBe('fujifilm_x-pro1');
  expect(externalCameraId('fujifilm', 'x-h2')).toBe('fujifilm_x-h2');

  expect(externalCameraId('kodak', 'dcs pro 14n')).toBe('kodak_dcs-pro-14n');
  expect(externalCameraId('kodak', 'dcs pro slr/n')).toBe('kodak_dcs-pro-slr-n');
  expect(externalCameraId('kodak', 'pixpro s-1')).toBe('kodak_s-1');

  expect(externalCameraId('minolta', 'dg-7d')).toBe('konica-minolta_dynax-7d');

  // E2, D810A
  expect(externalCameraId('nikon', 'd300')).toBe('nikon_d300');
  expect(externalCameraId('nikon', 'Z30')).toBe('nikon_z-30'); // z-30만 규칙이 다름
  expect(externalCameraId('nikon', 'Z50')).toBe('nikon_z50');
  expect(externalCameraId('nikon', 'Z fc')).toBe('nikon_z-fc');
  expect(externalCameraId('nikon', 'Z6')).toBe('nikon_z6');
  expect(externalCameraId('nikon', 'Z6 II')).toBe('nikon_z6-ii');

  // E-300, E-330, E-M5, E-M1, E-M10, E-M10 IIIs, E-P7
  expect(externalCameraId('olympus', 'E-500')).toBe('olympus_e500');
  expect(externalCameraId('olympus', 'E-510')).toBe('olympus_e-510-evolt-e-510');
  expect(externalCameraId('olympus', 'E-410')).toBe('olympus_e-410-evolt-e-410');
  expect(externalCameraId('olympus', 'E-P1')).toBe('olympus_pen-e-p1');
  expect(externalCameraId('olympus', 'E-P2')).toBe('olympus_pen-e-p2');
  expect(externalCameraId('olympus', 'E-PL1')).toBe('olympus_pen-e-pl1');
  expect(externalCameraId('olympus', 'E-M1')).toBe('olympus_om-d-e-m1');
  expect(externalCameraId('olympus', 'E-M1 III')).toBe('olympus_o-md-e-m1-mark-iii'); // ㅠㅠ om-d => o-md
  expect(externalCameraId('olympus', 'E-M10 III')).toBe('olympus_om-d-e-m10-iii');
  expect(externalCameraId('olympus', 'E-M10 IV')).toBe('olympus_e-m10-iv');
  expect(externalCameraId('olympus', 'E-M5 III')).toBe('olympus_om-d-e-m5-iii');
  expect(externalCameraId('olympus', 'OM-5')).toBe('olympus_system-om-5');

  // GF10, GH5 II, S5 II, S5 IIx
  expect(externalCameraId('panasonic', 'G1')).toBe('panasonic_lumix-dmc-g1');
  expect(externalCameraId('panasonic', 'G9')).toBe('panasonic_lumix-dc-g9');
  expect(externalCameraId('panasonic', 'G90')).toBe('panasonic_lumix-dc-g90');
  expect(externalCameraId('panasonic', 'G100')).toBe('panasonic_dc-g100');
  expect(externalCameraId('panasonic', 'GF10')).toBe('panasonic_lumix-dc-gf10');
  expect(externalCameraId('panasonic', 'S1')).toBe('panasonic_lumix-dc-s1');

  // K-5 IIs, 645Z IR, Kf
  expect(externalCameraId('pentax', '*ist D')).toBe('pentax_ist-d');
  expect(externalCameraId('pentax', 'K-1 II')).toBe('pentax_k-1-mark-ii');

  // sd Quattro, sd Quattro H
  expect(externalCameraId('sigma', 'SD10')).toBe('sigma_sd10');

  // A7, A7R, A7R II, A7 II, A7S, A7S II, A3500
  expect(externalCameraId('sony', 'A100')).toBe('sony_alpha-dslr-a100');
  expect(externalCameraId('sony', 'A55')).toBe('sony_slt-a55');
  expect(externalCameraId('sony', 'A68')).toBe('sony_alpha-slt-a68');
  expect(externalCameraId('sony', 'NEX-5T')).toBe('sony_alpha-nex-5t');
  expect(externalCameraId('sony', 'NEX-6')).toBe('sony_alpha-nex6');
  expect(externalCameraId('sony', 'A3000')).toBe('sony_alpha-a3000');
  expect(externalCameraId('sony', 'A6300')).toBe('sony_alpha-a6300');
  expect(externalCameraId('sony', 'A77')).toBe('sony_slt-a77');
  expect(externalCameraId('sony', 'A77 II')).toBe('sony_a77-ii');
  expect(externalCameraId('sony', 'A99 II')).toBe('sony_alpha-a99-ii');
  expect(externalCameraId('sony', 'A9')).toBe('sony_alpha-a9');
  expect(externalCameraId('sony', 'A7R III')).toBe('sony_alpha-a7r-iii');
  expect(externalCameraId('sony', 'A7S III')).toBe('sony_a7s-iii');
  expect(externalCameraId('sony', 'A6400')).toBe('sony_a6400');
});
