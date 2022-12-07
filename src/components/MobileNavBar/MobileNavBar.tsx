import React, { useCallback } from 'react';
import { Close } from '@mui/icons-material';
import {
  MobileNavBarCloseHolder,
  MobileNavBarRootStyled,
} from './MobileNavBar.styled';
import { useUiState } from '../../hooks';
import OfficeSwitcher from '../OfficeSwitcher/OfficeSwitcher';

const MobileNavBar = () => {
  const [, setUIState] = useUiState();

  const handleMobileNavigationClose = useCallback(() => {
    setUIState((state) => ({ ...state, mobileNavigationOpen: false }));
  }, [setUIState]);

  return (
    <MobileNavBarRootStyled>
      <OfficeSwitcher />
      <MobileNavBarCloseHolder onClick={handleMobileNavigationClose}>
        <Close />
      </MobileNavBarCloseHolder>
    </MobileNavBarRootStyled>
  );
};

export default MobileNavBar;
