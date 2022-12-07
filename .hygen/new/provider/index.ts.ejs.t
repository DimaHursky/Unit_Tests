---
to: <%= cwd %>/src/providers/<%= h.changeCase.pascal(name) %>Provider/index.ts
---
export { default as <%= h.changeCase.pascal(name) %>Provider } from './<%= h.changeCase.pascal(name) %>Provider';
export * from './<%= h.changeCase.pascal(name) %>Provider.types';
