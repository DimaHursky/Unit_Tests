import * as React from 'react';
import { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Search from './Search';
import ESAppBar from '../ESAppBar/ESAppBar';
import { Box } from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import EcosystemWrapper from '../../../tests/EcosystemWrapper';

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
  title: 'Components/Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
  const [isRendering, setIsRendering] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsRendering(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const options = {
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  };

  return (
    <EcosystemWrapper
      Header={() => (
        <ESAppBar
          officeSwitcher={<MockOfficeSwitcher />}
          notifications={<MockNotifications />}
          profileButton={<MockProfileButton />}
          searchField={<Search {...args} initial={isRendering} />}
        />
      )}
      localeOptions={options}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
