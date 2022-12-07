import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleTickMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm12.16-1.44a.8.8 0 0 0-1.12-1.12L9.2 11.28 7.36 9.44a.8.8 0 0 0-1.12 1.12l2.4 2.4c.32.32.8.32 1.12 0l4.4-4.4Z"
    />
  </ESSvgIcon>
);

export default CircleTickMinorIcon;
