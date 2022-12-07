import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MoneyMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M3 4.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H3Zm7 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </ESSvgIcon>
);

export default MoneyMinorIcon;
