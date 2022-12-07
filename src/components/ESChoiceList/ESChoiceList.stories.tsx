import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESChoiceList from './ESChoiceList';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESChoiceList',
  component: ESChoiceList,
  argTypes: {},
} as ComponentMeta<typeof ESChoiceList>;

const Template: ComponentStory<typeof ESChoiceList> = (args) => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (value: string[]) => setSelected(value);

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESChoiceList {...args} onChange={handleChange} selected={selected} />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  choices: [
    {
      label: 'Hidden',
      value: 'hidden',
      disabled: true,
      helpText: 'help text',
    },
    {
      label: 'Label',
      value: 'label',
      helpText: 'help text',
    },
    {
      label: 'Label1',
      value: 'label1',
    },
  ],
  // allowMultiple: true,
  // disabled: true,
  // error: 'Error'
};
