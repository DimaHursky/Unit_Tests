import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESTextFieldErrorLabel from './ESTextFieldErrorLabel';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/ESTextFieldErrorLabel',
  component: ESTextFieldErrorLabel,
  argTypes: {},
} as ComponentMeta<typeof ESTextFieldErrorLabel>;

const Template: ComponentStory<typeof ESTextFieldErrorLabel> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESTextFieldErrorLabel {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  error: 'Error text',
};
