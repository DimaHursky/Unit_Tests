import * as React from 'react';
import { useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ESSelect from './ESSelect';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { ISelectGroup } from './ESSelect.types';
import SortIcon from '@mui/icons-material/Sort';

export default {
  title: 'Components/ESSelect',
  component: ESSelect,
  argTypes: {},
} as ComponentMeta<typeof ESSelect>;

// const options: IStrictOption[] = [
//   {
//     label: 'Newest update',
//     value: 'newestUpdatedf',
//   },
//   {
//     label: 'Oldest update',
//     value: 'oldestUpdate',
//     prefix: 'ssd sfsdf',
//   },
//   {
//     label: 'Most spent',
//     value: 'mostSpent',
//     prefix: <SortIcon fontSize="small" />,
//   },
//   {
//     label: 'Most orders',
//     value: 'mostOrders',
//     prefix: <SortIcon fontSize="small" />,
//   },
//   {
//     label: 'Last name A–Z',
//     value: 'lastNameAlpha',
//     prefix: <SortIcon fontSize="small" />,
//   },
//   {
//     label: 'Last name Z–A',
//     value: 'lastNameReverseAlphad',
//     prefix: <SortIcon fontSize="small" />,
//   },
// ];

const selectGroup: ISelectGroup[] = [
  {
    title: 'Titleee',
    options: [
      { label: 'Newest update', value: 'newestUpdategf', prefix: 'sss' },
      { label: 'Oldest update', value: 'mostSpgentsdfs', disabled: true },
      {
        label: 'Most spent',
        value: 'mostShpent',
        prefix: <SortIcon />,
      },
      { label: 'Most orders', value: 'mostOrdlers', prefix: 'aaa' },
      { label: 'Last name A–Z', value: 'lasjtNameAlpha', prefix: 'ttt' },
      { label: 'Last name Z–A', value: 'lastNavmeReverseAlpha', prefix: 'hhh' },
    ],
  },
  {
    title: 'Titleee1111',
    options: [
      { label: 'Newest update', value: 'newestUpdate', prefix: 'sss' },
      { label: 'Oldest update', value: 'oldestUpdate', disabled: true },
      { label: 'Most spent', value: 'mostSpent', prefix: 'qqq' },
      { label: 'Most orders', value: 'mostOrders', prefix: 'aaa' },
      {
        label: 'Last name A–Z ',
        value: 'lastNameAlpha',
        prefix: 'ttt',
      },
      { label: 'Last name Z–A', value: 'lastNameReverseAlpha', prefix: 'hhh' },
    ],
  },
];

const Template: ComponentStory<typeof ESSelect> = (args) => {
  const [age, setAge] = React.useState('');

  const handleChange = useCallback((e: SelectChangeEvent<any>) => {
    setAge(e.target.value);
  }, []);

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <div
        style={{
          padding: '40px',
          width: '500px',
        }}
      >
        <FormControl fullWidth>
          <ESSelect {...args} onChange={handleChange} value={age} />
        </FormControl>
      </div>
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: selectGroup,
  label: 'Select label',
  // placeholder: 'Select placeholder',
  labelAction: { content: 'Look up codes', url: '/action' },
  // error: 'Error',
  helpText: 'help text',
  // disabled: true,
  // labelHidden: true,
  // labelInline: true,
};
