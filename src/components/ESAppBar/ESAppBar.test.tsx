import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESAppBar from './ESAppBar';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Box } from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AppsIcon from '@mui/icons-material/Apps';

const path = {
  path: 'M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z',
};
// const path = ('M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z')ж

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

const ESAppBarr = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESAppBar
        officeSwitcher={<MockOfficeSwitcher />}
        showNavigationToggle
        searchField={<MockSearchField />}
        notifications={<MockNotifications />}
        apps={<MockApps />}
        profileButton={<MockProfileButton />}
      />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for ESAppBar', () => {
  test('Component ESAppBar is rendered', () => {
    render(<ESAppBarr />);

    expect(screen.getByTestId('appbar')).toBeInTheDocument();
  });

  it('Component ESAppBar is rendered', () => {
    render(<ESAppBarr />);

    expect(screen.getByText('Office Switcher')).toBeInTheDocument();
    expect(screen.getByText('Search Field')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('render the attributs', () => {
    render(<ESAppBarr />);

    expect(path).toHaveProperty(
      'M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm4-11c0 2.61 1.67 4.83 4 5.66V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.71.18 1.36.49 1.95.9C14.54 6.14 14 7.51 14 9zm10-1h-3V5h-2v3h-3v2h3v3h2v-3h3V8z',
    );
    screen.debug();
    screen.logTestingPlaygroundURL();
  });

  // it.only('the image is rendered', () => {
  //   render(<ESAppBarr />);
  //   const p = screen.getByTestId('MenuIcon')
  //   // const p = screen.getByText(/Profile/i)

  //   expect(p).toContain('svg aria-hidden')
  // });
});
