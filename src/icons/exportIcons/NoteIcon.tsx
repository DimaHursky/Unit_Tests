import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const NoteIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M11.379 0a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 5.622V18.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 18.5v-17A1.5 1.5 0 014.5 0h6.879zM6 5h4v2H6V5zm8 4v2H6V9h8zm-8 6v-2h7v2H6z"
    />
  </ESSvgIcon>
);

export default NoteIcon;
