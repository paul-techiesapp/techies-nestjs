import {
  FilterableOffsetConnection,
  FilterableRelation,
  FilterableUnPagedRelation,
  RelationDecoratorOpts,
  RelationTypeFunc,
} from '@nestjs-query/query-graphql';
import { applyDecorators } from '@nestjs/common';

const RELATIONS_META_DATA_KEY = 'APP_NESTJS_QUERY_DTO_RELATIONS';

const DEFAULT_OPTIONS = {
  disableUpdate: true,
  disableRemove: true,
  nullable: true,
};

export const GqlHasOne = <Relation>(
  relationTypeFunc: RelationTypeFunc<Relation>,
  options?: RelationDecoratorOpts<Relation>,
) => {
  return function (target: any, propertyKey: string) {
    const relations =
      Reflect.getMetadata(RELATIONS_META_DATA_KEY, target) ?? [];
    const newRelation = FilterableRelation(propertyKey, relationTypeFunc, {
      ...DEFAULT_OPTIONS,
      ...options,
    });

    Reflect.defineMetadata(
      RELATIONS_META_DATA_KEY,
      [...relations, newRelation],
      target,
    );
  };
};

export const GqlHasManyUnpaged = <Relation>(
  relationTypeFunc: RelationTypeFunc<Relation>,
  options?: RelationDecoratorOpts<Relation>,
) => {
  return function (target: any, propertyKey: string) {
    const relations =
      Reflect.getMetadata(RELATIONS_META_DATA_KEY, target) ?? [];
    const newRelation = FilterableUnPagedRelation(
      propertyKey,
      relationTypeFunc,
      {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    );
    Reflect.defineMetadata(
      RELATIONS_META_DATA_KEY,
      [...relations, newRelation],
      target,
    );
  };
};

export const GqlHasManyOffset = <Relation>(
  relationTypeFunc: RelationTypeFunc<Relation>,
  options?: RelationDecoratorOpts<Relation>,
) => {
  return function (target: any, propertyKey: string) {
    const relations =
      Reflect.getMetadata(RELATIONS_META_DATA_KEY, target) ?? [];
    const newRelation = FilterableOffsetConnection(
      propertyKey,
      relationTypeFunc,
      {
        ...DEFAULT_OPTIONS,
        ...options,
      },
    );
    Reflect.defineMetadata(
      RELATIONS_META_DATA_KEY,
      [...relations, newRelation],
      target,
    );
  };
};

export const GqlDTORelations = <Relation>(
  entity: RelationTypeFunc<Relation>,
) => {
  const nestjsQueryRelations =
    Reflect.getMetadata(RELATIONS_META_DATA_KEY, entity?.().prototype) ?? [];
  return applyDecorators(...nestjsQueryRelations);
};
