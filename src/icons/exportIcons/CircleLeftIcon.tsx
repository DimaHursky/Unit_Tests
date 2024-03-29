import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleLeftIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm8.414-1l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a.997.997 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 11H14a1 1 0 000-2H8.414z" />
  </ESSvgIcon>
);

export default CircleLeftIcon;
