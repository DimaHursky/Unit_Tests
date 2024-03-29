import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const RecentSearchesIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path d="M8 2C4.691 2 2 4.691 2 8s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm6.312 10.897l5.395 5.396a1 1 0 11-1.414 1.414l-5.396-5.395A7.954 7.954 0 018 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8a7.946 7.946 0 01-1.688 4.897zM9 5a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L9 7.586V5z" />
  </ESSvgIcon>
);

export default RecentSearchesIcon;
