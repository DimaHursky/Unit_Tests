import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CalendarIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M17.5 2H15V1a1 1 0 10-2 0v1H6V1a1 1 0 00-2 0v1H2.5C1.7 2 1 2.7 1 3.5v15c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM3 18h14V8H3v10z"
    />
  </ESSvgIcon>
);

export default CalendarIcon;
