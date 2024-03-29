import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const QuickSaleIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 0a1 1 0 000 2h1v1a1 1 0 00.917.997l10.943.911L17.133 10H7a1 1 0 00-1 1v3.17A3.001 3.001 0 109.83 16h3.34A3 3 0 1016 14H8v-2h10a1 1 0 00.99-.859l1-7a1 1 0 00-.907-1.138L8 2.08V1a1 1 0 00-1-1H5zm11 16a1 1 0 100 2 1 1 0 000-2zm-9 0a1 1 0 100 2 1 1 0 000-2z"
    />
    <path d="M0 3a1 1 0 011-1h1a1 1 0 010 2H1a1 1 0 01-1-1zM1 6a1 1 0 000 2h6a1 1 0 000-2H1zM0 11a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zM1 14a1 1 0 100 2h1a1 1 0 100-2H1z" />
  </ESSvgIcon>
);

export default QuickSaleIcon;
