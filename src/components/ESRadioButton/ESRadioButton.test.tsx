import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ESRadioButton from './ESRadioButton';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for ESRadioButton', () => {
  test('Component ESRadioButton is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <ESRadioButton label={'Radio Button'} value={'radio'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByText('Radio Button')).not.toBeNull();
  });
});
