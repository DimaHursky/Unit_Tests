import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SortDescendingIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      d="M12.3237 9H7.67626C7.11302 9 6.79751 8.39719 7.14549 7.98592L9.46923 5.23956C9.73949 4.92015 10.2605 4.92015 10.5308 5.23956L12.8545 7.98592C13.2025 8.39719 12.887 9 12.3237 9Z"
      fillOpacity="50%"
    />
    <path d="M7.67626 11H12.3237C12.887 11 13.2025 11.6028 12.8545 12.0141L10.5308 14.7604C10.2605 15.0799 9.73949 15.0799 9.46923 14.7604L7.14549 12.0141C6.79751 11.6028 7.11302 11 7.67626 11Z" />
  </ESSvgIcon>
);

export default SortDescendingIcon;
