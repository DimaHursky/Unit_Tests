---
to: <%= cwd %>/src/hooks/use<%= h.changeCase.pascal(name) %>/use<%= h.changeCase.pascal(name) %>.ts
---
import React from 'react';
import { Use<%= h.changeCase.pascal(name) %>Props, Use<%= h.changeCase.pascal(name) %>Value } from './use<%= h.changeCase.pascal(name) %>.types';

const use<%= h.changeCase.pascal(name) %> = ({ value }: Use<%= h.changeCase.pascal(name) %>Props): Use<%= h.changeCase.pascal(name) %>Value => {
  return { value: value + 1 };
};

export default use<%= h.changeCase.pascal(name) %>;
