import React, { useCallback, useEffect } from 'react';
import { Fade, useThemeProps } from '@mui/material';
import { LayoutProps } from './Layout.types';
import LayoutStyled, {
  LayoutAreaStyled,
  LayoutHeaderStyled,
  LayoutMainStyled,
  LayoutNavigationBackdropStyled,
  LayoutNavigationStyled,
} from './Layout.styled';
import { useUiState } from '../../hooks';
import useOffices from '../../hooks/useOffices/useOffices';

const Layout = (props: LayoutProps) => {
  const { offices, currentOffice, changeOffice } = useOffices();

  const { OffLayoutArea, Header, Sider, children } = useThemeProps({
    props,
    name: 'ESLayout',
  });

  useEffect(() => {
    if (!currentOffice && offices.length > 0) {
      changeOffice(offices[0].slug);
    }
  }, [offices, currentOffice, changeOffice]);

  const [{ mobileNavigationOpen }, setUIState] = useUiState();

  const handleMobileNavigationClose = useCallback(() => {
    setUIState((state) => ({ ...state, mobileNavigationOpen: false }));
  }, [setUIState]);

  return (
    <LayoutStyled>
      <LayoutAreaStyled>
        <Fade in={mobileNavigationOpen}>
          <LayoutNavigationBackdropStyled
            onClick={handleMobileNavigationClose}
          />
        </Fade>
        <LayoutHeaderStyled>{Header && <Header />}</LayoutHeaderStyled>
        <LayoutNavigationStyled isSidebarOpen={mobileNavigationOpen.toString()}>
          {Sider && <Sider />}
        </LayoutNavigationStyled>
        <LayoutMainStyled component="main">{children}</LayoutMainStyled>
      </LayoutAreaStyled>
      {OffLayoutArea && <OffLayoutArea />}
    </LayoutStyled>
  );
};

export default Layout;
