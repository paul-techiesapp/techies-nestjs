---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.hook.ts
---

import { Injectable } from '@nestjs/common';
import {
  BeforeCreateOneHook,
  BeforeDeleteOneHook,
  BeforeUpdateOneHook,
  CreateOneInputType,
  DeleteOneInputType,
  UpdateOneInputType,
} from '@nestjs-query/query-graphql';

import { <%= Name %>DTO } from './<%= h.changeCase.kebabCase(name) %>.entity';

@Injectable()
export class <%= Name %>CreateOneHook<T extends <%= Name %>DTO> implements BeforeCreateOneHook<T, any> {
  async run(instance: CreateOneInputType<T>, _context: any): Promise<CreateOneInputType<T>> {
    return instance;
  }
}

@Injectable()
export class <%= Name %>UpdateOneHook<T extends <%= Name %>DTO> implements BeforeUpdateOneHook<T, any> {
  async run(instance: UpdateOneInputType<T>, _context: any): Promise<UpdateOneInputType<T>> {
    return instance;
  }
}

@Injectable()
export class <%= Name %>DeleteOneHook implements BeforeDeleteOneHook<any> {
  async run(instance: DeleteOneInputType, _context: any): Promise<DeleteOneInputType> {
    return instance;
  }
}
