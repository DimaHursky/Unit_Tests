import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TaxIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M4.5 0h11c.828 0 1.5.677 1.5 1.512v18.21a.2.2 0 01-.334.149l-1.664-1.515a.497.497 0 00-.67 0l-1.664 1.514a.497.497 0 01-.67 0l-1.663-1.514a.497.497 0 00-.67 0L8.002 19.87a.497.497 0 01-.67 0l-1.664-1.514a.497.497 0 00-.67 0l-1.664 1.559a.2.2 0 01-.334-.15V1.512C3 .677 3.672 0 4.5 0zm3 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-.293-4.793a1 1 0 00-1.414-1.414l-6 6a1 1 0 101.414 1.414l6-6z"
    />
  </ESSvgIcon>
);

export default TaxIcon;
