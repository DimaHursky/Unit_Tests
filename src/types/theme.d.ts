import { IFont, IShape, ISpace } from '../interfaces';

declare module '@mui/material/styles' {
  interface Theme {
    shape: IShape;
    space: ISpace;
    font: IFont;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    shape?: IShape;
    space?: ISpace;
    font?: IFont;
  }

  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    700?: string;
    600?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    text: string;
    textHovered: string;
    textPressed: string;
  }

  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    700?: string;
    600?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    text?: string;
    textHovered?: string;
    textPressed?: string;
  }

  interface Easing {
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    linear: string;
  }

  interface Duration {
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
  }
}

declare module '@mui/material/styles/createPalette' {
  interface IconColor {
    default: string;
    onDark: string;
    hovered: string;
    pressed: string;
    disabled: string;
    subdued: string;
  }

  interface SurfaceColor {
    default: string;
    dark: string;
    neutral: string;
    neutralHovered: string;
    neutralPressed: string;
    neutralDisabled: string;
    neutralSubdued: string;
    neutralSubduedDark: string;
    subdued: string;
    disabled: string;
    hovered: string;
    hoveredDark: string;
    pressed: string;
    pressedDark: string;
    depressed: string;
    searchField: string;
    searchFieldDark: string;
    selected: string;
    selectedPressed: string;
  }

  interface Palette {
    icon: IconColor;
    surface: SurfaceColor;
    critical: CriticalColor;
    avatar: AvatarColor;
    border: BorderColor;
    interactive: InteractiveColor;
  }

  interface CriticalColor {
    borderDefault: string;
    borderSubdued: string;
    borderDisabled: string;
    icon: string;
    surfaceDefault: string;
    surfaceSubdued: string;
    surfaceSubduedHovered: string;
    surfaceSubduedPressed: string;
    surfaceSubduedDepressed: string;
    text: string;
    action: string;
    actionDisabled: string;
    actionHovered: string;
    actionPressed: string;
    actionDepressed: string;
    interactive: string;
    interactiveDisabled: string;
    interactiveHovered: string;
    interactivePressed: string;
  }

  interface AvatarColor {
    oneSurface: string;
    oneText: string;
    twoSurface: string;
    twoText: string;
    threeSurface: string;
    threeText: string;
    fourSurface: string;
    fourText: string;
    fiveSurface: string;
    fiveText: string;
  }

  interface PaletteOptions {
    icon: Partial<IconColor>;
    surface: Partial<SurfaceColor>;
    critical: Partial<CriticalColor>;
    avatar: Partial<AvatarColor>;
    border: Partial<BorderColor>;
    interactive: Partial<InteractiveColor>;
  }

  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    primaryOnDark: string;
    subdued: string;
    subduedOnDark: string;
  }

  interface TypeBackground {
    primary: string;
    secondary: string;
    hovered: string;
    pressed: string;
    selected: string;
    backdrop: string;
    overlay: string;
  }

  interface BorderColor {
    neutralSubdued: string;
    disabled: string;
  }

  interface InteractiveColor {
    hovered: string;
    pressed: string;
  }
}
