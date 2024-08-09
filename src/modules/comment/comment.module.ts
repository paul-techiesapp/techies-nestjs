import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

import { CommentDTO, CommentEntity } from './comment.entity';
import { CreateCommentInput, UpdateCommentInput } from './comment.input';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { CommentSubscriber } from './comment.subscriber';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CommentEntity])],
      services: [
        // INJECT SERVICES, DON'T REMOVE!
        CommentSubscriber,
        CommentResolver,
        CommentService,
      ],
      resolvers: [
        {
          ServiceClass: CommentService,
          DTOClass: CommentDTO,
          EntityClass: CommentEntity,
          CreateDTOClass: CreateCommentInput,
          UpdateDTOClass: UpdateCommentInput,
          guards: [],
        },
      ],
    }),
  ],
  controllers: [],
})
export class CommentModule {}
