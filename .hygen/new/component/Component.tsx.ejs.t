---
to: <%= cwd %>/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.pascal(name) %>.types';
import <%= h.changeCase.pascal(name) %>Styled from './<%= h.changeCase.pascal(name) %>.styled';

const <%= h.changeCase.pascal(name) %> = React.forwardRef(
  (inProps: <%= h.changeCase.pascal(name) %>Props, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ES<%= h.changeCase.pascal(name) %>' });

    const { ...other } = props;

    return <<%= h.changeCase.pascal(name) %>Styled ref={ref} />;
  },
);

export default <%= h.changeCase.pascal(name) %>;
