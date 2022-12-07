import React, { useCallback } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { ESAppBarProps } from './ESAppBar.types';
import ESAppBarStyled, {
  AppBarContentsStyled,
  OfficeSwitcherWrapperStyled,
  SearchFieldStyled,
  ToggleMenuStyled,
} from './ESAppBar.styled';
import useUiState from '../../hooks/useUiState/useUiState';

const ESAppBar = ({
  officeSwitcher,
  searchField,
  notifications,
  profileButton,
}: ESAppBarProps) => {
  const [, setUIState] = useUiState();

  const handleMobileNavigationOpen = useCallback(() => {
    setUIState((state) => ({ ...state, mobileNavigationOpen: true }));
  }, [setUIState]);

  return (
    <ESAppBarStyled data-testid="appbar">
      <ToggleMenuStyled onClick={handleMobileNavigationOpen}>
        <MenuIcon />
      </ToggleMenuStyled>
      {officeSwitcher && (
        <OfficeSwitcherWrapperStyled>
          {officeSwitcher}
        </OfficeSwitcherWrapperStyled>
      )}
      <AppBarContentsStyled>
        {searchField && <SearchFieldStyled>{searchField}</SearchFieldStyled>}
        {notifications}
        {profileButton}
      </AppBarContentsStyled>
    </ESAppBarStyled>
  );
};

export default ESAppBar;
