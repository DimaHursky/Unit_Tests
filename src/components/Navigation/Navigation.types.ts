import { BoxProps } from '@mui/material/Box/Box';
import { ListItemButtonProps } from '@mui/material/ListItemButton/ListItemButton';

export { RefineLayoutSiderProps as NavigationProps } from '@pankod/refine-ui-types';

export type NavigationListItemButtonProps = ListItemButtonProps & {
  component: React.ElementType;
  to?: string;
  nested?: string;
};

export type NavigationListItemProps = BoxProps & {
  component: React.ElementType;
  nested?: string;
  visible?: string;
};

export type NavigationListItemButtonIconProps = BoxProps & {
  selected?: boolean;
};
