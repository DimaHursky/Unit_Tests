import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const RefundIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M4.5 0h11c.828 0 1.5.677 1.5 1.512v18.21a.2.2 0 01-.334.149l-1.664-1.515a.497.497 0 00-.67 0l-1.664 1.514a.497.497 0 01-.67 0l-1.663-1.514a.497.497 0 00-.67 0L8.002 19.87a.497.497 0 01-.67 0l-1.664-1.514a.497.497 0 00-.67 0l-1.664 1.515a.2.2 0 01-.334-.15V1.512C3 .677 3.672 0 4.5 0zM10 7.596H8.415l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L8.414 9.596H10c2.069 0 2.999 1.116 2.999 3a1 1 0 102 0c0-2.916-1.736-5-5-5z" />
  </ESSvgIcon>
);

export default RefundIcon;
