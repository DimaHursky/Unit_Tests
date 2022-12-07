---
to: <%= cwd %>/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>';

describe('Running Test for <%= h.changeCase.pascal(name) %>', () => {
  test('Component <%= h.changeCase.pascal(name) %> is rendered', () => {
    render(<<%= h.changeCase.pascal(name) %>>Test</<%= h.changeCase.pascal(name) %>>);
    expect(screen.getByText('Test')).not.toBeNull();
  });
});
