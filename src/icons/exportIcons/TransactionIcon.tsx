import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TransactionIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M11.293 8.293L12.586 7H3v11a1 1 0 11-2 0V2a1 1 0 012 0v3h9.586l-1.293-1.293a1 1 0 011.414-1.414l2.999 2.999a1 1 0 010 1.416l-2.999 2.999A.998.998 0 0111 9a1 1 0 01.293-.707zM18 1a1 1 0 011 1v16a1 1 0 01-2 0v-3H7.414l1.293 1.293a1 1 0 11-1.414 1.414l-2.999-2.999a1 1 0 010-1.416l2.999-2.999a1 1 0 011.414 1.414L7.414 13H17V2a1 1 0 011-1z" />
  </ESSvgIcon>
);

export default TransactionIcon;
