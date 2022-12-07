import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PauseMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M11 13a1 1 0 102 0V7a1 1 0 10-2 0v6zm-4 0a1 1 0 102 0V7a1 1 0 00-2 0v6zm3-11a8 8 0 100 16 8 8 0 000-16z"
    />
  </ESSvgIcon>
);

export default PauseMinorIcon;
