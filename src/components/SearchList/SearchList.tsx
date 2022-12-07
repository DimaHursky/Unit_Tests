import React from 'react';
import { Typography, useThemeProps } from '@mui/material';
import { useTranslate } from '@pankod/refine-core';
import { IItem, ISearchResult, SearchListProps } from './SearchList.types';
import SearchListStyled, {
  SearchItemCaptionStyled,
  SearchItemIconStyled,
  SearchItemStyled,
  SearchItemSubtitleStyled,
  SearchItemTextStyled,
  SearchItemTitleStyled,
  SearchListItemStyled,
  SectionTitleStyled,
} from './SearchList.styled';

const SearchItemList = ({ items }: { items: IItem[] }) => (
  <SearchListStyled>
    {items.map(({ title, subtitle, caption, icon }: IItem, i: number) => {
      const testPrefix = title.split(' ')[0];
      return (
        <SearchListItemStyled
          sx={{ padding: 0 }}
          tabIndex={-1}
          key={title || i}
          data-testid={`list-item-${testPrefix}-${i}`}
        >
          <SearchItemStyled>
            {icon && (
              <SearchItemIconStyled type="icon">{icon}</SearchItemIconStyled>
            )}
            <SearchItemTextStyled icon={icon}>
              <SearchItemTitleStyled
                data-testid={`list-item-title-${testPrefix}-${i}`}
              >
                {title}
              </SearchItemTitleStyled>
              {subtitle && (
                <SearchItemSubtitleStyled>{subtitle}</SearchItemSubtitleStyled>
              )}
              {caption && (
                <SearchItemCaptionStyled>{caption}</SearchItemCaptionStyled>
              )}
            </SearchItemTextStyled>
          </SearchItemStyled>
        </SearchListItemStyled>
      );
    })}
  </SearchListStyled>
);

const SearchList = (inProps: SearchListProps) => {
  const props = useThemeProps({ props: inProps, name: 'SearchList' });

  const { sections, ...other } = props;

  const t = useTranslate();

  return (
    <SearchListStyled data-testid="search-list" {...other}>
      {sections.map(({ sectionTitle, items }: ISearchResult, i: number) => (
        <SearchListItemStyled
          key={sectionTitle || i}
          tabIndex={-1}
          data-testid={`search-section-${i}`}
        >
          <SectionTitleStyled>
            <Typography
              variant="h3"
              noWrap
              data-testid={`search-section-title-${i}`}
            >
              {t(`ui.search.results.title.${sectionTitle}`)}
            </Typography>
          </SectionTitleStyled>
          <SearchItemList items={items} />
        </SearchListItemStyled>
      ))}
    </SearchListStyled>
  );
};

export default SearchList;
