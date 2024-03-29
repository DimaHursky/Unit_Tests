import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TransferOutIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M4.414 13l1.293 1.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L4.414 11H11a1 1 0 010 2H4.414zM19 18.5a1.5 1.5 0 01-1.5 1.5H2.286C1.576 20 1 19.424 1 18.714V18a1 1 0 112 0h14V5.618l-7-3.5-7 3.5V6a1 1 0 01-2 0V5c0-.379.214-.725.553-.895l8-4c.281-.14.613-.14.894 0l8 4c.339.17.553.516.553.895v13.5z" />
  </ESSvgIcon>
);

export default TransferOutIcon;
