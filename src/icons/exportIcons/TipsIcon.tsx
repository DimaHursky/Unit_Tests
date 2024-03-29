import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TipsIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M17.5 0h-11C5.672 0 5 .677 5 1.512V3h4.5A1.5 1.5 0 0111 4.5v9A1.5 1.5 0 019.5 15H5v4.721a.2.2 0 00.334.15l1.664-1.515a.497.497 0 01.67 0l1.664 1.514c.19.173.48.173.67 0l1.663-1.514a.497.497 0 01.67 0l1.663 1.514c.19.173.48.173.67 0l1.664-1.514a.497.497 0 01.67 0l1.664 1.515a.2.2 0 00.334-.15V1.512C19 .677 18.328 0 17.5 0zM8.707 6.707a1 1 0 00-1.414-1.414l-6 6a1 1 0 101.414 1.414l6-6zM2.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 3h-4v2h4V3zm-4 4h4v2h-4V7zm4 4h-4v2h4v-2z"
    />
  </ESSvgIcon>
);

export default TipsIcon;
