import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TypeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M9 0c-.6 0-1.1.4-1.4 1L2 17.3a1 1 0 01-.9.7 1 1 0 100 2h4a1 1 0 100-2 1 1 0 01-.9-1.2L5 14h7l.9 2.8A1 1 0 0112 18a1 1 0 100 2h7a1 1 0 100-2 1 1 0 01-1-.7L12.5 1c-.3-.6-.8-1-1.5-1H9zm-.5 4.3L5.8 12h5.4L8.5 4.3z"
    />
  </ESSvgIcon>
);

export default TypeIcon;
