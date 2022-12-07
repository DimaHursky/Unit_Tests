import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleTickIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 10a10 10 0 1020 0 10 10 0 00-20 0zm15.2-1.8a1 1 0 00-1.4-1.4L9 11.6 6.7 9.3a1 1 0 00-1.4 1.4l3 3c.4.4 1 .4 1.4 0l5.5-5.5z"
    />
  </ESSvgIcon>
);

export default CircleTickIcon;
