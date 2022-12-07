import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RollupAction from './RollupAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/RollupAction',
  component: RollupAction,
  argTypes: {},
} as ComponentMeta<typeof RollupAction>;

const Template: ComponentStory<typeof RollupAction> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <RollupAction {...args} />
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
      content: 'View on your store',
      onAction: () => console.log('View on your store action'),
    },
    {
      content: 'Duplicate 2',
      onAction: () => console.log('Duplicate action'),
    },
    {
      content: 'View on your store 3',
      onAction: () => console.log('View on your store action'),
    },
    {
      content: 'View on your store 4',
      onAction: () => console.log('View on your store action'),
    },
  ],
  sections: [
    {
      title: 'Promote',
      items: [
        {
          content: 'Share on Facebook',
          onAction: () => console.log('Share on Facebook action'),
        },
      ],
    },
    {
      title: 'Promote1',
      items: [
        {
          content: 'Share on Faceboo1k',
          onAction: () => console.log('Share on Faceb1ook action'),
        },
      ],
    },
  ],
};
