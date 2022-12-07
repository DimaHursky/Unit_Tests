import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESTextFieldHelpText from './ESTextFieldHelpText';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/ESTextFieldHelpText',
  component: ESTextFieldHelpText,
  argTypes: {},
} as ComponentMeta<typeof ESTextFieldHelpText>;

const Template: ComponentStory<typeof ESTextFieldHelpText> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESTextFieldHelpText {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Help Text',
};
