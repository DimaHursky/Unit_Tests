import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const OrdersIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M11 1a1 1 0 10-2 0v7.586L7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 8.586V1z" />
    <path d="M3 14V3h4V1H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0017.5 1H13v2h4v11h-3.5c-.775 0-1.388.662-1.926 1.244l-.11.12A1.994 1.994 0 0110 16a1.994 1.994 0 01-1.463-.637l-.111-.12C7.888 14.664 7.275 14 6.5 14H3z" />
  </ESSvgIcon>
);

export default OrdersIcon;
