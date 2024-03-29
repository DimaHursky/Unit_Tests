import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TextIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M8.24 9l.816 2.33a1 1 0 001.888-.66L7.609 1.142a1.705 1.705 0 00-3.218 0L1.056 10.67a1 1 0 001.888.66L3.759 9h4.482zm-.7-2L6 2.599 4.46 7h3.08zM15.5 5c.608 0 1.18.155 1.68.428A.999.999 0 0119 6v5a1 1 0 01-1.82.572A3.5 3.5 0 1115.5 5zm0 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
    />
    <path d="M2 14a1 1 0 100 2h16a1 1 0 100-2H2zM2 18a1 1 0 100 2h12a1 1 0 100-2H2z" />
  </ESSvgIcon>
);

export default TextIcon;
