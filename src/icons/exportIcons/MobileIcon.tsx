import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MobileIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M3 1.5C3 .7 3.7 0 4.5 0h11c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5v-17zM5 2h10v14H5V2zm4 15a1 1 0 100 2h2a1 1 0 100-2H9z"
    />
  </ESSvgIcon>
);

export default MobileIcon;
