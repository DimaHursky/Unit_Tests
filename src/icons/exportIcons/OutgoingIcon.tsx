import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const OutgoingIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M17.5 10a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 18.5v-7c0-.829.67-1.5 1.5-1.5H7v2H3v6h14v-6h-4v-2h4.5zM10 16a1 1 0 01-1-1V8c0-2.757 2.243-5 5-5h2.586l-1.293-1.293A1 1 0 0116.707.293l3 3a.998.998 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L16.586 5H14c-1.654 0-3 1.346-3 3v7a1 1 0 01-1 1z" />
  </ESSvgIcon>
);

export default OutgoingIcon;
