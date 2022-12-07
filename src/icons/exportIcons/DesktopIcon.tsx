import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const DesktopIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M2.5 1A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15H7c0 .525-.015.793-.144 1.053-.12.239-.416.61-1.303 1.053A1 1 0 006.022 19h7.956a1.004 1.004 0 00.995-.77 1.001 1.001 0 00-.544-1.134c-.873-.439-1.166-.806-1.285-1.043-.13-.26-.144-.528-.144-1.053h4.5a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0017.5 1h-15zm8.883 16a2.621 2.621 0 01-.027-.053c-.357-.714-.357-1.42-.356-1.895V15H9v.052c0 .475.001 1.181-.356 1.895a2.913 2.913 0 01-.027.053h2.766zM17 11H3v2h14v-2z"
    />
  </ESSvgIcon>
);

export default DesktopIcon;
