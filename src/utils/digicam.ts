import { CAMERA_MAKER, CameraMakerTypes } from '@/types/cameras.d';

/** digicamDB용 id 생성 */
export const externalCameraId = (maker: CameraMakerTypes, name: string) => {
  let newName = name.toLowerCase();

  if (maker === CAMERA_MAKER.CANON) {
    switch (newName) {
      case 'd30':
      case 'd60':
        newName = `eos-${newName}`;
        break;
      case 'd2000':
        return 'kodak_dcs520';
      case 'd6000':
        return 'kodak_dcs560';
      case '1d markii n':
        newName = 'eos-1d-mark-ii-n';
        break;
      case 'm50 markii':
        newName = 'eos-m50-ii';
        break;
      case 'r6 markii':
        newName = 'r6-mark-ii';
        break;
      case 'r7':
        newName = 'r7';
        break;
      default:
        newName = `eos-${newName}`;
        if (newName.includes(' mark')) newName = newName.replace(' mark', '-mark-');
        if (newName.includes('1d x')) newName = newName.replace('1d x', '1d-x');
        if (newName.includes('1d c')) newName = newName.replace('1d c', '1d-c');
    }
  }

  if (maker === CAMERA_MAKER.FUJIFILM) {
    if (newName.endsWith('pro')) newName = `finepix-${newName}`;
  }

  if (maker === CAMERA_MAKER.KODAK) {
    if (newName === 'pixpro s-1') return 'kodak_s-1';
    newName = newName.replace('pro ', 'pro-').replace('/', '-');
  }

  if (maker === CAMERA_MAKER.MINOLTA) {
    // if (newName === 'pixpro s-1') return 'kodak_s-1';
    newName = newName.replace('dg-', 'dynax-');
    return `konica-${maker}_${newName}`;
  }

  if (maker === CAMERA_MAKER.NIKON) {
    if (newName === 'z30') newName = 'z-30';
  }

  if (maker === CAMERA_MAKER.OLYMPUS) {
    switch (newName) {
      case 'e-500':
        newName = 'e500';
        break;
      case 'e-510':
        newName = 'e-510-evolt-e-510';
        break;
      case 'e-410':
        newName = 'e-410-evolt-e-410';
        break;
      case 'e-m1 iii':
        newName = 'o-md-e-m1-mark-iii';
        break;
      case 'e-m10 iv':
        newName = 'e-m10-iv';
        break;
      case 'om-5':
        newName = 'system-om-5';
        break;
      default:
        if (newName.startsWith('e-p')) newName = newName.replace('e-p', 'pen-e-p');
        if (newName.startsWith('e-m')) newName = newName.replace('e-m', 'om-d-e-m');
        if (newName.startsWith('om-d-e-m10')) newName = newName.replace(' ii', '-ii');
        if (newName.startsWith('om-d-e-m5')) newName = newName.replace(' ii', '-ii');
        if (newName.includes(' ii')) newName = newName.replace(' ii', '-mark-ii');
        break;
    }
  }

  if (maker === CAMERA_MAKER.PANASONIC) {
    switch (newName) {
      case 'g100':
        newName = 'dc-g100';
        break;
      case 'gh6':
        break;
      default:
        if (['g9', 'gf9', 'gf10', 'gx9', 'gh5', 'gh5s', 'g90'].includes(newName)) {
          newName = newName.replace('g', 'lumix-dc-g');
        } else if (newName.startsWith('g')) {
          newName = newName.replace('g', 'lumix-dmc-g');
        } else if (newName.startsWith('s')) {
          newName = newName.replace('s', 'lumix-dc-s');
        }
    }
  }

  if (maker === CAMERA_MAKER.PENTAX) {
    newName = newName.replace('*ist ', 'ist-');
    if (newName === 'k-1 ii') newName = 'k-1-mark-ii';
  }

  if (maker === CAMERA_MAKER.SONY) {
    switch (newName) {
      case 'nex-6':
        newName = 'alpha-nex6';
        break;
      case 'a77 ii':
        newName = 'a77-ii';
        break;
      case 'a7r iv':
        newName = 'a7r-iv';
        break;
      case 'a68':
        newName = 'alpha-slt-a68';
        break;
      default:
        if (
          [
            'a9',
            'a9 ii',
            'a99 ii',
            'a7 iii',
            'a7r iii',
            'a6000',
            'a6300',
            'a6500',
            'a5000',
            'a5100',
            'a3000',
            'a3500',
          ].includes(newName)
        ) {
          newName = newName.replace('a', 'alpha-a');
        } else if (['a6600', 'a6400', 'a6100', 'a7s iii', 'a7c', 'a1', 'a7 iv', 'a7r v'].includes(newName)) {
          newName = newName.replace(' ', '-');
        } else if (['a99', 'a77', 'a65', 'a55', 'a57', 'a58', 'a33', 'a35', 'a37'].includes(newName)) {
          newName = newName.replace('a', 'slt-a');
        } else if (newName.startsWith('a')) {
          newName = newName.replace('a', 'alpha-dslr-a');
        } else if (newName.startsWith('nex')) newName = newName.replace('nex', 'alpha-nex');
    }
  }

  // console.log(maker, ':', name.toLowerCase(), '=>', newName);
  const id = `${maker}_${newName}`.replace(' ', '-').toLowerCase();
  // console.log(id);

  return id;
};
