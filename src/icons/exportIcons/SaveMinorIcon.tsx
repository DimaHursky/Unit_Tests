import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SaveMinorIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M5 5v10h10V7h-2V5h2.5A1.5 1.5 0 0117 6.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11A1.5 1.5 0 014.5 3h3.293a1.5 1.5 0 011.06.44l1.708 1.706A1.5 1.5 0 0111 6.207v3.379l.793-.793a1 1 0 111.414 1.414l-2.5 2.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L9 9.586V6.414L7.586 5H5z" />
  </ESSvgIcon>
);

export default SaveMinorIcon;
