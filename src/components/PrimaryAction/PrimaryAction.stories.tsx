import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrimaryAction from './PrimaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/Page/PrimaryAction',
  component: PrimaryAction,
  argTypes: {},
} as ComponentMeta<typeof PrimaryAction>;

const Template: ComponentStory<typeof PrimaryAction> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <PrimaryAction {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  content: 'Save',
  onAction: () => console.log('Primary action'),
};
