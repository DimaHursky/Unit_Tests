---
to: <%= cwd %>/src/hooks/use<%= h.changeCase.pascal(name) %>/use<%= h.changeCase.pascal(name) %>.types.ts
---
export interface Use<%= h.changeCase.pascal(name) %>Props {
  value: number;
}
export interface Use<%= h.changeCase.pascal(name) %>Value {
  value: number;
}