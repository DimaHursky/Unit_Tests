import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const CircleDisabledIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M2 10c0-1.846.635-3.543 1.688-4.897l11.209 11.209A7.954 7.954 0 0110 18c-4.411 0-8-3.589-8-8zm14.312 4.897L5.103 3.688A7.954 7.954 0 0110 2c4.411 0 8 3.589 8 8a7.952 7.952 0 01-1.688 4.897zM0 10c0 5.514 4.486 10 10 10s10-4.486 10-10S15.514 0 10 0 0 4.486 0 10z" />
  </ESSvgIcon>
);

export default CircleDisabledIcon;
