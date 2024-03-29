import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const BalanceIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M4 1c-.493 0-1.211.14-1.834.588C1.492 2.074 1 2.874 1 4v13.5A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5V15h-3c-.493 0-1.211-.14-1.834-.588C13.49 13.925 13 13.126 13 12s.492-1.926 1.166-2.412A3.233 3.233 0 0116 9h3V6.5c0-.824-.665-1.5-1.498-1.5H17V2.5A1.5 1.5 0 0015.5 1H4zm12 10h3v2h-3c-.173 0-.456-.06-.666-.211-.159-.115-.334-.315-.334-.789 0-.474.175-.674.334-.789.21-.15.493-.211.666-.211zM4 3a1 1 0 00-1 1v1h12V3H4z"
    />
  </ESSvgIcon>
);

export default BalanceIcon;
