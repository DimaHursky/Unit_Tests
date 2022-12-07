import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResourceItem from './ResourceItem';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESAvatar } from '../ESAvatar';
import { Typography } from '@mui/material';

export default {
  title: 'Components/ResourceItem',
  component: ResourceItem,
  argTypes: {},
} as ComponentMeta<typeof ResourceItem>;

const Template: ComponentStory<typeof ResourceItem> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ResourceItem {...args}>
      <Typography variant={'subtitle2'} sx={{ fontWeight: 700 }}>
        {'Yi So-Yeon'}
      </Typography>
      <Typography variant={'subtitle2'}>{'Gwangju, South Korea'}</Typography>
    </ResourceItem>
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  id: '145',
  // url: 'customers/145',
  onClick: () => console.log('234234234234'),
  media: <ESAvatar name={'Yi So-Yeon'} size={'medium'} />,
  // external: true,
  shortcutActions: [
    {
      content: 'View latest order',
      onAction: () => console.log('RRRRR'),
    },
  ],
  persistActions: true,
  selectable: true,
};
