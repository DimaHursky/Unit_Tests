import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESTextFieldErrorLabel from './ESTextFieldErrorLabel';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESTextFieldErrorLabel', () => {
  test('Component ESTextFieldErrorLabel is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldErrorLabel error={'Error text'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Error text')).not.toBeNull();
  });

  test('Component ESTextFieldErrorLabel is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldErrorLabel error={'Error text'} />
      </EcosystemThemeProvider>,
    );

    expect(screen.getByTestId('ErrorRoundedIcon')).toBeInTheDocument();
    expect(screen.getByText(/error text/i)).toBeInTheDocument();
  });

  test('Component ESTextFieldErrorLabel is rendered', () => {
    // const result =  
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESTextFieldErrorLabel error={'Error text'} />
      </EcosystemThemeProvider>,
    );
    // const errorImage = result.container.querySelector('#sandbox > div > div > div > div > span > svg > path');
    const errorIcon = screen.getByTestId('ErrorRoundedIcon');
    
    expect(errorIcon).toHaveAttribute('focusable', 'false');
    expect(errorIcon).toHaveAttribute('aria-hidden', 'true');
    expect(errorIcon).toHaveAttribute('viewBox', '0 0 24 24');
  }); 
});
