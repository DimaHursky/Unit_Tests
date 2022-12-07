---
to: <%= cwd %>/src/interfaces/index.ts
inject: true
skip_if: <%= h.changeCase.paramCase(name) %>
append: true
---
export * from './<%= h.changeCase.paramCase(name) %>';