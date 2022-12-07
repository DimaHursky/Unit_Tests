import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Breadcrumb from './Breadcrumb';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <Breadcrumb {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  url: '/products',
  // content: 'Products',
  onAction: () => console.log(23234324),
};
