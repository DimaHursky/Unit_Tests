import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const EmailNewsletterIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M7 4h6v2H7V4zM11 8H7v2h4V8z" />
    <path
      fillRule="evenodd"
      d="M3 10V1.5A1.5 1.5 0 014.5 0h11A1.5 1.5 0 0117 1.5V10h2v7.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 17.5V10h2zm2 2V2h10v10l-5 2.771L5 12z"
    />
  </ESSvgIcon>
);

export default EmailNewsletterIcon;
