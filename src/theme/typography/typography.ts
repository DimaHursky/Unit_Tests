import { TypographyVariantsOptions } from '@mui/material';
import font from '../font';

const typography: TypographyVariantsOptions = {
  fontFamily: font.family['font-family-sans'],
  fontSize: 14,
  htmlFontSize: 16,
  fontWeightRegular: font.weight.regular,
  fontWeightMedium: font.weight.medium,
  fontWeightBold: font.weight.bold,
  h1: {
    fontSize: font.size['700'],
    lineHeight: font.lineHeight[8],
    fontWeight: font.weight.bold,
  },
  h2: {
    fontSize: font.size['600'],
    lineHeight: font.lineHeight[6],
    fontWeight: font.weight.semibold,
  },
  h3: {
    fontSize: font.size['500'],
    lineHeight: font.lineHeight[5],
    fontWeight: font.weight.semibold,
  },
  h4: {
    fontSize: font.size['400'],
    lineHeight: font.lineHeight[4],
    fontWeight: font.weight.semibold,
  },
  h5: {
    fontSize: font.size['300'],
    lineHeight: font.lineHeight[3],
    fontWeight: font.weight.semibold,
  },
  h6: {
    fontSize: font.size['200'],
    lineHeight: font.lineHeight[3],
    fontWeight: font.weight.semibold,
  },
  subtitle1: {
    fontSize: font.size['200'],
    lineHeight: font.lineHeight[2],
    fontWeight: font.weight.regular,
  },
  subtitle2: {
    fontSize: font.size['100'],
    lineHeight: font.lineHeight[2],
    fontWeight: font.weight.regular,
  },
  body1: {
    fontSize: font.size['200'],
    lineHeight: font.lineHeight[2],
    fontWeight: font.weight.regular,
  },
  body2: {
    fontSize: font.size['100'],
    lineHeight: font.lineHeight[2],
    fontWeight: font.weight.regular,
  },
  caption: {
    fontSize: font.size['75'],
    lineHeight: font.lineHeight[1],
    fontWeight: font.weight.regular,
  },
  overline: {
    fontSize: font.size['75'],
    lineHeight: font.lineHeight[1],
    fontWeight: font.weight.regular,
    textTransform: 'uppercase',
  },
};

export default typography;
