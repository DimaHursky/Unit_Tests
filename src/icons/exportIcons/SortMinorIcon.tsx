import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SortMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M5.293 2.293a.997.997 0 011.414 0l3 3a1 1 0 01-1.414 1.414L7 5.414V13a1 1 0 11-2 0V5.414L3.707 6.707a1 1 0 01-1.414-1.414l3-3zM13 7a1 1 0 012 0v7.585l1.293-1.292a.999.999 0 111.414 1.414l-3 3a.997.997 0 01-1.414 0l-3-3a.997.997 0 010-1.414.999.999 0 011.414 0L13 14.585V7z" />
  </ESSvgIcon>
);

export default SortMinorIcon;
