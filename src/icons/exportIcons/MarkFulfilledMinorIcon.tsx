import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MarkFulfilledMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M18 16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5V9h2v4h2.382c.379 0 .725.214.894.553L8 15h4l.724-1.447a.998.998 0 01.894-.553H16V9h2v7.5z" />
    <path d="M8.293 8.707l-3-3a.999.999 0 111.414-1.414L9 6.586l4.293-4.293a.999.999 0 111.414 1.414l-5 5a.997.997 0 01-1.414 0z" />
  </ESSvgIcon>
);

export default MarkFulfilledMinorIcon;
