import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Person, Home } from '@mui/icons-material';

import Navigation from './Navigation';
import EcosystemWrapper from '../../../tests/EcosystemWrapper';
import { Box } from '@mui/material';
import { ESButton } from '../ESButton';
import { useUiState } from '../../hooks';

const MockContent = (text: string) => () => <div>{text}</div>;

const MockContentTacos = MockContent('Tacos');
const MockContentTacosBus = MockContent('TacosBus');
const MockContentTacosCar = MockContent('TacosCar');
const MockContentSettings = MockContent('MockContentSettings');

const MockContentHome = () => {
  const [, setUiState] = useUiState();

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '2rem' }}>
      <Box sx={{ flex: '1 1 auto' }}>Home</Box>
    </Box>
  );
};

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <EcosystemWrapper
    Sider={Navigation}
    customRoutes={[
      {
        element: <MockContentSettings />,
        path: '/settings',
        layout: true,
      },
    ]}
    resources={[
      {
        icon: <Home />,
        name: 'home',
        list: () => <MockContentHome />,
      },
      {
        icon: <Person />,
        name: 'users',
        list: () => <div>users list</div>,
      },
      {
        name: 'roles',
        parentName: 'users',
        list: () => <div>roles list</div>,
      },
      {
        name: 'tacos_list',
        list: MockContentTacos,
      },
      {
        name: 'car',
        list: MockContentTacosCar,
        parentName: 'tacos_list',
      },
      {
        name: 'bus',
        list: MockContentTacosBus,
        parentName: 'tacos_list',
      },
    ]}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
