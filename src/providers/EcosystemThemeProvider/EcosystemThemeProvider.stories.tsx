import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EcosystemThemeProvider from './EcosystemThemeProvider';
import { DarkTheme, LightTheme } from '../../theme';
import { ESButton } from '../../components/ESButton';

export default {
  title: 'Providers/EcosystemThemeProvider',
  component: EcosystemThemeProvider,
  argTypes: {},
} as ComponentMeta<typeof EcosystemThemeProvider>;

const Template: ComponentStory<typeof EcosystemThemeProvider> = (props) => (
  <EcosystemThemeProvider {...props}>
    <ESButton variant="contained">Some text</ESButton>
  </EcosystemThemeProvider>
);

export const Light = Template.bind({});
Light.args = {
  theme: LightTheme,
};

export const Dark = Template.bind({});
Dark.args = {
  theme: DarkTheme,
};
