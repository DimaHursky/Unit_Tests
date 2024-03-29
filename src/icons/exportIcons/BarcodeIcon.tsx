import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const BarcodeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3 3h1V1H2.5A1.5 1.5 0 001 2.5V4h2V3zM17 3v1h2V2.5A1.5 1.5 0 0017.5 1H16v2h1zM16 17h1v-1h2v1.5a1.5 1.5 0 01-1.5 1.5H16v-2zM3 17v-1H1v1.5A1.5 1.5 0 002.5 19H4v-2H3zM2 14h3V6H2v8zM14 14h-3V6h3v8zM7 14h2V6H7v8zM16 14h2V6h-2v8z" />
  </ESSvgIcon>
);

export default BarcodeIcon;
