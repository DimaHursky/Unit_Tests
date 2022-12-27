import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ESDatePicker from './ESDatePicker';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';

export default {
  title: 'Components/ESDatePicker',
  component: ESDatePicker,
  argTypes: {},
} as ComponentMeta<typeof ESDatePicker>;

const Template: ComponentStory<typeof ESDatePicker> = (args) => {
  const [{ month, year }, setDate] = useState({ month: 10, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(2022, 10, 10),
    end: new Date(2022, 10, 10),
  });
  const handleMonthChange = (month: number, year: number) =>
    setDate({ month, year });

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESDatePicker
        {...args}
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
        onChange={setSelectedDates}
        selected={selectedDates}
      />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  weekStartsOn: 1,
  disableDatesBefore: new Date(2022, 10, 2),
  disableDatesAfter: new Date(2022, 10, 26),
};

export const Ranged = Template.bind({});
Ranged.args = {
  weekStartsOn: 1,
  disableSpecificDates: [
    new Date(2022, 10, 3),
    new Date(2022, 10, 4),
    new Date(2022, 10, 5),
  ],
  allowRange: true,
};

export const MultiMonth = Template.bind({});
MultiMonth.args = {
  weekStartsOn: 1,
  multiMonth: true,
  allowRange: true,
};
