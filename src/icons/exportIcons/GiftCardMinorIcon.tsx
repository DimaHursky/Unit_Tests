import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const GiftCardMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 5c0 .35.06.687.17 1H4.5A1.5 1.5 0 003 7.5V9h14V7.5a1.5 1.5 0 00-1.34-1.492 3.5 3.5 0 00-6.022-3.523A3 3 0 005 5zm7.5 1A1.5 1.5 0 1011 4.5V6h1.5zM9 5v1H8a1 1 0 111-1z"
    />
    <path d="M4 11h5v6H5.5A1.5 1.5 0 014 15.5V11zM16 11h-5v6h3.5a1.5 1.5 0 001.5-1.5V11z" />
  </ESSvgIcon>
);

export default GiftCardMinorIcon;
