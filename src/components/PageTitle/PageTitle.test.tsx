import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PageTitle from './PageTitle';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

describe('Running Test for PageTitle', () => {
  test('Component PageTitle is rendered', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <PageTitle title={'title'} subtitle={'subtitle'} />
      </EcosystemThemeProvider>,
    );
    expect(screen.getByTestId('page-title')).not.toBeNull();
  });
});
