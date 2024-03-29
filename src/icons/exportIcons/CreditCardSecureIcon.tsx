import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CreditCardSecureIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M1.5 1A1.5 1.5 0 000 2.5V4h20V2.5A1.5 1.5 0 0018.5 1h-17z" />
    <path
      fillRule="evenodd"
      d="M0 13.5V6h20v3h-5c-2.757 0-5 2.236-5 4.987V15H1.5A1.5 1.5 0 010 13.5zM2 10h5V8H2v2z"
    />
    <path
      fillRule="evenodd"
      d="M13 14v1a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1v-1a3 3 0 10-6 0zm3-1a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1z"
    />
  </ESSvgIcon>
);

export default CreditCardSecureIcon;
