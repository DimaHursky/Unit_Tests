---
to: <%= cwd %>/src/hooks/use<%= h.changeCase.pascal(name) %>/use<%= h.changeCase.pascal(name) %>.test.tsx
---
import * as React from 'react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import use<%= h.changeCase.pascal(name) %> from './use<%= h.changeCase.pascal(name) %>';

describe('Running Test for use<%= h.changeCase.pascal(name) %>', () => {
  test('Hook use<%= h.changeCase.pascal(name) %> is work', () => {
    const defaultValue = { value: 1 };

    const { result } = renderHook(
      (props) => use<%= h.changeCase.pascal(name) %>(props),
      {
        initialProps: defaultValue,
      },
    );

    //@TODO: Write test
    expect(result.current.value).toEqual(defaultValue.value + 1);
  });
});
