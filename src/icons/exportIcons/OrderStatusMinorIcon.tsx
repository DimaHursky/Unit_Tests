import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const OrderStatusMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3 7a1 1 0 110-2h2.586l2.707-2.707a.997.997 0 011.655.391l1.49 4.465 1.855-1.856A.996.996 0 0114 5h3a1 1 0 110 2h-2.586l-2.707 2.707a.998.998 0 01-1.655-.391l-1.49-4.465-1.855 1.856A.996.996 0 016 7H3zm14 2a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7a1 1 0 112 0v3h2.382c.379 0 .725.214.894.553L8 15h4l.724-1.447a.998.998 0 01.894-.553H16v-3a1 1 0 011-1z" />
    <path d="M2 9h2v1H2zM16 9h2v1h-2z" />
  </ESSvgIcon>
);

export default OrderStatusMinorIcon;
