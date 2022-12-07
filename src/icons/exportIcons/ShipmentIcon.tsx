import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ShipmentIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1.5 2A1.5 1.5 0 000 3.5v11A1.5 1.5 0 001.5 16H2a3 3 0 106 0h4a3 3 0 106 0h.5a1.5 1.5 0 001.5-1.5v-3.361a1.5 1.5 0 00-.214-.772l-2.783-4.639A1.5 1.5 0 0015.717 5H13V3.5A1.5 1.5 0 0011.5 2h-10zM15 17a1 1 0 110-2 1 1 0 010 2zM4 16a1 1 0 102 0 1 1 0 00-2 0zm13.234-6H13V7h2.434l1.8 3z"
    />
  </ESSvgIcon>
);

export default ShipmentIcon;
