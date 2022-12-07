import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CartUpIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 3.414V7a1 1 0 102 0V3.414l1.293 1.293a1 1 0 101.414-1.414l-3-3a.998.998 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L10 3.414z" />
    <path
      fillRule="evenodd"
      d="M1 1a1 1 0 011-1h1.5A1.5 1.5 0 015 1.5V10h11.133l.877-6.141a1 1 0 111.98.282l-.939 6.571A1.5 1.5 0 0116.566 12H5v2h10a3 3 0 11-2.83 2H6.83A3 3 0 113 14.17V2H2a1 1 0 01-1-1zm13 16a1 1 0 112 0 1 1 0 01-2 0zM3 17a1 1 0 112 0 1 1 0 01-2 0z"
    />
  </ESSvgIcon>
);

export default CartUpIcon;
