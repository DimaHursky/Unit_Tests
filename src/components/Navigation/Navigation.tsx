import React, { useMemo } from 'react';
import { useMenu, useRouterContext } from '@pankod/refine-core';
import { Settings } from '@mui/icons-material';

import { ITreeMenu } from '@pankod/refine-core/dist/interfaces';
import {
  NavigationListItemButtonIconStyled,
  NavigationListItemButtonStyled,
  NavigationListItemButtonTextStyled,
  NavigationListItemStyled,
  NavigationListStyled,
  NavigationRootStyled,
  NavigationSettingsHolderStyled,
} from './Navigation.styled';
import MobileNavBar from '../MobileNavBar/MobileNavBar';

const renderMenuTree = (
  menuItems: ITreeMenu[],
  selectedKey: string,
  LinkComponent: React.ElementType,
  isNested = false,
  visible = true,
) => (
  <NavigationListStyled
    component="ul"
    nested={isNested.toString()}
    visible={visible.toString() || undefined}
  >
    {menuItems.map((menuItem) => {
      const hasSelectedChild = menuItem.children?.some(
        ({ key }) => key === selectedKey,
      );

      const childrenVisible = hasSelectedChild || menuItem.key === selectedKey;

      return (
        <NavigationListItemStyled key={menuItem.key}>
          <NavigationListItemButtonStyled
            key={menuItem.key}
            component={LinkComponent}
            to={menuItem.route}
            selected={selectedKey === menuItem.key}
            nested={isNested.toString()}
          >
            {menuItem.icon && (
              <NavigationListItemButtonIconStyled selected={hasSelectedChild}>
                {menuItem.icon}
              </NavigationListItemButtonIconStyled>
            )}
            <NavigationListItemButtonTextStyled component="span">
              {menuItem.label || menuItem.name}
            </NavigationListItemButtonTextStyled>
          </NavigationListItemButtonStyled>
          {menuItem.children?.length > 0 &&
            renderMenuTree(
              menuItem.children,
              selectedKey,
              LinkComponent,
              true,
              childrenVisible,
            )}
        </NavigationListItemStyled>
      );
    })}
  </NavigationListStyled>
);

const renderSettings = (
  LinkComponent: React.ElementType,
  selectedKey: string,
) => (
  <NavigationSettingsHolderStyled>
    <NavigationListStyled component="ul" visible="true">
      <NavigationListItemStyled key="settings">
        <NavigationListItemButtonStyled
          key="settings"
          component={LinkComponent}
          to="/settings"
          selected={selectedKey === '/settings'}
        >
          <NavigationListItemButtonIconStyled>
            <Settings />
          </NavigationListItemButtonIconStyled>
          <NavigationListItemButtonTextStyled component="span">
            Settings
          </NavigationListItemButtonTextStyled>
        </NavigationListItemButtonStyled>
      </NavigationListItemStyled>
    </NavigationListStyled>
  </NavigationSettingsHolderStyled>
);

const Navigation = () => {
  const { menuItems, selectedKey } = useMenu();
  const { Link, routes } = useRouterContext();

  const menuTree = useMemo(
    () => renderMenuTree(menuItems, selectedKey, Link),
    [Link, menuItems, selectedKey],
  );

  const settings = useMemo(
    () =>
      routes.some((route: { path: string }) => route?.path === '/settings') &&
      renderSettings(Link, selectedKey),
    [Link, routes, selectedKey],
  );

  return (
    <NavigationRootStyled component="nav">
      <MobileNavBar />
      {menuTree}
      {settings}
    </NavigationRootStyled>
  );
};

export default Navigation;
