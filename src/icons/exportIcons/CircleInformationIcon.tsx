import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleInformationIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 20c5.514 0 10-4.486 10-10S15.514 0 10 0 0 4.486 0 10s4.486 10 10 10zm1-6a1 1 0 11-2 0v-4a1 1 0 112 0v4zm-1-9a1 1 0 100 2 1 1 0 000-2z"
    />
  </ESSvgIcon>
);

export default CircleInformationIcon;
