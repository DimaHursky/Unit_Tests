---
to: <%= cwd %>/src/components/<%= h.changeCase.pascal(name) %>/index.ts
---
export { default as <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';
export * from './<%= h.changeCase.pascal(name) %>.types';
