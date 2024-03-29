import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const OrganizationIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M5 5h2v2H5V5Zm2 3H5v2h2V8Zm-2 3h2v2H5v-2Zm6-6H9v2h2V5ZM9 8h2v2H9V8Zm2 3H9v2h2v-2Z" />
    <path
      fillRule="evenodd"
      d="M2 19a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9v-3H7v3H2Zm1-2V3h10v14h-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1H3Zm13-2h-1v-2h1v2Zm0-4h-1V9h1v2Z"
    />
  </ESSvgIcon>
);

export default OrganizationIcon;
