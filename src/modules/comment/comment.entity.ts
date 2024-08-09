import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

import { AppBaseEntity } from '@core/app-base.entity';
import { AppDtoDecorators } from '@core/app-dto.decorator';
import { GqlHasOne } from '@core/app.gql.decorator';

import { VideoDTO, VideoEntity } from '../video/video.entity';

@ObjectType()
@Entity('comments')
export class CommentEntity extends AppBaseEntity {
  @FilterableField()
  @Column('int', { unsigned: true })
  videoId: number;

  @Field({ nullable: true })
  @Column('text', { nullable: true })
  content: string;

  @GqlHasOne(() => VideoDTO, { nullable: true })
  @ManyToOne(() => VideoEntity, (video) => video.comments, { nullable: true })
  video: VideoEntity;
}

@AppDtoDecorators(() => CommentDTO)
export class CommentDTO extends CommentEntity {}
