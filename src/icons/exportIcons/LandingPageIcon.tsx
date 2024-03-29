import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const LandingPageIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M11 7c0-.552-.449-1-1-1H1a1 1 0 010-2h9c1.654 0 3 1.346 3 3v5.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a.998.998 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L11 12.586V7zm8.56-2.853a1.5 1.5 0 01.44 1.06V18.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5V8h2v10h12V5.414L14.586 2H4v-.5A1.5 1.5 0 015.5 0h9.293a1.5 1.5 0 011.06.44l3.708 3.707z" />
  </ESSvgIcon>
);

export default LandingPageIcon;
