import React, { ForwardedRef } from 'react';
import { useMediaQuery, useTheme, useThemeProps } from '@mui/material';
import { PageProps } from './Page.types';
import PageStyled, {
  PageContent,
  PageHeaderLeftAlign,
  PageHeaderRightAlign,
  PageHeaderRow,
  PageHeaderWrapper,
} from './Page.styled';

import { Breadcrumb } from '../Breadcrumb';
import PageTitle from '../PageTitle/PageTitle';
import { PrimaryAction } from '../PrimaryAction';
import { ActionMenu } from '../ActionMenu';

const Page = React.forwardRef(
  (inProps: PageProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESPage' });
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const {
      children,
      breadcrumbs,
      divider = false,
      title,
      subtitle,
      titleMetadata,
      additionalMetadata,
      primaryAction,
      secondaryActions = [],
      actionGroups = [],
    } = props;

    const breadcrumb = breadcrumbs ? breadcrumbs[breadcrumbs.length - 1] : null;

    return (
      <PageStyled ref={ref} data-testid="page">
        <PageHeaderWrapper>
          <PageHeaderRow>
            {breadcrumb && <Breadcrumb {...breadcrumb} />}
            <PageTitle
              title={title}
              titleMetadata={titleMetadata}
              subtitle={subtitle}
            />
            <PageHeaderRightAlign>
              <ActionMenu
                actions={secondaryActions}
                groups={actionGroups}
                rollupActive={matches}
              />
              {primaryAction && <PrimaryAction {...primaryAction} />}
            </PageHeaderRightAlign>
          </PageHeaderRow>
          <PageHeaderRow>
            <PageHeaderLeftAlign breadcrumb={(!!breadcrumb).toString()}>
              {additionalMetadata}
            </PageHeaderLeftAlign>
          </PageHeaderRow>
        </PageHeaderWrapper>
        <PageContent divider={divider.toString()}>{children}</PageContent>
      </PageStyled>
    );
  },
);

export default Page;
