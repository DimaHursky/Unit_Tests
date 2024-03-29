import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const StoreStatusIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M14 10a3.987 3.987 0 00-1.172-2.828l1.415-1.415A6 6 0 119 4.083V2.062A8.001 8.001 0 0010 18a8 8 0 005.657-13.657L17.07 2.93A9.969 9.969 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0c.338 0 .671.017 1 .05v8.218a2 2 0 11-2 0V6.126A4.002 4.002 0 0010 14a4 4 0 004-4z" />
  </ESSvgIcon>
);

export default StoreStatusIcon;
