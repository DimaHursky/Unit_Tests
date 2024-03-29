import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const UnfulfilledIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M3 3v11h3.5c.775 0 1.388.662 1.926 1.244l.11.12c.366.391.886.636 1.464.636s1.098-.245 1.463-.637l.111-.119C12.112 14.662 12.725 14 13.5 14H17V3H3zm3-2H2.5A1.5 1.5 0 001 2.5v15A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0017.5 1H6z"
    />
  </ESSvgIcon>
);

export default UnfulfilledIcon;
