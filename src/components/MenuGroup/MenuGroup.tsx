import React, { ForwardedRef, useCallback } from 'react';
import { useThemeProps } from '@mui/material';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { MenuGroupProps } from './MenuGroup.types';
import MenuGroupStyled from './MenuGroup.styled';
import { DropdownMenu } from '../DropdownMenu';
import { SecondaryAction } from '../SecondaryAction';

const MenuGroup = React.forwardRef(
  (inProps: MenuGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESMenuGroup' });
    const { title, actions = [], sections = [], getOffsetWidth } = props;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
      null,
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleOffsetWidth = useCallback(
      (width: number) => {
        if (!getOffsetWidth) return;
        getOffsetWidth(width);
      },
      [getOffsetWidth],
    );

    return (
      <MenuGroupStyled ref={ref} data-testid="menu-group">
        <SecondaryAction
          getOffsetWidth={handleOffsetWidth}
          onAction={handleClick}
        >
          {title} <ArrowDropDownRoundedIcon />
        </SecondaryAction>
        <DropdownMenu
          anchorEl={anchorEl}
          open={false}
          sections={[{ items: actions }, ...sections]}
          onClose={handleClose}
        />
      </MenuGroupStyled>
    );
  },
);

export default MenuGroup;
