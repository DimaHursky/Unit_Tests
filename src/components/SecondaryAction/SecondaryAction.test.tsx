import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import SecondaryAction from './SecondaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const SecondaryActionn = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <SecondaryAction children={'Secondary Action'} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for SecondaryAction', () => {
  test('Component SecondaryAction is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <SecondaryAction children={'Secondary Action'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Secondary Action')).not.toBeNull();
  });

  it('handles CSS text size', () => {
    render(<SecondaryActionn />);
    const buttonSize = screen.getByText('Secondary Action');

    expect(buttonSize).toHaveStyle('font-size: 0.94rem');
  });

  it('handles CSS text font', () => {
    render(<SecondaryActionn />);
    const actionBtn = screen.getByText('Secondary Action');

    fireEvent.click(actionBtn);
    expect(actionBtn).toHaveAttribute('tabindex', '0');
    expect(actionBtn).toHaveAttribute('type', 'button');
    expect(actionBtn).toHaveAttribute('color', 'secondary');
    expect(actionBtn).toHaveAttribute('variant', 'text');

    screen.logTestingPlaygroundURL();
  });

  it('handles CSS text size', () => {
    render(<SecondaryActionn />);
    const buttonSize = screen.getByText('Secondary Action');

    expect(buttonSize).toHaveTextContent('Secondary Action');
  });
});
