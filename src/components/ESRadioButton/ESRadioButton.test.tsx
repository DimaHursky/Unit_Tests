// import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ESRadioButton from './ESRadioButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import React, { useState } from 'react';

//TODO - Імпортувати компоненти, щоб перевірити, що чкбокс проставлений після натисканн

const ChoiceListComponent = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (value: string[]) => setSelected(value);

  const choices = [
    {
      label: 'Label',
      helpText: 'help text',
    },
  ];
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESRadioButton
        label={'Radio Button'}
        value={'radio'}
        selected={selected}
      />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for ESRadioButton', () => {
  test('Component ESRadioButton is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESRadioButton label={'Radio Button'} value={'radio'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Radio Button')).not.toBeNull();
  });

  test('Component ESRadioButton to be chacked', () => {
    render(<ChoiceListComponent />);
    const radioBtn = screen.getByRole('radio', { name: /radio button/i });
    expect(radioBtn).not.toBeChecked();
    fireEvent.click(radioBtn);
    expect(radioBtn).toBeChecked();
  });

  test('Component ESRadioButton have a text', () => {
    render(<ChoiceListComponent />);
    const radioBtn = screen.getByText(/radio button/i);
    expect(radioBtn).toHaveTextContent('Radio Button');
  });

  test('Component ESRadioButton have attributes', () => {
    render(<ChoiceListComponent />);
    const radioBtn = screen.getByRole('radio', { name: /radio button/i });
    expect(radioBtn).toHaveAttribute('type', 'radio');
    expect(radioBtn).toHaveAttribute('class', 'MuiInput-input');
    expect(radioBtn).toHaveAttribute('value', 'radio');
    screen.debug();
    screen.logTestingPlaygroundURL();
  });
});
