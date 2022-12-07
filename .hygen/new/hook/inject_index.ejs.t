---
to: <%= cwd %>/src/hooks/index.ts
inject: true
skip_if: use<%= h.changeCase.pascal(name) %>
append: true
---
export * from './use<%= h.changeCase.pascal(name) %>';