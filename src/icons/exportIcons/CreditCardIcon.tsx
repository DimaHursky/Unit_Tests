import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CreditCardIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M0 4.5A1.5 1.5 0 011.5 3h17A1.5 1.5 0 0120 4.5V6H0V4.5z" />
    <path d="M0 8v7.5A1.5 1.5 0 001.5 17h17a1.5 1.5 0 001.5-1.5V8H0zm7 4H2v-2h5v2z" />
  </ESSvgIcon>
);

export default CreditCardIcon;
