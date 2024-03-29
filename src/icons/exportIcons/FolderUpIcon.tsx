import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const FolderUpIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M19 17.5v-13A1.5 1.5 0 0017.5 3h-6.879c-.397 0-.779-.158-1.06-.44L8.44 1.439A1.503 1.503 0 007.379 1H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5zm-8-7.085l1.293 1.293a1 1 0 001.414-1.414l-3-3a.997.997 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 10.415v3.586a1 1 0 102 0v-3.586z"
    />
  </ESSvgIcon>
);

export default FolderUpIcon;
