---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.input.ts
---
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class Create<%= Name %>Input {}

@InputType()
export class Update<%= Name %>Input extends PartialType(Create<%= Name %>Input) {}

/* ------------------------- Custom Resolver Inputs ------------------------- */
// @ArgsType()
// export class <%= Name %> Query extends QueryArgsType(<%= Name %> DTO) {}
// export const <%= Name %> Connection = <%= Name %> Query.ConnectionType;

// @ArgsType()
// export class CustomFindOne<%= Name %> Args extends FindOneArgsType(<%= Name %> DTO) {}

// @InputType()
// export class CustomCreateOne<%= Name %> Input extends CreateOneInputType(
//   '<%= Name %> ',
//   Create<%= Name %> Input,
// ) {}

// @InputType()
// export class CustomCreateMany<%= Name %> Input extends CreateManyInputType(
//   '<%= name %>',
//   Create<%= Name %> Input,
// ) {}

// @InputType()
// export class CustomUpdateOne<%= Name %> Input extends UpdateOneInputType(
//   <%= Name %> DTO,
//   Update<%= Name %> Input,
// ) {}

// @InputType()
// export class CustomDeleteOne<%= Name %> Input extends DeleteOneInputType(<%= Name %> DTO) {}
