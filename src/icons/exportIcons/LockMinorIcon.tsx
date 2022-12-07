import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const LockMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M15 8V7c0-2.757-2.243-5-5-5S5 4.243 5 7v1a1 1 0 00-1 1v7.5A1.5 1.5 0 005.5 18h9a1.5 1.5 0 001.5-1.5V9a1 1 0 00-1-1zm-6 7h2v-4H9v4zm4-7H7V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1z"
    />
  </ESSvgIcon>
);

export default LockMinorIcon;
