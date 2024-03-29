import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const EmailIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M0 5.324V15.5A1.5 1.5 0 001.5 17h17a1.5 1.5 0 001.5-1.5V5.324l-9.496 5.54a1 1 0 01-1.008 0L0 5.324z" />
    <path d="M19.443 3.334A1.494 1.494 0 0018.5 3h-17c-.357 0-.686.125-.943.334L10 8.842l9.443-5.508z" />
  </ESSvgIcon>
);

export default EmailIcon;
