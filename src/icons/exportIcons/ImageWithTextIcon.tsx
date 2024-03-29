import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ImageWithTextIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M1.5 2A1.5 1.5 0 000 3.5v5A1.5 1.5 0 001.5 10h6A1.5 1.5 0 009 8.5v-5A1.5 1.5 0 007.5 2h-6zM18 6h-6a1 1 0 110-2h6a1 1 0 110 2zm-6 4h6a1 1 0 100-2h-6a1 1 0 100 2zm6 4H1a1 1 0 010-2h17a1 1 0 010 2zm-3.293 3.707A1 1 0 0114 18H1a1 1 0 010-2h13a1 1 0 01.707 1.707z" />
  </ESSvgIcon>
);

export default ImageWithTextIcon;
