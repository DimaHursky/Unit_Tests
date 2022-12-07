import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageTitle from './PageTitle';
import { Chip } from '@mui/material';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/PageTitle',
  component: PageTitle,
  argTypes: {},
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <PageTitle {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  titleMetadata: <Chip label="Title metadata" color="primary" size={'small'} />,
  subtitle: 'Subtitle',
};
