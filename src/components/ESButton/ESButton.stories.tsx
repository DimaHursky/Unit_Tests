import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESButton from './ESButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Button',
  component: ESButton,
  argTypes: {},
} as ComponentMeta<typeof ESButton>;

const Template: ComponentStory<typeof ESButton> = ({ children, ...rest }) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESButton {...rest}>{children}</ESButton>
  </EcosystemThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Button',
};

export const Plain = Template.bind({});
Plain.args = {
  variant: 'text',
  children: 'Button',
};

export const PlainError = Template.bind({});
PlainError.args = {
  color: 'error',
  variant: 'text',
  children: 'Button',
};
