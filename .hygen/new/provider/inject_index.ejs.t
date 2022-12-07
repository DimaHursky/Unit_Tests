---
to: <%= cwd %>/src/providers/index.ts
inject: true
skip_if: <%= h.changeCase.pascal(name) %>Provider
append: true
---
export * from './<%= h.changeCase.pascal(name) %>Provider';