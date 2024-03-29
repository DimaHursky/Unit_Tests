import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TapChipIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 1.5A1.5 1.5 0 016.5 0h12A1.5 1.5 0 0120 1.5v8a1.5 1.5 0 01-1.5 1.5H14v5.5a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 011 16.5V6a4 4 0 014-4v-.5zM5 4a2 2 0 00-2 2v7h9v-2H6.5A1.5 1.5 0 015 9.5V4zm3 2a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zM3 16.5V15h9v1.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5z"
    />
  </ESSvgIcon>
);

export default TapChipIcon;
