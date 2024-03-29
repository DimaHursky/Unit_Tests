import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ViewportNarrowIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M14.414 9H19a1 1 0 110 2h-4.586l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 111.414 1.414L14.414 9zM5.707 6.293l3 3a.999.999 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L5.586 11H1a1 1 0 010-2h4.586L4.293 7.707a1 1 0 011.414-1.414zM8 2v4L6 4V1.5A1.5 1.5 0 017.5 0h5A1.5 1.5 0 0114 1.5V4l-2 2V2H8zM14 16l-2-2v4H8v-4l-2 2v2.5A1.5 1.5 0 007.5 20h5a1.5 1.5 0 001.5-1.5V16z" />
  </ESSvgIcon>
);

export default ViewportNarrowIcon;
