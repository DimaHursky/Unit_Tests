import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const AddIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3 3h1V1H2.5A1.5 1.5 0 001 2.5V4h2V3zM6 3h3V1H6v2zM11 3h3V1h-3v2zM9 19H6v-2h3v2zM11 19h3v-2h-3v2zM17 4V3h-1V1h1.5A1.5 1.5 0 0119 2.5V4h-2zM3 17v-1H1v1.5A1.5 1.5 0 002.5 19H4v-2H3zM16 17h1v-1h2v1.5a1.5 1.5 0 01-1.5 1.5H16v-2zM10 6a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2V7a1 1 0 011-1zM1 9V6h2v3H1zM1 11v3h2v-3H1zM17 9V6h2v3h-2zM17 11v3h2v-3h-2z" />
  </ESSvgIcon>
);

export default AddIcon;
