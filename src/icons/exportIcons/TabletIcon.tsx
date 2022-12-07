import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TabletIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M2 1.5A1.5 1.5 0 013.5 0h13A1.5 1.5 0 0118 1.5v17a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 18.5v-17zM4 2h12v14H4V2zm6 17a1 1 0 100-2 1 1 0 000 2z"
    />
  </ESSvgIcon>
);

export default TabletIcon;
