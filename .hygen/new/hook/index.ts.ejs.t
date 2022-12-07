---
to: <%= cwd %>/src/hooks/use<%= h.changeCase.pascal(name) %>/index.ts
---
export { default as use<%= h.changeCase.pascal(name) %> } from './use<%= h.changeCase.pascal(name) %>';
export * from './use<%= h.changeCase.pascal(name) %>.types';
