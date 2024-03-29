import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CameraIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5.74 1.786A1.5 1.5 0 017.059 1h5.855a1.5 1.5 0 011.315.777l.55 1c.04.074.073.148.1.223H18.5A1.5 1.5 0 0120 4.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 010 15.5v-11A1.5 1.5 0 011.5 3h3.603c.025-.072.057-.144.095-.214l.542-1zM2 5h3v2H2V5zm12 5a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </ESSvgIcon>
);

export default CameraIcon;
