import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ChatIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M10 0C4.486 0 0 4.486 0 10c0 1.728.45 3.42 1.304 4.924L.101 17.965c-.458 1.209.726 2.393 1.935 1.934l3.04-1.204A9.944 9.944 0 0010 20c5.514 0 10-4.486 10-10S15.514 0 10 0zM5.293 9.293a.997.997 0 011.414 0 .997.997 0 010 1.414.997.997 0 01-1.414 0 .997.997 0 010-1.414zm4 0a.997.997 0 011.414 0 .997.997 0 010 1.414 1.003 1.003 0 01-1.414 0 1.003 1.003 0 010-1.414zM14 9a.997.997 0 00-1 1 .997.997 0 001 1 .997.997 0 001-1 .997.997 0 00-1-1z"
    />
  </ESSvgIcon>
);

export default ChatIcon;
