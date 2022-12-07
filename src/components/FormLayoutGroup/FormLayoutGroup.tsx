import React, { Children, ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { FormLayoutGroupProps } from './FormLayoutGroup.types';
import FormLayoutGroupStyled, {
  FormLayoutGroupHelpText,
  FormLayoutGroupTitle,
  FormLayoutItems,
} from './FormLayoutGroup.styled';
import { FormLayoutItem } from '../FormLayout/FormLayout.styled';

const FormLayoutGroup = React.forwardRef(
  (inProps: FormLayoutGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESFormLayoutGroup' });

    const { children, title, helpText, condensed = false } = props;

    const className = condensed ? 'condensed' : 'grouped';

    const itemsMarkup = Children.map(children, (child) => (
      <FormLayoutItem className={className}>{child}</FormLayoutItem>
    ));

    return (
      <FormLayoutGroupStyled ref={ref} role="group">
        {title && <FormLayoutGroupTitle>{title}</FormLayoutGroupTitle>}
        <FormLayoutItems>{children && itemsMarkup}</FormLayoutItems>

        {helpText && (
          <FormLayoutGroupHelpText>{helpText}</FormLayoutGroupHelpText>
        )}
      </FormLayoutGroupStyled>
    );
  },
);

export default FormLayoutGroup;
