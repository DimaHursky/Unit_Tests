import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ListIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1 2.5A1.5 1.5 0 012.5 1h15A1.5 1.5 0 0119 2.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 17.5v-15zM8 5h8v2H8V5zm8 4H8v2h8V9zm-8 4h8v2H8v-2zM5 7a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 11-2 0 1 1 0 012 0zm-1 5a1 1 0 100-2 1 1 0 000 2z"
    />
  </ESSvgIcon>
);

export default ListIcon;
