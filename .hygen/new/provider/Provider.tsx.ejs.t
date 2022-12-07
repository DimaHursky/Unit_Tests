---
to: <%= cwd %>/src/providers/<%= h.changeCase.pascal(name) %>Provider/<%= h.changeCase.pascal(name) %>Provider.tsx
---
import React from 'react';
import { <%= h.changeCase.pascal(name) %>ProviderProps } from './<%= h.changeCase.pascal(name) %>Provider.types';

const <%= h.changeCase.pascal(name) %>Provider = ({ children, ...other }: <%= h.changeCase.pascal(name) %>ProviderProps) => (
  <div>{children}</div>
);

export default <%= h.changeCase.pascal(name) %>Provider;
