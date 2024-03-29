import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const SlideshowIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M1 2.5A1.5 1.5 0 012.5 1h15A1.5 1.5 0 0119 2.5v12a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 14.5v-12zM9 5a2 2 0 11-4 0 2 2 0 014 0zm6.57 9H4.427c-.351 0-.548-.368-.343-.632l3.046-3.24a.448.448 0 01.617-.009L9.143 11.6l2.623-3.825a.446.446 0 01.72.016l3.462 5.609c.154.272-.052.6-.377.6z"
    />
    <path d="M6 20a1 1 0 100-2 1 1 0 000 2zM11 19a1 1 0 11-2 0 1 1 0 012 0zM14 20a1 1 0 100-2 1 1 0 000 2z" />
  </ESSvgIcon>
);

export default SlideshowIcon;
