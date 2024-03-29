import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CardReaderIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M0 1.5A1.5 1.5 0 011.5 0h17A1.5 1.5 0 0120 1.5V3H0V1.5zM0 5v7.5A1.5 1.5 0 001.5 14H4a6 6 0 0112 0h2.5a1.5 1.5 0 001.5-1.5V5H0z" />
    <path d="M10 10a4 4 0 00-4 4v3h3v2a1 1 0 102 0v-2h3v-3a4 4 0 00-4-4z" />
  </ESSvgIcon>
);

export default CardReaderIcon;
