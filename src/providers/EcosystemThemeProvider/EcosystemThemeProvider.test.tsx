import * as React from 'react';
import '@testing-library/jest-dom';
import EcosystemThemeProvider from './EcosystemThemeProvider';
import { render } from '@testing-library/react';
import { ThemeOptions, useTheme } from '@mui/material';

describe('EcosystemThemeProvider', () => {
  test('should provide the theme', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const text = () => ref.current.textContent;

    function Test() {
      const theme = useTheme<{ foo: string }>();

      return <span ref={ref}>{theme.foo}</span>;
    }

    render(
      <EcosystemThemeProvider theme={{ foo: 'foo' } as ThemeOptions}>
        <Test />
      </EcosystemThemeProvider>,
    );

    expect(text()).toStrictEqual('foo');
  });
});
