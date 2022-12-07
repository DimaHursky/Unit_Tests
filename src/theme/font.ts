import { IFont, IFontSize, IFontWeight, ILineHeight } from '../interfaces';

const lineHeights: ILineHeight = {
  '1': '1rem',
  '2': '1.25rem',
  '3': '1.5rem',
  '4': '1.75rem',
  '5': '2rem',
  '6': '2.5rem',
  '7': '2.75rem',
  '8': '3rem',
};

const fontSizes: IFontSize = {
  '75': '0.75rem',
  '94': '0.94rem',
  '100': '0.875rem',
  '200': '1rem',
  '300': '1.25rem',
  '400': '1.5rem',
  '500': '1.75rem',
  '600': '2rem',
  '650': '2.25rem',
  '700': '2.5rem',
};

const fontWeights: IFontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const fontFamilies = {
  'font-family-sans':
    "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  'font-family-mono':
    "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
};

const font: IFont = {
  lineHeight: lineHeights,
  size: fontSizes,
  weight: fontWeights,
  family: fontFamilies,
};

export default font;
