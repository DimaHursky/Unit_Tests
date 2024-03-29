import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const DragDropIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M2 2h1V0H1.5A1.5 1.5 0 000 1.5V3h2V2zM5 2h3V0H5v2zM13 2h-3V0h3v2zM0 5v3h2V5H0zM0 10v3h2v-3H0zM18 5h-2v3h2V5zM5 18h3v-2H5v2zM0 17a1 1 0 001 1h2v-2H2v-1H0v2zM16 3V2h-1V0h1.5A1.5 1.5 0 0118 1.5V3h-2z" />
    <path d="M10.814 14H5.5A1.5 1.5 0 014 12.5v-7A1.5 1.5 0 015.5 4h7A1.5 1.5 0 0114 5.5v5.314l5.512 2.506a.832.832 0 01.028 1.501l-2.898 1.45a.832.832 0 00-.372.371l-1.449 2.898a.832.832 0 01-1.501-.028L10.814 14zm-.909-2l-.828-1.821c-.318-.7.402-1.42 1.102-1.102L12 9.905V6H6v6h3.905z" />
  </ESSvgIcon>
);

export default DragDropIcon;
