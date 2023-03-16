import { FocusType, DisplayType } from '@/types/cameras.d';
import { shrinkNumber } from '@/utils';

export const extractAFData = (focus?: FocusType) => {
  if (!focus) return '?';

  const pointData = focus?.points ? `${focus?.points}point` : '';
  const pointCrossData = focus?.pointsCross ? `${focus?.pointsCross}cross` : '';
  const pointsData = [pointData, pointCrossData].filter((item) => !!item).join('/');

  if (focus.name) {
    // CAM1000, SAFOX VII
    return (
      <>
        {focus.name}
        <br />
        {pointsData}
      </>
    );
  }

  return pointsData;
};

export const extractDisplayData = (display?: DisplayType) => {
  if (!display) return '?';

  const displaySize = display?.inches ? `${display?.inches}"` : '';
  const displayRes = display?.pixels ? shrinkNumber(display?.pixels) : '';
  return displaySize ? [displaySize, displayRes, 'LCD'].filter((item) => !!item).join(' ') : '?';
};
