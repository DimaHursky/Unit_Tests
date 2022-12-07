import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './Layout';
import { Box } from '@mui/material';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const styleCenter = {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MockSider = () => (
  <Box style={{ background: '#b6b6f9', ...styleCenter }}>Mock Sider</Box>
);
const MockHeader = () => (
  <Box style={{ background: 'rgb(225 175 113)', ...styleCenter }}>
    Mock Header
  </Box>
);
const MockContent = () => <Box style={{ ...styleCenter }}>Mock Content</Box>;

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <Layout {...args}>
      <MockContent />
    </Layout>
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  Sider: MockSider,
  Header: MockHeader,
};
