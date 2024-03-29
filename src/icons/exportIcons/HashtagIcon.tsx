import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const HashtagIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M7.992 2.124a1 1 0 10-1.984-.248L5.618 5H2a1 1 0 000 2h3.367l-.75 6H2a1 1 0 100 2h2.367l-.36 2.876a1 1 0 101.985.248L6.382 15h5.985l-.36 2.876a1 1 0 001.985.248l.39-3.124H18a1 1 0 100-2h-3.367l.75-6H18a1 1 0 100-2h-2.367l.36-2.876a1 1 0 10-1.985-.248L13.618 5H7.632l.36-2.876zM12.617 13l.75-6H7.383l-.75 6h5.984z"
    />
  </ESSvgIcon>
);

export default HashtagIcon;
