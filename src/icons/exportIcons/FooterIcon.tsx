import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const FooterIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M1 2a1 1 0 011-1h2v2H3v1H1V2zM18 1a1 1 0 011 1v2h-2V3h-1V1h2zM19 17.5V11H1v6.5A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5zM19 6v3h-2V6h2zM3 9V6H1v3h2zM14 1v2h-3V1h3zM9 3V1H6v2h3z" />
  </ESSvgIcon>
);

export default FooterIcon;
