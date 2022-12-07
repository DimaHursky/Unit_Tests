import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormLayout from './FormLayout';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import FormLayoutGroup from '../FormLayoutGroup/FormLayoutGroup';

export default {
  title: 'Components/FormLayout',
  component: FormLayout,
  argTypes: {},
} as ComponentMeta<typeof FormLayout>;

const Template: ComponentStory<typeof FormLayout> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <FormLayout {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Content</div>,
};

export const Grouped = Template.bind({});
Grouped.args = {
  children: (
    <FormLayoutGroup>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
    </FormLayoutGroup>
  ),
};

export const CondensedGroup = Template.bind({});
CondensedGroup.args = {
  children: (
    <FormLayoutGroup title={'Title'} condensed={true} helpText={'Help Text'}>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
      <div>Grouped Content</div>
    </FormLayoutGroup>
  ),
};
