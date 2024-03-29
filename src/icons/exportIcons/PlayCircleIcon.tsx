import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PlayCircleIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM8 6.862v6.276a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L8.748 6.427A.5.5 0 008 6.862z"
    />
  </ESSvgIcon>
);

export default PlayCircleIcon;
