import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESTextFieldLabel from './ESTextFieldLabel';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/ESTextFieldLabel',
  component: ESTextFieldLabel,
  argTypes: {},
} as ComponentMeta<typeof ESTextFieldLabel>;

const Template: ComponentStory<typeof ESTextFieldLabel> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESTextFieldLabel {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
};
