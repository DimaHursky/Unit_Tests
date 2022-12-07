import React from 'react';
import { Typography, useThemeProps } from '@mui/material';
import { useTranslate } from '@pankod/refine-core';
import { NoSearchResultsProps } from './NoSearchResults.types';
import NoSearchResultsWrapperStyled, {
  NoSearchResultsContentStyled,
} from './NoSearchResults.styled';

const NoSearchResults = (inProps: NoSearchResultsProps) => {
  const props = useThemeProps({ props: inProps, name: 'ESNoSearchResults' });

  const { searchStr = '' } = props;

  const t = useTranslate();

  return (
    <NoSearchResultsWrapperStyled data-testid="no-results">
      <NoSearchResultsContentStyled>
        <Typography
          variant="h4"
          color="text.secondary"
          sx={{
            fontWeight: 'regular',
          }}
          gutterBottom
        >
          {t('ui.search.action.noResult', { searchStr })}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{
            __html: t('ui.search.action.searchTips'),
          }}
        />
      </NoSearchResultsContentStyled>
    </NoSearchResultsWrapperStyled>
  );
};

export default NoSearchResults;
