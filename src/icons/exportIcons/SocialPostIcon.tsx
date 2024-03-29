import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SocialPostIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M4 7h9v2H4zM4 11h7v2H4z" />
    <path d="M16 10a1 1 0 011 1v4.5a1.5 1.5 0 01-1.5 1.5H7.636l-2.818 2.707A1 1 0 013.111 19v-2H1.5A1.5 1.5 0 010 15.5v-11A1.5 1.5 0 011.5 3H9a1 1 0 010 2H2v10h2.111a1 1 0 011 1v.697l1.404-1.404A1 1 0 017.222 15H15v-4a1 1 0 011-1zm0-5a.999.999 0 01-.707-1.707l2-2a1 1 0 111.414 1.414l-2 2A.996.996 0 0116 5zm3 1a1 1 0 110 2h-2a1 1 0 110-2h2zm-6-2a1 1 0 01-1-1V1a1 1 0 012 0v2a1 1 0 01-1 1z" />
  </ESSvgIcon>
);

export default SocialPostIcon;
