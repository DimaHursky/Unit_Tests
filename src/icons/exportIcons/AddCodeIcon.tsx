import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const AddCodeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3 9c0 .266-.105.52-.293.707L2.414 10l.293.293A.996.996 0 013 11v4a1 1 0 001 1 1 1 0 010 2c-1.654 0-3-1.346-3-3v-3.586l-.707-.707a1 1 0 010-1.414L1 8.586V5c0-1.654 1.346-3 3-3a1 1 0 010 2 1 1 0 00-1 1v4zm16.707.293a1.001 1.001 0 010 1.414l-.707.707V15c0 1.654-1.346 3-3 3a1 1 0 110-2 1 1 0 001-1v-4c0-.266.105-.52.293-.707l.293-.293-.293-.293A.996.996 0 0117 9V5a1 1 0 00-1-1 1 1 0 110-2c1.654 0 3 1.346 3 3v3.586l.707.707zM13 9a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H7a1 1 0 010-2h2V7a1 1 0 112 0v2h2z" />
  </ESSvgIcon>
);

export default AddCodeIcon;
