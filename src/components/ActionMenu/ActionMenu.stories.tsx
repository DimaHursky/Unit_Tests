import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActionMenu from './ActionMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/ActionMenu',
  component: ActionMenu,
  argTypes: {},
} as ComponentMeta<typeof ActionMenu>;

const Template: ComponentStory<typeof ActionMenu> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ActionMenu {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  rollupActive: true,
  actions: [
    {
      content: 'Duplicate',
      onAction: () => console.log('Duplicate action'),
    },
    {
      content: 'Duplicate2',
      onAction: () => console.log('Duplicate action2'),
    },
  ],
  groups: [
    {
      title: 'Promote',
      actions: [
        {
          content: 'Share on Facebook',
          accessibilityLabel: 'Individual action label',
          onAction: () => console.log('Share on Facebook action'),
        },
      ],
    },
    {
      title: 'Promote1',
      actions: [
        {
          content: 'Share on Faceboo1k',
          accessibilityLabel: 'Individual action 1label',
          onAction: () => console.log('Share on Faceb1ook action'),
        },
      ],
    },
  ],
};
