---
to: <%= cwd %>/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.styled.tsx
---
import { styled } from '@mui/material/styles';

const <%= h.changeCase.pascal(name) %>Styled = styled('div', {
  name: 'ES<%= h.changeCase.pascal(name) %>',
  slot: 'Root',
})(
  ({ theme }) => ({}),
  ({ theme }) => ({}),
);

export default <%= h.changeCase.pascal(name) %>Styled;
