import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { SearchButtonProps } from './SearchButton.types';
import SearchButtonStyled, {
  SearchIconBlockStyled,
} from './SearchButton.styled';
import { SearchMinorIcon } from '../../icons';

const SearchButton = React.forwardRef(
  (inProps: SearchButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const props = useThemeProps({ props: inProps, name: 'SearchButton' });

    const { children, onClick } = props;
    return (
      <SearchButtonStyled onClick={onClick} ref={ref} data-testid="search-btn">
        <SearchIconBlockStyled>
          <SearchMinorIcon data-testid="search-icon" />
        </SearchIconBlockStyled>
        {children}
      </SearchButtonStyled>
    );
  },
);

export default SearchButton;
