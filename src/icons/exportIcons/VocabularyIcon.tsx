import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const VocabularyIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M20 1.5A1.5 1.5 0 0018.5 0H12c-.768 0-1.469.29-2 .766A2.987 2.987 0 008 0H1.5A1.5 1.5 0 000 1.5v15A1.5 1.5 0 001.5 18H8a1 1 0 011 1 1 1 0 102 0 1 1 0 011-1h6.5a1.5 1.5 0 001.5-1.5v-15zM18 16h-6c-.352 0-.687.067-1 .179V3a1 1 0 011-1h6v14zM8 16H2V2h6a1 1 0 011 1v13.179A2.959 2.959 0 008 16z" />
    <path d="M4 4h3v2H4zM13 4h3v2h-3zM4 8h3v2H4zM13 8h3v2h-3zM4 12h3v2H4z" />
  </ESSvgIcon>
);

export default VocabularyIcon;
