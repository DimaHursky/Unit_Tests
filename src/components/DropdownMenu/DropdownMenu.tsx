import React, { ForwardedRef } from 'react';
import { Fade, useThemeProps } from '@mui/material';
import { DropdownMenuProps } from './DropdownMenu.types';
import DropdownMenuStyled from './DropdownMenu.styled';
import { ActionList } from '../ActionList';

const DropdownMenu = React.forwardRef(
  (inProps: DropdownMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESDropdownMenu' });

    const {
      sections,
      anchorEl = null,
      onClose,
      anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
      },
      ...rest
    } = props;

    return (
      <DropdownMenuStyled
        ref={ref}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        TransitionComponent={Fade}
        data-testid="dropdown"
        {...rest}
        open={Boolean(anchorEl)}
      >
        <ActionList sections={sections} />
      </DropdownMenuStyled>
    );
  },
);

export default DropdownMenu;
