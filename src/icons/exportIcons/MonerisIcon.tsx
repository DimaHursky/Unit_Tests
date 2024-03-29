import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MonerisIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M3.541 0a1.5 1.5 0 00-1.5 1.54l.013.46h15.892l.012-.46a1.5 1.5 0 00-1.5-1.54H3.542z" />
    <path
      fillRule="evenodd"
      d="M4.424 20a1.5 1.5 0 01-1.498-1.422L2.166 4h15.669l-.76 14.578A1.5 1.5 0 0115.575 20H4.424zM5 6h10v4H5V6zm0 6h2v2H5v-2zm0 4h2v2H5v-2zm6-4H9v2h2v-2zm-2 4h2v2H9v-2zm6-4h-2v2h2v-2zm-2 4h2v2h-2v-2z"
    />
  </ESSvgIcon>
);

export default MonerisIcon;
