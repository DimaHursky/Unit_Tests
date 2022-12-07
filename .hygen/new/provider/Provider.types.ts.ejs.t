---
to: <%= cwd %>/src/providers/<%= h.changeCase.pascal(name) %>Provider/<%= h.changeCase.pascal(name) %>Provider.types.ts
---
export interface <%= h.changeCase.pascal(name) %>ProviderProps {
  children: React.ReactNode;
}
