import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESAvatar from './ESAvatar';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/ESAvatar',
  component: ESAvatar,
  argTypes: {},
} as ComponentMeta<typeof ESAvatar>;

const Template: ComponentStory<typeof ESAvatar> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESAvatar {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  initials: 'Td',
  size: 'small',
};
