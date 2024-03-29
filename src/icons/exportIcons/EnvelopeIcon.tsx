import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const EnvelopeIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 16.5v-13C0 2.7.7 2 1.5 2h17c.8 0 1.5.7 1.5 1.5v13c0 .8-.7 1.5-1.5 1.5h-17C.7 18 0 17.3 0 16.5zm18-1.2l-3-1.8V6.6l3-1.867V15.3zm-2.667.7L13.5 14.9c-.3-.2-.5-.5-.5-.9V6c0-.4.2-.7.5-.9L15.333 4H2v12h13.333zM4 8h4v2H4V8zm6 4H4v2h6v-2z"
    />
  </ESSvgIcon>
);

export default EnvelopeIcon;
