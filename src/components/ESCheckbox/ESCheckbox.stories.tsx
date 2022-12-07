import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESCheckbox from './ESCheckbox';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESCheckbox',
  component: ESCheckbox,
  argTypes: {},
} as ComponentMeta<typeof ESCheckbox>;

const Template: ComponentStory<typeof ESCheckbox> = (args) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (newChecked: boolean) => setChecked(newChecked);

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESCheckbox {...args} checked={checked} onChange={handleChange} />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  // disabled: true,
  // error: 'Error',
  // helpText: 'Help text',
};
