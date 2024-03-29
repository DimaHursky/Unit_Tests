import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ThemeStoreIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1.5 0A1.5 1.5 0 000 1.5v4A1.5 1.5 0 001.5 7H3v11.5A1.5 1.5 0 004.5 20H8a1 1 0 100-2H5V7h1.5A1.5 1.5 0 008 5.5V5h7a1 1 0 102 0v-.5A1.5 1.5 0 0015.5 3H8V1.5A1.5 1.5 0 006.5 0h-5zM2 2v3h4V2H2z"
    />
    <path
      fillRule="evenodd"
      d="M9 8a1 1 0 00-1 1v5a1 1 0 00.293.707l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5A1 1 0 0014 8H9zm4 4a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </ESSvgIcon>
);

export default ThemeStoreIcon;
