import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESRangeSlider from './ESRangeSlider';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESRangeSlider',
  component: ESRangeSlider,
  argTypes: {},
} as ComponentMeta<typeof ESRangeSlider>;

const Template: ComponentStory<typeof ESRangeSlider> = (args) => {
  const [value, setValue] = useState<number | [number, number]>(10);
  const handleChange = (newValue: number | [number, number]) =>
    setValue(newValue);
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <div style={{ width: '80%', margin: '50px auto' }}>
        <ESRangeSlider {...args} value={value} onChange={handleChange} />
      </div>
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  min: -10,
  max: 50,
  label: 'label',
  // error: 'Error',
  output: true,
  prefix: 'Pre',
  suffix: 'Suf',
  step: 5,
  // disabled: true,
};
