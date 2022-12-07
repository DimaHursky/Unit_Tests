import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const TimelineAttachmentIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M17 4a1 1 0 011 1v13.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 18.5v-17A1.5 1.5 0 013.5 0H8v2H4v16h12V5a1 1 0 011-1z" />
    <path d="M8 5v6c0 1.206.799 3 3 3s3-1.794 3-3V3c0-1.206-.799-3-3-3h-1v2h1c.805 0 .988.55 1 1v7.988c-.012.462-.195 1.012-1 1.012-.805 0-.988-.55-1-1V5a1 1 0 10-2 0z" />
  </ESSvgIcon>
);

export default TimelineAttachmentIcon;
