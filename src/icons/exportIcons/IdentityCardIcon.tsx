import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const IdentityCardIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1.5 3A1.5 1.5 0 000 4.5v11A1.5 1.5 0 001.5 17h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0018.5 3h-17zm10.1 3a.8.8 0 000 1.6h5.6a.8.8 0 000-1.6h-5.6zm0 3.2a.8.8 0 000 1.6h5.6a.8.8 0 000-1.6h-5.6zm0 3.2a.8.8 0 000 1.6h4a.8.8 0 000-1.6h-4zM5.5 9.556c.966 0 1.75-.796 1.75-1.778S6.466 6 5.5 6s-1.75.796-1.75 1.778.784 1.778 1.75 1.778zM2 12.666C2 13.404 2.588 14 3.313 14h4.374C8.412 14 9 13.403 9 12.667c0-.737-.656-2.223-3.5-2.223S2 11.93 2 12.667z"
    />
  </ESSvgIcon>
);

export default IdentityCardIcon;
