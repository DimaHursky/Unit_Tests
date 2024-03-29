import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SoftPackIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M2 1.5v17c0 .8.7 1.5 1.5 1.5h13.1c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5H3.5C2.7 0 2 .7 2 1.5zM16 18H4V2h12v16z" />
    <path d="M6 4H3v2h3V4zM17 4h-3v2h3V4zM12 4H8v2h4V4zM10 10H6v2h4v-2zM12 14H6v2h6v-2z" />
  </ESSvgIcon>
);

export default SoftPackIcon;
