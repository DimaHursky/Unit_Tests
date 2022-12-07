import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormLayoutGroup from './FormLayoutGroup';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

export default {
  title: 'Components/FormLayoutGroup',
  component: FormLayoutGroup,
  argTypes: {},
} as ComponentMeta<typeof FormLayoutGroup>;

const Template: ComponentStory<typeof FormLayoutGroup> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <FormLayoutGroup {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div>w34234234</div>,
  title: 'Title',
  helpText: 'Help Text',
  // condensed: true,
};
