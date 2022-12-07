import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const LegalIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M7 5h5v2H7V5zM12 9H7v2h5V9z" />
    <path
      fillRule="evenodd"
      d="M16 17a3 3 0 01-3 3H3a3 3 0 01-3-3v-1.5A1.5 1.5 0 011.5 14H3V4a3 3 0 013-3h11a3 3 0 110 6h-1v10zM5 4a1 1 0 011-1h8.17c-.11.313-.17.65-.17 1v13a1 1 0 11-2 0v-3H5V4zm12-1a1 1 0 00-1 1v1h1a1 1 0 100-2zm-7 14c0 .35.06.687.17 1H3a1 1 0 01-1-1v-1h8v1z"
    />
  </ESSvgIcon>
);

export default LegalIcon;
