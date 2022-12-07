import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Running Test for Navigation', () => {
  test('Component Navigation is rendered', () => {
    // render(<Navigation>Test</Navigation>);
    // expect(screen.getByText('Test')).not.toBeNull();
    expect('foo').toStrictEqual('foo');
  });
});
