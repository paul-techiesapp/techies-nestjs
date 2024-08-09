---
to: src/modules/<%= h.changeCase.kebabCase(name) %>/<%= h.changeCase.kebabCase(name) %>.service.ts
---
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';

import { <%= Name %>Entity } from './<%= h.changeCase.kebabCase(name) %>.entity';

@Injectable()
@QueryService(<%= Name %>Entity)
export class <%= Name %>Service extends TypeOrmQueryService<<%= Name %>Entity> {
  constructor(
    @InjectRepository(<%= Name %>Entity) <%= name %>Repo: Repository<<%= Name %>Entity>,
  ) {
    super(<%= name %>Repo, { useSoftDelete: false });
  }
}

