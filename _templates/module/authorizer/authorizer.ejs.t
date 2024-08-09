---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.authorizer.ts
---
import { Injectable } from '@nestjs/common';
import { Filter } from '@nestjs-query/core';
import { AuthorizationContext, CustomAuthorizer } from '@nestjs-query/query-graphql';

import { <%= Name %>DTO } from './<%= h.changeCase.kebabCase(name) %>.entity';

@Injectable()
export class <%= Name %>Authorizer implements CustomAuthorizer<<%= Name %>DTO> {
  async authorize(
    context: any,
    authorizerContext?: AuthorizationContext,
  ): Promise<Filter<<%= Name %>DTO>> {
    return {};
  }

  async authorizeRelation(relationName: string, context: any): Promise<Filter<<%= Name %>DTO>> {
    return null;
  }
}
