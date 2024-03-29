import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const HideKeyboardIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 3.5A1.5 1.5 0 011.5 2h17A1.5 1.5 0 0120 3.5v7a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 010 10.5v-7zM3 4h2v2H3V4zm1 4v2h2V8H4zm8 2H8V8h4v2zM9 4H7v2h2V4zm4 0h-2v2h2V4zm4 0h-2v2h2V4zm-1 6V8h-2v2h2z"
    />
    <path d="M10 16.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 16.586z" />
  </ESSvgIcon>
);

export default HideKeyboardIcon;
