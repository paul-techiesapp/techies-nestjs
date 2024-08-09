import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';

import { AppBaseEntity } from '@core/app-base.entity';
import { AppDtoDecorators } from '@core/app-dto.decorator';
import { GqlHasManyOffset } from '@core/app.gql.decorator';

import { CommentDTO, CommentEntity } from '../comment/comment.entity';

@ObjectType()
@Entity('videos')
export class VideoEntity extends AppBaseEntity {
  @Field()
  @Column('varchar', { length: 255 })
  title: string;

  @Field()
  @Column('text')
  url: string;

  @Field()
  @Column('text', { nullable: true })
  thumbnail: string;

  @GqlHasManyOffset(() => CommentDTO, { nullable: true })
  @OneToMany(() => CommentEntity, (comment) => comment.video, {
    nullable: true,
  })
  comments: CommentEntity[];
}

@AppDtoDecorators(() => VideoDTO)
export class VideoDTO extends VideoEntity {}
