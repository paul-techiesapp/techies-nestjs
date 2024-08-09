import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryService } from '@nestjs-query/core';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Repository } from 'typeorm';

import { CommentEntity } from './comment.entity';

@Injectable()
@QueryService(CommentEntity)
export class CommentService extends TypeOrmQueryService<CommentEntity> {
  constructor(
    @InjectRepository(CommentEntity) commentRepo: Repository<CommentEntity>,
  ) {
    super(commentRepo, { useSoftDelete: false });
  }
}

