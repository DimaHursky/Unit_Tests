import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PaymentsIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M4.002 5L.55 6.76a.985.985 0 00-.549.9V18c0 .51.38.93.879.99l8.023 1c.04.01.08.01.12.01.43 0 .809-.27.948-.68L11.737 14h3.273c1.297 0 2.405-.84 2.814-2h.679c.828 0 1.497-.67 1.497-1.5V5H4.002zM5 10h10.01c.27 0 .509.1.709.31.19.18.289.42.289.69 0 .55-.449 1-.998 1h-3.992c-.429 0-.808.28-.948.68l-1.736 5.23-6.338-.79V8.27l2.006-1v1.74A1 1 0 005 10zm13.503-9H5.499c-.828 0-1.497.67-1.497 1.5V3H20v-.5c0-.83-.669-1.5-1.497-1.5z" />
  </ESSvgIcon>
);

export default PaymentsIcon;
