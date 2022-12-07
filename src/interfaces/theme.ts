import type { ComponentsProps } from '@mui/material/styles/props';
import type { ComponentsOverrides } from '@mui/material/styles/overrides';
import type { ComponentsVariants } from '@mui/material/styles/variants';
import type { Theme } from '@mui/material';
import { ShapeOptions } from '@mui/system/createTheme/shape';

export interface IButtonStyle {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
}

export interface IListItemIconStyle {
  defaultProps?: ComponentsProps['MuiListItemIcon'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiListItemIcon'];
}

export interface IListStyle {
  defaultProps?: ComponentsProps['MuiList'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiList'];
  // variants?: ComponentsVariants['MuiListItemIcon'];
}

export interface IMenuItemStyle {
  defaultProps?: ComponentsProps['MuiMenuItem'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
  // variants?: ComponentsVariants['MuiButton'];
}

export interface IPaperStyle {
  defaultProps?: ComponentsProps['MuiPaper'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiPaper'];
}

export interface IAvatar {
  defaultProps?: ComponentsProps['MuiAvatar'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAvatar'];
}

export interface ITypographyStyle {
  defaultProps?: ComponentsProps['MuiTypography'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
  // variants?: ComponentsVariants['MuiButton'];
}

export interface IShape extends ShapeOptions {
  navigation: {
    width: string;
  };
  topBar: {
    height: string;
  };
  border: {
    width: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
    };
    radius: {
      '05': string;
      '1': string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      base: string;
      large: string;
      half: string;
    };
  };
}

export interface ISpace {
  '0': string;
  '025': string;
  '05': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '8': string;
  '10': string;
  '12': string;
  '16': string;
  '20': string;
  '24': string;
  '28': string;
  '32': string;
}

export interface ILineHeight {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '7': string;
  '8': string;
}

export interface IFontSize {
  '75': string;
  '94': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '650': string;
  '700': string;
}

export interface IFontWeight {
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface IFont {
  size: {
    '75': string;
    '94': string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '650': string;
    '700': string;
  };
  lineHeight: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
  };
  weight: {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  family: {
    'font-family-sans': string;
    'font-family-mono': string;
  };
}

export interface TransitionsOptions {
  duration: {
    '0': string;
    '50': string;
    '100': string;
    '150': string;
    '200': string;
    '250': string;
    '300': string;
    '350': string;
    '400': string;
    '450': string;
    '500': string;
    '5000': string;
  };
  easing: {
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    linear: string;
  };
}
