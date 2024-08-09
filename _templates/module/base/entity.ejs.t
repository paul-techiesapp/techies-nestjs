---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.entity.ts
---
import { AppBaseEntity } from '@core/app-base.entity';
import { AppDtoDecorators } from '@core/app-dto.decorator';
import { ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
@Entity('<%= h.changeCase.snake(h.inflection.pluralize(name)) %>')
export class <%= Name %>Entity extends AppBaseEntity {}

@AppDtoDecorators(() => <%= Name %>DTO)
export class <%= Name %>DTO extends <%= Name %>Entity {}
