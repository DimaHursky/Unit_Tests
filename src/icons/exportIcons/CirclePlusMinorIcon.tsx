import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CirclePlusMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M15 10a1 1 0 01-1 1h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 012 0v3h3a1 1 0 011 1zm-5-8a8 8 0 100 16 8 8 0 000-16z" />
  </ESSvgIcon>
);

export default CirclePlusMinorIcon;
