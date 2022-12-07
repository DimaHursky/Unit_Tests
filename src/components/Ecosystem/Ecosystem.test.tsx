import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Ecosystem from './Ecosystem';
import routerProvider from '@pankod/refine-react-router-v6';
import { LightTheme } from '../../theme';
import { MockDataProvider } from '../../providers';

const ReadyPage = () => (
  <div>
    <h1>This is a main ecosystem ui component</h1>
  </div>
);

describe('Running Test for Ecosystem', () => {
  test('Component Ecosystem is rendered', () => {
    render(
      <Ecosystem
        routerProvider={routerProvider}
        theme={LightTheme}
        dataProvider={{
          default: MockDataProvider({ posts: [] }, 'http://localhost:3000/api'),
        }}
        ReadyPage={ReadyPage}
      />,
    );

    expect(
      screen.getByText('This is a main ecosystem ui component'),
    ).not.toBeNull();
  });
});
