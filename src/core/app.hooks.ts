import { AppContext } from '@/types';
import {
  BeforeCreateMany,
  BeforeCreateManyHook,
  BeforeCreateOne,
  BeforeCreateOneHook,
  BeforeUpdateMany,
  BeforeUpdateManyHook,
  BeforeUpdateOne,
  BeforeUpdateOneHook,
  CreateManyInputType,
  CreateOneInputType,
  UpdateManyInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';
import { Injectable, applyDecorators } from '@nestjs/common';

interface CreatedBy {
  createdBy: number;
}

interface UpdatedBy {
  updatedBy: number;
}

@Injectable()
export class CreatedByOneHook<T extends CreatedBy>
  implements BeforeCreateOneHook<T, AppContext>
{
  async run(
    instance: CreateOneInputType<T>,
    context: AppContext,
  ): Promise<CreateOneInputType<T>> {
    const createdBy = context?.req?.user?.id;
    instance.input = { ...instance.input, createdBy };
    return instance;
  }
}

@Injectable()
export class CreatedByManyHook<T extends CreatedBy>
  implements BeforeCreateManyHook<T, AppContext>
{
  async run(
    instance: CreateManyInputType<T>,
    context: AppContext,
  ): Promise<CreateManyInputType<T>> {
    const createdBy = context?.req?.user?.id;
    instance.input = instance.input.map((input) => ({ ...input, createdBy }));
    return instance;
  }
}

@Injectable()
export class UpdatedByOneHook<T extends UpdatedBy>
  implements BeforeUpdateOneHook<T, AppContext>
{
  async run(
    instance: UpdateOneInputType<T>,
    context,
  ): Promise<UpdateOneInputType<T>> {
    instance.update.updatedBy = context?.req?.user?.id;
    return instance;
  }
}

@Injectable()
export class UpdatedByManyHook<T extends UpdatedBy>
  implements BeforeUpdateManyHook<T, any, AppContext>
{
  async run(
    instance: UpdateManyInputType<T, T>,
    context: AppContext,
  ): Promise<UpdateManyInputType<T, T>> {
    instance.update.updatedBy = context?.req?.user?.id;
    return instance;
  }
}

export const UseAppHooks = () => {
  return applyDecorators(
    BeforeCreateOne(CreatedByOneHook),
    BeforeCreateMany(CreatedByManyHook),
    BeforeUpdateOne(UpdatedByOneHook),
    BeforeUpdateMany(UpdatedByManyHook),
  );
};
