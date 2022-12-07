---
to: <%= cwd %>/src/components/index.ts
inject: true
skip_if: <%= h.changeCase.pascal(name) %>
append: true
---
export * from './<%= h.changeCase.pascal(name) %>';