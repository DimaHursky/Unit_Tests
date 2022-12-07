import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const DataVisualizationIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 2a1 1 0 011-1h18a1 1 0 110 2h-1v11.5a1.5 1.5 0 01-1.5 1.5h-3.22l.69 2.758a1 1 0 11-1.94.485L11.22 16H8.78l-.81 3.242a1 1 0 11-1.94-.485L6.72 16H3.5A1.5 1.5 0 012 14.5V3H1a1 1 0 01-1-1zm15 3h-2v8h2V5zM9 7h2v6H9V7zM7 9H5v4h2V9z"
    />
  </ESSvgIcon>
);

export default DataVisualizationIcon;
