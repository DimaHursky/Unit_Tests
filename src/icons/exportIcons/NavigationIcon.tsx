import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const NavigationIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM5 15l2.27-6.31 4.04 4.04L5 15zm7.73-3.69L8.69 7.27 15 5l-2.27 6.31z" />
  </ESSvgIcon>
);

export default NavigationIcon;
