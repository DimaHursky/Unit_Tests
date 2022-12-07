import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CreditCardPercentIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M1.5 1A1.5 1.5 0 000 2.5V4h20V2.5A1.5 1.5 0 0018.5 1h-17z" />
    <path d="M0 13.5V6h20v3h-6c-2.757 0-5 2.236-5 4.987V15H1.5A1.5 1.5 0 010 13.5zM2 10h5V8H2v2z" />
    <circle cx="13.5" cy="12.5" r="1.5" />
    <circle cx="18.5" cy="17.5" r="1.5" />
    <path d="M19.707 11.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0z" />
  </ESSvgIcon>
);

export default CreditCardPercentIcon;
