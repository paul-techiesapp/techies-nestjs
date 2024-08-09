---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.module.ts
force: true
---
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

import { <%= Name %>DTO, <%= Name %>Entity } from './<%= h.changeCase.kebabCase(name) %>.entity';
import { Create<%= Name %>Input, Update<%= Name %>Input } from './<%= h.changeCase.kebabCase(name) %>.input';
import { <%= Name %>Service } from './<%= h.changeCase.kebabCase(name) %>.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([<%= Name %>Entity])],
      services: [
        // INJECT SERVICES, DON'T REMOVE!
        <%= Name %>Service],
      resolvers: [
        {
          ServiceClass: <%= Name %>Service,
          DTOClass: <%= Name %>DTO,
          EntityClass: <%= Name %>Entity,
          CreateDTOClass: Create<%= Name %>Input,
          UpdateDTOClass: Update<%= Name %>Input,
          guards: [],
        },
      ],
    }),
  ],
  controllers: [],
})
export class <%= Name %>Module {}
