import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const RiskIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1.16 16.829l7.498-15c.553-1.106 2.13-1.106 2.683 0l7.498 15A1.5 1.5 0 0117.498 19H2.502a1.5 1.5 0 01-1.342-2.171zM10 7a1 1 0 011 1v3a1 1 0 01-2 0V8a1 1 0 011-1zm1 8a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </ESSvgIcon>
);

export default RiskIcon;
