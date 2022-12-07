import React, { ForwardedRef } from 'react';
import { Fade, useThemeProps } from '@mui/material';
import { SearchDropdownProps } from './SearchDropdown.types';
import SearchDropdownStyled from './SearchDropdown.styled';

const SearchDropdown = React.forwardRef(
  (inProps: SearchDropdownProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'SearchDropdown' });

    const { children, anchorEl } = props;

    const ownerState = {
      ...props,
      open: Boolean(anchorEl),
    };
    return (
      <SearchDropdownStyled
        TransitionComponent={Fade}
        {...ownerState}
        ref={ref}
        data-testid="search-dropdown"
      >
        {children}
      </SearchDropdownStyled>
    );
  },
);

export default SearchDropdown;
