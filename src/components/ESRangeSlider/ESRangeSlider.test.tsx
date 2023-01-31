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
    expect(screen.getByRole('slider')).toHaveAttribute('data-index', '0');
    expect(screen.getByRole('slider')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuemax', '100');
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuemin', '0');
    expect(screen.getByRole('slider')).toHaveProperty('type', 'range');
    expect(screen.getByRole('slider')).toHaveAttribute('min', '0');
    expect(screen.getByRole('slider')).toHaveAttribute('max', '100');
    expect(screen.getByRole('slider')).toHaveAttribute('step', '1');
    expect(screen.getByRole('slider')).toHaveAttribute('value', '10');
    expect(screen.getByRole('slider')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('slider')).toHaveAttribute(
      'style',
      'border: 0px; height: 100%; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 100%; direction: ltr;',
    );
    //   expect({
    //     name : 'Adil',
    //     age : 23
    // }).toHaveProperty('age', 23);
  });
});
