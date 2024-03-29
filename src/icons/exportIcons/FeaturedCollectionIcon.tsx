import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const FeaturedCollectionIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M8 .439a1.48 1.48 0 00-2.103 0l-1.04 1.18-3.48 4a1.497 1.497 0 00-.377 1v9.88c0 .398.157.779.436 1.06.278.282.657.44 1.051.44h2.479v-9.43a3.568 3.568 0 01.872-2.33l3.638-4.12L8 .439zm10.618 7.13l-4.579-5.13a1.51 1.51 0 00-2.129 0l-1.004 1.18-3.524 4a1.486 1.486 0 00-.382 1v9.88c0 .389.152.763.423 1.043.272.28.642.444 1.033.457h9.038c.4 0 .782-.158 1.065-.44.282-.281.44-.663.44-1.06v-9.93a1.487 1.487 0 00-.38-1zM11.402 9c-1 0-1.9.9-1.9 2 0 2.2 1.3 3.9 3.5 5 2.2-1.1 3.5-2.8 3.5-4.9v-.2c0-1-.9-1.9-1.9-1.9-1 0-1.6 1.167-1.6 1.167S12.402 9 11.402 9z"
    />
  </ESSvgIcon>
);

export default FeaturedCollectionIcon;
