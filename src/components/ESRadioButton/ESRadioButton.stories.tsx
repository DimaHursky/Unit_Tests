import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESRadioButton from './ESRadioButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESRadioButton',
  component: ESRadioButton,
  argTypes: {},
} as ComponentMeta<typeof ESRadioButton>;

const Template: ComponentStory<typeof ESRadioButton> = (args) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (state: boolean) => setChecked(state);
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESRadioButton {...args} onChange={handleChange} checked={checked} />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  value: 'label',
  helpText: 'Help text',
  // disabled: true,
  // name: 'Radio name',
};
