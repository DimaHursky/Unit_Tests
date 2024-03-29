import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const AddNoteIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      d="M10.379 0a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0116 5.622V10a6 6 0 00-6 6v4H3.5A1.5 1.5 0 012 18.5v-17A1.5 1.5 0 013.5 0h6.879zM5 5h8v2H5V5zm5 4H5v2h5V9zm-5 4h3v2H5v-2zm14.707 2.293A1 1 0 0019 15h-2v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 00.707-1.707z"
      fillRule="evenodd"
    />
  </ESSvgIcon>
);

export default AddNoteIcon;
