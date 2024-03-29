import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const IncomingIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M17.5 6A1.5 1.5 0 0119 7.5v10a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 17.5v-10A1.5 1.5 0 012.5 6H7v2H3v9h14V8h-4V6h4.5z" />
    <path d="M1 2a1 1 0 010-2h5c2.757 0 5 2.243 5 5v6.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a.998.998 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586V5c0-1.654-1.346-3-3-3H1z" />
  </ESSvgIcon>
);

export default IncomingIcon;
