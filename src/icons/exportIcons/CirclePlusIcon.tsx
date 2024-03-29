import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CirclePlusIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10zm5 0a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 01-1-1z" />
  </ESSvgIcon>
);

export default CirclePlusIcon;
