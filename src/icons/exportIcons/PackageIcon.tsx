import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PackageIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M19 5h-8V2h5.227c.382-.001.736.162.928.429L19 5zM3.773 2H9v3H1l1.845-2.571c.192-.267.546-.43.928-.429zM1 7v10.5A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5V7H1zm2 2h6v4H3V9z" />
  </ESSvgIcon>
);

export default PackageIcon;
