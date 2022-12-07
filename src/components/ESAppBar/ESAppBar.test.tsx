import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESAppBar from './ESAppBar';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Box } from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AppsIcon from '@mui/icons-material/Apps';

describe('Running Test for ESAppBar', () => {
  test('Component ESAppBar is rendered', () => {
    const MockOfficeSwitcher = () => <Box>Office Switcher</Box>;

    const MockSearchField = () => <Box>Search Field</Box>;

    const MockNotifications = () => (
      <Box>
        <NotificationAddIcon />
      </Box>
    );

    const MockApps = () => (
      <Box>
        <AppsIcon />
      </Box>
    );

    const MockProfileButton = () => <Box>Profile</Box>;

    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESAppBar
          officeSwitcher={<MockOfficeSwitcher />}
          showNavigationToggle
          searchField={<MockSearchField />}
          notifications={<MockNotifications />}
          apps={<MockApps />}
          profileButton={<MockProfileButton />}
        />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('appbar')).toBeInTheDocument();
  });
});
