---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.resolver.ts
---
import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { <%= Name %>DTO } from './<%= h.changeCase.kebabCase(name) %>.entity';
import { <%= Name %>Service } from './<%= h.changeCase.kebabCase(name) %>.service';

@UseGuards()
@Resolver(() => <%= Name %>DTO)
export class <%= Name %>Resolver {
  constructor(private readonly <%= name %>Service: <%= Name %>Service) {}

  // @Query(() => <%= Name %>Connection)
  // async customQuery(@Args() query: <%= Name %>Query): Promise<ConnectionType<<%= Name %>DTO>> {
  //   const filter: Filter<<%= Name %>DTO> = {
  //     ...query.filter,
  //   };
  //   return <%= Name %>Connection.createFromPromise((q) => this.<%= name %>Service.query(q), {
  //     ...query,
  //     ...{ filter },
  //   });
  // }

  // @Query(() => <%= Name %>DTO)
  // async customFindOne<%= Name %>(@Args() input: CustomFindOne<%= Name %>Args) {
  //   return null;
  // }

  // @Mutation(() => <%= Name %>DTO)
  // async customCreateOne<%= Name %>(
  //   @Args('input') input: CustomCreateOne<%= Name %>Input,
  // ): Promise<<%= Name %>DTO> {
  //   return null;
  // }

  // @Mutation(() => [<%= Name %>DTO])
  // async customCreateMany<%= Name %>(
  //   @Args('input') input: CustomCreateMany<%= Name %>Input,
  // ): Promise<<%= Name %>DTO> {
  //   return null;
  // }

  // @Mutation(() => <%= Name %>DTO)
  // async customUpdateOne<%= Name %>(
  //   @Args('input') input: CustomUpdateOne<%= Name %>Input,
  // ): Promise<<%= Name %>DTO> {
  //   return null;
  // }

  // @Mutation(() => <%= Name %>DTO)
  // async customDeleteOne<%= Name %>(
  //   @Args('input') input: CustomDeleteOne<%= Name %>Input,
  // ): Promise<<%= Name %>DTO> {
  //   return null;
  // }
}
