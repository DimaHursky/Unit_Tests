import React, { ForwardedRef, useMemo } from 'react';
import { InputAdornment, useThemeProps } from '@mui/material';
import { SearchFieldProps } from './SearchField.types';
import SearchFieldStyled from './SearchField.styled';
import { CircleCancelMinorIcon, SearchMinorIcon } from '../../icons';

const SearchField = React.forwardRef(
  (inProps: SearchFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const props = useThemeProps({ props: inProps, name: 'SearchField' });

    const {
      placeholder = 'Search',
      value,
      onCancel,
      autoComplete = 'off',
      autoFocus = true,
      fullWidth = true,
      ...rest
    } = props;

    const cleanIcon = useMemo(
      () => ({
        endAdornment: (
          <InputAdornment
            position="end"
            tabIndex={0}
            onClick={onCancel}
            onKeyDown={(e) => {
              if (e.code === 'Enter' && !e.repeat) {
                onCancel();
              }
            }}
            data-testid="search-clean"
          >
            <CircleCancelMinorIcon />
          </InputAdornment>
        ),
      }),
      [onCancel],
    );

    return (
      <SearchFieldStyled
        ref={ref}
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        value={value}
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchMinorIcon />
            </InputAdornment>
          ),
          ...(value !== '' && cleanIcon),
        }}
        autoComplete={autoComplete}
        {...rest}
      />
    );
  },
);

export default SearchField;
