import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SmileyNeutralIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 10C0 4.486 4.486 0 10 0s10 4.486 10 10-4.486 10-10 10S0 15.514 0 10zm7.707-1.293a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zm4.586-1.414a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zm1.414 5A1 1 0 0013 12H7a1 1 0 000 2h6a1 1 0 00.707-1.707z"
    />
  </ESSvgIcon>
);

export default SmileyNeutralIcon;
