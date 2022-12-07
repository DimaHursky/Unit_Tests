import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PrintMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M14 11h2V9h-2v2zM7 7h6V4H7v3zm0 9h6v-2H7v2zm8-9V3.5A1.5 1.5 0 0013.5 2h-7A1.5 1.5 0 005 3.5V7H3.5A1.5 1.5 0 002 8.5v6A1.5 1.5 0 003.5 16H5v.5A1.5 1.5 0 006.5 18h7a1.5 1.5 0 001.5-1.5V16h1.5a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0016.5 7H15z"
    />
  </ESSvgIcon>
);

export default PrintMinorIcon;
