import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const WearableIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M6 4a3 3 0 00-3 3v6a3 3 0 003 3v2.5A1.5 1.5 0 007.5 20h5a1.5 1.5 0 001.5-1.5V16a3 3 0 003-3v-1a1 1 0 001-1V9a1 1 0 00-1-1V7a3 3 0 00-3-3V1.5A1.5 1.5 0 0012.5 0h-5A1.5 1.5 0 006 1.5V4zm2 0V2h4v2H8zm4 12v2H8v-2h4zM6 6a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H6z"
    />
  </ESSvgIcon>
);

export default WearableIcon;
