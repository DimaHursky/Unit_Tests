---
to: <%= cwd %>/src/interfaces/<%= h.changeCase.paramCase(name) %>.ts
---
export interface I<%= h.changeCase.pascal(name) %> {}