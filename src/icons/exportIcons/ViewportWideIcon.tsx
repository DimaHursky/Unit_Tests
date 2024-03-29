import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ViewportWideIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M16.707 6.293l3 3a.998.998 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L16.586 11H12a1 1 0 110-2h4.586l-1.293-1.293a1 1 0 111.414-1.414zM3.293 6.293a1 1 0 111.414 1.414L3.414 9H8a1 1 0 010 2H3.414l1.293 1.293a1.003 1.003 0 010 1.414 1 1 0 01-1.414 0l-3-3a.998.998 0 010-1.414l3-3z" />
    <path d="M1 1.5A1.5 1.5 0 012.5 0h15A1.5 1.5 0 0119 1.5V6l-2-2V2H3v2L1 6V1.5zM17 18v-2l2-2v4.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 18.5V14l2 2v2h14z" />
  </ESSvgIcon>
);

export default ViewportWideIcon;
