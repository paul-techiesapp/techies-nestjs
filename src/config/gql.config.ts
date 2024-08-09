import { PagingStrategies } from '@nestjs-query/query-graphql';

export const DEFAULT_QUERY_OPTIONS = {
  enableTotalCount: true,
  pagingStrategy: PagingStrategies.OFFSET,
  maxResultsSize: -1,
};
