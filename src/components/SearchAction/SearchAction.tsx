import React from 'react';
import { useThemeProps } from '@mui/material';
import { ISearchActionProps } from './SearchAction.types';

import ActionHeaderStyled, {
  ActionBodyStyled,
  SearchActionStyled,
} from './SearchAction.styled';
import { SearchDropdown } from '../SearchDropdown';

const SearchAction = (inProps: ISearchActionProps) => {
  const props = useThemeProps({ props: inProps, name: 'SearchAction' });

  const { searchBtn, anchorEl, searchField, onClose, children } = props;

  return (
    <>
      {searchBtn}
      <SearchDropdown
        anchorEl={anchorEl}
        onClose={onClose}
        open={Boolean(anchorEl)}
      >
        <SearchActionStyled data-testid="search-action">
          <ActionHeaderStyled data-testid="action-header">
            {searchField}
          </ActionHeaderStyled>
          <ActionBodyStyled data-testid="action-body">
            {children}
          </ActionBodyStyled>
        </SearchActionStyled>
      </SearchDropdown>
    </>
  );
};

export default SearchAction;
