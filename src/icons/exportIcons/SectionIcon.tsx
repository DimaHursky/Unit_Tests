import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SectionIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M2 1a1 1 0 00-1 1v2h2V3h1V1H2zM18 1a1 1 0 011 1v2h-2V3h-1V1h2zM1 6v8h18V6H1zM2 19a1 1 0 01-1-1v-2h2v1h1v2H2zM19 18a1 1 0 01-1 1h-2v-2h1v-1h2v2zM6 17h3v2H6v-2zM14 17h-3v2h3v-2zM14 1v2h-3V1h3zM9 3V1H6v2h3z" />
  </ESSvgIcon>
);

export default SectionIcon;
