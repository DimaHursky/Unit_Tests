import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PlusMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 4a1 1 0 0 0-1 1v4H5a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V5a1 1 0 0 0-1-1Z" />
  </ESSvgIcon>
);

export default PlusMinorIcon;
