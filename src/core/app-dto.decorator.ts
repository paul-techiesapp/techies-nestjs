import { DEFAULT_QUERY_OPTIONS } from '@/config/gql.config';
import { QueryOptions, RelationTypeFunc } from '@nestjs-query/query-graphql';
import { applyDecorators } from '@nestjs/common';
import { ObjectType } from '@nestjs/graphql';

import { GqlDTORelations } from './app.gql.decorator';

export const AppDtoDecorators = <Relation>(
  entity: RelationTypeFunc<Relation>,
) => {
  return applyDecorators(
    GqlDTORelations(entity),
    ObjectType(entity().name.replace('DTO', '')),
    QueryOptions({ ...DEFAULT_QUERY_OPTIONS }),
  );
};
