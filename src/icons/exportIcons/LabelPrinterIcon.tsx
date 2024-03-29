import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const LabelPrinterIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M4 2.5A1.5 1.5 0 015.5 1h9A1.5 1.5 0 0116 2.5V6h1.5A1.5 1.5 0 0119 7.5v10a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 17.5v-10A1.5 1.5 0 012.5 6H4V2.5zM6 12h8V3H6v9zm-2 3a1 1 0 011-1h3a1 1 0 110 2H5a1 1 0 01-1-1zm11 1a1 1 0 100-2 1 1 0 000 2z"
    />
  </ESSvgIcon>
);

export default LabelPrinterIcon;
