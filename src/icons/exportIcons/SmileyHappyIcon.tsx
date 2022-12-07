import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SmileyHappyIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM7.707 8.707a1 1 0 11-1.414-1.414 1 1 0 011.414 1.414zm4.586-1.414a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zm.011 4.988c-.03.03-.786.72-2.304.72-1.497 0-2.252-.67-2.303-.718a1 1 0 00-1.404 1.424C6.425 13.84 7.653 15 10 15c2.346 0 3.575-1.16 3.707-1.293a.993.993 0 00.005-1.397 1.006 1.006 0 00-1.408-.029z"
    />
  </ESSvgIcon>
);

export default SmileyHappyIcon;
