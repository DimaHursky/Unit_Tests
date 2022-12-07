import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Typography, useThemeProps } from '@mui/material';
import { useList, useTranslate } from '@pankod/refine-core';
import { SearchContainerProps } from './Search.types';
import { SearchButton } from '../SearchButton';
import SearchField from '../SearchField/SearchField';
import { SearchInfoStyled } from '../SearchAction/SearchAction.styled';
import { SearchAction } from '../SearchAction';
import { SearchBtnSkeleton } from '../SearchBtnSkeleton';
import NoSearchResults from '../NoSearchResults/NoSearchResults';
import SearchSpinner from '../SearchSpinner/SearchSpinner';
import SearchList from '../SearchList/SearchList';
import { IItem } from '../SearchList';
import { prepareSearchData } from '../../utils/helpers';

const Search = (inProps: SearchContainerProps) => {
  const props = useThemeProps({ props: inProps, name: 'Search' });

  const t = useTranslate();
  const placeholder = t('ui.search.input.placeholder');

  const [query, setQuery] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const button = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const { initial } = props;

  const onKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.code === 'KeyK' && (e.ctrlKey || e.metaKey) && !e.repeat) {
      e.preventDefault();
      setAnchorEl(button.current);
    }
  }, []);

  useEffect(() => {
    if (!initial) {
      document.addEventListener('keydown', onKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [initial, onKeyPress]);

  const { data, isFetching, error, isError } = useList<IItem>({
    resource: 'search',
    config: {
      filters: [
        {
          field: 'title',
          operator: 'contains',
          value: query,
        },
      ],
    },
    queryOptions: {
      enabled: !!query,
    },
  });

  const onClearField = useCallback(() => {
    setQuery('');
    input?.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    onClearField();
    setAnchorEl(null);
  }, [onClearField]);

  const btnSkeleton = useMemo(() => <SearchBtnSkeleton />, []);
  const searchBtn = useMemo(
    () => (
      <SearchButton
        onClick={() => {
          setAnchorEl(button.current);
        }}
        ref={button}
        data-testid="search-btn"
      >
        {placeholder}
      </SearchButton>
    ),
    [placeholder],
  );

  const searchField = useMemo(
    () => (
      <SearchField
        inputRef={input}
        placeholder={placeholder}
        value={query}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.currentTarget.value);
        }}
        onCancel={onClearField}
        data-testid="search-field"
      />
    ),
    [onClearField, placeholder, query],
  );

  const defaultSearchBlock = useMemo(
    () => (
      <SearchInfoStyled data-testid="search-info">
        <Typography variant="body2" color="text.secondary">
          {t('ui.search.action.defaultMessage')}
        </Typography>
      </SearchInfoStyled>
    ),
    [t],
  );

  const queryResult =
    !isFetching &&
    !isError &&
    query &&
    (data?.data.length ? (
      <SearchList sections={prepareSearchData(data?.data)} />
    ) : (
      <NoSearchResults searchStr={query} />
    ));

  return (
    <SearchAction
      searchBtn={initial ? btnSkeleton : searchBtn}
      anchorEl={anchorEl}
      searchField={searchField}
      onClose={handleClose}
    >
      {isFetching && <SearchSpinner />}
      {!query && !isFetching && defaultSearchBlock}
      {isError && <div data-testid="search-error">{error?.message}</div>}
      {queryResult}
    </SearchAction>
  );
};

export default Search;
