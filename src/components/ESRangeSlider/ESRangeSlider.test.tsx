import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
  });
});
