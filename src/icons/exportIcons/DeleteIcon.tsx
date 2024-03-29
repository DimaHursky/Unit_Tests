import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const DeleteIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M14 4h3a1 1 0 011 1v1H2V5a1 1 0 011-1h3V1.5A1.5 1.5 0 017.5 0h5A1.5 1.5 0 0114 1.5V4zM8 2v2h4V2H8zM3 8h14v10.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 18.5V8zm4 3H5v6h2v-6zm4 0H9v6h2v-6zm2 0h2v6h-2v-6z"
    />
  </ESSvgIcon>
);

export default DeleteIcon;
