import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ProfileIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 0c5.514 0 10 4.486 10 10s-4.486 10-10 10S0 15.514 0 10 4.486 0 10 0zm6.24 15a7.99 7.99 0 01-12.48 0 7.99 7.99 0 0112.48 0zM10 10a3 3 0 100-6 3 3 0 000 6z"
    />
  </ESSvgIcon>
);

export default ProfileIcon;
