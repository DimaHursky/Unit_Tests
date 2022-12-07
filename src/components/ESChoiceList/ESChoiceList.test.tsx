import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESChoiceList from './ESChoiceList';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESChoiceList', () => {
  test('Component ESChoiceList is rendered', () => {
    const choices = [
      {
        label: 'Hidden',
        value: 'hidden',
        disabled: true,
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

    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESChoiceList title={'Choice list'} choices={choices} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Choice list')).not.toBeNull();
  });
});
