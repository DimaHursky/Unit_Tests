import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Actions from './Actions';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/Actions',
  component: Actions,
  argTypes: {},
} as ComponentMeta<typeof Actions>;

const Template: ComponentStory<typeof Actions> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <Actions {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
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
