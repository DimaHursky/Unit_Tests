import { PaletteOptions } from '@mui/material/styles';
import green from '../colors/green/green';
import common from '../colors/common';
import red from '../colors/red/red';
import blue from '../colors/blue/blue';
import blueGrey from '../colors/grey/blueGrey';
import grey from '../colors/grey/grey';
import deepRed from '../colors/red/deepRed';
import brown from '../colors/brown';
import orange from '../colors/orange/orange';
import deepGreen from '../colors/green/deepGreen';
import deepOrange from '../colors/orange/deepOrange';
import lightGreen from '../colors/green/lightGreen';
import lightBlue from '../colors/blue/lightBlue';

const lightPalette: PaletteOptions = {
  mode: 'light',
  divider: blueGrey[50],
  common: {
    black: common.black,
    white: common.white,
  },
  icon: {
    default: grey[900],
    onDark: '#a6acb2', // @FIXME:COLOR
    hovered: '#1a1c1d', // @FIXME:COLOR
    pressed: '#44474a', // @FIXME:COLOR
    disabled: '#babec3', // @FIXME:COLOR
    subdued: '#8c9196', // @FIXME:COLOR
  },
  surface: {
    default: common.white,
    dark: '#202123', // @FIXME:COLOR
    neutral: '#e4e5e7', // @FIXME:COLOR
    neutralHovered: '#dbdddf', // @FIXME:COLOR
    neutralPressed: '#c9ccd0', // @FIXME:COLOR
    neutralDisabled: '#f1f2f3', // @FIXME:COLOR
    neutralSubdued: '#f6f6f7', // @FIXME:COLOR
    neutralSubduedDark: '#44474a', // @FIXME:COLOR
    subdued: '#fafbfb', // @FIXME:COLOR
    disabled: '#fafbfb', // @FIXME:COLOR
    hovered: '#f6f6f7', // @FIXME:COLOR
    hoveredDark: '#2f3133', // @FIXME:COLOR
    pressed: '#f1f2f3', // @FIXME:COLOR
    pressedDark: '#3e4043', // @FIXME:COLOR
    depressed: '#edeeef', // @FIXME:COLOR
    searchField: '#f1f2f3', // @FIXME:COLOR
    searchFieldDark: '#2f3133', // @FIXME:COLOR
    selected: lightBlue[50], // #f2f7fe
    selectedPressed: blue[50], // #e3f2fd
  },
  background: {
    default: grey[200], // #f6f6f7
    paper: '#ffffff', // @FIXME:COLOR
    hovered: grey[100], // #f1f2f3
    pressed: '#edeeef', // @FIXME:COLOR
    selected: '#edeeef', // @FIXME:COLOR
    backdrop: '#00000080', // @FIXME:COLOR
    overlay: '#ffffff80', // @FIXME:COLOR
  },
  critical: {
    borderDefault: '#fd5749', // @FIXME:COLOR
    borderSubdued: '#e0b3b2', // @FIXME:COLOR
    borderDisabled: '#ffa7a3', // @FIXME:COLOR
    icon: '#d72c0d', // @FIXME:COLOR
    surfaceDefault: '#fed3d1', // @FIXME:COLOR
    surfaceSubdued: '#fff4f4', // @FIXME:COLOR
    surfaceSubduedHovered: '#fff0f0', // @FIXME:COLOR
    surfaceSubduedPressed: '#ffe9e8', // @FIXME:COLOR
    surfaceSubduedDepressed: '#febcb9', // @FIXME:COLOR
    text: '#d72c0d', // @FIXME:COLOR
    action: '#d82c0d', // @FIXME:COLOR
    actionDisabled: '#f1f1f1', // @FIXME:COLOR
    actionHovered: '#bc2200', // @FIXME:COLOR
    actionPressed: '#a21b00', // @FIXME:COLOR
    actionDepressed: '#6c0f00', // @FIXME:COLOR
    interactive: '#d82c0d', // @FIXME:COLOR
    interactiveDisabled: '#fd938d', // @FIXME:COLOR
    interactiveHovered: '#cd290c', // @FIXME:COLOR
    interactivePressed: '#670f03', // @FIXME:COLOR
  },
  avatar: {
    oneSurface: orange[200], // ffc96b
    oneText: brown[900], // #3d2800
    twoSurface: deepOrange[100], // #ffc4b0
    twoText: deepRed.A200, // #490b1c
    threeSurface: lightGreen[200], // #92e6b5
    threeText: deepGreen.A100, // #002f19
    fourSurface: deepGreen[200], // #91e0d6
    fourText: deepGreen.A200, // #002d2d
    fiveSurface: deepOrange[50], // #fdc9d0
    fiveText: deepRed.A100, // #4f0e1f
  },
  border: {
    neutralSubdued: grey[500], // #babfc3
    disabled: grey[400], // #d2d5d8
  },
  interactive: {
    hovered: blue[900], // #1f5199
    pressed: blue.A100, // #103262
  },
  success: {
    main: '#67be23', // @FIXME:COLOR
    contrastText: '#fff', // @FIXME:COLOR
  },
  warning: {
    main: '#fa8c16', // @FIXME:COLOR
    contrastText: '#fff', // @FIXME:COLOR
  },
  text: {
    primary: grey.A200, // #202223
    secondary: '#9f9f9f', // @FIXME:COLOR
    disabled: grey[700], // #8c9196
    primaryOnDark: '#e3e5e7', // @FIXME:COLOR
    subdued: '#6d7175', // @FIXME:COLOR
    subduedOnDark: '#999fa4', // @FIXME:COLOR
  },

  /*
      --p-text-primary: #007b5c;
    --p-text-primary-hovered: #006c50;
    --p-text-primary-pressed: #005c44;
   */
  primary: {
    main: green[800], // '#008060'
    dark: green[900], // #006e52
    contrastText: common.white,
    light: green[500], // #309e7b
    // '50': green[50],
    // '100': green[100],
    // '200': green[200],
    // '300': green[300],
    // '400': green[400],
    // '600': green[600],
    // 'A100': green['A100'],
    A100: green.A100,
    text: '#007b5c',
    textHovered: '#006c50',
    textPressed: '#005c44',
  },
  secondary: {
    main: blue[800], // #2c6ecb
    dark: blue[900], // #1f5199
    contrastText: common.white,
    light: blue[500], // #458fff
    '50': lightBlue[50], // #f2f7fe
    '100': blue[100], // #103262
    // '200': blue[200],
    // '300': blue[300],
    // '400': blue[400],
    // '600': blue[600],
    // '700': blue[700],
    A100: blue.A100,
  },
  error: {
    main: red[800], // #d82c0d
    dark: red.A100, // #bc2200
    contrastText: common.white,
    light: red[500], // #ff401b
    '50': red[50],
    '100': deepRed[50],
    // '200': red[200],
    // '300': red[300],
    '400': red[400],
    // '600': red[600],
    // '700': red[700],
    '900': red[900],
    A200: red.A200,
    A400: red.A300,
  },
  info: {
    main: common.white, // #fff
    dark: grey[500], // #babfc3
    contrastText: grey.A200, // #202223
    light: grey[100], // #f1f2f3
    '50': grey[50],
    '100': blueGrey[100], // #edeeef
    '200': blueGrey[200], // #c9cccf
    '300': blueGrey[300], // #c5c5c5
    '400': grey[400], // #d2d5d8
    // '500': grey[500],
    '600': grey[600], // #aeb4b9
    // '700': grey[700],
    '800': grey[800], // #6d7175
    '900': grey[900], // #5c5f62
    // A200: grey.A200,
  },
};

export { lightPalette };
