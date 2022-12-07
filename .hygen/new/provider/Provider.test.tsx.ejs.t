---
to: <%= cwd %>/src/providers/<%= h.changeCase.pascal(name) %>Provider/<%= h.changeCase.pascal(name) %>Provider.test.tsx
---
import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import <%= h.changeCase.pascal(name) %>Provider from './<%= h.changeCase.pascal(name) %>Provider';

describe('Running Test for <%= h.changeCase.pascal(name) %>Provider', () => {
  test('Component <%= h.changeCase.pascal(name) %> is rendered', () => {
    //@TODO: Write test
    expect('foo').toStrictEqual('foo');
  });
});
