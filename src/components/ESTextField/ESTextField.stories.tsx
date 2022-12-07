import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESTextField from './ESTextField';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESTextField',
  component: ESTextField,
  argTypes: {},
} as ComponentMeta<typeof ESTextField>;

const Template: ComponentStory<typeof ESTextField> = (args) => {
  const [value, setValue] = useState<string>('Value');
  const handleChange = (newValue: string) => setValue(newValue);
  const handleClearButtonClick = () => setValue('');

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESTextField
        {...args}
        value={value}
        onChange={handleChange}
        onClearButtonClick={handleClearButtonClick}
      />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Store name',
  placeholder: 'Placeholder',
  helpText: 'Help Text',
  // startAdornment: 'df',
  // endAdornment: 'qw',
  // disabled: true,
  // readOnly: true,
  // autoFocus: true,
  // autoComplete: true,
  // multiline: true,
  // rows: 3,
  // maxRows: 5,
  // minRows: 2,
  // error: 'Error',
  // required: true,
  // labelAction: {content: 'Look up codes', url: '/action'},
  clearButton: true,
  // onFocus: () => console.log('On Focus'),
  // onBlur: () => console.log('On Blur'),
  // connectedRight: <div style={{color: 'red'}}>Right</div>,
  // connectedLeft: <div style={{color: 'blue'}}>Left</div>
  // id: 'Text Field',
  // name: 'QQQQQ',
  // showCharacterCount: true,
  // pattern: '[a-z]',
  // type: 'number',
  // min: 2,
  // max: 15,
  // step: 5,
  // maxLength: 10,
};
