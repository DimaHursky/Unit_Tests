import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PrintIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M3.99995 2.5C3.99995 1.67157 4.67152 1 5.49995 1H14.4999C15.3284 1 15.9999 1.67157 15.9999 2.5V5H17.5005C18.3289 5 19.0005 5.67157 19.0005 6.5V12.5C19.0005 13.3284 18.3289 14 17.5005 14H15.9999V18C15.9999 18.5523 15.5522 19 15 19H4.99995C4.44767 19 3.99995 18.5523 3.99995 18V14H2.50002C1.67159 14 1.00002 13.3284 1.00002 12.5L1 6.5C0.999997 5.67158 1.67157 5 2.5 5H3.99995V2.5ZM14 17V12H5.99995V17H14ZM16.9999 9C16.9999 9.55228 16.5522 10 16 10C15.4477 10 15 9.55228 15 9C15 8.44771 15.4477 8 16 8C16.5522 8 16.9999 8.44771 16.9999 9ZM14 3H6V5H14V3Z"
    />
  </ESSvgIcon>
);

export default PrintIcon;
