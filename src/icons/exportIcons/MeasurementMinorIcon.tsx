import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MeasurementMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="m6 5.414.293.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2-2a.999.999 0 0 0-1.414 0l-2 2a.999.999 0 1 0 1.414 1.414L4 5.414V12a1 1 0 1 0 2 0V5.414ZM15.707 17.707l2-2a.999.999 0 0 0 0-1.414l-2-2a.999.999 0 1 0-1.414 1.414l.293.293H8a1 1 0 1 0 0 2h6.586l-.293.293a.997.997 0 0 0 0 1.414.999.999 0 0 0 1.414 0ZM10 5a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2h-1ZM16 11a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1ZM17 5a1 1 0 1 1-2 0 1 1 0 1 1 0-2h1a1 1 0 0 1 1 1v1Z" />
  </ESSvgIcon>
);

export default MeasurementMinorIcon;
