import { IItem, ISearchResult } from '../components/SearchList';

export const isTrue = (value?: boolean | string | number): boolean => {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    return value === 'true';
  }

  return value === 1;
};

export const prepareSearchData = (data: IItem[]) =>
  data.reduce((acc: ISearchResult[], resultItem: IItem) => {
    if (!acc.length) {
      return [{ sectionTitle: resultItem.type, items: [resultItem] }];
    }
    const isResultObjExists = acc.some(
      (item) => item.sectionTitle === resultItem.type,
    );

    return !isResultObjExists
      ? [...acc, { sectionTitle: resultItem.type, items: [resultItem] }]
      : acc.map((searchResultItem: ISearchResult) =>
          searchResultItem.sectionTitle === resultItem.type
            ? {
                ...searchResultItem,
                items: [...searchResultItem.items, resultItem],
              }
            : searchResultItem,
        );
  }, []);
