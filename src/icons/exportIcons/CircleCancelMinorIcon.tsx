import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleCancelMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 101.414-1.414L11.414 10l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293z"
    />
  </ESSvgIcon>
);

export default CircleCancelMinorIcon;
