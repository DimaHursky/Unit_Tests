import React, { ForwardedRef } from 'react';
import { useThemeProps } from '@mui/material';
import { PageTitleProps } from './PageTitle.types';
import PageTitleStyled, {
  HeaderTitle,
  Subtitle,
  TitleMetadata,
  TitleMetadataWrapper,
} from './PageTitle.styled';

const PageTitle = React.forwardRef(
  (inProps: PageTitleProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESPageTitle' });

    const { title, titleMetadata, subtitle } = props;

    return (
      <PageTitleStyled ref={ref} data-testid="page-title">
        <TitleMetadataWrapper>
          {title && <HeaderTitle>{title}</HeaderTitle>}
          {titleMetadata && <TitleMetadata>{titleMetadata}</TitleMetadata>}
        </TitleMetadataWrapper>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </PageTitleStyled>
    );
  },
);

export default PageTitle;
