import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const MicrophoneIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M6 4a4 4 0 118 0v4a4 4 0 01-8 0V4z" />
    <path d="M11 15v4H9v-4h2z" />
    <path d="M4 8a6 6 0 0012 0h2A8 8 0 112 8h2z" />
    <path d="M16 6h.5A1.5 1.5 0 0118 7.5V8h-2V6zM2 7.5A1.5 1.5 0 013.5 6H4v2H2v-.5zM7 19.5A1.5 1.5 0 018.5 18h3a1.5 1.5 0 011.5 1.5v.5H7v-.5z" />
  </ESSvgIcon>
);

export default MicrophoneIcon;
