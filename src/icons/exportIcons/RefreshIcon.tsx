import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const RefreshIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M19.707 3.293a1 1 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L16.586 5H7C4.794 5 3 6.794 3 9a1 1 0 01-2 0c0-3.309 2.691-6 6-6h9.586l-1.293-1.293A1 1 0 1116.707.293l3 3zM17 10a1 1 0 011 1c0 3.31-2.69 6-6 6H3.414l1.293 1.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 111.414 1.414L3.414 15H12c2.206 0 4-1.794 4-4a1 1 0 011-1z" />
  </ESSvgIcon>
);

export default RefreshIcon;
