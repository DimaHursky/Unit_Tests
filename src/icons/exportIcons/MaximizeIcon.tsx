import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MaximizeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M9 5a1 1 0 100 2h2.586l-3.293 3.293a1 1 0 101.414 1.414L13 8.414V11a1 1 0 102 0V6c0-.025 0-.05-.003-.075A1 1 0 0014 5H9zM1 14.5A1.5 1.5 0 012.5 13h3A1.5 1.5 0 017 14.5v3A1.5 1.5 0 015.5 19h-3A1.5 1.5 0 011 17.5v-3z" />
    <path d="M2.5 1A1.5 1.5 0 001 2.5V11h2V3h14v14H9v2h8.5a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0017.5 1h-15z" />
  </ESSvgIcon>
);

export default MaximizeIcon;
