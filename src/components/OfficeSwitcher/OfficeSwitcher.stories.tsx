import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import OfficeSwitcher from './OfficeSwitcher';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/OfficeSwitcher',
  component: OfficeSwitcher,
  argTypes: {},
} as ComponentMeta<typeof OfficeSwitcher>;

const OfficeSwitcherComponent = () => {
  return <OfficeSwitcher />;
};

const Template: ComponentStory<typeof OfficeSwitcher> = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <div style={{ width: '200px' }}>
      <OfficeSwitcherComponent />
    </div>
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
