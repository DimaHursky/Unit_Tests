import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESDatePicker from './ESDatePicker';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { useState } from 'react';
const DatePickerComponent = () => {
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
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
        onChange={setSelectedDates}
        selected={selectedDates}
      />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for ESDatePicker', () => {
  test('Component ESDatePicker is rendered', () => {
    render(<DatePickerComponent />);
    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
  });
});
