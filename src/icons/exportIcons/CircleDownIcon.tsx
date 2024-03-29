import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleDownIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10zm-1-8.414l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a.998.998 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6a1 1 0 00-2 0v5.586z" />
  </ESSvgIcon>
);

export default CircleDownIcon;
