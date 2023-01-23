// import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';

import ESChoiceList from './ESChoiceList';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const ChoiceListComponent = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange = (value: string[]) => setSelected(value);

  const choices = [
    {
      label: 'Label2',
      value: 'Label2',
      helpText: 'help text',
    },
    {
      label: 'Label',
      value: 'label',
      helpText: 'help text',
    },
    {
      label: 'Label1',
      value: 'label1',
    },
  ];
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESChoiceList
        title={'Choice list'}
        choices={choices}
        onChange={handleChange}
        selected={selected}
      />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for ESChoiceList', () => {
  test('Component ESChoiceList is rendered', () => {
    render(<ChoiceListComponent />);
    expect(screen.getByText('Choice list')).not.toBeNull();
  });

  it('chackboxses and all ESChoiceList components is rendered', () => {
    render(<ChoiceListComponent />);

    expect(screen.getByText('Choice list')).toBeInTheDocument();
    expect(screen.getByText('Label2')).toBeInTheDocument();
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Label1')).toBeInTheDocument();
    // TODO - розібратись чому 'help text' не відоражаються експекті
    // expect(screen.getAllByText(/help text/i)).toContain('help text')
  });

  it('Component ESChoiceList is rendered is unchecked by default', () => {
    render(<ChoiceListComponent />);
    const lableBtn = screen.getByRole('radio', { name: 'Label' });
    const lable1Btn = screen.getByRole('radio', { name: 'Label1' });
    const hiddenBtn = screen.getByRole('radio', { name: 'Label2' });

    expect(lableBtn).not.toBeChecked();
    expect(lable1Btn).not.toBeChecked();
    expect(hiddenBtn).not.toBeChecked();
  });

  it('Component ESChoiceList is rendered disablet choise ', () => {
    render(<ChoiceListComponent />);
    const lableBtn = screen.getByRole('radio', { name: 'Label' });
    const lable1Btn = screen.getByRole('radio', { name: 'Label1' });
    const hiddenBtn = screen.getByRole('radio', { name: 'Label2' });

    fireEvent.click(lableBtn);
    expect(lableBtn).toBeChecked();
    expect(lable1Btn).not.toBeChecked();
    expect(hiddenBtn).not.toBeChecked();

    fireEvent.click(lable1Btn);
    expect(lable1Btn).toBeChecked();
    expect(lableBtn).not.toBeChecked();
    expect(hiddenBtn).not.toBeChecked();

    fireEvent.click(hiddenBtn);
    expect(hiddenBtn).toBeChecked();
    expect(lableBtn).not.toBeChecked();
    expect(lable1Btn).not.toBeChecked();
  });
});
