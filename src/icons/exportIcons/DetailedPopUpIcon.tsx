import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const DetailedPopUpIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3.1 3h1V1H2.6c-.8 0-1.5.7-1.5 1.5V4h2V3zM9.1 19h-3v-2h3v2zM11.1 19h3v-2h-3v2zM3.1 17v-1h-2v1.5c0 .8.7 1.5 1.5 1.5h1.5v-2h-1zM16.1 17h1v-1h2v1.5c0 .8-.7 1.5-1.5 1.5h-1.5v-2zM1.1 9V6h2v3h-2zM1.1 11v3h2v-3h-2z" />
    <path
      fillRule="evenodd"
      d="M9 3v8h8V3H9zm-.5-2C7.7 1 7 1.7 7 2.5v9c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-9z"
    />
  </ESSvgIcon>
);

export default DetailedPopUpIcon;
