import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleMinusIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 20C4.486 20 0 15.514 0 10S4.486 0 10 0s10 4.486 10 10-4.486 10-10 10zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z" />
  </ESSvgIcon>
);

export default CircleMinusIcon;
