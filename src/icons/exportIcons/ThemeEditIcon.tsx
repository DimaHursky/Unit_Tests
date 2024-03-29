import React from 'react';
import { ESSvgIcon, ESSvgIconProps } from '../../components/ESSvgIcon';

const ThemeEditIcon = (props: ESSvgIconProps) => (
  <ESSvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M0 1.5A1.5 1.5 0 011.5 0h5A1.5 1.5 0 018 1.5V2h5a1 1 0 110 2H8v1.5A1.5 1.5 0 016.5 7H5v2H3V7H1.5A1.5 1.5 0 010 5.5v-4zM2 5V2h4v3H2z"
    />
    <path d="M5 17v1h1v2H4.5A1.5 1.5 0 013 18.5V17h2zM3 14v-3h2v3H3zM12 20H8v-2h4v2zM14 18h1v-1h2v1.5a1.5 1.5 0 01-1.5 1.5H14v-2zM16.907 4.841l2.252 2.252.375-.376a1.592 1.592 0 00-2.252-2.25l-.375.374zM18.125 8.124l-2.251-2.251-7.143 7.143L8 16l2.982-.731 7.143-7.144z" />
  </ESSvgIcon>
);

export default ThemeEditIcon;
