import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const FolderDownIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M17.5 19a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0017.5 3h-6.879c-.397 0-.779-.158-1.06-.44L8.44 1.439A1.503 1.503 0 007.379 1H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15zM9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a.997.997 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8a1 1 0 00-2 0v3.586z"
    />
  </ESSvgIcon>
);

export default FolderDownIcon;
