import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuGroup from './MenuGroup';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/MenuGroup',
  component: MenuGroup,
  argTypes: {},
} as ComponentMeta<typeof MenuGroup>;

const Template: ComponentStory<typeof MenuGroup> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <MenuGroup {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Promote',
  actions: [
    {
      content: 'Share on Facebook',
      accessibilityLabel: 'Individual action label',
      onAction: () => console.log('Share on Facebook action'),
    },
  ],
};
