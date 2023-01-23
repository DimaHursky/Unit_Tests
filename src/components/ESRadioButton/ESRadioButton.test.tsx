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

  test('Component ESRadioButton is able to be chack', () => {
    render(<ChoiceListComponent />);
    const radioBtn = screen.getByText(/radio button/i);
    expect(radioBtn).not.toBeChecked();
    fireEvent.click(radioBtn);
    // expect(radioBtn).toBeChecked();
    // TODO - Треба додати елеметн по якому можна перевірити чи було натискання
    screen.logTestingPlaygroundURL();
  });

  test('Component ESRadioButton have content Radio Button', () => {
    render(<ChoiceListComponent />);
    const radioBtn = screen.getByText(/radio button/i);
    expect(radioBtn).toHaveTextContent('Radio Button');
    screen.debug();
    screen.logTestingPlaygroundURL();
  });
});
