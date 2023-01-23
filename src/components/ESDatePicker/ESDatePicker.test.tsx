import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ESDatePicker from './ESDatePicker';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const props = {
  month: 10,
  year: 2022,
  onMonthChange: jest.fn(),
  onChange: jest.fn(),
  selected: {
    start: new Date(2022, 10, 10),
    end: new Date(2022, 10, 10),
  },
};

const datePickerComponent = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ESDatePicker {...props} />
  </EcosystemThemeProvider>
);

// const DatePickerComponent = () => {
//   const [{ month, year }, setDate] = useState({ month: 10, year: 2022 });
//   const [selectedDates, setSelectedDates] = useState({
//     start: new Date(2022, 10, 10),
//     end: new Date(2022, 10, 10),
//   });
//   // const onClick = jest.fn()
//   const handleMonthChange = (month: number, year: number) =>
//     setDate({ month, year });

//   return (
//     <EcosystemThemeProvider theme={LightTheme}>
//       <ESDatePicker
//         month={month}
//         year={year}
//         onMonthChange={handleMonthChange}
//         onChange={setSelectedDates}
//         selected={selectedDates}
//       />
//     </EcosystemThemeProvider>
//   );
// };

describe('Running Test for ESDatePicker', () => {
  test('Component ESDatePicker is rendered', () => {
    render(datePickerComponent());

    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  test('render the month component', () => {
    render(datePickerComponent());

    const novemberText = screen.getByText(/november 2022/i);
    expect(novemberText).toBeInTheDocument();
  });

  test('the days is renders', () => {
    render(datePickerComponent());

    expect(
      screen.getByRole('columnheader', { name: /sunday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /monday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /tuesday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /wednesday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /thursday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /friday/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /saturday/i }),
    ).toBeInTheDocument();
  });

  test('On action from the onChange should respons on click ', () => {
    render(datePickerComponent());

    const newDate = screen.getByRole('button', { name: '11' });
    fireEvent.click(newDate);
    expect(props.onChange).toBeCalled();
    screen.logTestingPlaygroundURL();
  });

  test('On action from the onMonthChange should respons on click ', () => {
    render(datePickerComponent());

    fireEvent.click(screen.getByTestId('Previuse-Month'));
    fireEvent.click(screen.getByTestId('Next-Month'));
    expect(props.onMonthChange).toBeCalled();
    screen.logTestingPlaygroundURL();
  });

  test('the button Prewiuse-Month <- is rendered', () => {
    render(datePickerComponent());

    const previousMonthBtn = screen.getByTestId('Previuse-Month');
    const novemberMonth = screen.getByText(/november 2022/i);
    expect(previousMonthBtn).toBeInTheDocument();
    fireEvent.click(previousMonthBtn);
    expect(novemberMonth).toBeInTheDocument();
  });

  test('the button  Next-Month -> is rendered', () => {
    render(datePickerComponent());

    const nextMonthBtn = screen.getByTestId('Next-Month');
    const novemberMonth = screen.getByText(/november 2022/i);
    expect(nextMonthBtn).toBeInTheDocument();
    fireEvent.click(nextMonthBtn);
    expect(novemberMonth).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
