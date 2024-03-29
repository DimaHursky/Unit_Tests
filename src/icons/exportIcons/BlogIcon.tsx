import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const BlogIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M16 2a2 2 0 014 0v1h-4V2zM8.379 1a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0114 6.622V17.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 17.5v-15A1.5 1.5 0 012.5 1h5.879zM4 5h4v2H4V5zm7 4v2H4V9h7zm-7 6v-2h5v2H4zM16 5h4v11l-2 4-2-4V5z"
    />
  </ESSvgIcon>
);

export default BlogIcon;
