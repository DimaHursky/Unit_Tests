import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SecondaryAction from './SecondaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const SecondaryActionn = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <SecondaryAction children={'Secondary Action'} />
    </EcosystemThemeProvider>
  )};

describe('Running Test for SecondaryAction', () => {
  test('Component SecondaryAction is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SecondaryAction children={'Secondary Action'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Secondary Action')).not.toBeNull();
  });

  it('handles CSS text collor', () => {
    render(<SecondaryActionn />);
    
    const buttonSize = screen.getByText('Secondary Action');

    expect(buttonSize).toHaveStyle('color: rgb(32, 34, 35)');

    // const colorButton = screen.getByRole('button', { name: 'Gray button' });
    // expect(colorButton).toHaveStyle("background-color: gray"); // succeeds
    // expect(colorButton).toHaveStyle( {backgroundColor: 'gray', display: 'inline-block' }); // succeeds
    // expect(colorButton).toHaveStyle( {backgroundColor: 'gray' }); // succeeds
    // expect(colorButton).not.toHaveStyle( {backgroundColor: 'red' }); // succeeds
  });
  it('handles CSS text size', () => {
    render(<SecondaryActionn />);
    const buttonSize = screen.getByText('Secondary Action');

    expect(buttonSize).toHaveStyle('font-size: 0.94rem');
  });

  it('handles CSS text font', () => {
    render(<SecondaryActionn />);
    const buttonSize = screen.getByText('Secondary Action');

    // expect(buttonSize).toHaveStyle('font-family: Arial');
    // expect(buttonSize).tohaveStyleRule('font-family: Arial');
    //expect(buttonSize).toHaveStyleRule('font-size', '20px');
    // expect(wrapper.find('button')).toHaveStyleRule('font-size', '20px');
  });
});
