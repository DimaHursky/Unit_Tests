import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ComposeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M18 9a1 1 0 00-1 1v7H3V3h7a1 1 0 100-2H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5V10a1 1 0 00-1-1z" />
    <path d="M15.53 2.029l2.439 2.44-7.739 7.738-3.23.792.792-3.231 7.738-7.74zM19.088 3.35L16.65.913l.406-.407a1.725 1.725 0 012.44 2.439l-.408.407z" />
  </ESSvgIcon>
);

export default ComposeIcon;
