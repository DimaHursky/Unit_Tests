import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const HeaderIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M1 2.5V9h18V2.5A1.5 1.5 0 0017.5 1h-15A1.5 1.5 0 001 2.5zM2 19a1 1 0 01-1-1v-2h2v1h1v2H2zM19 18a1 1 0 01-1 1h-2v-2h1v-1h2v2zM1 14v-3h2v3H1zM17 11v3h2v-3h-2zM6 17h3v2H6v-2zM14 17h-3v2h3v-2z" />
  </ESSvgIcon>
);

export default HeaderIcon;
