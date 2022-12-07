import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SearchSpinner from './SearchSpinner';

describe('Running Test for SearchSpinner', () => {
  test('Component SearchSpinner is rendered', () => {
    const { getByTestId } = render(<SearchSpinner />);
    expect(getByTestId('spinner')).not.toBeNull();
  });
});
