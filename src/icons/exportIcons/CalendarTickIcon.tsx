import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CalendarTickIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M15 2h2.5c.8 0 1.5.7 1.5 1.5v15c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5v-15C1 2.7 1.7 2 2.5 2H4V1a1 1 0 012 0v1h7V1a1 1 0 112 0v1zm2 16H3V8h14v10zm-4.707-7.707L9 13.586l-1.293-1.293A1.001 1.001 0 006 13a1 1 0 00.293.707l2 2a.997.997 0 001.414 0l4-4a1 1 0 00-1.414-1.414z"
    />
  </ESSvgIcon>
);

export default CalendarTickIcon;
