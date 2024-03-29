import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MinimizeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M9 17h8V3H3v8H1V2.5A1.5 1.5 0 012.5 1h15A1.5 1.5 0 0119 2.5v15a1.5 1.5 0 01-1.5 1.5H9v-2z" />
    <path d="M10 6a1 1 0 10-2 0v5a.997.997 0 001 1h5a1 1 0 100-2h-2.586l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586V6zM1 14.5A1.5 1.5 0 012.5 13h3A1.5 1.5 0 017 14.5v3A1.5 1.5 0 015.5 19h-3A1.5 1.5 0 011 17.5v-3z" />
  </ESSvgIcon>
);

export default MinimizeIcon;
