import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const KeyIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M14.56.44A1.5 1.5 0 0115.622 0H18.5A1.5 1.5 0 0120 1.5v3.423a.5.5 0 01-.5.5h-1.082a1 1 0 00-1 1v1a1 1 0 01-1 1h-1a1 1 0 00-1 1v2l-1.449 1.443a6.5 6.5 0 11-5.111-5.724L14.561.439zM8 14a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </ESSvgIcon>
);

export default KeyIcon;
