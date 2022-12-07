import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {
  BreadcrumbProps,
  CallbackAction,
  LinkAction,
} from './Breadcrumb.types';
import BreadcrumbStyled, {
  BreadcrumbLink,
  VisuallyHiddenContent,
} from './Breadcrumb.styled';

function isLinkAction(
  action: LinkAction | CallbackAction,
): action is LinkAction {
  return 'url' in action;
}

const Breadcrumb = React.forwardRef(
  (inProps: BreadcrumbProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESBreadcrumb' });

    const breadcrumbContent = <ArrowBackRoundedIcon />;

    return (
      <BreadcrumbStyled ref={ref} data-testid="breadcrumb">
        <nav>
          {isLinkAction(props) ? (
            <BreadcrumbLink href={props.url}>
              {breadcrumbContent}
              <VisuallyHiddenContent>{props.content}</VisuallyHiddenContent>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbLink onClick={props.onAction} as="button">
              {breadcrumbContent}
              <VisuallyHiddenContent>{props.content}</VisuallyHiddenContent>
            </BreadcrumbLink>
          )}
        </nav>
      </BreadcrumbStyled>
    );
  },
);

export default Breadcrumb;
