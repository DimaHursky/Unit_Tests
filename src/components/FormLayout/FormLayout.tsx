import React, { Children, ForwardedRef, ReactNode } from 'react';
import { useThemeProps } from '@mui/material';
import { FormLayoutProps } from './FormLayout.types';
import FormLayoutStyled, { FormLayoutItem } from './FormLayout.styled';
import FormLayoutGroup from '../FormLayoutGroup/FormLayoutGroup';
import { isElementOfType } from '../../utils/isElementOfType';

function wrapChildren(child: ReactNode, index: number) {
  if (isElementOfType(child, FormLayoutGroup)) {
    return child;
  }

  return <FormLayoutItem key={index}>{child}</FormLayoutItem>;
}

const FormLayout = React.forwardRef(
  (inProps: FormLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESFormLayout' });

    const { children } = props;

    return (
      <FormLayoutStyled ref={ref}>
        {Children.map(children, wrapChildren)}
      </FormLayoutStyled>
    );
  },
);

export default FormLayout;
