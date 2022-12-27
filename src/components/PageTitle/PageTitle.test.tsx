import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PageTitle from './PageTitle';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const TitlePage = () => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <PageTitle title={'title'} subtitle={'subtitle'} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for PageTitle', () => {
  test('Component PageTitle is rendered', () => {
    render(<TitlePage />);
    // render(
    //   <EcosystemThemeProvider theme={LightTheme}>
    //     <PageTitle title={'title'} subtitle={'subtitle'} />
    //   </EcosystemThemeProvider>,
    // );
    expect(screen.getByTestId('page-title')).not.toBeNull();
  });

  test('Component PageTitle contain a text', () => {
    render(<TitlePage />);
    screen.logTestingPlaygroundURL();
    const btn = screen.getByTestId('page-title');
    expect(btn).toHaveTextContent('title');
    expect(btn).toHaveTextContent('subtitle');
  });
});
