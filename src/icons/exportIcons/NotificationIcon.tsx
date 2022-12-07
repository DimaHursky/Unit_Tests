import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const NotificationIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M10 0a1 1 0 011 1v2.032l-.001.021-.002.03A6.002 6.002 0 0116 9c0 3.093.625 4.312 1.599 6.21l.034.068c.17.33-.07.722-.442.722H2.809a.496.496 0 01-.442-.722l.034-.068C3.375 13.312 4 12.093 4 9a6.002 6.002 0 015.003-5.918l-.002-.04A.835.835 0 019 3V1a1 1 0 011-1zM12 18a2 2 0 01-4 0h4z" />
  </ESSvgIcon>
);

export default NotificationIcon;
