import {
  BaseKey,
  BaseRecord,
  MetaDataQuery,
} from '@pankod/refine-core/dist/interfaces';

import {
  CreateManyResponse,
  CreateResponse,
  CrudFilter,
  CrudFilters,
  CrudSorting,
  CustomResponse,
  DeleteManyResponse,
  DeleteOneResponse,
  GetListResponse,
  GetManyResponse,
  GetOneResponse,
  IDataContextProvider,
  Pagination,
  UpdateManyResponse,
  UpdateResponse,
} from '@pankod/refine-core/dist/contexts/data/IDataContext';
import { LogicalFilter } from '@pankod/refine-core/src/contexts/data/IDataContext';

export type TSources = {
  [key: string]: BaseRecord[];
};

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MockDataProvider = (
  sources: TSources,
  url: string,
): IDataContextProvider => {
  const savedSources = JSON.parse(JSON.stringify(sources));

  return {
    getList: async <TData extends BaseRecord = BaseRecord>(params: {
      resource: string;
      pagination?: Pagination;
      hasPagination?: boolean;
      sort?: CrudSorting;
      filters?: CrudFilters;
      metaData?: MetaDataQuery;
      dataProviderName?: string;
    }): Promise<GetListResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);
      let source = savedSources[params.resource] as TData[];

      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      if (params.resource === 'offices') {
        // TODO: implement filters, sort, pagination
        return Promise.resolve({ data: source, total: 0 });
      }

      const filter = params.filters?.[0] as LogicalFilter;

      source = source.filter((item) =>
        item[filter?.field]
          .toLocaleLowerCase()
          .includes(filter.value.toLocaleLowerCase()),
      );
      return Promise.resolve({ data: source, total: 0 });
    },
    getMany: async <TData extends BaseRecord = BaseRecord>(params: {
      resource: string;
      ids: BaseKey[];
      metaData?: MetaDataQuery;
      dataProviderName?: string;
    }): Promise<GetManyResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);
      const source = savedSources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const data = source.filter(
        (item) => item.id && params.ids.includes(item.id),
      );

      return Promise.resolve({ data });
    },
    getOne: async <TData extends BaseRecord = BaseRecord>(params: {
      resource: string;
      id: BaseKey;
      metaData?: MetaDataQuery;
    }): Promise<GetOneResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);
      const source = savedSources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const record = source.find((item) => item.id === params.id);
      if (!record) {
        return Promise.reject(new Error(`Record not found`));
      }

      return Promise.resolve({ data: record });
    },
    create: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      variables: TVariables;
      metaData?: MetaDataQuery;
    }): Promise<CreateResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);
      const source = savedSources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const record = { ...params.variables } as unknown;

      source.push(record as TData);

      savedSources[params.resource] = source;

      return Promise.resolve({ data: source[source.length - 1] });
    },
    createMany: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      variables: TVariables[];
      metaData?: MetaDataQuery;
    }): Promise<CreateManyResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);
      const source = savedSources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const records = params.variables.map(
        (record) => ({ ...record } as unknown),
      );

      savedSources[params.resource] = source.concat(records as TData[]);

      return Promise.resolve({ data: records as TData[] });
    },
    update: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      id: BaseKey;
      variables: TVariables;
      metaData?: MetaDataQuery;
    }): Promise<UpdateResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);

      const source = sources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const recordIdx = source.findIndex((item) => item.id === params.id);
      if (recordIdx === -1) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      source[recordIdx] = {
        ...source[recordIdx],
        ...params.variables,
      };

      savedSources[params.resource] = source;

      return Promise.resolve({ data: source[recordIdx] });
    },
    updateMany: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      ids: BaseKey[];
      variables: TVariables;
      metaData?: MetaDataQuery;
    }): Promise<UpdateManyResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);

      const source = sources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const records = params.ids.reduce((acc: TData[], id) => {
        const recordIdx = source.findIndex((item) => item.id === id);
        if (recordIdx !== -1) {
          source[recordIdx] = {
            ...source[recordIdx],
            ...params.variables,
          };
          acc.push(source[recordIdx]);
        }

        return acc;
      }, []);

      savedSources[params.resource] = source;

      return Promise.resolve({ data: records });
    },
    deleteOne: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      id: BaseKey;
      variables?: TVariables;
      metaData?: MetaDataQuery;
    }): Promise<DeleteOneResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);

      const source = sources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const recordIdx = source.findIndex((item) => item.id === params.id);
      if (recordIdx === -1) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const record = source[recordIdx];

      source.splice(recordIdx, 1);

      savedSources[params.resource] = source;

      return Promise.resolve({ data: record });
    },
    deleteMany: async <
      TData extends BaseRecord = BaseRecord,
      // eslint-disable-next-line @typescript-eslint/ban-types
      TVariables = {},
    >(params: {
      resource: string;
      ids: BaseKey[];
      variables?: TVariables;
      metaData?: MetaDataQuery;
    }): Promise<DeleteManyResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);

      const source = sources[params.resource] as TData[];
      if (!source) {
        return Promise.reject(
          new Error(`Resource ${params.resource} not found`),
        );
      }

      const records = params.ids.reduce((acc: TData[], id) => {
        const recordIdx = source.findIndex((item) => item.id === id);
        if (recordIdx !== -1) {
          acc.push(source[recordIdx]);
          source.splice(recordIdx, 1);
        }

        return acc;
      }, []);

      savedSources[params.resource] = source;

      return Promise.resolve({ data: records });
    },
    getApiUrl: () => url,
    custom: async <TData extends BaseRecord = BaseRecord>(params: {
      url: string;
      method: 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch';
      sort?: CrudSorting;
      filters?: CrudFilter[];
      // eslint-disable-next-line @typescript-eslint/ban-types
      payload?: {};
      // eslint-disable-next-line @typescript-eslint/ban-types
      query?: {};
      // eslint-disable-next-line @typescript-eslint/ban-types
      headers?: {};
      metaData?: MetaDataQuery;
    }): Promise<CustomResponse<TData>> => {
      await sleep(params?.metaData?.delay || 10);

      const source = sources[params.url] as unknown;

      return Promise.resolve({ data: source as TData });
    },
  };
};

export default MockDataProvider;
