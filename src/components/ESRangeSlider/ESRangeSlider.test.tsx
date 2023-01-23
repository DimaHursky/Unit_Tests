import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import ESRangeSlider from './ESRangeSlider';
import { useState } from 'react';

const SliderComponent = () => {
  const [value, setValue] = useState(10);
  const handleChange = (newValue: number) => setValue(newValue);

  return (
    <ESRangeSlider label={'Slider'} value={value} onChange={handleChange} />
  );
};

describe('Running Test for ESRangeSlider', () => {
  test('Component ESRangeSlider is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SliderComponent />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Slider')).not.toBeNull();
    screen.logTestingPlaygroundURL();
  });

  test('Text component ESRangeSlider is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SliderComponent />
      </EcosystemThemeProvider>,
    );

    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByText(/slider/i)).toBeInTheDocument();
    screen.debug();
  });

  test('ESRangeSlider rendering attributs', () => {
    const { queryByLabelText, getByLabelText } = render(
      //https://jestjs.io/docs/tutorial-react #DOM Testing
      <EcosystemThemeProvider theme={LightTheme}>
        <SliderComponent />
      </EcosystemThemeProvider>,
    );

    expect(screen.getByRole('slider')).toHaveAttribute('min', '0');
    expect(screen.getByRole('slider')).toHaveAttribute('max', '100');
    expect(screen.getByRole('slider')).toHaveAttribute('step', '1');
    expect(screen.getByRole('slider')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('slider')).toHaveProperty('type', 'range');

    //     expect({max : '100', }).toHaveProperty(['max', 100]);
    //     expect({
    //       name : 'Adil',
    //       min: 0,
    //       max: 100
    //       step: 1
    //       age : 23
    //   }.age).toBe(23);

    //   expect({
    //     name : 'Adil',
    //     age : 23
    // }).toHaveProperty('age', 23);
  });
});
