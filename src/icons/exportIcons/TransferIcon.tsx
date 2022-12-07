import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TransferIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M9 14h8V3H6v8H4V2.5A1.5 1.5 0 015.5 1h12A1.5 1.5 0 0119 2.5v12a1.5 1.5 0 01-1.5 1.5H9v-2z" />
    <path d="M9 5a1 1 0 000 2h2.586l-3.293 3.293a1 1 0 101.414 1.414L13 8.414V11a1 1 0 102 0V6c0-.025 0-.05-.003-.075A1 1 0 0014 5H9zM0 14.5A1.5 1.5 0 011.5 13h4A1.5 1.5 0 017 14.5v4A1.5 1.5 0 015.5 20h-4A1.5 1.5 0 010 18.5v-4z" />
  </ESSvgIcon>
);

export default TransferIcon;
