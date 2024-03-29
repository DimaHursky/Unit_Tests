import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ChecklistAlternateIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M8 2a2 2 0 114 0h3.5A1.5 1.5 0 0117 3.5v15a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 18.5v-15A1.5 1.5 0 014.5 2H8zm-1 9a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2zm8-10.5A1.5 1.5 0 0012.5 4h-5A1.5 1.5 0 006 5.5V6h8v-.5zM9 12h6v-2H9v2zm0 2h6v2H9v-2z"
    />
  </ESSvgIcon>
);

export default ChecklistAlternateIcon;
