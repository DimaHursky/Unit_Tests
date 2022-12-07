import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SmileySadIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm7.707-.293a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zm4.586-1.414a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zM10 12c-.247 0-2.451.036-3.707 1.293a1 1 0 101.414 1.414c.57-.57 1.881-.705 2.29-.707.415.002 1.726.137 2.296.707A.998.998 0 0014 14a1 1 0 00-.293-.707C12.451 12.036 10.247 12 10 12z"
    />
  </ESSvgIcon>
);

export default SmileySadIcon;
