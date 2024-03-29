import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CalendarMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M7 2C7.55228 2 8 2.44772 8 3V4H12V3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3V4H15C16.1046 4 17 4.89543 17 6V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V6C3 4.89543 3.89543 4 5 4H6V3C6 2.44772 6.44772 2 7 2ZM5 8L5 15H15V8H5Z"
    />
  </ESSvgIcon>
);

export default CalendarMinorIcon;
