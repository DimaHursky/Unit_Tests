import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const HintIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 0a1 1 0 011 1v1a1 1 0 11-2 0V1a1 1 0 011-1zM12 17v1.5a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 018 18.5V17h4zM18 9a1 1 0 100 2h1a1 1 0 100-2h-1zM0 10a1 1 0 011-1h1a1 1 0 110 2H1a1 1 0 01-1-1zM4.343 2.929A1 1 0 002.93 4.343l.707.707A1 1 0 105.05 3.636l-.707-.707zM14.95 5.05a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM13.268 11.307C12.65 12.181 12 13.124 12 14.195V15H8v-.805c0-1.07-.65-2.014-1.268-2.888a4 4 0 116.536 0z" />
  </ESSvgIcon>
);

export default HintIcon;
