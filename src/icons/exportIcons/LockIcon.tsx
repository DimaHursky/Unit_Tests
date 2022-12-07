import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const LockIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M4 6v2H2.5A1.5 1.5 0 001 9.5v9A1.5 1.5 0 002.5 20h15a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0017.5 8H16V6A6 6 0 004 6zm6-4a4 4 0 00-4 4v2h8V6a4 4 0 00-4-4zm1 14v-4H9v4h2z"
    />
  </ESSvgIcon>
);

export default LockIcon;
