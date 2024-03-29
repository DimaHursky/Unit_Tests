import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const PlanIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M11 1a2 2 0 0 0-2 2v3H7a2 2 0 0 0-2 2v3H3a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-6Zm0 2h5v3h-5V3ZM7 8h5v3H7V8Zm-4 5h5v3H3v-3Z" />
  </ESSvgIcon>
);

export default PlanIcon;
