import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESAppBar from './ESAppBar';
import { Box } from '@mui/material';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AppsIcon from '@mui/icons-material/Apps';

const styleCenter = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MockOfficeSwitcher = () => (
  <Box style={{ background: '#b6b6f9', width: '100%', ...styleCenter }}>
    Office Switcher
  </Box>
);

const MockSearchField = () => (
  <Box style={{ background: '#b2eaed', width: '100%', ...styleCenter }}>
    Search Field
  </Box>
);

const MockNotifications = () => (
  <Box
    style={{
      background: '#e3e5e5',
      padding: '1rem',
      width: 'auto',
      ...styleCenter,
    }}
  >
    <NotificationAddIcon />
  </Box>
);

const MockApps = () => (
  <Box
    style={{
      background: '#e9cd39',
      padding: '1rem',
      width: 'auto',
      ...styleCenter,
    }}
  >
    <AppsIcon />
  </Box>
);

const MockProfileButton = () => (
  <Box
    style={{
      background: '#5bb15e',
      padding: '0 2rem',
      width: 'auto',
      ...styleCenter,
    }}
  >
    Profile
  </Box>
);

export default {
  title: 'Components/ESAppBar',
  component: ESAppBar,
  argTypes: {},
} as ComponentMeta<typeof ESAppBar>;

const Template: ComponentStory<typeof ESAppBar> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESAppBar {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  showNavigationToggle: true,
  officeSwitcher: <MockOfficeSwitcher />,
  searchField: <MockSearchField />,
  notifications: <MockNotifications />,
  apps: <MockApps />,
  profileButton: <MockProfileButton />,
  onNavigationToggle: () => console.log('navigation toggle'),
};
