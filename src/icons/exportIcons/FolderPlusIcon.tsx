import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const FolderPlusIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M17.5 3A1.5 1.5 0 0119 4.5v13a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 17.5v-15A1.5 1.5 0 012.5 1h4.879a1.5 1.5 0 011.06.44l1.122 1.12a1.5 1.5 0 001.06.44H17.5zM9 8a1 1 0 012 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2V8z"
    />
  </ESSvgIcon>
);

export default FolderPlusIcon;
