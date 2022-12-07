import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SecondaryAction from './SecondaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/SecondaryAction',
  component: SecondaryAction,
  argTypes: {},
} as ComponentMeta<typeof SecondaryAction>;

const Template: ComponentStory<typeof SecondaryAction> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <SecondaryAction {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Secondary Action',
  onAction: () => console.log('Secondary Action'),
};
