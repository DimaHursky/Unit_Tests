import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from './Page';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { Chip } from '@mui/material';

export default {
  title: 'Components/Page',
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <Page {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // breadcrumbs: [{content: 'Products', url: '/products'}, {content: 'Products1', url: '/products1'}],
  breadcrumbs: [{ content: 'Products', onAction: () => console.log(23234324) }],
  title: 'Title',
  titleMetadata: <Chip label="Title metadata" color="primary" size={'small'} />,
  subtitle: 'Subtitle',
  additionalMetadata: 'Additional Metadata',
  divider: true,
  primaryAction: { content: 'Save', onAction: () => console.log(3234234) },
  children: <div>234234234234</div>,
  secondaryActions: [
    {
      content: 'Duplicate',
      onAction: () => console.log('Duplicate action'),
      disabled: true,
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
  actionGroups: [
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
